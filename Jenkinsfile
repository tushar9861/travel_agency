pipeline {
    agent any

    stages {

        stage('Clone Repo') {
            steps {
                git branch: 'main',
                    url: 'https://github.com/YOUR_USERNAME/YOUR_REPO.git'
            }
        }

        stage('Build Docker Image') {
            steps {
                sh 'docker build -t myapp:latest .'
            }
        }

        stage('Run Unit Tests') {
            steps {
                sh 'echo "Running tests..."'
            }
        }

        stage('Terraform Init & Apply') {
            steps {
                sh '''
                    cd infra
                    terraform init -input=false
                    terraform apply -auto-approve
                '''
            }
        }

        stage('Deploy Container') {
            steps {
                sh 'docker stop myapp || true'
                sh 'docker rm myapp || true'
                sh 'docker run -d -p 80:80 --name myapp myapp:latest'
            }
        }
    }
}

