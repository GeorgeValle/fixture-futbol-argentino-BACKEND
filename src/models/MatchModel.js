import {Schema,model} from 'mongoose';

const matchSchema = new Schema({
    stadium:{
        type:String,
        default:""
    },
    local:{
        type:String,
        default:"local"
    },
    visitor:{
        type:String,
        default:"visitor"
    },
    name:{
        type:String,
        default:local+" vs "+visitor
    },
    gv:{
        type:Number,
        default:0
    },
    gl:{
        type:Number,
        default:0
    },
    date:{
        type:String,
        default:""
    },
    hour:{
        type:String,
        default:""
    },
    day:{
        type:String,
        default:""
    }

})

export default  model('match', matchSchema);