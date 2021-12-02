import UsersDAO from "../dao/usersDAO.js"
import jwt from "jsonwebtoken"

export default class UsersController {
  static async apiGetUsers(req, res, next) {

    const usersList  = await UsersDAO.getUsers()

    let response = {
      users: usersList,
    }
    res.json(response)
  }

  static async apiAuthentication(req,res){
    const user = await UsersDAO.getUserByEmail(req.body.email)
    if (user == null) {
      return { status: 'error', error: 'Invalid login' }
    }
  
    /*const isPasswordValid = await bcrypt.compare(
      req.body.Password,
      user.Password)*/

      const isPasswordValid = req.body.password == (user.password);
  
    if (isPasswordValid) {
      const token = jwt.sign(
        {
          name: user.name,
          email: user.email,
        },
        'secret123'
      )
  
      return res.json({ status: 'ok', user: user })
    } else {
      return res.json({ status: 'error', user: false })
    }
  }

  static async apiPostUser(req, res, next) {
    try {
      const id = req.params.id
      const fname = req.body.firstname
      const lname = req.body.lastname
      const passnum = req.body.passportnumber
      const password = req.body.password
      const email = req.body.email
      

      const UserResponse = await UsersDAO.addUser(id ,fname, lname, passnum, password, email)
      res.json({ status: "success" })
    } catch (e) {
      console.log(e)
      res.status(500).json({ error: e.message })
    }
  }

  static async apiUpdateUser(req, res, next) {
    try {
      const Id = req.params.id
      const fname = req.body.firstname
      const lname = req.body.lastname
      const passnum = req.body.passportnumber
      const email = req.body.email
      
      const reviewResponse = await UsersDAO.updateUser(Id, fname, lname, passnum, email)
      var { error } = reviewResponse
      if (error) {
        res.status(400).json({ error })
      }

      if (reviewResponse.modifiedCount === 0) {
        throw new Error(
          "unable to update flight",
        )
      }

      res.json({ status: "success" })
    } catch (e) {
      res.status(500).json({ error: e.message })
    }
  }

  static async apiGetUserById(req, res, next) {
    try {
      let id = req.params.id || {}
      let user = await UsersDAO.getUserByID(id)
      if (!user) {
        res.status(404).json({ error: "User not found" })
        return
      }
      res.json(user)
    } catch (e) {
      console.log(`api, ${e}`)
      res.status(500).json({ error: e })
    }
  }

}