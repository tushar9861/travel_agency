variable "aws_region" {
  description = "AWS region to deploy resources in"
  type        = string
  default     = "ap-south-1"
}

variable "project_name" {
  description = "Project name prefix for tagging"
  type        = string
  default     = "travel-agency"
}

variable "instance_type" {
  description = "EC2 instance type"
  type        = string
  default     = "t2.micro"
}

variable "key_name" {
  description = "Existing EC2 Key Pair name (must already exist in AWS)"
  type        = string
  default     = "terraform-key" # change if your key name is different
}
