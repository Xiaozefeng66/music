import axios from 'axios'
export function request(config){
    const install =axios.create({
        baseURL:'http://localhost:3000',
        timeout:10000
    })
    return install(config)
}