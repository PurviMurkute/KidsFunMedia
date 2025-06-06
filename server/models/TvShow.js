import {model, Schema} from 'mongoose';

const tvShowSchema = new Schema({
    title: String,
    channel: String,
    timing: String,
    thumbnail: String
});

const TvShow = model('TvShow', tvShowSchema);

export default TvShow;