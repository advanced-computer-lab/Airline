import mongodb from "mongodb"
const ObjectId = mongodb.ObjectID

let reservations

export default class UsersDAO {
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


  static async addFlight(DepartureFlight,ReturnFlight,User) {
    try {



      const ReservationDoc = { 
        DepartureFlight:{
          FlightNumber: DepartureFlight.Fnumber,
          DepartureTime: DepartureFlight.deptime,
          ArrivalTime: DepartureFlight.arrtime,
          Date: DepartureFlight.date,
          DepartureAirport: DepartureFlight.depairport,
          DestinationAirport: DepartureFlight.destairport,
          TripDuration: DepartureFlight.tripdur,
          Price: DepartureFlight.price,
          BaggageAllowance: DepartureFlight.bagallwd,

        },
        ReturnFlight:{
          FlightNumber: Fnumber,
        DepartureTime: deptime,
        ArrivalTime: arrtime,
        Date: date,
        EconomySeats: ecseats,
        BusinessSeats: bseats,
        FirstSeats: fseats,
        DepartureAirport: depairport,
        DestinationAirport: destairport,
        TripDuration: tripdur,
        Price: price,
        BaggageAllowance: bagallwd,
        EconomyAvailable: ecseatsavlbl,
        BusinessAvailable: bseatsavlbl,
        FirstAvailable: fseatsavlbl,

        },
        


    }

      return await flights.insertOne(ReservationDoc)
    } catch (e) {
      console.error(`Unable to add flight: ${e}`)
      return { error: e }
    }
  }

}