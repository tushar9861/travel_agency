variable "public_subnet_id" {
  description = "Public subnet ID where EC2 will be launched"
  type        = string
}

variable "vpc_security_group_ids" {
  description = "Security groups to attach to EC2"
  type        = list(string)
}

variable "key_name" {
  description = "Name of the SSH key pair"
  type        = string
}
