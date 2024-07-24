const uploadPhotos = require('./utils.js')
const createUser = require('./utils.js')

module.exports = function handleProfileSignup() {
    try {
        photo = uploadPhotos()
        user = createUser()
        console.log(photo, user)
    } catch (error) {
        console.log("Signup system offline")
    }

}