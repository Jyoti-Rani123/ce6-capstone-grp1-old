variable "environment" {
  description = "The environment to deploy (dev, stage, prod)."
  default     = "dev"
}

variable "prefix" {
  description = "Prefix for all resources"
  default     = "capstone-grp1"
}

variable "aws_region" {
  description = "AWS region to deploy"
  default     = "us-east-1"
}

variable "ecs_service_name" {
  description = "ECS service name"
  default     = "capstone-ecs-service"
}

variable "container_name" {
  description = "Container name"
  default     = "capstone-container"
}
