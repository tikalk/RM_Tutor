#!/bin/bash

pwd=`pwd`
echo $pwd

export JAVA_OPTS="$TUTOR_JAVA_OPTS $JAVA_OPTS"

ADD_TO_COMMAND_PROFILE=""
if [ "$PROFILES" != "" ];
then
    ADD_TO_COMMAND_PROFILE="--spring.profiles.active=$PROFILES"
fi

java "$JAVA_OPTS" -jar ./backend.jar --audit.dir="$pwd/audit/logs" --log.dir="$pwd/audit" "$ADD_TO_COMMAND_PROFILE" --spring.config.location=/opt/tutor/config/application.properties
