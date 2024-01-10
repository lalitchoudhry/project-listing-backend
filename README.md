
# Project-listing-plateform

This is the plateform for user to listing their projects and start-up ideas for getting feedback about their ideas. Users can also can comment, like and vote to the Projects that are listing there without logging. The user who is posting their project have to first sign up or log in.

#### Live: https://project-listing-chi.vercel.app/

This is Fullstack app where I used Reactjs as frontend and for backend I used Node.js and Express.js and implement API for all requirements end points like login, register, get-product, post-product and all the CRUD options in it and MongoDB as a database.
## Features

- Sign up / Sign in
- Authorization
- Filters
- Post Product
- Update Product
- Responsive


## Tech Stack

**Client:** Reactjs

**Server:** Node, Express, MongoDB


## API Reference

### Server
```http
project-listing-backend.vercel.app
```

#### Get all items

```http
  GET /api/product
```

#### Get item

```http
  GET /api/items/${id}
```
#### Post item

```http
  POST /api/item
```
#### Update item

```http
  PUT /api/item/${id}
```

### User Authentication
#### Register User

```http
  POST /api/register
```
#### Login User

```http
  POST /api/login
```
## Author

[@lalitchoudhry](https://www.github.com/lalitchoudhry)

