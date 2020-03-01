FROM node:12.16

WORKDIR /usr/src/app
COPY package.json .
COPY yarn.lock .
RUN yarn install --frozen-lockfile
COPY . .
EXPOSE 8881
CMD ["yarn", "start"]
