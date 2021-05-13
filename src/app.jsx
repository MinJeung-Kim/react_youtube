import { useEffect, useState } from 'react';
import './app.css'; 
import VideoList from './components/video_list/video_list';

function App() {
  // 1. 유튜브 데이터를 받아오기

  //video목록 저장 및 업데이트
  const [videos, setVideos] = useState([]);

  //마운트, 업데이트가 됐을때 콜백함수 호출
  //두번째 인자 [] => 업데이트 될때마다 통신 지양, 마운트가 되었을때 한번만 콜백 함수 호출되도록 설정
  useEffect(() => {
    //포스트맨 => javascript - Fetch(기본)
    const requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
    
    fetch("https://www.googleapis.com/youtube/v3/videos?key=AIzaSyD7fs3ZE22OJljZE6v0J9ZQrAyec1oL8lU&part=snippet&chart=mostPopular&maxResults=25&key=AIzaSyD7fs3ZE22OJljZE6v0J9ZQrAyec1oL8lU", requestOptions)
      .then(response => response.json())
      .then(result => setVideos(result.items))
      .catch(error => console.log('error', error));
  }, []);
  return <VideoList videos={videos} />;
}

export default App;
