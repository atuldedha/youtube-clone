import React from 'react'
import './SearchPage.css'
import TuneOutlinedIcon from '@material-ui/icons/TuneOutlined';
import VideoRow from './VideoRow'
import ChannelRow from './ChannelRow'

const SearchPage = () => {
    return (
        <div className= "searchpage">
            <div className="searchpage__filter">
                <TuneOutlinedIcon />
                <h2>filter</h2>
            </div>
            <hr />

            <ChannelRow 
                image = "https://thumbor.forbes.com/thumbor/fit-in/416x416/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5f47d4de7637290765bce495%2F0x0.jpg%3Fbackground%3D000000%26cropX1%3D1398%26cropX2%3D3908%26cropY1%3D594%26cropY2%3D3102"
                channel = "Death Note"
                verified
                subs = "660k"
                noOfVideos = {20}
                description = "Awesome Programming" 
            />

            <hr />

            <VideoRow 
                views = "1.04M"
                image = "https://thumbor.forbes.com/thumbor/fit-in/416x416/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5f47d4de7637290765bce495%2F0x0.jpg%3Fbackground%3D000000%26cropX1%3D1398%26cropX2%3D3908%26cropY1%3D594%26cropY2%3D3102"
                channel = "Death Note"
                timestamp = "just now"
                subs = "660k"
                title = "Death is coming"
                description = "Awesome Programming"
            />

        </div>
    )
}

export default SearchPage
