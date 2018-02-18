# Starship App

Starship is a inventory ordering system built with React, Express, Node.js, and MongoDB. This project is built for educational purposes to employ software engineering practices in a group project while learning new technologies to design and implement a web application.

## Built With

* React      16.2.0
* Express.js 4.16.1
* Node.js    8.9.4
* MongoDB    3.4
* Database from mLab
* Deployed on Heroku

## Getting Started

These instructions are assuming a new Ubuntu 16.04 install in a VM for the purposes of this project and its dependencies. Commands for MacOS and other Linux distributions will differ.

```
Note: sudo usage is implied for most commands requiring root.
```

### Git

Git is the version control system used to manage the source code for this project as well pushing to both of the Git repositories on GitHub and Heroku.

#### Installing Git

```
sudo apt install git
```

Set your Git username:

```
$ git config --global user.name "Your Name"
```

Confirm that you set your Git username correctly:

```
$ git config user.name

Willard
```

Set your Git email address used for commits:

```
$ git config --global user.email "youremail@mail.school.edu"
```

Confirm that you set your Git email address correctly:

```
$ git config --global user.email

youremail@email.example.edu
```

### Install Node.js

```
sudo apt install curl
curl -sL https://deb.nodesource.com/setup_8.x | sudo -E bash -
sudo apt-get install -y nodejs
sudo apt-get install -y build-essential
```

### Install MongoDB 3.4

```
sudo apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv 0C49F3730359A14518585931BC711F9BA15703C6
```
```
echo "deb [ arch=amd64,arm64 ] http://repo.mongodb.org/apt/ubuntu xenial/mongodb-org/3.4 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-3.4.list
```
```
sudo apt-get update
```
```
sudo apt-get install -y mongodb-org
```

Start MongoDB during development with:
```
sudo service mongod start
```

Open up the Mongo terminal with:
```
mongo
```

Create the local development database with:
```
use starship-db-dev
```

Shut down MongoDB for now with:
```
sudo service mongod stop
```

### Clone the Starship App repository

```
git clone https://github.com/starship-app/starship-app.git
```

### Install dependencies

Change into the newly cloned starship app and install dependencies:
```
npm install
```

Install the React dependencies by changing into the ``client`` folder as well:
```
npm install
```

### Begin local development

This is the procedure everytime to setup your development environment:

Start MongoDB:
```
sudo service mongod start
```

Start the Express server in the main project directory.
```
npm run devstart
```

Got to http://localhost:3001 to see the Express server.

Open another terminal. Start the React client side development proxy to Express by first changing into the React directory in the ``client`` folder. Run the React server with:

```
npm start
```

Go to http://localhost:3000 to see the React app.

## License

See the LICENSE file.

