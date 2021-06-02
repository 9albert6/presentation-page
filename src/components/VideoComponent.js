import React from "react";
import PropTypes from "prop-types";

const VideoComponent = ({ embedId }) => (
  <div className="video-responsive">
    <iframe
      src={`https://player.vimeo.com/video/${embedId}`}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="My Daily"
    />
  </div>
);

VideoComponent.propTypes = {
  embedId: PropTypes.string.isRequired
};

export default VideoComponent;