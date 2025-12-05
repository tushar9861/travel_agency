variable "aws_region" {
  description = "AWS region"
  type        = string
  default     = "us-east-1"
}

variable "project_name" {
  description = "Project name prefix for tagging"
  type        = string
  default     = "jenkins-cicd"
}

variable "vpc_cidr" {
  description = "VPC CIDR block"
  type        = string
  default     = "10.10.0.0/16"
}

variable "public_subnet_cidr" {
  description = "Public subnet CIDR"
  type        = string
  default     = "10.10.1.0/24"
}

variable "instance_type" {
  description = "EC2 instance type for Jenkins"
  type        = string
  default     = "t3.small"
}

variable "public_key_path" {
  description = "Path to your SSH public key"
  type        = string
  # example: "/home/ubuntu/.ssh/id_rsa.pub"
}

variable "allowed_ssh_cidr" {
  description = "CIDR allowed to SSH into Jenkins EC2 (use your IP)"
  type        = string
  default     = "0.0.0.0/0"
}
