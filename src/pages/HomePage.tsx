import NavBar from "../components/NavBar";
import SideBar from "../components/SideBar";
import Video, { video } from "../components/Video";
import {  videos } from "../data/videos";
import "../styles/HomePage.scss";

function HomePage() {
  return (
    <>
      <NavBar />
      <div className="homeContainer">
        <div className="videos">
          {videos.map((video: video) => {
            return (
              <Video
                key={video.id}
                title={video.title}
                description={video.description}
                channel={video.channel}
                duration={video.duration}
                published_at={video.published_at}
                id={video.id}
                thumbnail={video.thumbnail}
              />
            );
          })}
        </div>
        <SideBar />
      </div>
    </>
  );
}

export default HomePage;
