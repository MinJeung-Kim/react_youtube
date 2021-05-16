import { useCallback, useEffect, useState } from 'react';
import styles from './app.module.css'; 
import SearchHeader from './components/search_header/search_header';
import VideoDetail from './components/video_detail/video_detail';
import VideoList from './components/video_list/video_list';

function App({youtube}) {
  // 1. 유튜브 데이터를 받아오기 
  // video목록 저장 및 업데이트
  const [videos, setVideos] = useState([]);

  // 2. 디테일 페이지 만들기
  // 선택한 video 업데이트
  const [selectedVideo, setSelectVideo] = useState(null);

  const selectVideo = (video) => {
    setSelectVideo(video);
  };

  const search = useCallback((query) => {
    youtube
    .search(query)
    .then(videos => {
      setVideos(videos);
      setSelectVideo(null);
    });
  }, [youtube]);

  //마운트, 업데이트가 됐을때 콜백함수 호출
  //두번째 인자 [] => 업데이트 될때마다 통신 지양, 마운트가 되었을때 한번만 콜백 함수 호출되도록 설정
  useEffect(() => {
    youtube
    .mostPopular()
    .then(videos => setVideos(videos));
  }, [youtube]);
  return (
    <div className={styles.app}>
      <SearchHeader onSearch={search}/>
      <section className={styles.content}>
      {/* 선택된 비디오가 있다면 VideoDetail 컴포넌트를 이용해서 video에 selected된 video전달. */}
        {selectedVideo && (
          <div className={styles.detail}>
            <VideoDetail video={selectedVideo} />
          </div>
        )}
        <div className={styles.list}>
                                      {/* selectVideo가 있다면 list로 보여주고 그게아니면 grid로 보여줌. */}
          <VideoList videos={videos} onVideoClick={selectVideo} display={selectVideo? 'list' : 'grid'} />
        </div>
      </section>
    </div>
  );
}

export default App;
