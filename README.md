This repo contains solution for [Kaleyra](https://www.kaleyra.com/) Software developer challege hosted on [Hackerearth](https://www.hackerearth.com/challenges/hiring/kalyera-hiring-challenge-2019/).

---

### Problem Statement

Develop a responsive web application for Disaster Help. You are supposed to create a responsive web app which users will use in situations of a disaster or a natural calamity. Kalyera’s calling and messaging APIs provide fast routing of messages and voice data over slow networks with low latency. You are expected to use kalyera’s free APIs to implement calling and messaging services. This exercise is to build a disaster notification engine which uses both the messaging and calling APIs. The engine should have a simple rule based configuration which specifies the order and the number of attempts for messages and calling. The calling part of the solution should connect to 2 parties.

---
### Features Implemented
- Emergency Call and alert sending for non registered users.
- Registered users
    * Broadcast or individual message alert from contact list.
    * calling facility to any contact in contact list.

---

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