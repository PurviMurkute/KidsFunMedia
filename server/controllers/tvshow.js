import TvShow from "../models/TvShow.js";

const getTvShow = async (req, res) => {

    const tvShow = await TvShow.find();

    res.status(201).json({
        success: true,
        data: tvShow,
        message: "All shows fetched successfully"
    })
}

const postTvShow = async (req, res) => {
    const {title, channel, timing, thumbnail} = req.body;

    const newShow = new TvShow({
        title,
        channel,
        timing,
        thumbnail
    }
)
    const savedTvShow = await newShow.save();

    res.status(201).json({
        success: true,
        data: savedTvShow,
        message: "New show added successfully"
    })

}

export {
    getTvShow,
    postTvShow
}