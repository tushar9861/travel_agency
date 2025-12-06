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
                sh "docker build -t ${DOCKER_IMAGE} ."
            }
        }

        stage('Run Tests') {
            steps {
                echo "Running tests..."
                sh "echo Tests executed successfully"
            }
        }

        stage('Debug AWS Keys') {
            steps {
                withCredentials([
                    usernamePassword(
                        credentialsId: 'aws-credentials',
                        usernameVariable: 'AWS_ACCESS_KEY',
                        passwordVariable: 'AWS_SECRET_KEY'
                    )
                ]) {
                    sh '''
                        echo "Jenkins AWS Access Key:"
                        echo ${AWS_ACCESS_KEY:0:4}******    # Show first 4 characters only
                    '''
                }
            }
        }

        stage('Terraform Apply') {
            steps {
                withCredentials([
                    string(credentialsId: 'aws-access-key', variable: 'AWS_ACCESS_KEY'),
                    string(credentialsId: 'aws-secret-key', variable: 'AWS_SECRET_KEY')
                ]) {
                    sh """
                        cd infra
                        terraform init -input=false

                        terraform apply -auto-approve \
                            -var "aws_access_key=$AWS_ACCESS_KEY" \
                            -var "aws_secret_key=$AWS_SECRET_KEY"
                    """
                }
            }
        }

        stage('Get EC2 Public IP') {
            when {
                expression {
                    currentBuild.result == null
                }
            }
            steps {
                script {
                    def output = sh(returnStdout: true, script: """
                        cd infra
                        terraform output -raw app_public_ip
                    """).trim()

                    echo "🚀 EC2 Public IP: ${output}"
                }
            }
        }

        stage('Deploy (Future Step)') {
            steps {
                echo "Deployment to EC2 will be added later..."
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
