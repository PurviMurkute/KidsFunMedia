import React, { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import TvShowCard from "../components/TvShowCard";

const Home = () => {
  const [tvShows, setTvShows] = useState([]);

  const loadTvShows = async () => {
    const response = await axios.get(`${import.meta.env.VITE_API_KEY}/tvshows`);

    setTvShows(response.data.data);
  };

  useEffect(() => {
    loadTvShows();
  }, []);

  return (
    <div className="min-h-screen bg-sky-100">
      <h1 className="text-4xl font-bold text-sky-700 py-5 text-center">KidsFunMedia</h1>

      <div className="flex justify-center flex-wrap m-10">
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
