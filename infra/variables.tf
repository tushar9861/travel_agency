variable "aws_region" {
  type    = string
  default = "us-east-1"
}

variable "aws_access_key" {
  type = string
}

variable "aws_secret_key" {
  type = string
}

variable "ami_id" {
  type    = string
}

variable "instance_type" {
  type    = string
  default = "t2.micro"
}

variable "key_name" {
  type    = string
}

variable "subnet_id" {
  type = string
}

variable "security_group_id" {
  type = string
}
