// import {logInfo, errorLogger} from '../utils/Logger.js'

//import mongoose from 'mongoose';

import './ConnectionDAOMongo.js';

class MongoDAO{
    constructor(options){
        this.collection= options
    }

    SaveDataDAO = async obj =>{
        try{
            let objDAO = await this.collection.create(obj);
            return objDAO

        }
        catch(err){
            console.log(err)
        }
    }

    getAllDAO = async ()=>{
        try {
            let objDAO = await this.collection.find({});
            return objDAO;
        }
        catch(err) {
            console.log(err.message);
        }
    }

    findByIdDAO = async id =>{
        try {
            
            let objDAO = await this.collection.findById(id);
            if(objDAO[0] == undefined) throw new Error();
            return objDAO;
        } catch (err) {
            console.log(err.message);
        } 
    }

    findByFieldDA0 = async field =>{
        try{
            let objDAO = await this.collection.find(field)
            return objDAO
        }catch(err) {

        }
    }

    updateByIdDAO = async (obj,id) =>{
        try {
            let objDAO = await this.collection.findByIdAndUpdate(id, obj);
            return objDAO   
            
        } catch (err) {
            console.log(err.message);
        }  
    }
    

    deleteByIdDAO = async (id)=>{
        try {
            let objDAO = await this.collection.findByIdAndDelete(id);
            return objDAO
        } catch (err) {
            console.log(err.message);
        }  
    }



updateOneFieldById = async (id, fieldUpdate,)=>{
    try{

        //updates = have field update
        const updatedResult = await this.collection.findByIdAndUpdate(
            { _id: id },
            {
                fieldUpdate
            },
            {
                new: true
            }
        );
        console.log(updatedResult);

        // example ObjFind= {name: 'Jean-Luc Picard'}
        //let doc = await this.collection.findOne({ name: 'Jean-Luc Picard' });

        //doc.age = update.age;
        //await doc.save();


    }catch (err) {

    }
}

updateOneField = async (field, fieldUpdate,)=>{
    try{

        const res = await this.collection.findOneAndUpdate(field, fieldUpdate, {
            new: true,
        });
        //return modified field
        console.log(res);

    }catch (err) {

    }

}

incrementOneField = async (field, fieldUpdate) => {
    try{
        await this.collection.findOneAndUpdate( field, 
            //{'field' : dataFieldUpdate}
            {$inc : fieldUpdate}, 
            //{new: true} 
            );

    }catch(err){

    }
}

incrementOneFieldById = async (id, fieldUpdate) => {
    try{

        await Link.findByIdAndUpdate(
            id,
            // example: fieldUpdate ={ goals: { $inc: 1 } }
            fieldUpdate,
            //{new: true}
            );
    }catch(err){

    }
}



}
export {MongoDAO}