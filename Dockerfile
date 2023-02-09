FROM node:18

WORKDIR /usr/src/app

COPY package.json package-lock.json ./

RUN npm install 

COPY src/prisma/schema.prisma ./src/prisma/
RUN npx prisma generate

COPY . .

RUN npm run build

EXPOSE 8080
CMD ["npm", "run", "start"]

