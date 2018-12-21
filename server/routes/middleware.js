const jwt =require('jsonwebtoken');

module.exports = (req, res, next) => {
    //if we use jwt.decode we will just decode it but we wont know if its valid
    try {
        //we send him in a header with value Bearer xxxxxxxxxxxxx
        const token = req.headers.authorization.split(" ")[1];
        const decoded = jwt.verify(token, 'MySuperDooperSecretKey');
        req.userData = decoded;
        next();
    } catch {
        return res.status(401).json({
            message:'Authorization failed'
        });
    }
};