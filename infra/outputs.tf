output "app_public_ip" {
  description = "Public IP of the app EC2 instance"
  value       = aws_instance.app_server.public_ip
}

output "app_public_dns" {
  description = "Public DNS of the app EC2 instance"
  value       = aws_instance.app_server.public_dns
}

output "vpc_id" {
  description = "ID of the created VPC"
  value       = aws_vpc.main.id
}

output "public_subnet_id" {
  description = "ID of the public subnet"
  value       = aws_subnet.public.id
}

output "security_group_id" {
  description = "ID of the security group for the app"
  value       = aws_security_group.app_sg.id
}
