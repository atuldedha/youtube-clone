import { Avatar } from '@material-ui/core'
import React from 'react'
import './VideoCard.css'
const VideoCard = ({image, title, channel, views, timestamp, channelImage}) => {
    return (
        <div className = "videocard">
            <img className = "videocard__thumbnail" src = {image} alt = "" />
            <div className="videocard__info">
                <Avatar className = "videocard__avatar" 
                    src = {channelImage}
                    alt = ""
                />
                <div className="videocard__text">
                    <h4>{title}</h4>
                    <p>{channel}</p>
                    <p>
                        {views} . {timestamp}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default VideoCard
