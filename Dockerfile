# node version
FROM node:10.16.0-alpine

# adding curl command
RUN apk --no-cache add curl

# creating a working Directory
WORKDIR /webstorybook

# copying the working directory to the current directory
COPY ./ .

# npm install
RUN npm i

# start the build command to create an out directory
RUN npm run build-storybook

# expose the port
EXPOSE 9009

CMD ["sh", "-c", "npm run server"]