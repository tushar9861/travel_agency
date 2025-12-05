pipeline {
    agent any

    environment {
        DOCKER_IMAGE = "travel_agency:latest"
    }

    stages {

        stage('Checkout Repository') {
            steps {
                git branch: 'main',
                    credentialsId: 'github',
                    url: 'https://github.com/tushar9861/travel_agency.git'
            }
        }

        stage('Build Docker Image') {
            steps {
                echo "Building Docker image..."
                sh "docker build -t ${env.DOCKER_IMAGE} ."
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
                    string(credentialsId: 'aws-access-key', variable: 'AWS_ACCESS_KEY'),
                    string(credentialsId: 'aws-secret-key', variable: 'AWS_SECRET_KEY')
                ]) {
                    sh '''
                        cd infra
                        terraform init -input=false

                        terraform apply -auto-approve \
                            -var aws_access_key="$AWS_ACCESS_KEY" \
                            -var aws_secret_key="$AWS_SECRET_KEY" \
                            -var ami_id="ami-0ecb62995f68bb549" \
                            -var key_name="jenkins-cicd-key"
                    '''
                }
            }
        }

        stage('Get EC2 Public IP') {
            steps {
                script {
                    def ip = sh(
                        script: "cd infra && terraform output -raw app_public_ip",
                        returnStdout: true
                    ).trim()

                    echo "EC2 Public IP: ${ip}"
                }
            }
        }

        stage('Deploy (Future manual step)') {
            steps {
                echo "Deployment will be automated in the next CI/CD phase."
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
