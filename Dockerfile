FROM adoptopenjdk:11-jre-hotspot
#ARG JAR_FILE=*.jar
#COPY ${JAR_FILE} app.jar 
#RUN echo ${JAR_FILE}
#RUN find -name "app.jar"
ADD target/givemehand.jar givemehand.jar
RUN ls -la
RUN find -name "givemehand.jar"
EXPOSE 8080
ENTRYPOINT ["java","-jar", "givemehand.jar"]
