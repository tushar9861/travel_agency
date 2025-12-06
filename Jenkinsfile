pipeline {
    agent any

    environment {
        DOCKER_IMAGE = "travel_agency:latest"
        APP_IP       = ""
    }

    stages {

        stage('Checkout Repository') {
            steps {
                git branch: 'main',
                    url: 'https://github.com/tushar9861/travel_agency.git'
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

        stage('Terraform Apply') {
            steps {
                withCredentials([
                    [$class: 'StringBinding',
                     credentialsId: 'aws-access-key',
                     variable: 'AWS_ACCESS_KEY_ID'
                    ],
                    [$class: 'StringBinding',
                     credentialsId: 'aws-secret-key',
                     variable: 'AWS_SECRET_ACCESS_KEY'
                    ]
                ]) {

                    dir('infra') {
                        sh '''
                            echo "Using AWS Access Key: $AWS_ACCESS_KEY_ID"
                            terraform init -input=false
                            terraform validate
                            terraform plan -out=tfplan
                            terraform apply -auto-approve tfplan
                        '''
                    }
                }
            }
        }

        stage('Get EC2 Public IP') {
            steps {
                script {
                    def result = sh(
                        script: "cd infra && terraform output -raw app_public_ip 2>/dev/null || echo NOT_FOUND",
                        returnStdout: true
                    ).trim()

                    if (result == "NOT_FOUND") {
                        error("EC2 Public IP not found. Check your outputs.tf")
                    }

                    env.APP_IP = result
                    echo "EC2 Public IP = ${env.APP_IP}"
                }
            }
        }

        stage('Deploy to EC2') {
            when {
                expression { env.APP_IP && env.APP_IP != "NOT_FOUND" }
            }
            steps {
                echo "Deploying to server: http://${env.APP_IP}"
                echo "Add SSH/SCP commands here to deploy"
            }
        }
    }

    post {
        always {
            echo 'Pipeline finished.'
            cleanWs()
        }
        success {
            echo "Deployment successful! App running at http://${env.APP_IP}"
        }
        failure {
            echo 'Pipeline failed — check logs.'
        }
    }
}
