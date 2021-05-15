import React from 'react';
import styles from './video_item.module.css';

/* 
> deconstructiong
     props.video === video
     props.video.snippet === {video: {snippet}}
*/
const VideoItem = ({video, video: {snippet}, onVideoClick, display}) => {
    // displayType에 따라서 클래스를 다르게 사용
    const displayType = display === 'list' ? styles.list : styles.grid;

    return (
    // 개발자도구(F12) => Components Tab => 값 확인 
         <li className={`${styles.container} ${displayType}`} onClick={() => onVideoClick(video)}>
             <div className={styles.video}>
                 {/* 이미지 출력 */}
                <img className={styles.thumbnail} src={snippet.thumbnails.medium.url} alt="video thumbnail" />
                <div className={styles.metadata}>
                    <p className={styles.title}>{snippet.title}</p>
                    <p className={styles.channel}>{snippet.channelTitle}</p>
                </div>
             </div> 
         </li>
    )};

export default VideoItem;