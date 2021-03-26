import React, {useState, useEffect} from 'react';
import youtube from '../apis/youtube';
import SearchBar from './SearchBar';
import VideoList from './VideoList/VideoList';
import VideoDetail from '../component/VideoDetail/VideoDetail';
import './App.css';


const App = () =>{
    const [videos, setVideos] = useState([]);
    const [selectedVideo, setSelectedVideo] = useState(null);

    useEffect(() => {
        onTermSubmit('news worldwide')
    }, [])


    const onTermSubmit = async term =>{
        const response = await youtube.get('/search', {
            params: {
                q: term
            }
        })
        setVideos(response.data.items);
        setSelectedVideo(response.data.items[0]);
    }

    return(
        <div>
            <div className="ui container search">
                <SearchBar onTermSubmit={onTermSubmit}/>
            </div>
            <div className="video-area">
                <div className="detail">
                    <VideoDetail selectedvideo={selectedVideo}/>
                </div>
                <div className="lista">
                    <VideoList onVideoSelected={setSelectedVideo}
                               videos={videos}/>
                </div>
            </div>
        </div>
    );
}

export default App;
































