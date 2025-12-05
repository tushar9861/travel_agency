variable "public_subnet_id" {
  type = string
}

variable "vpc_security_group_ids" {
  type = list(string)
}

variable "key_name" {
  type = string
}

variable "project_name" {
  type = string
  default = "travel_agency"
}

