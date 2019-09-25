module.exports = (err, req, res, next,) => {
    console.log(err);
    if(err.status){
        res.status(err.status).send(err.message);
    }else {
        res.status(500).send(err.message);
    }
};