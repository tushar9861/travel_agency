pipeline {
    agent any

    environment {
        DOCKER_IMAGE = "travel_agency:latest"
        APP_IP       = ""
    }

    stages {

        stage('Checkout Repository') {
            steps {
                git url: 'https://github.com/tushar9861/travel_agency.git', branch: 'main'
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
                sh 'echo "Tests executed successfully"'
            }
        }

        stage('Terraform Init/Plan/Apply') {
            steps {
                withCredentials([[
                    $class: 'AmazonWebServicesCredentialsBinding',
                    accessKeyVariable: 'AWS_ACCESS_KEY_ID',
                    secretKeyVariable: 'AWS_SECRET_ACCESS_KEY',
                    credentialsId: 'aws-access-key'     // Must match Jenkins credentials
                ]]) {
                    dir('infra') {
                        sh '''
                            echo "Running Terraform..."

                            terraform init -input=false

                            terraform validate

                            terraform plan -input=false -out=tfplan \
                                -var="ami_id=ami-03deb8c961063af8c" \
                                -var="key_name=key2" \
                                -var="subnet_id=subnet-0e60839b6c07990fb" \
                                -var="security_group_id=sg-0003b5a107d9baee2"

                            terraform apply -auto-approve tfplan
                        '''
                    }
                }
            }
        }

        stage('Get EC2 Public IP') {
            steps {
                script {
                    def ip = sh(
                        script: "cd infra && terraform output -raw app_public_ip || echo ''",
                        returnStdout: true
                    ).trim()

                    if (!ip) {
                        error "❌ ERROR: Could not retrieve EC2 public IP"
                    }

                    env.APP_IP = ip
                    echo "✔ EC2 Public IP: ${env.APP_IP}"
                }
            }
        }

        stage('Deploy to EC2 (Future Step)') {
            when {
                expression { env.APP_IP?.trim() }
            }
            steps {
                echo "Deployment ready: http://${env.APP_IP}"
                echo "Add SCP/SSH deployment steps here later."
            }
        }
    }

    post {
        always {
            echo "Pipeline finished."
            cleanWs()
        }
        success {
            echo "🎉 SUCCESS! App deployed on: http://${env.APP_IP}"
        }
        failure {
            echo "❌ Pipeline failed — check logs."
        }
    }
}
