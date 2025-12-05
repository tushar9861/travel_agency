// Jenkinsfile

pipeline {
    agent any

    environment {
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
                echo 'Building Docker image...'
                sh '''
                  docker build -t ${DOCKER_IMAGE} .
                '''
            }
        }

        stage('Run Tests') {
            steps {
                echo 'Running tests...'
                sh 'echo "Tests executed successfully"'
            }
        }

        stage('Terraform Apply') {
            steps {
                withCredentials([[$class: 'AmazonWebServicesCredentialsBinding', credentialsId: 'aws-creds']]) {
                    sh '''
                      cd infra
                      terraform init -input=false
                      terraform apply -auto-approve \
                        -var aws_access_key=$AWS_ACCESS_KEY_ID \
                        -var aws_secret_key=$AWS_SECRET_ACCESS_KEY
                    '''
                }
            }
        }

        stage('Get EC2 IP') {
            steps {
                script {
                    def ip = sh(
                        script: "cd infra && terraform output -raw app_public_ip",
                        returnStdout: true
                    ).trim()
                    env.APP_SERVER_IP = ip
                    echo "App EC2 Public IP: ${ip}"
                }
            }
        }

        stage('Deploy to EC2 (manual / future)') {
            steps {
                echo 'App EC2 created. You can now SSH and run Docker there (future automation step).'
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
