const express = require("express"); 
const app = express();
const PORT = 5000;


app.get("/todo", (req,res)=> {
    res.status(200).json(res)
})




app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});
