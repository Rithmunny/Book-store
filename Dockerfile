# Stage 1: Build the Angular application
FROM node:18 AS build

# Set working directory
WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the application in production mode
RUN npm run build

# Stage 2: Serve the app with NGINX
FROM nginx:alpine

# Copy the custom NGINX configuration
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy the built application from the previous stage
COPY --from=build /usr/src/app/dist/login-with-docker/browser /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Start NGINX
CMD ["nginx", "-g", "daemon off;"]
