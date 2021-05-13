import React from 'react';
import VideoItem from '../video_item/video_item';

const VideoList = (props) => (
            <ul>
                {/* VideoItem컴포넌트에 video를 전달 */}
                {props.videos.map(video => <VideoItem key={video.id} video={video} />)}
            </ul>
    );

export default VideoList;