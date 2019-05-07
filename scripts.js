var compare = require('tsscmp')
const fs = require('fs')

module.exports = {
  signIn: function (user, pass){
  json = require(`./users/${user}.json`)
function check(user, pass) {
  var valid = true
  valid = compare(user, json.username) && valid
  valid = compare(pass, json.password) && valid
  return valid
}
return(check(user, pass))},
  signUp: function (username, password, backupEmail, clientId){
return(fs.writeFileSync(`./users/${clientId}.json`, `{
  "username": "${username}",
  "password": "${password}",
  "backupEmail": "${backupEmail}",
  "clientId": "${clientId}",
  "isBanned": "false",
  "isAdmin": "false",
  "coinBalance": "0"
}`))}
}
