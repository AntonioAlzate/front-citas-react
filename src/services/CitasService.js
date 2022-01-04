import axios from 'axios';
import HOST_API from './BaseURL';

export default class CitasService {
    constructor() {
        this.url = HOST_API + '/citasReactivas';
    }

    async citasList() {
        try {
            return await axios.get(this.url);
        } catch (error) {
            throw error;
        }
    }

    async citasListByIdPaciente(id) {
        try {
            return await axios.get(`${this.url}/${id}/byidPaciente`);
        } catch (error) {
            throw error;
        }
    }
}