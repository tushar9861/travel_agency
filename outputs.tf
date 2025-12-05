output "jenkins_public_ip" {
  description = "Public IP of the Jenkins EC2 instance"
  value       = module.jenkins_ec2.public_ip
}

output "jenkins_url" {
  description = "Jenkins URL"
  value       = "http://${module.jenkins_ec2.public_ip}:8080"
}

output "vpc_id" {
  value = module.vpc.vpc_id
}

output "public_subnet_id" {
  value = module.vpc.public_subnet_id
}
