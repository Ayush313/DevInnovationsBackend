const { addNote, addBookmark, getNotes, deleteNote, getBookmarks, deleteBookmark, register, logIn, favNote, favBookmark, unfavNote, unfavBookmark } = require("../Controller/User")


const route = require("express").Router()

route.post("/addnote",addNote)
route.post("/addbookmark",addBookmark)
route.get("/getnotes/:id",getNotes)
route.get("/getbookmarks/:id",getBookmarks)
route.delete("/deletenote/:id",deleteNote)
route.delete("/deletebookmark/:id",deleteBookmark)
route.post("/register",register)
route.post("/login",logIn)
route.put("/favnote/:id",favNote)
route.put("/unfavnote/:id",unfavNote)
route.put("/favbookmark/:id",favBookmark)
route.put("/unfavbookmark/:id",unfavBookmark)



module.exports={route}