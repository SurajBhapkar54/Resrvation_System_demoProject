import ErrorHandler from "../middleware/error.js";
import { Reservation } from "../model/reservation.js";

const send_reservation = async (req, res, next) => {
const {firstName, lastName, email, date, time, phone}=req.body;
if(!firstName || !lastName || !email || !date || !time || !phone){
    return next(new ErrorHandler('Please fill the form properly', 400))
}
try{
    await Reservation.create({firstName, lastName, email, date, time, phone})
    res.status(201).json({
        success: true,
        message: 'Reservation sent successfully'
    })
}catch(err){
    if(err.name ==='validationError'){
        const validationErrors =Object.values(err.errors).map(err.message);
        return next(new ErrorHandler(validationErrors.join(','), 400))
    }
    return next(err)
}
};
export default send_reservation