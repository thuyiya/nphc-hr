import Config from "../config";
import { ENDPOINTS } from "../constants";

class EndpointService {
  public static BASE_URL = Config.base_url;

  query?: string;

  constructor(query?: string) {
    this.query = query;
  }

  get getEmployees() {
    return `${EndpointService.BASE_URL}/${ENDPOINTS.employees}`;
  }

  get uploadFiles() {
    return `${EndpointService.BASE_URL}/${ENDPOINTS.usersUpload}`;
  }
}

export default EndpointService;
