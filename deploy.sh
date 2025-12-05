#!/bin/bash

EC2_IP="$1"

echo "Deploying app to EC2: $EC2_IP"

ssh -o StrictHostKeyChecking=no ubuntu@$EC2_IP << 'EOF'
  sudo docker stop travel_app || true
  sudo docker rm travel_app || true
  sudo docker pull travel_agency:latest || true
  sudo docker run -d -p 80:80 --name travel_app travel_agency:latest
EOF

echo "Deployment completed!"
