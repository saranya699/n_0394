module.exports = {
    requiresCompatibilities: [
        "FARGATE"
    ],
    "inferenceAccelerators": [],
    "containerDefinitions": [
        {
            "name": "mongo-0394",
            "image": "geppettotest/mongo-local:april2020",
            "memoryReservation": "300",
            "resourceRequirements": null,
            "essential": true,
            "portMappings": [
                {
                    "containerPort": "27017",
                    "protocol": "tcp",
                    "hostPort": "27017"
                }
            ],
            "environmentFiles": null,
            "environment": [{
                "name": "MONGO_INITDB_ROOT_PASSWORD",
                "value": "password"
              },
              {
                "name": "MONGO_INITDB_ROOT_USERNAME",
                "value": "admin"
              }],
            "secrets": null,
            "mountPoints": [
                {
                  "readOnly": null,
                  "containerPath": "/data/db",
                  "sourceVolume": "n"
                }
              ],
            "volumesFrom": null,
            "hostname": null,
            "user": null,
            "workingDirectory": null,
            "extraHosts": null,
            "logConfiguration": {
                "logDriver": "awslogs",
                "options": {
                    "awslogs-group": "/ecs/n",
                    "awslogs-region": "us-east-1",
                    "awslogs-stream-prefix": "ecs",
                    "awslogs-create-group": "true"
                }
            },
            "ulimits": null,
            "dockerLabels": null,
            "dependsOn": null,
            "repositoryCredentials": {
                "credentialsParameter": ""
            }
        },
        {
            "name": "camunda-0394",
            "image": "geppettodistribution/camunda-local:Jan2021",
            "memoryReservation": "300",
            "resourceRequirements": null,
            "essential": true,
            "portMappings": [
                {
                    "containerPort": "8080",
                    "protocol": "tcp",
                    "hostPort": "8080"
                }
            ],
            "environmentFiles": null,
            "environment": null,
            "secrets": null,
            "mountPoints": [
                {
                  "readOnly": null,
                  "containerPath": "/path/to/container",
                  "sourceVolume": "n"
                }
              ],
            "volumesFrom": null,
            "hostname": null,
            "user": null,
            "workingDirectory": null,
            "extraHosts": null,
            "logConfiguration": {
                "logDriver": "awslogs",
                "options": {
                    "awslogs-group": "/ecs/n",
                    "awslogs-region": "us-east-1",
                    "awslogs-stream-prefix": "ecs",
                    "awslogs-create-group": "true"
                }
            },
            "ulimits": null,
            "dockerLabels": null,
            "dependsOn": null,
            "repositoryCredentials": {
                "credentialsParameter": ""
            }
        },
        {
            "name": "apigateway-0394",
            "image": `${process.env.AWS_ACCOUNT_ID}.dkr.ecr.us-east-1.amazonaws.com/geppetto-generatedcode-n-0394-apigateway:1`,
            "memoryReservation": "300",
            "resourceRequirements": null,
            "essential": true,
            "portMappings": [
                {
                    "containerPort": "8000",
                    "protocol": "tcp",
                    "hostPort": "8000"
                }
            ],
            "environmentFiles": null,
            "environment": [{"name":"MONGO_DB_URL","value":"mongodb://admin:password@127.0.0.1:27017/n_0394?authSource=admin"},{"name":"CAMUNDAPOD_URL","value":"http://127.0.0.1:8080"},{"name":"SECURITYURL","value":"http://127.0.0.1:8003"},{"name":"AUTHPROXYURL","value":"http://127.0.0.1:8001"},{"name":"ADMINURL","value":"http://127.0.0.1:8004"},{"name":"CAMUNDAURL","value":"http://127.0.0.1:8002"},{"name":"APIGATEWAY","value":"http://127.0.0.1:8000"}
            ,{"name":"SYSTEMENTRYURL","value":"http://127.0.0.1:8009"}
            ],
            "secrets": null,
            "mountPoints": [
                {
                  "readOnly": null,
                  "containerPath": "/path/to/container",
                  "sourceVolume": "n"
                }
              ],
            "volumesFrom": null,
            "hostname": null,
            "user": null,
            "workingDirectory": null,
            "extraHosts": null,
            "logConfiguration": {
                "logDriver": "awslogs",
                "options": {
                    "awslogs-group": "/ecs/n",
                    "awslogs-region": "us-east-1",
                    "awslogs-stream-prefix": "ecs",
                    "awslogs-create-group": "true"
                }
            },
            "ulimits": null,
            "dockerLabels": null,
            "dependsOn": null,
            "repositoryCredentials": {
                "credentialsParameter": ""
            }
        },        
        {
            "name": "authproxy-0394",
            "image": `${process.env.AWS_ACCOUNT_ID}.dkr.ecr.us-east-1.amazonaws.com/geppetto-generatedcode-n-0394-authproxy:1`,
            "memoryReservation": "300",
            "resourceRequirements": null,
            "essential": true,
            "portMappings": [
                {
                    "containerPort": "8001",
                    "protocol": "tcp",
                    "hostPort": "8001"
                }
            ],
            "environmentFiles": null,
            "environment": [{"name":"MONGO_DB_URL","value":"mongodb://admin:password@127.0.0.1:27017/n_0394?authSource=admin"},{"name":"CAMUNDAURL","value":"http://127.0.0.1:8002"}],
            "secrets": null,
            "mountPoints": [
                {
                  "readOnly": null,
                  "containerPath": "/path/to/container",
                  "sourceVolume": "n"
                }
              ],
            "volumesFrom": null,
            "hostname": null,
            "user": null,
            "workingDirectory": null,
            "extraHosts": null,
            "logConfiguration": {
                "logDriver": "awslogs",
                "options": {
                    "awslogs-group": "/ecs/n",
                    "awslogs-region": "us-east-1",
                    "awslogs-stream-prefix": "ecs",
                    "awslogs-create-group": "true"
                }
            },
            "ulimits": null,
            "dockerLabels": null,
            "dependsOn": null,
            "repositoryCredentials": {
                "credentialsParameter": ""
            }
        },
        {
            "name": "camundasvc-0394",
            "image": `${process.env.AWS_ACCOUNT_ID}.dkr.ecr.us-east-1.amazonaws.com/geppetto-generatedcode-n-0394-camunda:1`,
            "memoryReservation": "300",
            "resourceRequirements": null,
            "essential": true,
            "portMappings": [
                {
                    "containerPort": "8002",
                    "protocol": "tcp",
                    "hostPort": "8002"
                }
            ],
            "environmentFiles": null,
            "environment": [{"name":"MONGO_DB_URL","value":"mongodb://admin:password@127.0.0.1:27017/n_0394?authSource=admin"},{"name":"CAMUNDAPOD_URL","value":"http://127.0.0.1:8080"},{"name":"SECURITYURL","value":"http://127.0.0.1:8003"},{"name":"AUTHPROXYURL","value":"http://127.0.0.1:8001"},{"name":"ADMINURL","value":"http://127.0.0.1:8004"},{"name":"CAMUNDAURL","value":"http://127.0.0.1:8002"},{"name":"APIGATEWAY","value":"http://127.0.0.1:8000"}],
            "secrets": null,
            "mountPoints": [
                {
                  "readOnly": null,
                  "containerPath": "/path/to/container",
                  "sourceVolume": "n"
                }
              ],
            "volumesFrom": null,
            "hostname": null,
            "user": null,
            "workingDirectory": null,
            "extraHosts": null,
            "logConfiguration": {
                "logDriver": "awslogs",
                "options": {
                    "awslogs-group": "/ecs/n",
                    "awslogs-region": "us-east-1",
                    "awslogs-stream-prefix": "ecs",
                    "awslogs-create-group": "true"
                }
            },
            "ulimits": null,
            "dockerLabels": null,
            "dependsOn": null,
            "repositoryCredentials": {
                "credentialsParameter": ""
            }
        },
        {
            "name": "securitymanager-0394",
            "image": `${process.env.AWS_ACCOUNT_ID}.dkr.ecr.us-east-1.amazonaws.com/geppetto-generatedcode-n-0394-securitymanager:1`,
            "memoryReservation": "300",
            "resourceRequirements": null,
            "essential": true,
            "portMappings": [
                {
                    "containerPort": "8003",
                    "protocol": "tcp",
                    "hostPort": "8003"
                }
            ],
            "environmentFiles": null,
            "environment": [{"name":"MONGO_DB_URL","value":"mongodb://admin:password@127.0.0.1:27017/n_0394?authSource=admin"},{"name":"CAMUNDAPOD_URL","value":"http://127.0.0.1:8080"},{"name":"SECURITYURL","value":"http://127.0.0.1:8003"},{"name":"AUTHPROXYURL","value":"http://127.0.0.1:8001"},{"name":"ADMINURL","value":"http://127.0.0.1:8004"},{"name":"CAMUNDAURL","value":"http://127.0.0.1:8002"},{"name":"APIGATEWAY","value":"http://127.0.0.1:8000"}],
            "mountPoints": [
                {
                  "readOnly": null,
                  "containerPath": "/path/to/container",
                  "sourceVolume": "n"
                }
              ],
            "volumesFrom": null,
            "hostname": null,
            "user": null,
            "workingDirectory": null,
            "extraHosts": null,
            "logConfiguration": {
                "logDriver": "awslogs",
                "options": {
                    "awslogs-group": "/ecs/n",
                    "awslogs-region": "us-east-1",
                    "awslogs-stream-prefix": "ecs",
                    "awslogs-create-group": "true"
                }
            },
            "ulimits": null,
            "dockerLabels": null,
            "dependsOn": null,
            "repositoryCredentials": {
                "credentialsParameter": ""
            }
        },
        {
            "name": "systemcredentialmanager-0394",
            "image": `${process.env.AWS_ACCOUNT_ID}.dkr.ecr.us-east-1.amazonaws.com/geppetto-generatedcode-n-0394-securitymanager:1`,
            "memoryReservation": "300",
            "resourceRequirements": null,
            "essential": true,
            "portMappings": [
                {
                    "containerPort": "8005",
                    "protocol": "tcp",
                    "hostPort": "8005"
                }
            ],
            "environmentFiles": null,
            "environment": [{"name":"MONGO_DB_URL","value":"mongodb://admin:password@127.0.0.1:27017/n_0394?authSource=admin"},{"name":"CAMUNDAPOD_URL","value":"http://127.0.0.1:8080"},{"name":"SECURITYURL","value":"http://127.0.0.1:8003"},{"name":"AUTHPROXYURL","value":"http://127.0.0.1:8001"},{"name":"ADMINURL","value":"http://127.0.0.1:8004"},{"name":"CAMUNDAURL","value":"http://127.0.0.1:8002"},{"name":"APIGATEWAY","value":"http://127.0.0.1:8000"}],
            "mountPoints": [
                {
                  "readOnly": null,
                  "containerPath": "/path/to/container",
                  "sourceVolume": "n"
                }
              ],
            "volumesFrom": null,
            "hostname": null,
            "user": null,
            "workingDirectory": null,
            "extraHosts": null,
            "logConfiguration": {
                "logDriver": "awslogs",
                "options": {
                    "awslogs-group": "/ecs/n",
                    "awslogs-region": "us-east-1",
                    "awslogs-stream-prefix": "ecs",
                    "awslogs-create-group": "true"
                }
            },
            "ulimits": null,
            "dockerLabels": null,
            "dependsOn": null,
            "repositoryCredentials": {
                "credentialsParameter": ""
            }
        },
        {
            "name": "systementry-0394",
            "image": `${process.env.AWS_ACCOUNT_ID}.dkr.ecr.us-east-1.amazonaws.com/geppetto-generatedcode-n-0394-systementry:1`,
            "memoryReservation": "300",
            "resourceRequirements": null,
            "essential": true,
            "portMappings": [
                {
                    "containerPort": "8009",
                    "protocol": "tcp",
                    "hostPort": "8009"
                }
            ],
            "environmentFiles": null,
            "environment": [{"name":"MONGO_DB_URL","value":"mongodb://admin:password@127.0.0.1:27017/n_0394?authSource=admin"}],
            "secrets": null,
            "mountPoints": [
                {
                  "readOnly": null,
                  "containerPath": "/path/to/container",
                  "sourceVolume": "n"
                }
              ],
            "volumesFrom": null,
            "hostname": null,
            "user": null,
            "workingDirectory": null,
            "extraHosts": null,
            "logConfiguration": {
                "logDriver": "awslogs",
                "options": {
                    "awslogs-group": "/ecs/n",
                    "awslogs-region": "us-east-1",
                    "awslogs-stream-prefix": "ecs",
                    "awslogs-create-group": "true"
                }
            },
            "ulimits": null,
            "dockerLabels": null,
            "dependsOn": null,
            "repositoryCredentials": {
                "credentialsParameter": ""
            }
        },          
    ],
    "volumes": [
        {
        "fsxWindowsFileServerVolumeConfiguration": null,
        "efsVolumeConfiguration": {
            "transitEncryptionPort": null,
            "fileSystemId": `${process.env.EFS_ID}`,
            "authorizationConfig": {
            "iam": "DISABLED",
            "accessPointId": null
            },
            "transitEncryption": "DISABLED",
            "rootDirectory": "/"
        },
        "name": "n",
        "host": null,
        "dockerVolumeConfiguration": null
        }
    ],
    "networkMode": "awsvpc",
    "memory": "4096",
    "cpu": "1024",
    "executionRoleArn": `arn:aws:iam::${process.env.AWS_ACCOUNT_ID}:role/${process.env.AWS_ROLE_FOR_FARGATE}`,
    "family": "n",
    "tags": [],
    "placementConstraints": [],
    "taskRoleArn": `arn:aws:iam::${process.env.AWS_ACCOUNT_ID}:role/${process.env.AWS_ROLE_FOR_FARGATE}`

};
var ConfigurationJSON = JSON.stringify(module.exports);
const config = module.exports;

const jsonConfig = JSON.parse(JSON.stringify(ConfigurationJSON))

console.log(jsonConfig)
