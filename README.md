# Notes & Bookmarks Backend API

This is a backend application providing a RESTful API for managing notes and bookmarks. It includes user authentication and operations such as save, delete, and mark as favorite.

## 🚀 Features

- 🔐 User Registration and Login (with authentication)
- 📝 Create, Retrieve, Update, Delete (CRUD) for Notes
- 🔖 Create, Retrieve, Update, Delete (CRUD) for Bookmarks
- ⭐ Mark Notes and Bookmarks as Favorite
- 📁 User-specific data handling

## 🛠️ Technologies Used

- Node.js
- Express.js
- MongoDB (Mongoose)
- JWT (JSON Web Token) for authentication
- bcrypt for password hashing
- dotenv for environment variables

## 📦 Installation

1. Clone the repository:

bash
git clone https://github.com/Ayush5139/DevInnovationsBackend.git
cd DevInnovationsBackend

2. Install dependencies:

npm install

3. Create a .env file in the root and add your environment variables:

MONGO_URI = mongodb+srv://aayushsachdev91:32HGz1ghKPChBplX@cluster0.2vavzd1.mongodb.net/

4. Run the server

npm start

## API Documentation – Notes & Bookmarks Backend

Base URL: http://yourdomain.com/

1. POST /register - To register a new user

Request Body:
            {
                "username": "ayush",
                "email": "ayush@example.com",
                "password": "securepassword"
            }

Response: 
        {
            "message": "User registered successfully"
        }

2. POST /login - To login with registered credentials

Request Body:
            {
                "email": "ayush@example.com",
                "password": "securepassword"
            }     

Response:

        {
            "msg": "User has logged in successfully",
            "token": token,
            "userID": (unique user id),
            "username": ayush,
        }


## 📝 Notes Endpoints

### 📥 POST `/addnote`

Create a new note.

#### Request Body:
```json
{
  "title": "My Note",
  "content": "This is a sample note."
}
```

#### Response:
```json
{ message: "Note Added" }
```

---

### 📤 GET `/getnotes/:id`

Fetch all notes of the logged-in user.

#### Response:
```json
All the notes by the user.
```

### ❌ DELETE `/deletenote/:id`

Delete a specific note.

#### Response:
```json
{
  "message": "Note deleted"
}
```

---

### ⭐ PATCH `/favnote/:id`

Toggle favorite status for a note.

#### Response:
```json
{
  "message": "Favorite status updated",
}

```

---

### ⭐ PATCH `/unfavnote/:id`

Toggle favorite status for a note.

#### Response:
```json
{
  "message": "Favorite status updated",
}

```

---

## 🔖 Bookmarks Endpoints

### 📥 POST `/addbookmark`

Save a new bookmark.

#### Request Body:
```json
{
  "title": "Google",
  "url": "https://google.com",
  "description": "Search Engine"
}
```

---

### 📤 GET `/getbookmarks/:id`

Fetch all bookmarks of the logged-in user.


### ❌ DELETE `/deletebookmark/:id`

Delete a bookmark.

#### Response:
```json
{
  "message": "Bookmark deleted"
}
```

---

### ⭐ PATCH `/favbookmark/:id`

Toggle favorite status for a bookmark.


#### Response:
```json
{
  "message": "Favorite status updated",
}

```

---

### ⭐ PATCH `/unfavbookmark/:id`

Toggle favorite status for a bookmark.


#### Response:
```json
{
  "message": "Favorite status updated",
}

```
