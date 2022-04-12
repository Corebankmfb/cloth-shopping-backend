import mongoose from "mongoose";

const clothSchema = mongoose.Schema(
    {
        name: {type: String},
        size: {type: String},
        price: {type: Number},
        refNo: {type: String},
        color: {type: String}

    },
    {
        timeStamps: true
    }
)

const Cloth = mongoose.model('Cloth', clothSchema)

export default Cloth