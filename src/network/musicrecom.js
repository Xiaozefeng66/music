import {request} from './request'

 export function getnewsong(){
    return  request({
        url:'/personalized/newsong'
     })
 }
 export function getsonglist(){
    return request({
        url:'/personalized'
    })
}
export function gettoplist(){
    return request({
        url:'/top/list',
        params:{
            idx:1
        }
    })
}
export function getsearchhot(){
    return request({
        url:'/search/hot',
        
    })
}
export function getmusicurl(res){
    return request({
        url:'/song/url',
        params:{
            id:res
        }
    })
}
export function searchmusic(res){
    return request({
        url:'/search',
        params:{
            keywords:res
        }
    })
}
export function getdetails(res){
    return request({
        url:'/playlist/detail',
        params:{
            id:res
        }
    })
}
