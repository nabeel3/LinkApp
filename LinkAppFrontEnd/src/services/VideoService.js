import http from "../services/http-common";
class VideoDataService {
  getAll() {
    return http.get("/videos");
  }
  get(id) {
    return http.get(`/video/${id}`);
  }
  create(data) {
    return http.post("/videos", data);
  }
  update(id, data) {
    return http.put(`/video/${id}`, data);
  }
  delete(id) {
    return http.delete(`/video/${id}`);
  }
  deleteAll() {
    return http.delete(`/videos`);
  }
  findByTitle(title) {
    return http.get(`/videos?title=${title}`);
  }
}
export default new VideoDataService();