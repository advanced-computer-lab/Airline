import UsersDAO from "../dao/usersDAO.js"

export default class UsersController {
  static async apiGetUsers(req, res, next) {

    const usersList  = await UsersDAO.getUsers()

    let response = {
      users: usersList,
    }
    res.json(response)
  }

  static async apiPostUser(req, res, next) {
    try {
      const Name = req.body.Name
      const Password = req.body.Password
      

      const UserResponse = await UsersDAO.addUser(Name, Password)
      res.json({ status: "success" })
    } catch (e) {
      console.log(e)
      res.status(500).json({ error: e.message })
    }
  }

}