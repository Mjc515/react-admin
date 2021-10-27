import service from "../../src/utils/request";

/**
 *  登录接口
 */

export function Login(data) {
    return service.request({
        url:"/login/",
        method: "post",
        data, // 请求类型为 post时
    })
}

/**
 *  获得验证码
 */

 export function GetCode(data) {
    return service.request({
        url:"/getSms/",
        method: "post",
        data, // 请求类型为 post时
    })
}