import axios from "axios";
const csrf = document
    .querySelector('meta[name="csrf-token"]')
    .getAttribute("content");

axios.defaults.baseURL = "http://127.0.0.1:8000/api";

if (csrf) {
    axios.defaults.headers.common["X-CSRF-TOKEN"] = csrf;
}
