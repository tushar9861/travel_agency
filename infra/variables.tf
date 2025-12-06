variable "aws_access_key" {
  type        = string
  description = "AWS access key for provider authentication"
}

variable "aws_secret_key" {
  type        = string
  description = "AWS secret key for provider authentication"
  sensitive   = true
}

variable "ami_id" {
  type        = string
  description = "AMI ID for the EC2 instance"
}

variable "key_name" {
  type        = string
  description = "Existing EC2 key pair name"
}

variable "instance_type" {
  type        = string
  default     = "t2.micro"
}

variable "subnet_id" {
  type        = string
  description = "Subnet ID where the EC2 instance will be placed"
}

variable "security_group_id" {
  type        = string
  description = "Security group ID for the EC2 instance"
}
