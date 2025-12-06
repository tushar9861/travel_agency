terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 5.0"
    }
  }

  required_version = ">= 1.5.0"
}

provider "aws" {
  region = var.aws_region
  # Credentials are taken from:
  # - Environment variables (AWS_ACCESS_KEY_ID / AWS_SECRET_ACCESS_KEY)
  # - Or IAM role attached to the instance
}
