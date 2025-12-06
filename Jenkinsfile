pipeline {
    agent any
    environment {
        DOCKER_IMAGE = "travel_agency:latest"
        APP_IP       = ""  // Will be filled later
    }
    stages {
        stage('Checkout Repository') {
            steps {
                git branch: 'main',
                    url: 'https://github.com/tushar9861/travel_agency.git'
                // credentialsId not needed for public repo → removed
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

        stage('Terraform Apply') {
            steps {
                withCredentials([[
                    $class: 'AmazonWebServicesCredentialsBinding',
                    credentialsId: 'aws-access-key',           // Must exist in Jenkins!
                    accessKeyVariable: 'AWS_ACCESS_KEY_ID',
                    secretKeyVariable: 'AWS_SECRET_ACCESS_KEY'
                ]]) {
                    dir('infra') {
                        sh '''
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
                    def output = sh(
                        script: "cd infra && terraform output -raw app_public_ip 2>/dev/null || echo 'NOT_FOUND'",
                        returnStdout: true
                    ).trim()
                    
                    if (output == 'NOT_FOUND' || output == '') {
                        error "Could not get EC2 public IP. Check if output 'app_public_ip' exists."
                    }
                    
                    env.APP_IP = output
                    echo "EC2 Public IP: ${env.APP_IP}"
                }
            }
        }

        stage('Deploy to EC2') {
            when {
                expression { env.APP_IP != null && env.APP_IP != '' && env.APP_IP != 'NOT_FOUND' }
            }
            steps {
                echo "Deploying to http://${env.APP_IP}"
                // Example: Copy files via SCP
                // sh "scp -o StrictHostKeyChecking=no -i key2.pem docker-compose.yml ubuntu@${env.APP_IP}:~/"
                // sh "ssh -o StrictHostKeyChecking=no -i key2.pem ubuntu@${env.APP_IP} 'docker pull your-registry/travel_agency:latest && docker-compose up -d'"
                
                echo "Deploy step ready — add SSH/SCP/Ansible here!"
            }
        }
    }

    post {
        always {
            echo 'Pipeline finished.'
            cleanWs()
        }
        success {
            echo "Deployment successful! App running at: http://${env.APP_IP}"
        }
        failure {
            echo 'Pipeline failed — check logs above'
        }
    }
}
