import React, { Component } from 'react';

const VideoItem = (props) => (
    // 개발자도구(F12) => Components Tab => 값 확인
         <h1>{props.video.snippet.title}</h1>
    );

export default VideoItem;