import React from 'react';
import axios from 'axios';


export function getTweets(){
    return axios.get('https://itc-bootcamp-19-dot-charcha-dev.appspot.com/tweet/')
}
// export function deleteTweets(obj){
//     return axios.delete('https://itc-bootcamp-19-dot-charcha-dev.appspot.com/tweet/',obj)
// }
export function sendTweets(obj){
    return axios.post('https://itc-bootcamp-19-dot-charcha-dev.appspot.com/tweet/',{ tweet: {content: obj.content, userName: obj.userName, date: obj.date}})
}