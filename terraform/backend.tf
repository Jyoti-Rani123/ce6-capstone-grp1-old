 terraform {
   backend "s3" {
    bucket = "sctp-ce6-tfstate"
    key    = "ecs-ce6-saracapstone.tfstate"
    region = "ap-southeast-1"
   }
 }