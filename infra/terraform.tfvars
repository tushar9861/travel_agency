
aws_region        = "us-east-1"
aws_access_key    = "JENKINS_AWS_ACCESS_KEY"   # Jenkins will override when pipeline runs
aws_secret_key    = "JENKINS_AWS_SECRET_KEY"
ami_id            = "ami-0ecb62995f68bb549"
instance_type     = "t3.micro"
key_name          = "key1"
jenkins_ip_cidr   = "13.60.238.195/32"
public_ssh_from   = "0.0.0.0/0"  # optional - recommended keep narrow
