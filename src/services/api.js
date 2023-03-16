import axios from 'axios'

const baseUrl = axios.create({
  baseURL: 'https://parallelum.com.br/fipe/api/v1/carros/marcas'
})

export default baseUrl;