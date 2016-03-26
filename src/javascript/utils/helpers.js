import axios from 'axios'

function getYoutubeSnippet(id, key){
  return axios.get(`https://www.googleapis.com/youtube/v3/videos?id=${id}&part=snippet&key=${key}`)
}

function getYoutubeStatistics(id, key){
  return axios.get(`https://www.googleapis.com/youtube/v3/videos?id=${id}&part=statistics&key=${key}`)
}

export default function getYoutubeInfo(id, key){
  return axios.all([getYoutubeSnippet(id, key), getYoutubeStatistics(id, key)])
    .then((arr) => ({info: arr[0].data.items[0].snippet, views: arr[1].data.items[0].statistics.viewCount}))
}
