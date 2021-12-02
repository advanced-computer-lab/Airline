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


static async getReservations() {

    let cursor
    
    try {
      cursor = await reservations.find()
    } catch (e) {
      console.error(`Unable to issue find command, ${e}`)
      return { reserveList: [] }
    }


    try {
      const reserveList = await cursor.toArray()

      return { reserveList }
    } catch (e) {
      console.error(
        `Unable to convert cursor to array or problem counting documents, ${e}`,
      )
      return { ReservesList: []}
    }
  }


  static async addReservation(DepartureFlight, ReturnFlight, User, Cabin, Depseats, retseats) {
    try {



      const ReservationDoc = { 
        DepartureFlight:{
          id: DepartureFlight._id,
          FlightNumber: DepartureFlight.Fnumber,
          DepartureTime: DepartureFlight.deptime,
          ArrivalTime: DepartureFlight.arrtime,
          Date: DepartureFlight.date,
          DepartureAirport: DepartureFlight.depairport,
          DestinationAirport: DepartureFlight.destairport,
          TripDuration: DepartureFlight.tripdur,
          Price: DepartureFlight.price,
          BaggageAllowance: DepartureFlight.bagallwd

        },
        ReturnFlight:{
          id: ReturnFlight._id,
          FlightNumber: ReturnFlight.Fnumber,
          DepartureTime: ReturnFlight.deptime,
          ArrivalTime: ReturnFlight.arrtime,
          Date: ReturnFlight.date,
          DepartureAirport: ReturnFlight.depairport,
          DestinationAirport: ReturnFlight.destairport,
          TripDuration: ReturnFlight.tripdur,
          Price: ReturnFlight.price,
          BaggageAllowance: ReturnFlight.bagallwd

        },
        User:{
          id: User._id,
          firstname: User.firstname,
          lastname: User.lastname,
          passportnumber: User.passportnumber,
          email: User.email
        },

        CabinClass: Cabin,

        DepSeats: Depseats,

        RetSeats: retseats

        


    }

      return await reservations.insertOne(ReservationDoc)
    } catch (e) {
      console.error(`Unable to add flight: ${e}`)
      return { error: e }
    }
  }

}