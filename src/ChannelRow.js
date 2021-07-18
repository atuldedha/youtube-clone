import { Avatar } from '@material-ui/core'
import React from 'react'
import './ChannelRow.css'
import VerifiedUserOutlinedIcon from '@material-ui/icons/VerifiedUserOutlined';

const ChannelRow = ({image, channel, verified, subs, noOfVideos, description}) => {
    return (
        <div className = "channelrow">
            <Avatar className = "channelrow__logo" alt = {channel} src = {image} />
            <div className="channelrow__text">
                <h4>
                    {channel} {verified && <VerifiedUserOutlinedIcon /> }
                </h4>
                <p>
                    {subs} = {noOfVideos} videos    
                </p>     

                <p>
                    {description}
                </p>
            </div>           
        </div>
    )
}

export default ChannelRow
