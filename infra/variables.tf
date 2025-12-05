// infra/variables.tf

// Region where you want to create the app EC2
variable "aws_region" {
  type    = string
  default = "us-east-1"
}

// EC2 instance type for the app server
variable "instance_type" {
  type    = string
  default = "t2.small"
}

// AMI of your Jenkins EC2 (same region us-east-1)
variable "ami_id" {
  type    = string
  default = "ami-0ecb62995f68bb549"
}

// EC2 Key Pair name (from AWS console, e.g., key2)
variable "key_name" {
  type    = string
  default = "key2"
}

// These will be passed from Jenkins credentials
variable "aws_access_key" {
  type = string
}

variable "aws_secret_key" {
  type = string
}
