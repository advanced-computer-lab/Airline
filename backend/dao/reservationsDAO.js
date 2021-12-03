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


  static async addReservation(data) {
    try {



      /*const ReservationDoc = { 
        DepartureFlight:{
          id: DepartureFlight1._id,
          FlightNumber: DepartureFlight1.FlightNumber,
          DepartureTime: DepartureFlight1.DepartureTime,
          ArrivalTime: DepartureFlight1.ArrivalTime,
          Date: DepartureFlight1.Date,
          DepartureAirport: DepartureFlight1.DepartureAirport,
          DestinationAirport: DepartureFlight1.DestinationAirport,
          TripDuration: DepartureFlight1.TripDuration,
          Price: DepartureFlight1.Price,
          BaggageAllowance: DepartureFlight1.BaggageAllowance

        },
        ReturnFlight:{
          id: ReturnFlight1._id,
          FlightNumber: ReturnFlight1.FlightNumber,
          DepartureTime: ReturnFlight1.DepartureTime,
          ArrivalTime: ReturnFlight1.ArrivalTime,
          Date: ReturnFlight1.Date,
          DepartureAirport: ReturnFlight1.DepartureAirport,
          DestinationAirport: ReturnFlight1.DestinationAirport,
          TripDuration: ReturnFlight1.TripDuration,
          Price: ReturnFlight1.Price,
          BaggageAllowance: ReturnFlight1.BaggageAllowance

        },
        User:{
          id: User1._id,
          firstname: User1.firstname,
          lastname: User1.lastname,
          passportnumber: User1.passportnumber,
          email: User1.email
        },

        CabinClass: Cabin,

        DepSeats: Depseats,

        RetSeats: retseats

        


    }*/

        //return {ReservationDoc}
      return await reservations.insertOne(data)
    } catch (e) {
      console.error(`Unable to add reservation: ${e}`)
      return { error: e }
    }
  }

}