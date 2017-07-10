# RM Tutor: SERVER
FROM java:openjdk-8-jre
ENV TERM xterm

RUN mkdir -p /opt/tutor && \
  chmod 700 /opt/tutor/*

COPY target/external-resource/backend.jar /opt/tutor/

COPY docker-entrypoint.sh /docker-entrypoint.sh

RUN chown root:root /docker-entrypoint.sh && \
    chmod 700 /docker-entrypoint.sh /opt/tutor/*.jar

WORKDIR /opt/tutor
EXPOSE 9200

CMD ["/docker-entrypoint.sh", "-d"]
