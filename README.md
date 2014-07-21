## People App

This is a simple CRUD app using the MEAN stack. Stores people models with first name, last
name and email attributes.

### Setup

Firstly, make sure you have [NodeJS](http://nodejs.org/download/) and 
[MongoDB](http://www.mongodb.org/downloads) installed.

If you do not have bower on your machine run this command on the terminal

```npm install -g bower```

Setup your database by modifying line 11 in server.js

`mongoose.connect('mongodb://localhost/[db-name]')`

Finally, start the server by running `nodemon` and open index.html to see the app.

#### Seeding the DB

Run this command to seed the database with fake data

```mongoimport --db [db-name] --collection [collection-name] --jsonArray data/people.min.js```
