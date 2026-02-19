const jwt=require('jsonwebtoken');
const User = require('../models/User');

const protect = async (req,res,next)=>{
    let token;

    if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')){
        try{
            //Get the token from the header
            token=req.headers.authorization.split(' ')[1];

            //verify token
            const decoded=jwt.verify(token,process.env.JWT_SECRET);

            //get user from selected token and attached in request
            req.user = await User.findById(decoded.id).select('-password');

            next();
        }catch (error){
            console.error(error);
            res.status(401).json({
                success:false,
                message:'Not Authorized ,token failed'
            })
        }
    }
    if(!token){
        res.status(401).json({
            success:false,
            message:'Not Authorized, no token found'
        })
    }
}
module.exports = {protect}