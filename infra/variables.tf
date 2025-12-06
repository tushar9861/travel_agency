variable "aws_region" {
  default = "ap-south-1"
}

variable "aws_access_key" {}
variable "aws_secret_key" {}

variable "ami_id" {
  type = string
  default = "ami-0ecb62995f68bb549" # your confirmed AMI
}

variable "key_name" {
  type = string
  default = "key2"
}

variable "instance_type" {
  type = string
  default = "t2.small"
}

variable "subnet_id" {
  type        = string
  description = "Subnet ID where EC2 should be launched"
}

variable "security_group_id" {
  type        = string
  description = "Security group ID for EC2 instance"
}
