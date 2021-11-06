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