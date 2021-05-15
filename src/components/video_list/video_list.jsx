import React from 'react';
import VideoItem from '../video_item/video_item';
import styles from  './video_list.module.css'

const VideoList = ({videos, onVideoClick, display}) => (
            <ul className={styles.videos}>
                {/* VideoItem컴포넌트에 video를 전달 */}
                {videos.map(video => (<VideoItem key={video.id} video={video} onVideoClick={onVideoClick} display={display}/>))}
            </ul>
    );

export default VideoList;