variable "aws_access_key" {
  type = string
}

variable "aws_secret_key" {
  type = string
}

variable "ami_id" {
  description = "EC2 AMI ID"
  type        = string
  default     = "ami-0ecb62995f68bb549"
}

variable "key_name" {
  description = "EC2 Key Pair"
  type        = string
  default     = "key2"
}

variable "instance_type" {
  type    = string
  default = "t2.small"
}
