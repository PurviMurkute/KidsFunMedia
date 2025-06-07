import React, { useState } from "react";
import { AlarmClockPlus, TvMinimalPlay } from "lucide-react";
import Button from "./Button";
import axios from "axios";
import toast from "react-hot-toast";
import Modal from "./Modal";

const TvShowCard = ({
  _id,
  title,
  channel,
  timing,
  thumbnail,
  loadTvShows,
}) => {
  const [isCondirmationOpen, setIsConfirmationOpen] = useState(false);

  const deleteShows = async () => {
    try {
      const response = await axios.delete(
        `${import.meta.env.VITE_API_KEY}/tvshow/${_id}`
      );
      if (response.data.success) {
        toast.success(response.data.message);
        loadTvShows();
      } else {
        toast.error(response.data.message);
      }
    } catch (e) {
      toast.error(e.response.data.message);
    }
  };

  return (
    <div className="bg-white m-2 p-4 rounded-lg shadow-xl relative">
      <h2 className="text-2xl font-bold text-sky-700 py-2">{title}</h2>
      <img
        src={thumbnail}
        alt="tvshow-img"
        className="rounded-xl w-[300px] block mx-auto object-contain py-2"
      />
      <h3 className="text-xl text-sky-700 font-medium py-2">
        <TvMinimalPlay color="#1b4164" className="inline me-1" /> {channel}
      </h3>
      <p>
        <AlarmClockPlus color="#1b4164" className="inline me-1" />
        {timing}
      </p>
      <Button
        variant={"secondary"}
        size={"sm"}
        btnPosition={"rightbottom"}
        btnText={"delete"}
        onClick={() => {
          setIsConfirmationOpen(true);
        }}
      />

      <Modal
        isOpen={isCondirmationOpen}
        onClose={() => {
          setIsConfirmationOpen(false);
        }}
      >
        <>
          <h3>Are You Sure you want to delete this Tv Show?</h3>
          <div className="flex justify-evenly">
          <Button
            variant={"primary"}
            size={"md"}
            btnText={"Cancel"}
            onClick={() => {
              setIsConfirmationOpen(false);
            }}
          />
          <Button
            variant={"secondary"}
            size={"md"}
            btnText={"delete"}
            onClick={() => {
              deleteShows();
            }}
          />
          </div>
        </>
      </Modal>
    </div>
  );
};

export default TvShowCard;
