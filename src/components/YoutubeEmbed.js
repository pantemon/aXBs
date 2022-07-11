import React from "react";
import PropTypes from "prop-types";

import "./YoutubeEmbed.css";

const YoutubeEmbed = ({ embedId, className }) => (
  <div className={`video-responsive ${className}`} >
    <iframe
      width="640"
      height="360"
      src={`https://www.youtube.com/embed/${embedId}`}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="Embedded youtube"
    />
  </div>
);

YoutubeEmbed.propTypes = {
  embedId: PropTypes.string.isRequired
};

export default YoutubeEmbed;
