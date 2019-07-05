FROM dockerhub.bmi:5000/node:alpine
WORKDIR /usr/src/app
COPY . .
ENTRYPOINT ["node"]
CMD ["server.js"]