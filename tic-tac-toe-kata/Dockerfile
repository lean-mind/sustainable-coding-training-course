FROM node:18-slim

WORKDIR /app

COPY package.json package.json
COPY package-lock.json package-lock.json

RUN npm install

CMD ["/bin/bash"]
