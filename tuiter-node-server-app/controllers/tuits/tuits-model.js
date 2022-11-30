import mongoose from 'mongoose';
import Tuitschema from './tuits-schema.js'

const tuitsModel = mongoose.model('TuitModel', Tuitschema)
export default tuitsModel;