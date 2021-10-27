/**
 *  登录接口
 */

 export function infoList(data) {
    return service.request({
        url:"/login/",
        method: "post",
        data, // 请求类型为 post时
    })
}

/**
 *  登录接口
 */

 export function infoDetailed(data) {
    return service.request({
        url:"/login/",
        method: "post",
        data, // 请求类型为 post时
    })
}