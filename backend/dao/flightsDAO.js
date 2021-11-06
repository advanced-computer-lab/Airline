import mongodb from "mongodb"
const ObjectId = mongodb.ObjectID

let flights

export default class FlightsDAO {
  static async injectDB(conn) {
    if (flights) {
      return
    }
    try {
      flights = await conn.db(process.env.AIRLINE_NS).collection("flights")
    } catch (e) {
      console.error(`Unable to establish collection handles in userDAO: ${e}`)
    }
  }

  static async getFlights({filters = null}={}) {
    let query
    if (filters) {
      if ("FlightNumber" in filters) {
        query = { "FlightNumber": { $eq: filters["FlightNumber"] } }
      } else if ("DepartureTime" in filters) {
        query = { "DepartureTime": { $eq: filters["DepartureTime"] } }
      } else if ("ArrivalTime" in filters) {
        query = { "ArrivalTime": { $eq: filters["ArrivalTime"] } }
      } else if ("Date" in filters) {
        query = { "Date": { $eq: filters["Date"] } }
      } else if ("EconomySeats" in filters) {
        query = { "EconomySeats": { $eq: filters["EconomySeats"] } }
      } else if ("BusinessSeats" in filters) {
        query = { "BusinessSeats": { $eq: filters["BusinessSeats"] } }
      }  else if ("FirstSeats" in filters) {
        query = { "FirstSeats": { $eq: filters["FirstSeats"] } }
      }  else if ("Airport" in filters) {
        query = { "Airport": { $eq: filters["Airport"] } }
      }  

    }

    let cursor
    
    try {
      cursor = await flights
        .find(query)
    } catch (e) {
      console.error(`Unable to issue find command, ${e}`)
      return { flightsList: [], totalNumFlights: 0 }
    }


    try {
      const flightsList = await cursor.toArray()
      const totalNumFlights = await flights.countDocuments(query)

      return { flightsList, totalNumFlights }
    } catch (e) {
      console.error(
        `Unable to convert cursor to array or problem counting documents, ${e}`,
      )
      return { FlightsList: [], totalNumFlights: 0 }
    }
  }
  

  static async addFlight(Fnumber, deptime, arrtime, date, ecseats, bseats, fseats, airport) {
    try {
      const flightDoc = { 
        FlightNumber: Fnumber,
        DepartureTime: deptime,
        ArrivalTime: arrtime,
        Date: date,
        EconomySeats: ecseats,
        BusinessSeats: bseats,
        FirstSeats: fseats,
        Airport: airport
    }

      return await flights.insertOne(flightDoc)
    } catch (e) {
      console.error(`Unable to add flight: ${e}`)
      return { error: e }
    }
  }

  static async updateFlight(flightId, Fnumber=null, deptime=null, arrtime=null, date=null, ecseats=null, bseats=null, fseats=null, airport=null) {
    try {
      const updateResponse = await flights.updateOne(
        { _id: ObjectId(flightId)},
        { $set: { FlightNumber:Fnumber, DepartureTime:deptime, ArrivalTime:arrtime, Date: date,  EconomySeats:ecseats, BusinessSeats:bseats, FirstSeats:fseats, Airport:airport } },
      )

      return updateResponse
    } catch (e) {
      console.error(`Unable to update review: ${e}`)
      return { error: e }
    }
  }

  static async deleteFlight(flightId) {

    try {
      const deleteResponse = await flights.deleteOne({
        _id: ObjectId(flightId),
      })

      return deleteResponse
    } catch (e) {
      console.error(`Unable to delete review: ${e}`)
      return { error: e }
    }
  }

}