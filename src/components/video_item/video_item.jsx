import React from 'react';
import styles from './video_item.module.css';

/* 
> deconstructiong
     props.video === video
     props.video.snippet === {video: {snippet}}
*/
const VideoItem = ({video: {snippet}}) => (
    // 개발자도구(F12) => Components Tab => 값 확인 
         <li className={styles.container}>
             <div className={styles.video}>
                 {/* 이미지 출력 */}
                <img className={styles.thumbnail} src={snippet.thumbnails.medium.url} alt="video thumbnail" />
                <div className={styles.metadata}>
                    <p className={styles.title}>{snippet.title}</p>
                    <p className={styles.channel}>{snippet.channelTitle}</p>
                </div>
             </div> 
         </li>
    );

export default VideoItem;