import http from "../http-common";

class ReservationDataService {


  create(data){
      return http.post(`/reservations`,data);
  }

  get() {
    return http.get(`/users`);
  }

 



}
export default new ReservationDataService();