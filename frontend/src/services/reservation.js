import http from "../http-common";
import { trackPromise } from 'react-promise-tracker';

class ReservationDataService {


  create(data){
      return http.post(`/reservations`,data);
  }

  get(data) {
    return http.get(`/reservations`,data);
  } 

 



}
export default new ReservationDataService();