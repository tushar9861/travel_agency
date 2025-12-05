// infra/main.tf

resource "aws_security_group" "app_sg" {
  name        = "travel-agency-app-sg"
  description = "Allow HTTP and SSH for app EC2"
  vpc_id      = null # default VPC in us-east-1

  ingress {
    description = "SSH"
    from_port   = 22
    to_port     = 22
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  ingress {
    description = "HTTP"
    from_port   = 80
    to_port     = 80
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

resource "aws_instance" "app_server" {
  ami                    = var.ami_id
  instance_type          = var.instance_type
  key_name               = var.key_name
  vpc_security_group_ids = [aws_security_group.app_sg.id]

  tags = {
    Name = "travel-agency-app"
  }
}

output "app_public_ip" {
  description = "Public IP of the app EC2"
  value       = aws_instance.app_server.public_ip
}
