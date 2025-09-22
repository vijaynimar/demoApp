FROM node:20

# Set working directory
WORKDIR /app

# Copy only package files first
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the app
COPY . .

# Expose the port
EXPOSE 8000

# Start the app
CMD ["node", "server.js"]
