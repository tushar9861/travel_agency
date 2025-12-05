variable "aws_region" {
  type = string
}

variable "instance_type" {
  type    = string
  default = "t2.micro"
}

variable "ami_id" {
  type = string
}

variable "key_name" {
  type = string
}

# Added for Jenkins → Terraform authentication
variable "aws_access_key" {
  type = string
}

variable "aws_secret_key" {
  type = string
}
