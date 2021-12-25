import http from "../http-common";
import { trackPromise } from 'react-promise-tracker';

class UserDataService {
   
  authentication(data){
    
    return trackPromise(http.get(`/users/login`, data));
  }

  create(data) {
    return trackPromise(http.post("/users", data));
  }

  get(id) {
    return trackPromise(http.get(`/users/${id}`));
  }

  edit(id, data) {
    return trackPromise(http.put(`/users/${id}`, data));
  }


    login(user) {
      return trackPromise(http.get(`/${user.id}`));
    }



}
export default new UserDataService();