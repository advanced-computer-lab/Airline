import http from "../http-common";
import { trackPromise } from 'react-promise-tracker';

class ReservationDataService {

  getAll() {
    
    return trackPromise(http.get(`/reservations`));
  }

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

  deletenomail(resid){
    return trackPromise(http.delete(`/reservations/${resid}/nomail`)); 
  }

  update(id, data) {
    return trackPromise(http.put(`/reservations/${id}`, data));
  }

  mail(data){
    return trackPromise(http.post(`/reservations/mail`, data));
  }
 



}
export default new ReservationDataService();