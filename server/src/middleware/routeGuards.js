exports.isAuth = (req, res, next) => {
    if(req.user){
        next();
    } else {
        res.status(401).json({ message: 'You are not authorized!' });
    }
};

exports.isOwner = (req, res, next) => {
    if(!req.user) {
        res.status(401).json({ message: 'You are not authorized!' });
    } else if (req.user._id == res.locals.item.ownerId){
        next();
    } else {
        res.status(403).json({ message: 'You are not authorized to modify this data!' });
    }
};