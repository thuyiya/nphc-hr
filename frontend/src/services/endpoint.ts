import Config from "../config";
import { ENDPOINTS } from "../constants";

class EndpointService {
  public static BASE_URL = Config.base_url;

  query?: string;
  params?: string;

  constructor(query?: string, params?: string) {
    this.query = query;
    this.params = params;
  }

  get getEmployees() {
    return `${EndpointService.BASE_URL}/${ENDPOINTS.employees}`;
  }

  get uploadFiles() {
    return `${EndpointService.BASE_URL}/${ENDPOINTS.usersUpload}`;
  }

  get removeEmployees() {
    return `${EndpointService.BASE_URL}/${ENDPOINTS.employees}/${this.params}`;
  }
}

export default EndpointService;
