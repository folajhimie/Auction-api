const { verifyAccessToken, verifyRefreshToken } = require('../middleware/jwt-utils');


const requireAuth = (tokenType) => {
    return function (req, res, next) {
        const authHeader = req.headers.authorization
        console.log("bearer..", authHeader);

        if(authHeader){
            try{
                const token = authHeader.split(' ')[1];
                const bearer = authHeader.split(' ')[0];

                if(bearer.toLowerCase() != 'bearer' || !token) {
                    throw Err 
                }
            } catch(err) {
                return res.status(401).send({ status: false, message: 'Bearer Token Failed!'})
            }
        } else{
            return res.status(401).send({ status: false, message: 'Authorization header not found' })
        }

        try {
            let jwt;
            switch (tokenType) {
                case 'accesToken':
                    jwt = verifyAccessToken(token)
                    break;
                case 'refreshToken':
                    default:
                    jwt = verifyRefreshToken(token)
            }

            req.body.jwt = jwt;
            console.log("Cherish")
            next();
        } catch (error) {
            return res.status(401).send({ status: false,  message: 'Invalid token' })
        }
        console.log("mercy")
    }
   
}

module.exports = requireAuth;