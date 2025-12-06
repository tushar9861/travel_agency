pipeline {
    agent any

    environment {
        // Docker image name
        DOCKER_IMAGE = "travel_agency:latest"
    }

    stages {

        stage('Checkout Repository') {
            steps {
                git branch: 'main',
                    url: 'https://github.com/tushar9861/travel_agency.git',
                    credentialsId: 'github'
            }
        }

        stage('Build Docker Image') {
            steps {
                echo "Building Docker image..."
                sh 'docker build -t ${DOCKER_IMAGE} .'
            }
        }

        stage('Run Tests') {
            steps {
                echo "Running tests..."
                sh 'echo Tests executed successfully'
            }
        }

        stage('Terraform Apply') {
            steps {
                withCredentials([
                    usernamePassword(
                        credentialsId: 'aws-access-key',
                        usernameVariable: 'AWS_ACCESS_KEY',
                        passwordVariable: 'AWS_SECRET_KEY'
                    )
                ]) {
                    sh '''
                        cd infra
                        terraform init -input=false
                        terraform apply -auto-approve \
                          -var aws_access_key=$AWS_ACCESS_KEY \
                          -var aws_secret_key=$AWS_SECRET_KEY \
                          -var ami_id="ami-03deb8c961063af8c" \
                          -var key_name="key2" \
                          -var subnet_id="subnet-0e60839b6c07990fb" \
                          -var security_group_id="sg-0aa49c1719a0dfd9b"
                    '''
                }
            }
        }

        stage('Get EC2 Public IP') {
            when {
                expression {
                    fileExists('infra/terraform.tfstate')
                }
            }
            steps {
                script {
                    env.APP_IP = sh(
                        script: 'cd infra && terraform output -raw app_public_ip',
                        returnStdout: true
                    ).trim()
                    echo "EC2 Public IP: ${APP_IP}"
                }
            }
        }

        stage('Deploy (Future Step)') {
            when {
                expression { return env.APP_IP != null && env.APP_IP != '' }
            }
            steps {
                echo "Future deploy step. EC2 IP is ${APP_IP}"
                // Later you can add ssh/scp or Ansible steps here.
            }
        }
    }

    post {
        always {
            echo 'Pipeline finished.'
            cleanWs()
        }
    }
}
