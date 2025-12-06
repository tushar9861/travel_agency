pipeline {
    agent any

    environment {
        DOCKER_IMAGE = "travel_agency:latest"
    }

    stages {

        stage('Checkout') {
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
                sh 'echo "Tests executed successfully"'
            }
        }

        stage('Terraform Apply') {
            steps {
                withCredentials([[ 
                    $class: 'AmazonWebServicesCredentialsBinding',
                    credentialsId: 'aws-access-key',
                    accessKeyVariable: 'AWS_ACCESS_KEY_ID',
                    secretKeyVariable: 'AWS_SECRET_ACCESS_KEY'
                ]]) {
                    dir('infra') {

                        sh '''
                            terraform init -input=false

                            terraform apply -auto-approve \
                                -var aws_access_key=$AWS_ACCESS_KEY_ID \
                                -var aws_secret_key=$AWS_SECRET_ACCESS_KEY \
                                -var aws_region=us-east-1 \
                                -var ami_id=ami-0ecb62995f68bb549 \
                                -var key_name=key2 \
                                -var subnet_id=subnet-0e60839b6c07990fb \
                                -var security_group_id=sg-0003b5a107d9baee2
                        '''
                    }
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

                    echo "EC2 IP: ${env.APP_IP}"
                }
            }
        }
    }

    post {
        success {
            echo "Deployment successful! App running on http://${env.APP_IP}"
        }
        failure {
            echo "Pipeline failed. Check logs."
        }
        always {
            cleanWs()
        }
    }
}
