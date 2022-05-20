import http from "../services/http-common";
class TaglDataService {
  getAll() {
      console.log('tagss')
    return http.get("/tags");
  }
  get(id) {
    return http.get(`/tag/${id}`);
  }
  create(data) {
    return http.post("/tags", data);
  }
  update(id, data) {
    return http.put(`/tag/${id}`, data);
  }
  delete(id) {
    return http.delete(`/tag/${id}`);
  }
  deleteAll() {
    return http.delete(`/tag`);
  }
  findByTitle(title) {
    return http.get(`/tag?title=${title}`);
  }
}
export default new TaglDataService();