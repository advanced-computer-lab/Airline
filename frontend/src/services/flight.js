import http from "../http-common";
import { trackPromise } from 'react-promise-tracker';

class FlightDataService {
  getAll() {
    
    return trackPromise(http.get(`/flights`));
  }

  get(id) {
    return trackPromise(http.get(`/flights/${id}`));
  }

  find(query, by) {
    return trackPromise(http.get(`/flights?${by}=${query}`));
  } 

  findByParams(query){
    let url = `/flights?`;
    for (var key in query) {
      if (query.hasOwnProperty(key)) {
        if(query[key]){
         url += `${key}=${query[key]}&`;
        }
      }
    }
    return trackPromise(http.get(url));
  }

  createFlight(data) {
    return trackPromise(http.post("/flights", data));
  }

  updateFlight(id, data) {
    return trackPromise(http.put(`/flights/${id}`, data));
  }

  deleteFlight(id) {
    return trackPromise(http.delete(`/flights/${id}`));
  }

  authentication(email,password){
    return trackPromise(http.get(`/users/login/${email}/${password}`));
  }

  


}

export default new FlightDataService();