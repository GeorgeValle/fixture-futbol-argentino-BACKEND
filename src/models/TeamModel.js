import {Schema,model} from 'mongoose';

const teamSchema = new Schema({
    name:{
        type:String,
        required:true,
        unique: true
    },
    shield:{
        type:String,
        default:""
    },
    points:{
        type:Number,
        default:0
    },
    gamesPlayed:{
        type:Number,
        default:0
    },
    wins:{
        type:Number,
        default:0
    },
    losses:{
        type:Number,
        default:0
    },
    draws:{
        type:Number,
        default:0
    },
    goals:{
        type:Number,
        default:0
    },
    goalsAllowed:{
        type:Number,
        default:0
    },
    GoalDifference:{
        type:Number,
        default:0
    }
    


    
    

})

export default  model('team', teamSchema);