const app = require('../app');

const port = parseInt(process.env.PORT,10) || 8000;

app.set('port',port);


app.listen(port,()=>{
    console.log("Starting Server .....")
});
