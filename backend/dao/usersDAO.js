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

  static async getUserByEmail(email){

    //setTimeout(() => {console.log("Email not found")}, 500);
    
    try{
      return await users.findOne({"email":email })
    }catch (e) {
      console.error(`Unable to get user, ${e}`)
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


  static async addUser(firstname=null,lastname=null,passportnumber=null, password, email) {
    try {
      const userDoc = { 
        firstname: firstname,
        lastname: lastname,
        passportnumber: passportnumber,
        password: password,
        email: email
    }

      return await users.insertOne(userDoc)
    } catch (e) {
      console.error(`Unable to add user: ${e}`)
      return { error: e }
    }
  }

  static async updateUser(id="", fname="", lname="", passnum="", email="") {
    try {

      
      

      const updateResponse = await users.updateOne(
        { _id: ObjectId(id)},
        { $set: { firstname:fname, lastname:lname, passportnumber:passnum, email: email } },
      )

      return updateResponse
    } catch (e) {
      console.error(`Unable to update user: ${e}`)
      return { error: e }
    }
  }

  static async getUserByID(id) {
    try {
      return await users.findOne( {"_id": new ObjectId(id)})
    } catch (e) {
      console.error(`Unable to get user, ${e}`)
    }
  }


}