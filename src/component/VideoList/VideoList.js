import React from 'react';
import VideoItem from "../VideoItem/VideoItem";

const VideoList = ({videos, onVideoSelected}) => {

    const videoList = videos.map(video => {
        return <VideoItem video={video} onVideoSelected={onVideoSelected}/>
    })

    return(
        <div className={'ui relaxed divided list'}>
            {videoList}
        </div>
    )
}

export default VideoList;