import axios from "axios";

const axiosinstance=axios.create({
        baseURL:"http://192.168.100.43:3000/"
        // baseURL:"https://hubmainback.hubit.com.np"
})

export default axiosinstance