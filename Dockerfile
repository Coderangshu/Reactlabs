# Step 1: Use official Node.js image
FROM node:22

# Step 2: Set the working directory inside the container
WORKDIR /home/labDirectory

# Step 3: Create home directory and all the folders inside it
RUN mkdir /home/.evaluationScripts

# Step 4: Expose the port on which the React app will run
EXPOSE 30000

# Step 5: Start the React app
CMD [ "/bin/bash", "-c", "bash /home/.evaluationScripts/.bodhiFiles/init.sh; while :; do sleep 10; done" ]