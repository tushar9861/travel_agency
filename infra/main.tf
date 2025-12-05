terraform {
  required_version = ">= 1.0.0"

  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 5.0"
    }
  }
}

provider "aws" {
  region = "us-east-1"
}



############################################
# EC2 Instance for Application Deployment
############################################

resource "aws_instance" "app_server" {
  ami           = "ami-03deb8c961063af8c" # Ubuntu 22.04 LTS (same AMI as Jenkins)
  instance_type = "t2.micro"

  subnet_id              = var.public_subnet_id
  vpc_security_group_ids = var.vpc_security_group_ids
  key_name               = var.key_name

  tags = {
    Name = "CICD-App-Server"
  }

  user_data = <<-EOF
    #!/bin/bash
    apt update -y
    apt install -y docker.io
    systemctl start docker
    systemctl enable docker
  EOF
}

############################################
# Outputs
############################################

output "app_server_public_ip" {
  value = aws_instance.app_server.public_ip
}

