variable "aws_region" {
  type    = string
  default = "us-east-1"
}

variable "aws_access_key" {
  type        = string
  description = "AWS access key (passed securely from Jenkins credentials)"
  sensitive   = true
}

variable "aws_secret_key" {
  type        = string
  description = "AWS secret key (passed securely from Jenkins credentials)"
  sensitive   = true
}

variable "ami_id" {
  type    = string
  default = "ami-0ecb62995f68bb549" # change if needed
}

variable "instance_type" {
  type    = string
  default = "t3.micro"
}

variable "key_name" {
  type    = string
  default = "key1" # existing key pair name in your account
}

variable "jenkins_ip_cidr" {
  type    = string
  description = "CIDR for Jenkins server SSH access (eg. 13.60.238.195/32)"
}

variable "public_ssh_from" {
  type    = string
  default = "0.0.0.0/0"
  description = "If you want SSH from anywhere (not recommended). Default wide-open. Prefer setting jenkins_ip_cidr."
}
