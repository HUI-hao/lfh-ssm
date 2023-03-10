import request from "@/api";

// 查询用户列表
export function listUser(query){
    return request({
        url: '/user',
        method: "get",
        params: query
    })
}

export function addUser(data){
    return request({
        url: '/user',
        method: "post",
        params: data
    })
}