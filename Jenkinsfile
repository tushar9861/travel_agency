pipeline {
    agent any

    environment {
        TF_IN_AUTOMATION = "true"
    }

    stages {

        stage('Clone Repo') {
            steps {
                git branch: 'main', url: 'https://github.com/YOUR_USERNAME/travel_agency.git'
            }
        }

        stage('Build Docker Image') {
            steps {
                sh 'docker build -t travel_agency:latest .'
            }
        }

        stage('Unit Tests') {
            steps {
                sh 'echo "Running tests..."'
            }
        }

        stage('Terraform Init & Apply') {
            steps {
                sh '''
                    cd infra
                    terraform init -input=false
                    terraform apply -auto-approve > tf_output.txt
                '''
            }
        }

        stage('Extract EC2 IP') {
            steps {
                script {
                    env.APP_IP = sh(
                        script: "cd infra && terraform output -raw app_server_public_ip",
                        returnStdout: true
                    ).trim()
                    echo "EC2 App Server IP: $APP_IP"
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
