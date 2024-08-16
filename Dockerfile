FROM node:lts-alpine as build

RUN mkdir -p /home/node/app/node_modules && chown -R node:node /home/node/app
WORKDIR /home/node/app

COPY . .

RUN npm install pnpm -g
RUN pnpm install

ENV NODE_ENV=production


RUN pnpm run build

# Etapa de producción
FROM nginx:1.19.7-alpine as production
COPY --from=build /home/node/app/apps/client/dist /usr/share/nginx/html/client
COPY --from=build /home/node/app/apps/super/dist /usr/share/nginx/html/super
RUN rm /etc/nginx/conf.d/default.conf
COPY nginx/nginx.conf /etc/nginx/conf.d

EXPOSE 80 81
CMD ["nginx", "-g", "daemon off;"]