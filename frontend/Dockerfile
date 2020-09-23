FROM node:10-alpine as base

WORKDIR /app
EXPOSE 3000
CMD ["npm", "run", "start"]
ENV CI=true
COPY package* ./
RUN npm ci
COPY . .