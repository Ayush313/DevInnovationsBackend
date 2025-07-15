const mongoose = require("mongoose")
const Schema = mongoose.Schema


const note = new Schema({
  userid: Schema.ObjectId,
  title: String,
  description: String,
  favouraite:Boolean
})

const noteModel = mongoose.model("Notes", note)

const bookmark = new Schema({
  userid: Schema.ObjectId,
  url: String,
  title: String,
  description: String,
  favouraite:Boolean
})

const bookmarkModel = mongoose.model("Bookmarks", bookmark)

const signupSchema = new Schema({
  email: String,
  username: String,
  password: String
})

const signupModel = mongoose.model('signUp', signupSchema)

module.exports = { noteModel, bookmarkModel,signupModel }