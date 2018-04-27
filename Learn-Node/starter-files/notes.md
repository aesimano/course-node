# My notes on this course

## Setup

### Install node dependencies

```bash
npm install
```

### Local MongoDB install

Install MongoDB

```bash
brew update
brew install mongodb
```

Create the `/data/db` folder if it doesn't exist already and run Mongodb:

```bash
sudo mongod
```

Download MongoDB Compass and connect to the localhost/27017

### Run it

Try `npm start`. Verify no errors and go to `localhost:7777` and you should see "Hey! It works!"

## Environment Variables

Are stored in the `variables.env` file. This should not get checked-in and a different version should live on the server for production, etc.
