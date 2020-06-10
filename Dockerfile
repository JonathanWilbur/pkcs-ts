# You must compile the typescript first, using either `npm run build-node`
# or `npm run build`. Build this file using `docker build .`.
#
FROM node:alpine
LABEL author="Jonathan M. Wilbur <jonathan@wilbur.space>"
LABEL environment="production"
COPY ./dist/node /srv
WORKDIR /srv
ENV NODE_ENV production
RUN npm install --only=production
CMD [ "/usr/local/bin/node", "/srv/index.js" ]
