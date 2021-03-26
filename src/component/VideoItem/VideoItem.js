import React from 'react';
import Scroll from 'react-scroll';
import './VideoItem.css';

const VideoItem = ({video, onVideoSelected}) => {
    var scroll    = Scroll.animateScroll;
    const thumbnail = video.snippet.thumbnails.medium.url;
    const title = video.snippet.title;
    const id = video.id.videoId;
        return (
            <div className="video-item item"
                    onClick={() => {
                        onVideoSelected(video)
                        scroll.scrollToTop();
                    }}
                    key={id}>
                <img className="ui image"
                    src={thumbnail}
                    alt={title}/>
                <div className="content">
                    <div className="header" >{title}</div>
                </div>
            </div>
        );
}

export default VideoItem;