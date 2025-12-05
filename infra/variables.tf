variable "aws_region" {
  type        = string
  default     = "ap-south-1"
  description = "AWS region"
}

variable "aws_access_key" {
  type        = string
  description = "AWS Access Key from Jenkins"
}

variable "aws_secret_key" {
  type        = string
  description = "AWS Secret Key from Jenkins"
}

variable "ami_id" {
  type        = string
  description = "AMI ID for EC2 instance"
}

variable "key_name" {
  type        = string
  description = "Existing EC2 Key Pair name"
}

variable "instance_type" {
  type        = string
  default     = "t2.small"
  description = "Instance type for EC2"
}
