# 第一步：使用 Node 建構應用程式
FROM node:20 AS builder

WORKDIR /app
COPY . .
RUN npm install
RUN npm run build

# 第二步：使用 Nginx 來提供靜態檔案
FROM nginx:stable-alpine AS production

COPY --from=builder /app/dist /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
