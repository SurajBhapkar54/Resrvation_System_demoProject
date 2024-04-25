class ErrorHandler extends Error{
    constructor(message, statusCode){
        super(message);
        this.statusCode = statusCode || 500;

        return res.statusCode(err.statusCode).json({
            success:false,
            message:err.message
    })
    }
}
export default ErrorHandler