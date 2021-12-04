import http from "../http-common";
import { trackPromise } from 'react-promise-tracker';

class ReservationDataService {


  create(data){
      return trackPromise(http.post(`/reservations`,data));
  }

  get(userid) {
    return trackPromise(http.get(`/reservations/${userid}`));
  } 

  delete(resid){
    return trackPromise(http.delete(`/reservations/${resid}`)); 
  }
 



}
export default new ReservationDataService();