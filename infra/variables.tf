variable "aws_region" {
  type = string
}

variable "instance_type" {
  type    = string
  default = "t2.small"
}

variable "ami_id" {
  type = string
}

variable "key_name" {
  type = string
}

variable "aws_access_key" {}
variable "aws_secret_key" {}
