const errorHandler = (err,req,res,next)=>{
    const statusCode = res.statusCode ? res.statusCode : 500
    res.status(statusCode)
    res.json({
        message: err.message,
        stack:process.env.NODE_ENV === 'production' ? null  : err.stack 
        // stack key gives us more information about the error but only in development mode
    })
}

module.exports ={
    errorHandler
}