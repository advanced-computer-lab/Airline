import mongodb from "mongodb"
const ObjectId = mongodb.ObjectID

let reservations

export default class ReservationsDAO {
  static async injectDB(conn) {
    if (reservations) {
      return
    }
    try {
      reservations = await conn.db(process.env.AIRLINE_NS).collection("reservations")
    } catch (e) {
      console.error(`Unable to establish collection handles in userDAO: ${e}`)
    }
  }




  static async addReservation(data) {
    try {

      return await reservations.insertOne(data)
    } catch (e) {
      console.error(`Unable to add reservation: ${e}`)
      return { error: e }
    }
  }

  static async getReservations(userid) {

    let cursor
    
    try {
      cursor = await reservations.find({"UserId":userid})
    } catch (e) {
      console.error(`Unable to issue find command, ${e}`)
      return { ReservationsList: [], totalNumReservations: 0 }
    }


    try {
      const ReservationsList = await cursor.toArray()
      const totalNumReservations = await reservations.countDocuments({"UserId":userid})

      return { ReservationsList, totalNumReservations }
    } catch (e) {
      console.error(
        `Unable to convert cursor to array or problem counting documents, ${e}`,
      )
      return { ReservationsList: [], totalNumReservations: 0 }
    }
  }

  static async getReservationByID(id) {
    try {
      return await reservations.findOne( {"_id": new ObjectId(id)})
    } catch (e) {
      console.error(`Unable to get reservation, ${e}`)
    }
  }

  static async deleteReservation(resId) {

    try {
      const deleteResponse = await reservations.deleteOne({
        _id: ObjectId(resId),
      })

      return deleteResponse
    } catch (e) {
      console.error(`Unable to cancel reservation: ${e}`)
      return { error: e }
    }
  }
  static async UpdateReservation(id, data){
    try{
      const updateResponse = await reservations.updateOne(
        { _id: ObjectId(id)},
        { $set:  { User:{
          id: data.id,
          firstname: data.firstname,
          lastname: data.lastname,
          passportnumber: data.passportnumber,
          email: data.email}
      }},)

      return updateResponse
    }
     catch (e) {
      console.error(`Unable to update reservation: ${e}`)
      return { error: e }
    }
    }
  

}