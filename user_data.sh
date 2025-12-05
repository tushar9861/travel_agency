#!/bin/bash
set -e

# Update packages
apt-get update -y

# Install basic tools
apt-get install -y curl wget git apt-transport-https ca-certificates gnupg lsb-release

# Install Java (required for Jenkins)
apt-get install -y openjdk-17-jre

# Add Jenkins repo and key
curl -fsSL https://pkg.jenkins.io/debian-stable/jenkins.io-2023.key | tee \
  /usr/share/keyrings/jenkins-keyring.asc > /dev/null

echo deb [signed-by=/usr/share/keyrings/jenkins-keyring.asc] \
  https://pkg.jenkins.io/debian-stable binary/ | tee \
  /etc/apt/sources.list.d/jenkins.list > /dev/null

# Update and install Jenkins
apt-get update -y
apt-get install -y jenkins

# Install Docker
apt-get install -y docker.io

# Enable and start Docker
systemctl enable docker
systemctl start docker

# Add Jenkins user to Docker group
usermod -aG docker jenkins

# Restart Jenkins to pick up Docker group
systemctl enable jenkins
systemctl restart jenkins
