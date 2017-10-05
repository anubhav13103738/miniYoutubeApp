import React from 'react';
import VideoListItem from './videoListItem';
const VideoList = function (props) {
    const VideoItems = props.videos.map((video) => {
        return (
            <VideoListItem
                key={video.etag}
                onVideoSelect={props.onVideoSelect}
                video={video} />
        );
    });
    // const videos = props.videos;
    return (
        <ul className ="col-md-4 list-group">
            {VideoItems}
        </ul>
    );
};

export default VideoList;
