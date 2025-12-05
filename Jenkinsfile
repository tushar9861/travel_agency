pipeline {
    agent any

    stages {

        stage('Clone Repo') {
            steps {
                git branch: 'main', url: https:'//github.com/tushar9861/travel_agency.git'

            }
        }

        stage('Build Docker Image') {
            steps {
                sh 'docker build -t travel_agency:latest .'
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
                    terraform apply -auto-approve > tf_output.txt
                '''
            }
        }

        stage('Get EC2 IP') {
            steps {
                script {
                    env.APP_IP = sh(
                        script: "cd infra && terraform output -raw app_server_public_ip",
                        returnStdout: true
                    ).trim()
                    echo "EC2 Public IP: $APP_IP"
                }
            }
        }

        stage('Deploy to EC2') {
            steps {
                sh "chmod +x deploy.sh"
                sh "./deploy.sh ${APP_IP}"
            }
        }
    }
}
