resource "aws_instance" "app_server" {
  ami           = "ami-03deb8c961063af8c" # Ubuntu AMI
  instance_type = "t2.micro"

  subnet_id              = var.public_subnet_id
  vpc_security_group_ids = [var.vpc_security_group_ids]
  key_name               = var.key_name

  tags = {
    Name = "travel-agency-app-server"
  }
}
