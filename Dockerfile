# vergeman/jsdom
FROM node:14-slim

# install
WORKDIR /usr/src
RUN  apt-get update && apt-get install -y wget

#python
RUN apt-get install -y build-essential checkinstall
RUN apt-get install -y libreadline-gplv2-dev libncursesw5-dev libssl-dev libsqlite3-dev tk-dev libgdbm-dev libc6-dev libbz2-dev
RUN apt-get update

RUN wget https://www.python.org/ftp/python/3.6.10/Python-3.6.10.tgz
RUN tar xzf Python-3.6.10.tgz
WORKDIR /usr/src/Python-3.6.10/
RUN ./configure --enable-optimizations
RUN make altinstall

RUN update-alternatives --install /usr/bin/python python /usr/local/bin/python3.6 1
RUN update-alternatives --install /usr/bin/python3 python3 /usr/local/bin/python3.6 2

RUN sh -c "$(wget -O- https://github.com/deluan/zsh-in-docker/releases/download/v1.1.1/zsh-in-docker.sh)"

WORKDIR /jsdom
COPY ./ /jsdom
