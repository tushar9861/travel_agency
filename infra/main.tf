provider "aws" {
  region     = var.aws_region
  access_key = var.aws_access_key
  secret_key = var.aws_secret_key
}

# Use DEFAULT VPC
data "aws_vpc" "default" {
  default = true
}

# Use default VPC subnet (public)
data "aws_subnets" "default" {
  filter {
    name   = "vpc-id"
    values = [data.aws_vpc.default.id]
  }
}

# Pick first subnet
locals {
  public_subnet_id = data.aws_subnets.default.ids[0]
}

# Security Group
resource "aws_security_group" "app_sg" {
  name        = "travel-agency-app-sg"
  description = "Allow HTTP & SSH"
  vpc_id      = data.aws_vpc.default.id

  ingress {
    description = "HTTP"
    from_port   = 80
    to_port     = 80
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  ingress {
    description = "SSH"
    from_port   = 22
    to_port     = 22
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  egress {
    from_port   = 0
    to_port     = 0
    protocol    = "-1"
    cidr_blocks = ["0.0.0.0/0"]
  }

  tags = {
    Name = "travel-agency-app-sg"
  }
}

# EC2 Instance
resource "aws_instance" "app_server" {
  ami           = var.ami_id
  instance_type = var.instance_type
  key_name      = var.key_name

  subnet_id = local.public_subnet_id

  vpc_security_group_ids = [aws_security_group.app_sg.id]

  tags = {
    Name = "travel-agency-app"
  }
}

output "app_public_ip" {
  value = aws_instance.app_server.public_ip
}
