terraform {
  required_version = ">= 1.5.0"

  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 5.0"
    }
  }
}

provider "aws" {
  region = var.aws_region
}

module "vpc" {
  source       = "./modules/vpc"
  project_name = var.project_name
  vpc_cidr     = var.vpc_cidr
  public_subnet_cidr = var.public_subnet_cidr
}

module "security_group" {
  source            = "./modules/security_group"
  project_name      = var.project_name
  vpc_id            = module.vpc.vpc_id
  allowed_ssh_cidr  = var.allowed_ssh_cidr
}

module "jenkins_ec2" {
  source            = "./modules/ec2"
  project_name      = var.project_name
  subnet_id         = module.vpc.public_subnet_id
  security_group_ids = [module.security_group.jenkins_sg_id]
  instance_type     = var.instance_type
  public_key_path   = var.public_key_path
  user_data         = file("${path.module}/user_data.sh")
}
