const jwt = require("jsonwebtoken");

async function verifyToken(req,res,next) {
    try{

        const userToken = req.headers['x-access-token'];
    if(!userToken) {
        return res.status(400).send({
            msg:'Please provide token to proceed'

        })
    }
    console.log(userToken);
    const decoded = await jwt.verify(userToken,'heyeyehehyhhyh');
    if(!decoded){
        return res.status(400).send({
            msg:'Invalid token'

        })

    }
    console.log(decoded);
    //req.userId = decoded.id;
    req._id= decoded.id;
    next();

    } catch(error) {
        return res.status(400).send({
            msg : 'Token is not correct',
            error
        })

    }
}
module.exports = verifyToken;
