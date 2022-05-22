import http from "./http-common";
class CommentService {

  createcomment(data) {
    return http.post("/comment/store", data);
  }
  createReply(data) {
    return http.post("/reply/store", data);
  }


}
export default new CommentService();