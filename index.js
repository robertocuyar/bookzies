const express = require('express');
const app = express();
const port = 5000;
 require('./routes/bookRoutes')(app);
app.get('/', (req, res)=> {
   res.send('Hello World!');
});
app.get("/example", (req, res)=>{
    res.send('This is an example.')
})
app.listen(port, ()=>{
   console.log(`Example app listening at http://localhost:${port}`);
});