# Techology stack Used

  - Back-end : NodeJS(v 10.15.3) , mongoDB(v 3.2.18)
  - Fron-End : HTML,JS,Bootstrap4

# Steps to run the application
### 1. extract the zip 

### 2. init DB
- start mongodb service
- run `bash db-script.sh`. This will insert one record to the collection (disaster-help-dev/users) with username *`user1`* , password *`user1`* and 2 emergency contacts(Replace it with valid phone numbers).
### 3.Start the server.
- Install dependencies -`npm i`
- Start the server - `npm start`
- server will start start at port 5000
- open `http://localhost:5000` to view app in browser.

>App doesn't have user add feature hence a mock user is inserted to DB using DB script.