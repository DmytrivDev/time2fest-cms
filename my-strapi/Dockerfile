FROM node:18-alpine

# Робоча директорія
WORKDIR /app

# Копіюємо package.json і package-lock.json
COPY package*.json ./

# Встановлюємо залежності
RUN npm install --legacy-peer-deps

# Копіюємо код Strapi
COPY . .

# Будуємо адмінку
RUN npm run build

# Відкриваємо порт
EXPOSE 1337

# Старт Strapi
CMD ["npm", "start"]
