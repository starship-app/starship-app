# [Starship App](http://starship-app.herokuapp.com/)

Starship is a inventory ordering system built with React, Express, Node.js, and MongoDB. This project is built for educational purposes to employ software engineering practices in a group project while learning new technologies to design and implement a web application.

## Built With

* React      16.2.0
* Express.js 4.15.5
* Node.js    8.9.4
* MongoDB    3.4
* Database from mLab
* Deployed on Heroku

## Getting Started

These instructions are assuming a new Ubuntu 16.04 install in a VM for the purposes of this project and its dependencies. Commands for macOS included in the section titles for that section's equivalent instructions. Other Linux distributions will differ.

```
Note: sudo usage is implied for most commands requiring root.
```


[For Windows 10 Development: Linux Subsystem](https://docs.microsoft.com/en-us/windows/wsl/install-win10)

### Git

Git is the version control system used to manage the source code for this project as well pushing to both of the Git repositories on GitHub and Heroku.

#### [Installing Git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)

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

### [Install Node.js](https://nodejs.org/en/download/package-manager/#macos)

```
sudo apt install curl
curl -sL https://deb.nodesource.com/setup_8.x | sudo -E bash -
sudo apt-get install -y nodejs
sudo apt-get install -y build-essential
```

### [Install MongoDB 3.4](https://docs.mongodb.com/tutorials/install-mongodb-on-os-x/)

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

## Project File Structure
```
.
├── bin                         # The main entry point of the entire application
│   ├── www                     # The entry script run before hand off to the Express app.js
├── client                      # The entire React application.
│   ├── public                  # 
│   │   ├── index.html          # The page template.
│   │   ├── favicon.iso         # 
│   │   ├── manifest.json       # 
│   ├── src                     # React app main source code
│   │   ├── App.css             # 
│   │   ├── App.js              # 
│   │   ├── App.test            # 
│   │   ├── index.css           # 
│   │   ├── index.js            # React's JavaScript entry point
│   ├── .gitignore              # Files to not include when pushing with git.
│   ├── README.md               # The included creat-react-app documentation for React apps.
│   ├── package-lock.json       # Exact list and versions of dependencies generated by npm.
│   ├── package.json            # List of the packages and dependencies.
├── controllers                 # Get data from models to send to view for client.
├── models                      # The Mongoose models of our Mongo database.
├── routes                      # Routing for the Express server.
│   ├── index.js                # 
│   ├── users.js                # 
├── views                       # The views which will be removed later since we are using React.
│   ├── .pug                    # 
├── .gitignore                  # Files to not include when pushing with git.
├── README.md                   # Standard project readme instructions and information
├── app.js                      # The main entry point of the Express server
├── package.json                # List of the packages and dependencies.
├── package-lock.json           # Exact list and versions of dependencies generated by npm.

```

## Tutorials

These are the most up to date documentation and tutorials available and all that is needed for the purpose of this project.

* [Mozilla's Node.js and Express Tutorial (Skip view templates)](https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs)
* [React-Bootstrap Documentation](https://react-bootstrap.github.io/getting-started/introduction)
* [Create-React-App Documentation](https://github.com/facebook/create-react-app)
* [React Documentation](https://reactjs.org/docs/hello-world.html)
* [Express Documentation](http://expressjs.com/en/guide/routing.html)

## License

See the LICENSE file.

