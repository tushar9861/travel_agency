

# -------------------------
# Create Security Group
# -------------------------
resource "aws_security_group" "app_sg" {
  name        = "travel-agency-sg"
  description = "Security group for Jenkins and Web App"
  vpc_id      = "vpc-024d625c13562fbde"

  # Allow Jenkins (8080)
  ingress {
    from_port   = 8080
    to_port     = 8080
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  # Allow HTTP (80)
  ingress {
    from_port   = 80
    to_port     = 80
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  # Allow HTTPS (443)
  ingress {
    from_port   = 443
    to_port     = 443
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  # Allow SSH only from your IP
  ingress {
    from_port   = 22
    to_port     = 22
    protocol    = "tcp"
    cidr_blocks = ["YOUR_PUBLIC_IP/32"] 
  }

  # Allow all outbound traffic
  egress {
    from_port   = 0
    to_port     = 0
    protocol    = "-1"
    cidr_blocks = ["0.0.0.0/0"]
  }

  tags = {
    Name = "travel-agency-sg"
  }
}

# -------------------------
# EC2 Instance
# -------------------------
resource "aws_instance" "app_server" {
  ami                    = "ami-03deb8c961063af8c"
  instance_type          = "t2.micro"
  key_name               = "key2"
  subnet_id              = "subnet-0e60839b6c07990fb"
  vpc_security_group_ids = [aws_security_group.app_sg.id]

  tags = {
    Name = "travel-agency-app-server"
  }
}

output "app_server_public_ip" {
  value = aws_instance.app_server.public_ip
}
