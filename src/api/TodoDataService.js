import axios from "axios"

class TodoDataService {

    retriveAllTodos() {
        return axios.get("http://localhost:8082/all-todos");
    }
}

export default new TodoDataService()