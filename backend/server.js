import app from "./app.js"

app.listen(process.env.PORT,()=>{
    console.log(`Server has started at port ${process.env.PORT}`);
})