import React from 'react';

const YoutubeItem = ({ youtube }) => {
  return (
    <li>
      <a
        href={`https://www.youtube.com/watch?v=${youtube.id.videoId}`}
        target="_blank"
        rel="noreferrer"
      >
        <img
          src={youtube.snippet.thumbnails.medium.url}
          alt={youtube.snippet.title}
        />
        <span>{youtube.snippet.title}</span>
      </a>
    </li>
  );
};
const YoutubeCont = ({ youtubes }) => {
  return (
    <div className="youtube__cont container dream">
      <ul>
        {youtubes.map((youtube, index) => (
          <YoutubeItem key={index} youtube={youtube} />
        ))}
      </ul>
    </div>
  );
};

export default YoutubeCont;
