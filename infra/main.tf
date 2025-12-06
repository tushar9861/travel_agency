provider "aws" {
  region     = var.aws_region
  access_key = var.aws_access_key
  secret_key = var.aws_secret_key
}

# ----------------------------
# EC2 Instance for Application
# ----------------------------
resource "aws_instance" "app_server" {
  ami           = var.ami_id
  instance_type = var.instance_type
  key_name      = var.key_name

  # IMPORTANT: Your real existing subnet
  subnet_id = "subnet-0e60839b6c07990fb"

  # Security group allowing HTTP + SSH
  vpc_security_group_ids = [aws_security_group.app_sg.id]

  tags = {
    Name = "travel-agency-app-server"
  }
}

# ----------------------------
# Security Group
# ----------------------------
resource "aws_security_group" "app_sg" {
  name        = "travel-agency-app-sg"
  description = "Allow HTTP and SSH access"
  vpc_id      = "vpc-04fc37b08b5cb2562" # Your default VPC ID

  ingress {
    from_port   = 22
    to_port     = 22
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
    description = "SSH access"
  }

  ingress {
    from_port   = 80
    to_port     = 80
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
    description = "HTTP access"
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

# ----------------------------
# Output EC2 Public IP
# ----------------------------
output "app_public_ip" {
  value = aws_instance.app_server.public_ip
}
