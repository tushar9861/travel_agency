output "app_instance_id" {
  value = aws_instance.app_server.id
}

output "app_public_ip" {
  value = aws_instance.app_server.public_ip
}

output "app_public_dns" {
  value = aws_instance.app_server.public_dns
}
