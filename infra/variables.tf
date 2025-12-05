variable "aws_region" {
  type    = string
  default = "us-east-1"
}

variable "instance_type" {
  type    = string
  default = "t2.small"
}

variable "ami_id" {
  type    = string
  default = "ami-02e94b011299ef128"
}

variable "key_name" {
  type    = string
  default = "key2"
}

variable "aws_access_key" {
  type = string
}

variable "aws_secret_key" {
  type = string
}
