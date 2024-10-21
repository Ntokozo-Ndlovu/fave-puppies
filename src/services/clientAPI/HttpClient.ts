import axios, { AxiosPromise } from "axios"
import { NETWORK_CONFIG } from "config";

let host:string = NETWORK_CONFIG.HOST;
let port:number = NETWORK_CONFIG.PORT
let dns:string = NETWORK_CONFIG.DNS;
let BASE_API:string = NETWORK_CONFIG.BASE_API;

export function get<T>(uri:string):Promise<AxiosPromise<T>>{
    if(dns != '' && dns != undefined)
        return axios.get(`${dns}/${BASE_API}/${uri}`);
    return axios.get(`${host}:${port}/${BASE_API}/${uri}`);
}