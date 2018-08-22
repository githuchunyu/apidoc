const HOST = ''

const API_SET_LOGIN = HOST + 'login'

const axios = async (url, type, params, callback) => {
    const res = await method[type]({ url, params })
    return res
}

export const GET_ROOM = async (params, callback) => {
    return await axios(API_GET_ROOM, 'get', params, callback)
}
