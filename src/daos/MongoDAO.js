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

    updateByIdDAO = async (obj,id) =>{
        try {
            //let idInt = parseInt(idBack);
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

}



export {MongoDAO}