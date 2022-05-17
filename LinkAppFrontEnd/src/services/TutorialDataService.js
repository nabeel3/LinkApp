import http from "../services/http-common";
class TutorialDataService {
  getAll() {
    return http.get("/posts");
  }
  get(id) {
    return http.get(`/post/${id}`);
  }
  create(data) {

    return http.post("/posts", data);
  }
  update(id, data) {
    return http.put(`/tutorials/${id}`, data);
  }
  delete(id) {
    return http.delete(`/tutorials/${id}`);
  }
  deleteAll() {
    return http.delete(`/tutorials`);
  }
  findByTitle(title) {
    return http.get(`/tutorials?title=${title}`);
  }
}
export default new TutorialDataService();