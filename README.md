# Coding Assignment 14
### How to run the portfolio website
1. Open a local terminal.

2. Pull the image from docker:

 `docker pull elacodes1/teodocio_aena_coding_assignment14`

3. Run the container:

    `docker run -p 5575:80 elacodes1/teodocio_aena_coding_assignment14`

4. In a local browser, head to http://localhost:5575/

### Steps for the assignment
1. Set up react app using

    `npx create-react-app at_coding_assignment_14`

2. Install dependencies
    `npm install bootstrap`
    `npm install react-icons --save`

3. Build components for the different sections of the website.

4. Apply styling.

5. Create Dockerfile and dockerignore files.

6. Build Docker image and container then deploy it to Docker Hub.