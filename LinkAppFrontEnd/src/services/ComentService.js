import http from "../services/http-common";
class ComentService {

  createComent(data) {
    return http.post("/comment/store", data);
  }
  createReply(data) {
    return http.post("/reply/store", data);
  }


}
export default new ComentService();