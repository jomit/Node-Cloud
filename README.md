# Node-Cloud
Sample code for using Node with Docker and Azure

High Level steps for Azure Integration
=================================================================
**Using Github:**

1) Login to azure portal and create a new Web App

2) Open Settings of the web app and click "Continus Deployment"

3) Select the source as "Github"

4) Setup Authorization and Select the Project / Branch

**Using Local Git Repository:**

1) Login to azure portal and create a new Web App

2) Open Settings of the web app and click "Continus Deployment"

3) Select the source as "Local Git Repository"

4) Setup Deployment credentials 

5) Verify the git repository url from Properties

6) Setup repository in local folder, where you have the code:

	- git init
	- git add .
	- git commit -m "<code comments here>"
	- git remote add azure <url of the local git repository which should be displayed in web app properties>
	- git push azure master


7) Push more changes after changes

	- git add .
	- git commit -m "<code comments here>"
	- git push azure master


High Level steps for Docker Integration
====================================================================

(Note: Install [Docker Toolbox](https://www.docker.com/docker-toolbox) and run the following commands in docker terminal)

1) Go to the directory containing the code.

2) Build a new the docker image (make sure to add the "." at the end)

	- docker build -t jomit/idealistapp .

3) List all existing docker images and make sure the new image is in the list

	- docker images
	
4) Run a docker image (-p is to map a local machine port to docker vm, -d is to run the image in background)

	- docker run -d -p 5000:8080 --name="idealistapp-1"  jomit/idealistapp

5) List all running images and make sure "idealistapp-1" is in the list

	- docker ps

6) Check the IP of the VM running the docker host

	- docker-machine ip default
	
7) Open the app in browser using the docker host ip from above

http://<docker host ip>:5000/


Other useful docker commands:
=========================================================================
	- docker ps -a			(see all stopped containers)
	- docker stop $(docker ps -a -q)     (Stop all running images)
	- docker rm $(docker ps -a -q)     (Remove all stopped images)
	- winpty docker exec -it <container-id> bash    (Go inside the container)
	- docker logs <container-id>   (see server logs of the vm)
