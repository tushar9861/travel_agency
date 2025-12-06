provider "aws" {
  region     = "us-east-1"
}

resource "aws_instance" "app_server" {
  ami           = var.ami_id
  instance_type = var.instance_type
  key_name      = var.key_name

  subnet_id = "subnet-0e60839b6c07990fb"

  vpc_security_group_ids = [
    "sg-0aa49c1719a0dfd9b"   # replace with your SG if different
  ]

  tags = {
    Name = "travel-agency-app-server"
  }
}

output "public_ip" {
  value = aws_instance.app_server.public_ip
}
