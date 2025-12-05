#!/bin/bash

EC2_IP="$1"

echo "Building local Docker image..."
docker build -t travel_agency:latest .

echo "Saving Docker image..."
docker save travel_agency:latest > travel_agency.tar

echo "Copying image to App EC2..."
scp -o StrictHostKeyChecking=no travel_agency.tar ubuntu@$EC2_IP:/home/ubuntu/

echo "Deploying on App EC2..."
ssh -o StrictHostKeyChecking=no ubuntu@$EC2_IP << 'EOF'
  sudo docker load -i travel_agency.tar
  sudo docker stop travel_app || true
  sudo docker rm travel_app || true
  sudo docker run -d -p 80:80 --name travel_app travel_agency:latest
EOF

echo "Deployment completed successfully!"
