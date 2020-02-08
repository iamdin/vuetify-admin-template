FROM nginx
RUN mkdir /app
COPY ./dist /app/vuetify-admin-template
COPY nginx.conf /etc/nginx/nginx.conf