import { LOGIN } from 'src/types/api'
import axios from '../_axios'



export async function login(input: LOGIN) {

    try {
        const { data } = await axios.post('/auth/login', input)
        Promise.resolve(data)
    } catch (error) {
        Promise.reject(error)
    }
}


export async function signup(input: LOGIN) {

    try {
        const { data } = await axios.post('/auth/signup', input)
        Promise.resolve(data)
    } catch (error) {
        Promise.reject(error)
    }
}

export async function sendOtp() {

    try {
        const { data } = await axios.post('/auth/send-otp')
        Promise.resolve(data)
    } catch (error) {
        Promise.reject(error)
    }
}


export async function verifyOtp(otp: string) {

    try {
        const { data } = await axios.post('/auth/verify-otp', { otp })
        Promise.resolve(data)
    } catch (error) {
        Promise.reject(error)
    }
}