import React from 'react';
import VideosList from '../../../widjets/VideosList/videosList';

const VideosMain = () => {
    return (
        <div>
            <VideosList
                type="card"
                title={false}
                loadmore={true}
                start={0}
                amount={10}
            />
        </div>
    )
};

export default VideosMain;