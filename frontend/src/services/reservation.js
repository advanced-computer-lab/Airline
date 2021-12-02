import http from "../http-common";

class ReservationDataService {


  create(data){
      return http.post(`/reservations`,data);
  }

  get() {
    return http.get(`/reservations`);
  }

 



}
export default new ReservationDataService();