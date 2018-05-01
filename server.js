const app = require('express')();




app.use(require('./controller/routes/get'))

app.listen('3000', ()=>{
    console.log(`Listening to port 3000`);
})