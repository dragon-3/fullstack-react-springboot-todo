import axios from "axios"

class TodoDataService {

    retriveAllTodos() {
        return axios.get("http://localhost:8082/all-todos");
    }

    retriveTodo(id) {
        return axios.get(`http://localhost:8082/all-todos/${id}`);
    }

    deleteTodo(id) {
        return axios.delete(`http://localhost:8082/all-todos/${id}`);
    }
}

export default new TodoDataService()