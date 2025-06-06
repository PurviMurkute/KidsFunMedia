import TvShow from "../models/TvShow.js";

const getTvShow = async (req, res) => {
  const tvShow = await TvShow.find();

  res.status(200).json({
    success: true,
    data: tvShow,
    message: "All shows fetched successfully",
  });
};

const postTvShow = async (req, res) => {
  const { title, channel, timing, thumbnail } = req.body;

  const newShow = new TvShow({
    title,
    channel,
    timing,
    thumbnail,
  });
  const savedTvShow = await newShow.save();

  res.status(201).json({
    success: true,
    data: savedTvShow,
    message: "New show added successfully",
  });
};

const getTvShowsById = async (req, res) => {
  const { id } = req.params;

  try {
    const tvShowbyId = await TvShow.findOne({ _id: id }); //findById(id)

    if(!tvShowbyId){
        return res.status(404).json({
            success: false,
            data: null,
            message: "Tv Show not found"
        })
    }

    return res.status(200).json({
      success: true,
      data: tvShowbyId,
      message: "Tv show fetched successfully",
    });
  } catch (e) {
    return res.status(400).json({
      success: false,
      data: null,
      message: e.message,
    });
  }
};

const deleteTvShowbyId = async (req, res) => {
  const { id } = req.params;

  try {
    await TvShow.deleteOne({ _id: id }); //findByIdAndDelete(id)

    return res.status(200).json({
      success: true,
      message: "Tv show deleted successfully",
    });
  } catch (e) {
    res.status(400).json({
      success: false,
      message: e.message,
    });
  }
};

export { getTvShow, postTvShow, getTvShowsById, deleteTvShowbyId };
