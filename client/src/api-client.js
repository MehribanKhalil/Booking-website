import axios from "axios";
const API_BASE_URL = 'http://localhost:8000/api' || "";

export const register= async(formData)=>{
    try {
        const res = await axios.post(`${API_BASE_URL}/auth/register`, formData);
        if (res.status >= 200 && res.status < 300) {
          return res.data;
        } else {
          throw new Error("Registration failed");
        }
      } catch (error) {
        throw new Error("An error occurred during registration");
      }
}
