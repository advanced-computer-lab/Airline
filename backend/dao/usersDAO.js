import mongodb from "mongodb"
const ObjectId = mongodb.ObjectID

let users

export default class UsersDAO {
  static async injectDB(conn) {
    if (users) {
      return
    }
    try {
      users = await conn.db(process.env.AIRLINE_NS).collection("users")
    } catch (e) {
      console.error(`Unable to establish collection handles in userDAO: ${e}`)
    }
  }

  static async getUsers() {

    let cursor
    
    try {
      cursor = await users.find()
    } catch (e) {
      console.error(`Unable to issue find command, ${e}`)
      return { usersList: [] }
    }


    try {
      const usersList = await cursor.toArray()

      return { usersList }
    } catch (e) {
      console.error(
        `Unable to convert cursor to array or problem counting documents, ${e}`,
      )
      return { UsersList: []}
    }
  }


  static async addUser(name, password) {
    try {
      const userDoc = { 
        Name: name,
        Password: password
    }

      return await users.insertOne(userDoc)
    } catch (e) {
      console.error(`Unable to add user: ${e}`)
      return { error: e }
    }
  }
}