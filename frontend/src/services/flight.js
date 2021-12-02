import http from "../http-common";

class FlightDataService {
  getAll() {
    return http.get(`/flights`);
  }

  get(id) {
    return http.get(`/flights/${id}`);
  }

  find(query, by) {
    return http.get(`/flights?${by}=${query}`);
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
    return http.get(url);
  }

  createFlight(data) {
    return http.post("/flights", data);
  }

  updateFlight(id, data) {
    return http.put(`/flights/${id}`, data);
  }

  deleteFlight(id) {
    return http.delete(`/flights/${id}`);
  }

  authentication(email,password){
    return http.get(`/users/login/${email}/${password}`);
  }

  


}

export default new FlightDataService();