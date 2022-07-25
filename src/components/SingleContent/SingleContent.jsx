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


//https://api.themoviedb.org/3/movie/{movie_id}/images?api_key=<<api_key>>&language=en-US
//https://image.tmdb.org/t/p/w500/bvYjhsbxOBwpm8xLE5BhdA3a8CZ.jpg


// adult: false
// backdrop_path: "/pLOFQLeKQYsCzkYgsw9tg1cPuDG.jpg"
// genre_ids: (2) [28, 53]
// id: 725201
// media_type: "movie"
// original_language: "en"
// original_title: "The Gray Man"
// overview: "When the CIA's most skilled mercenary known as Court Gentry, aka Sierra Six, accidentally uncovers dark agency secrets, he becomes a primary target and is hunted around the world by psychopathic former colleague Lloyd Hansen and international assassins."
// popularity: 364.477
// poster_path: "/13r1DFhfL0qufFjXnrvWuh6qKqH.jpg"
// release_date: "2022-07-13"
// title: "The Gray Man"
// video: false
// vote_average: 6.795
// vote_count: 4