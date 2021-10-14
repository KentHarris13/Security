const bcrypt = require('bcrypt');
const users = []

module.exports = {
    login: (req, res) => {
      console.log('Logging In User')
      console.log(req.body)
      const { username, password } = req.body
      for (let i = 0; i < users.length; i++) {
        if (users[i].username === username) {

          const authenticated = bcrypt.compareSync(password, users[i].pinHash)
          if (authenticated){
            const returnedPerson = {...users[i]}
            delete returnedPerson.pinHash
            res.status(200).send(returnedPerson)
            console.log("Yeet my boi")
            return
          }
        }    
        
      }
      res.status(400).send("User not found.")
    },
    register: (req, res) => {
        const {username, email, firstName, lastName, password} = req.body
        for (let i = 0; i < users.length; i++) {
          let existing = bcrypt.compareSync(email)
          
          if (existing){
              users[i].message.push(message)
              let messagesToReturn = {...users[i]}
              delete messagesToReturn.pinHash
              res.status(200).send(messagesToReturn)
              return
          }    
      }
      
      let salt = bcrypt.genSaltSync(5)
      const pinHash = bcrypt.hashSync(password, salt)
      console.log(password, pinHash)
      const person = {
        username,
        email,
        firstName,
        lastName,
        pinHash
      }
        
        console.log('Registering User')
        console.log(req.body)
        users.push(person)
        const returnedPerson = {...person}
        delete returnedPerson.pinHash
        res.status(200).send(returnedPerson)
        return
    }

  
}