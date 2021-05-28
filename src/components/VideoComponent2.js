import React from 'react';
import PropTypes from "prop-types";
import YouTube from 'react-youtube';

class VideoComponent extends React.Component {
    constructor(props) {
        super(props);
        this.onClick = this.onClick.bind(this);
    }

    onClick(event) {
         event.target.pauseVideo();
    }
    render() {
        const opts= {
            height: '100%',
            width: '100%',
            top: 0,
            left: 0,
            position: 'absolute',
            playerVars: {
                    autoplay: 0
                },
        };
    
        return (
            <p className="video-responsive" id="video">
                <YouTube videoId={this.props.embedId} opts={opts} onReady={this.onClick}/>
            </p>
            );
    }
}

VideoComponent.propTypes = {
    embedId: PropTypes.string.isRequired
};
      
export default VideoComponent;