FROM ubuntu:16.04

WORKDIR /opt

ADD setup_9.x /tmp/setup_9.x
RUN bash /tmp/setup_9.x

RUN apt-get update
RUN apt-get install -y build-essential
RUN apt-get install -y nodejs
RUN /usr/bin/npm install -g gulp
RUN /usr/bin/npm install -g bower

COPY . .

RUN npm install

EXPOSE 3000

CMD ["gulp"]