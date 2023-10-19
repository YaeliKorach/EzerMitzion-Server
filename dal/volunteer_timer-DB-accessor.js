const db = require('../models/index')
const Volunteer_timer = db.volunteer_timer


class volunteer_timerDataAccessor
{  
   
    createVolunteer_timer=async(values)=>{
        const {volunteerId,day,partInDayId}=values;
        if (!volunteerId||!day||!partInDayId) {          
            return {status:400,result:{message: 'some field is required'}};
        }
        const volunteer_timer = await Volunteer_timer.create({
            volunteerId,day,partInDayId});
        if (volunteer_timer) 
        {
            return {status:201,result:volunteer_timer};
        } 
        else {
            return {status:400,result:{ message:'Invalid volunteer_timer data received'}};         
        }
    } 

    updateVolunteer_timer=async(id,values) =>{
        const {volunteerId,day,partInDayId} = values;

        if (!volunteerId||!day||!partInDayId) {
            return {status:400,result:{ message:'some field is required'}};
        }
        const volunteer_timer = await Volunteer_timer.update({
            volunteerId,day,partInDayId},{where:{id:id}});
            console.log(volunteer_timer);
        if (volunteer_timer) {
            return {status:201,result:{ volunteer_timer}};
        } 
        else {
            return {status:400,result:{ message:'Invalid Volunteer_timer data received'}};
        }
    } 

    // getVolunteer_timerById= async(id)=>{
    //     const volunteer_timer = await Volunteer_timer.findOne({where:{id:id}}) ; 
    //     if (!volunteer_timer) {           
    //         return null;
    //     }        
    //     return volunteer_timer;
    // }

    deleteVolunteer_timer=async(id) =>{
        if (!id) {
            return {status:400,result:{ message:'Volunteer_timer ID required'}};
        }      
        await Volunteer_timer.destroy({
            where: {
              id: id
            }
        });
        return {status:201,result:{ message:`Volunteer_timer  with ID ${id} deleted`}};
    } 

    getAllVolunteer_timerById=async(volunteerId) =>{
        const citys = await city.findAll({where:{volunteerId:volunteerId}})  
        if (!citys?.length) {           
            return {status:400,result:{message:'No Volunteer_timer found'}};
        }        
        return {status:201,result:citys}
    }
}
const volunteer_timeDataAccessor=new volunteer_timerDataAccessor();
module.exports=volunteer_timeDataAccessor;