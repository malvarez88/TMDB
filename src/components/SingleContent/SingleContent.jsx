import * as React from 'react';
import './SingleContent.css'
import Badge from '@mui/material/Badge';
import ContentModal from '../ContentModal/ContenModal'

import { img_300, unavailable } from "../../config/config";

const SingleContent = ({
    id,
    poster,
    title,
    date,
    media_type,
    vote_average,
  }) => {
    return (
      <ContentModal media_type={media_type} id={id}>
        <Badge
          badgeContent={vote_average}
          color={vote_average > 6 ? "primary" : "secondary"}
        />
        <img
          className="poster"
          src={poster ? `${img_300}${poster}` : unavailable}
          alt={title}
        />
        <b className="title">{title}</b>
        <span className="subTitle">
          {media_type === "tv" ? "TV Series" : "Movie"}
          <span className="subTitle">{date}</span>
        </span>
      </ContentModal>
    );
  };
  
  export default SingleContent;
