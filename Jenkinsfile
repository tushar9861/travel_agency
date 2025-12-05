pipeline {
    agent any

    environment {
        AWS_ACCESS_KEY_ID     = credentials('aws-access-key')
        AWS_SECRET_ACCESS_KEY = credentials('aws-secret-key')
    }

    stages {

        stage('Checkout Code') {
            steps {
                git branch: 'main',
                    url: 'https://github.com/tushar9861/travel_agency.git',
                    credentialsId: 'github'
            }
        }

        stage('Build Docker Image') {
            steps {
                sh '''
                    echo "Building Docker image..."
                    docker build -t travel_agency:latest .
                '''
            }
        }

        stage('Run Tests') {
            steps {
                sh 'echo "Running tests..."'
            }
        }

        stage('Terraform Apply') {
            steps {
                sh '''
                    cd infra
                    terraform init -input=false
                    terraform apply -auto-approve \
                      -var "aws_access_key=${AWS_ACCESS_KEY_ID}" \
                      -var "aws_secret_key=${AWS_SECRET_ACCESS_KEY}"
                '''
            }
        }

        stage('Get EC2 IP') {
            steps {
                script {
                    env.EC2_PUBLIC_IP = sh(
                        script: "cd infra && terraform output -raw app_public_ip",
                        returnStdout: true
                    ).trim()

                    echo "EC2 Public IP → ${env.EC2_PUBLIC_IP}"
                }
            }
        }

        stage('Deploy to EC2') {
            steps {
                sh '''
                    echo "Deploying Docker container to EC2..."
                    ssh -o StrictHostKeyChecking=no -i ~/.ssh/id_rsa ubuntu@${EC2_PUBLIC_IP} '
                        sudo docker stop travel_agency || true
                        sudo docker rm travel_agency || true
                        sudo docker run -d -p 80:80 --name travel_agency travel_agency:latest
                    '
                '''
            }
        }
    }

    post {
        always {
            echo "Pipeline finished."
        }
    }
}
