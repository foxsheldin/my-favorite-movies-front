FROM node:24-alpine3.23
WORKDIR /webapp/client
ADD package.json yarn.lock /webapp/client/
RUN yarn install
ADD . /webapp/client/
RUN yarn build
CMD ["yarn", "start"]
EXPOSE 3000


