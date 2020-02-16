#!/bin/sh

# 停止已有容器
docker stop $(docker ps -a |  grep "vuetify"  | awk '{print $1}')

# 删除已有容器
docker rm $(docker ps -a |  grep "vuetify"  | awk '{print $1}')

# 删除已有镜像
docker rmi $(docker images -a |  grep "vuetify"  | awk '{print $1}')

# 创建docker镜像
docker build . -t vuetify

# 运行docker
docker run -d --name vuetify -p 80:80 vuetify