import http from "../http-common";
import { trackPromise } from 'react-promise-tracker';

class ReservationDataService {


  create(data){
      return trackPromise(http.post(`/reservations`,data));
  }

  get(userid) {
    return trackPromise(http.get(`/reservations/user/${userid}`));
  } 

  getByResId(resid) {
    return trackPromise(http.get(`/reservations/${resid}`));
  } 

  delete(resid){
    return trackPromise(http.delete(`/reservations/${resid}`)); 
  }

  update(id, data) {
    return trackPromise(http.put(`/reservations/${id}`, data));
  }
 



}
export default new ReservationDataService();