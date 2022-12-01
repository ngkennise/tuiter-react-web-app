import mongoose from 'mongoose';
const Tuitschema = mongoose.Schema({
                                   tuit: String,
                                   likes: Number,
                                   liked: Boolean,
    dislikes: Number,
    disliked: Boolean,
                               }, {collection: 'tuits'});
export default Tuitschema;