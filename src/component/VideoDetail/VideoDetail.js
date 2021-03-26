import React from 'react';

const VideoDetail = ({selectedvideo}) => {
    const description = selectedvideo ? selectedvideo.snippet.description : 'Loading...';
    const title = selectedvideo ? selectedvideo.snippet.title : 'Loading...';
    const videoSrc = `https://www.youtube.com/embed/${selectedvideo ? selectedvideo.id.videoId : ''}`;
    return(
        <div>
            <div className="ui embed">
                <iframe src={videoSrc}
                        title={title}/>
            </div>
            <div className="ui segment">
                <h4 className="header">{title}</h4>
                <p className="content">{description}</p>
            </div>
        </div>
    );
}

export default VideoDetail;
