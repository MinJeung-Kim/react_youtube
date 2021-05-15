import { useEffect, useState } from 'react';
import styles from './app.module.css'; 
import SearchHeader from './components/search_header/search_header';
import VideoList from './components/video_list/video_list';

function App({youtube}) {
  // 1. 유튜브 데이터를 받아오기

  //video목록 저장 및 업데이트
  const [videos, setVideos] = useState([]);

  const search = (query) => {
    youtube.search(query)
    .then(videos => setVideos(videos));
  }

  //마운트, 업데이트가 됐을때 콜백함수 호출
  //두번째 인자 [] => 업데이트 될때마다 통신 지양, 마운트가 되었을때 한번만 콜백 함수 호출되도록 설정
  useEffect(() => {
    youtube
    .mostPopular()
    .then(videos => setVideos(videos));
  }, []);
  return (
    <div className={styles.app}>
      <SearchHeader onSearch={search}/>
      <VideoList videos={videos} />
    </div>
  );
}

export default App;
