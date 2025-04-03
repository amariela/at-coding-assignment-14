# BUILD STAGE
# Use the latest LTS version of Node.js
FROM node AS build
 
# Set the working directory inside the container
WORKDIR /teodocio_aena_final_site
 
# Copy package.json and package-lock.json
COPY package*.json ./
 
# Install dependencies
RUN npm install
 
# Copy the rest of your application files
COPY . .
 
RUN npm run build
 
# PRODUCTION STAGE - final image contains only the production build and Nginx

# Uses Nginx to serve static files.
FROM nginx:stable-alpine AS production 

# Copies the build output from the previous stage.
COPY --from=build /teodocio_aena_final_site/build /usr/share/nginx/html

# App will run on the exposed port
EXPOSE 80

# Runs Nginx in the foreground.
CMD ["nginx", "-g", "daemon off;"]