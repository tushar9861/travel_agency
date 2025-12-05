#############
# VPC
#############
resource "aws_vpc" "main" {
  cidr_block = "10.0.0.0/16"

  tags = {
    Name = "travel-agency-vpc"
  }
}

#############
# Internet Gateway
#############
resource "aws_internet_gateway" "gw" {
  vpc_id = aws_vpc.main.id

  tags = {
    Name = "travel-agency-igw"
  }
}

#############
# Public Subnet
#############
resource "aws_subnet" "public_subnet" {
  vpc_id            = aws_vpc.main.id
  cidr_block        = "10.0.1.0/24"
  map_public_ip_on_launch = true

  tags = {
    Name = "travel-agency-public-subnet"
  }
}

#############
# Route Table
#############
resource "aws_route_table" "public_rt" {
  vpc_id = aws_vpc.main.id

  route {
    cidr_block = "0.0.0.0/0"
    gateway_id = aws_internet_gateway.gw.id
  }

  tags = {
    Name = "travel-agency-public-rt"
  }
}

resource "aws_route_table_association" "public_rt_assoc" {
  subnet_id      = aws_subnet.public_subnet.id
  route_table_id = aws_route_table.public_rt.id
}

#############
# Security Group
#############
resource "aws_security_group" "app_sg" {
  name        = "travel-agency-app-sg"
  description = "Allow HTTP & SSH"
  vpc_id      = aws_vpc.main.id

  ingress {
    from_port   = 22
    to_port     = 22
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  ingress {
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

#############
# EC2 Instance
#############
resource "aws_instance" "app_server" {
  ami                    = var.ami_id
  instance_type          = var.instance_type
  key_name               = var.key_name
  subnet_id              = aws_subnet.public_subnet.id
  vpc_security_group_ids = [aws_security_group.app_sg.id]

  tags = {
    Name = "travel-agency-app"
  }
}

#############
# OUTPUT
#############
output "app_public_ip" {
  value = aws_instance.app_server.public_ip
}
