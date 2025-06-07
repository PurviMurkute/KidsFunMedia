import React, { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import TvShowCard from "../components/TvShowCard";
import Modal from "../components/Modal";
import Input from "../components/Input";
import Button from "../components/Button";

const Home = () => {
  const [tvShows, setTvShows] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [newShow, setNewShow] = useState({
    title: "",
    channel: "",
    timing: "",
    thumbnail: "",
  });

  const loadTvShows = async () => {
    const response = await axios.get(`${import.meta.env.VITE_API_KEY}/tvshows`);

    setTvShows(response.data.data);
  };

  const addTvShows = async () => {
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_KEY}/addshows`,
        {
          title: newShow.title,
          channel: newShow.channel,
          timing: newShow.timing,
          thumbnail: newShow.thumbnail,
        }
      );

      console.log(response.data.data);
      toast.success(response.data.message);
      loadTvShows();
      setIsModalOpen(false);
      setNewShow({
        title: "",
        channel: "",
        timing: "",
        thumbnail: "",
      });
    } catch (e) {
      toast.error(e.response.data.message);
    }
  };

  useEffect(() => {
    loadTvShows();
  }, []);

  return (
    <div className="min-h-screen bg-sky-100 relative">
      <h1 className="text-4xl font-bold text-white bg-sky-600 py-3 text-center">
        KidsFunMedia
      </h1>

      <div className="flex justify-center flex-wrap m-5">
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
              loadTvShows={loadTvShows}
            />
          );
        })}
      </div>
      <Button
        btnText={"Add New Show"}
        variant={"tertiary"}
        size={"lg"}
        btnPosition={"righttop"}
        onClick={() => {
          setIsModalOpen(true);
        }}
      />

      <Modal
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false);
        }}
      >
        <div>
          <h2 className="text-center font-bold text-sky-700 py-2">
            Add New TV Show
          </h2>
          <Input
            type="text"
            placeholder="title"
            value={newShow.title}
            onChange={(val) => {
              setNewShow({ ...newShow, title: val });
            }}
          />
          <Input
            type="text"
            placeholder="channel"
            value={newShow.channel}
            onChange={(val) => {
              setNewShow({ ...newShow, channel: val });
            }}
          />
          <Input
            type="text"
            placeholder="timing"
            value={newShow.timing}
            onChange={(val) => {
              setNewShow({ ...newShow, timing: val });
            }}
          />
          <Input
            type="text"
            placeholder="thumbnail"
            value={newShow.thumbnail}
            onChange={(val) => {
              setNewShow({ ...newShow, thumbnail: val });
            }}
          />
          {newShow.thumbnail ? (
            <img
              src={newShow.thumbnail}
              alt="tvshowimg"
              className="w-[350px] object-contain"
            />
          ) : null}
          <Button
            btnText={"Add"}
            variant={"primary"}
            size={"md"}
            btnPosition={"center"}
            onClick={() => {
              addTvShows();
            }}
          />
        </div>
      </Modal>
      <Toaster />
    </div>
  );
};

export default Home;
