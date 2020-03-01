FROM node:12.16

WORKDIR /usr
ADD package.json .
RUN yarn install 
ADD . .
EXPOSE 8881
CMD ["node", "index"]
