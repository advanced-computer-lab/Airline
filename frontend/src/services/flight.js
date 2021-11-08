import http from "../http-common";

class FlightDataService {
  getAll() {
    return http.get(`/`);
  }

  get(id) {
    return http.get(`/${id}`);
  }

  find(query, by) {
    return http.get(`?${by}=${query}`);
  } 

  findByParams(query){
    let url = `?`;
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
    return http.post("/", data);
  }

  updateFlight(id, data) {
    return http.put(`/${id}`, data);
  }

  deleteFlight(id) {
    return http.delete(`/${id}`);
  }


}

export default new FlightDataService();