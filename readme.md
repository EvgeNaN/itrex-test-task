# Stack & Key-Value in-memory storage

## How to install dependencies:
Run **npm i** from cli

## How to run tests:
Run **npm test** from cli

## How to run:
Run **npm start** from cli

# Project Structure

**api** folder contains controllers and middlewares
**services** folder contains implementation of requested services

All custom errors are thrown using HttpError instances (models/errors/http)

# API structure

Server runs at port 3333 by default (can be changed in .env file)

## Stack

Use **GET /stack** to get top value from stack.
Use **POST /stack** to put value to stack. **value** is required.

## Key-Value

Use **GET /key-value** to get top value from key-value store. **key** is required query parameter.
Use **POST /key-value** to put value to key-value store. **key** and **value** are required.
Use **DELETE /key-value?key=value** to put value to key-value store. **key** is required query parameter.

You can find **ITRex.postman_collection.json** in root. This is exported postman collection you can use.
