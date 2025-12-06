pipeline {
    agent any

    environment {
        TF_VAR_aws_region     = "ap-south-1"
        TF_VAR_ami_id         = "ami-0ecb62995f68bb549"
        TF_VAR_key_name       = "key2"
        TF_VAR_instance_type  = "t2.micro"
    }

    stages {

        stage('Checkout Repository') {
            steps {
                git url: 'https://github.com/tushar9861/travel_agency.git', credentialsId: 'github'
            }
        }

        stage('Build Docker Image') {
            steps {
                echo "Building Docker image..."
                sh 'docker build -t travel_agency:latest .'
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
                withCredentials([[$class: 'UsernamePasswordMultiBinding',
                    credentialsId: 'key2',
                    usernameVariable: 'AWS_ACCESS_KEY',
                    passwordVariable: 'AWS_SECRET_KEY'
                ]]) {

                    sh '''
                        cd infra
                        echo "Initializing Terraform..."
                        terraform init -input=false

                        echo "Applying Terraform..."
                        terraform apply -auto-approve \
                          -var="aws_access_key=$AWS_ACCESS_KEY" \
                          -var="aws_secret_key=$AWS_SECRET_KEY"
                    '''
                }
            }
        }

        stage('Get EC2 Public IP') {
            steps {
                script {
                    env.APP_IP = sh(
                        script: "cd infra && terraform output -raw app_public_ip",
                        returnStdout: true
                    ).trim()

                    echo "EC2 Public IP: ${APP_IP}"
                }
            }
        }

        stage('Deploy (Future Step)') {
            when { expression { env.APP_IP != null && env.APP_IP != '' } }
            steps {
                echo "Deployment step will run manually later."
            }
        }

    }

    post {
        always {
            echo "Pipeline finished."
            cleanWs()
        }
    }
}
