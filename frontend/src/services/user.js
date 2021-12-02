import http from "../http-common";

class UserDataService {
   
  authentication(data){
    
    return http.get(`/users/login`, data);
  }

  get(id) {
    return http.get(`/users/${id}`);
  }

  edit(id, data) {
    return http.put(`/users/${id}`, data);
  }


    login(user) {
      return http.get(`/${user.id}`);
    }



}
export default new UserDataService();