terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 6.0"
    }
  }
}

provider "aws" {
  region = var.aws_region
  # 👇 DO NOT put access_key / secret_key here.
  # Terraform will read them from environment variables:
  #   AWS_ACCESS_KEY_ID
  #   AWS_SECRET_ACCESS_KEY
}
