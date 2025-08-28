# Use Node.js Alpine image
FROM node:22-alpine

# Set working directory
WORKDIR /app

# Enable corepack (ships with Node >=16) so we can use yarn
RUN corepack enable

# Copy dependency files first
COPY package.json yarn.lock ./

# Install only production dependencies
RUN yarn install --production

# Copy application code
COPY . .

# Expose the app port
EXPOSE 3000

# Start the server
CMD ["node", "app.js"]
