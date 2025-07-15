const express = require("express")
const app = express()
const bcrpyt = require("bcryptjs")
const saltrounds = 10
const secretkey = "permsecret"
const jwt = require("jsonwebtoken")
const { noteModel, bookmarkModel, signupModel } = require("../database/model")

async function addNote(req, res) {
    const noteData = req.body
    const newObj = {
        userid: noteData.userId,
        title: noteData.title,
        description: noteData.content,
        favouraite: false
    }
    await noteModel.create(newObj)
    res.send({ message: "Note Added" })
}

async function addBookmark(req, res) {
    console.log(req.body)
    const bookmarkData = req.body
    const newObj = {
        userid: bookmarkData.userId,
        url: bookmarkData.url,
        title: bookmarkData.title,
        description: bookmarkData.note,
        favouraite: false
    }
    await bookmarkModel.create(newObj)
    console.log("1")
    res.send({ message: "Bookmark Added" })
}

async function getNotes(req, res) {
    const userrrID = req.params.id
    console.log(userrrID)
    const noteData = await noteModel.find({ userid: userrrID })
    res.send(noteData)
}

async function getBookmarks(req, res) {
    const userrrID = req.params.id
    const bookmarkData = await bookmarkModel.find({ userid: userrrID })
    res.send(bookmarkData)
}

async function deleteNote(req, res) {
    const noteID = req.params.id
    console.log(noteID)
    await noteModel.findOneAndDelete({ _id: noteID })
    res.send({message: "Note deleted"})
}

async function deleteBookmark(req, res) {
    const bookmarkId = req.params.id
    console.log(bookmarkId)
    await bookmarkModel.findOneAndDelete({ _id: bookmarkId })
    res.send({message: "Bookmark deleted"})
}

async function register(req, res) {
    const signUpData = req.body
    console.log(signUpData)
    const hashedpass = bcrpyt.hashSync(signUpData.password, saltrounds)
    console.log(hashedpass)
    const response = await signupModel.find()
    console.log(response)
    const newObj = {
        email: signUpData.email,
        username: signUpData.name,
        password: hashedpass
    }
    const matched = await signupModel.find({ email: signUpData.email })
    if (matched.length > 0) {
        console.log("0")
        res.send({ message: "Email Already Exists" })
    }
    else {
        await signupModel.create(newObj)
        console.log("1")
        res.send({ message: "User Registered" })
    }
}

const verify = (req, res, next) => {
    console.log("wibiewfb")
    const rewToken = req.header("Authorization")
    console.log(rewToken)
    const secretkey = "qwerty321"
    const vertoken = jwt.verify(rewToken, secretkey)
    next()
}

async function logIn(req, res) {
    const loginData = req.body
    console.log(req.body)
    const response = await signupModel.find({ email: loginData.email })
    console.log(response)
    const validate = bcrpyt.compareSync(loginData.password, response[0].password)
    console.log(validate)
    if (validate == true) {
        const token = jwt.sign(loginData, secretkey, { expiresIn: "2h" })
        let resp1 = {
            "msg": "User has logged in successfully",
            "token": token,
            "userID": response[0]._id,
            "username": response[0].username,
        }
        res.send(resp1)
    }
    else {
        res.send("invalid password")
    }
}

async function favNote(req, res) {
    const noteID = req.params.id
    console.log(noteID)
    await noteModel.findByIdAndUpdate({ _id: noteID },{ $set: { favouraite: true}})
    res.send({message: "Favorite status updated",})
}

async function unfavNote(req, res) {
    const noteID = req.params.id
    console.log(noteID)
    await noteModel.findByIdAndUpdate({ _id: noteID },{ $set: { favouraite: false}})
    res.send("unfav")
}

async function favBookmark(req, res) {
    const bookmarkId = req.params.id
    console.log(bookmarkId)
    await bookmarkModel.findByIdAndUpdate({ _id: bookmarkId},{ $set: { favouraite: true}})
    res.send({message: "Favorite status updated"})
}

async function unfavBookmark(req, res) {
    const bookmarkId = req.params.id
    console.log(bookmarkId)
    await bookmarkModel.findByIdAndUpdate({ _id: bookmarkId},{ $set: { favouraite: false}})
    res.send("fav")
}

module.exports = { addNote, addBookmark, getNotes, deleteNote, getBookmarks, deleteBookmark, register, logIn,favNote,favBookmark,unfavNote,unfavBookmark }

