import React, { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import TvShowCard from "../components/TvShowCard";

const Home = () => {
  const [tvShows, setTvShows] = useState([]);

  const loadTvShows = async () => {
    const response = await axios.get("http://localhost:5002/tvshows");

    setTvShows(response.data.data);
  };

  useEffect(() => {
    loadTvShows();
  }, []);

  return (
    <div>
      <h1>KidsFunMedia</h1>

      <div className="flex justify-evenly">
      {tvShows.map((tvshow, i) => {
        const { _id, title, channel, timing, thumbnail } = tvshow;

        return (
          <TvShowCard
            key={i}
            _id={_id}
            title={title}
            channel={channel}
            timing={timing}
            thumbnail={thumbnail}
          />
        );
      })}
      </div>
    </div>
  );
};

export default Home;
