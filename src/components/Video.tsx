import React from "react";
import "../styles/Video.scss"
export interface channel{
    name:string;
    id:string;
    thumbnail:string;
}
export interface video{
    title:string;
    id:string;
    thumbnail:string;
    description:string;
    published_at:string;
    duration:string;
    channel:channel;
}
const Video = ({title,id,thumbnail,description,published_at,duration,channel}:video) => {
  return (
    <div className="video" key={id}>
      <div className="thumbnail">
      <img src={thumbnail} alt={`${title}-thumbnail`} />
      </div>

      <div className="vid_metadata">
        <img src={channel.thumbnail} alt="channel_avatar" />
        <div>
          <h5>{title}</h5>
          <h6>{channel.name}</h6>
          <p>{published_at}</p>
        </div>
      </div>
    </div>
  );
};

export default Video;
