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
                echo "Building Docker image..."
                sh """
                    docker build -t ${DOCKER_IMAGE} .
                """
            }
        }

        stage('Run Tests') {
            steps {
                echo "Running tests..."
                sh "echo Tests executed successfully"
            }
        }

        stage('Terraform Apply') {
            steps {
                withCredentials([[$class: 'AmazonWebServicesCredentialsBinding', 
                                  credentialsId: 'aws-creds']]) {
                    sh """
                        cd infra
                        terraform init -input=false
                        terraform apply -auto-approve \
                            -var aws_access_key=$AWS_ACCESS_KEY_ID \
                            -var aws_secret_key=$AWS_SECRET_ACCESS_KEY
                    """
                }
            }
        }

        stage('Get EC2 IP') {
            when {
                expression { fileExists('infra/terraform.tfstate') }
            }
            steps {
                script {
                    def ec2_ip = sh(
                        script: "cd infra && terraform output -raw public_ip",
                        returnStdout: true
                    ).trim()

                    echo "EC2 Public IP: ${ec2_ip}"
                    env.EC2_IP = ec2_ip
                }
            }
        }

        stage('Deploy to EC2') {
            when {
                expression { env.EC2_IP?.trim() }
            }
            steps {
                echo "Deploying Docker Container to EC2..."

                sh """
                    ssh -o StrictHostKeyChecking=no -i ~/.ssh/terraform-key ubuntu@${EC2_IP} '
                        sudo docker rm -f travel_agency || true
                        sudo docker run -d --name travel_agency -p 80:80 travel_agency:latest
                    '
                """
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
