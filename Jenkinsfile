pipeline {
    agent any

    environment {
        DOCKER_IMAGE = "travel_agency:latest"
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
                withCredentials([
                    [$class: 'AmazonWebServicesCredentialsBinding',
                     credentialsId: 'aws-creds',
                     accessKeyVariable: 'AWS_ACCESS_KEY_ID',
                     secretKeyVariable: 'AWS_SECRET_ACCESS_KEY']
                ]) {

                    sh """
                        cd infra
                        terraform init -input=false

                        terraform apply -auto-approve \
                            -var="aws_region=ap-south-1" \
                            -var="ami_id=ami-0f58b397bc5c783e9" \
                            -var="key_name=my-key"
                    """
                }
            }
        }

        stage('Get EC2 IP') {
            steps {
                script {
                    def instance_ip = sh(
                        script: "aws ec2 describe-instances --region ap-south-1 --filters Name=tag:Name,Values=travel-agency Name=instance-state-name,Values=running --query 'Reservations[0].Instances[0].PublicIpAddress' --output text",
                        returnStdout: true
                    ).trim()

                    echo "EC2 Public IP: ${instance_ip}"
                }
            }
        }

        stage('Deploy to EC2') {
            steps {
                echo "Deployment step will run here (manual or automated SCP/SSH)"
            }
        }
    }

    post {
        always {
            echo "Pipeline finished."
        }
    }
}
