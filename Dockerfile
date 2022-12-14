FROM node:16-alpine as builder

ENV NODE_ENV build

USER node
WORKDIR /home/node

COPY package*.json ./
RUN yarn install

COPY --chown=node:node . .
RUN yarn build 

# ---

FROM node:16-alpine

ENV NODE_ENV production

USER node
WORKDIR /home/node

COPY --from=builder --chown=node:node /home/node/package*.json ./
COPY --from=builder --chown=node:node /home/node/node_modules/ ./node_modules/
COPY --from=builder --chown=node:node /home/node/dist/ ./dist/
COPY --from=builder --chown=node:node /home/node/prisma/ ./prisma/
COPY --from=builder --chown=node:node /home/node/start.sh ./

RUN yarn --cwd /home/node run prisma:generate
 
RUN chmod +x /home/node/start.sh

ENTRYPOINT ["/home/node/start.sh"]
