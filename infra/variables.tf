# AWS Credentials (passed securely from Jenkins)
variable "aws_access_key" {
  description = "AWS access key from Jenkins"
  type        = string
}

variable "aws_secret_key" {
  description = "AWS secret key from Jenkins"
  type        = string
}

# EC2 instance variables
variable "instance_type" {
  description = "EC2 instance type"
  type        = string
  default     = "t2.micro"
}

variable "ami_id" {
  description = "AMI ID to launch EC2 instance"
  type        = string
  default     = "ami-06b21ccaeff8cd686" # Ubuntu 22 LTS (N. Virginia)
}

variable "key_name" {
  description = "SSH key pair name"
  type        = string
  default     = "my-key"
}
