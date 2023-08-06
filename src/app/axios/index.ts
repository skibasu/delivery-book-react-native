import axios from "axios"
import { Platform } from "react-native"
//import { BASE_IOS_URL, BASE_ANDROID_URL } from "@env"

const instance: any = axios.create({
    baseURL: "http://46.41.141.83:3000", //Platform.OS === 'ios' ? BASE_IOS_URL : BASE_ANDROID_URL,
})

export default instance
