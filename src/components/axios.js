import axios from 'axios' ;

const instance = axios.create({
   baseURL: "https://dashboard-arpitnexuses.vercel.app"
}); 
export default instance;