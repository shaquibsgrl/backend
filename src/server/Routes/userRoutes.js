const {Router}=require("express");
const { getAllData ,addUser,updateUser,deleteUser} = require("../db/databaseConnector/userQueries");


const user=Router();

user.get("/",async(req,res)=>{
try {
    const user=await getAllData();
    res.send({message:"data is coming",data:user})
} catch (error) {
   console.log("something is wrong")
}

// res.send("maeiej")
});


user.post(`/`, async (req,res) => {
    try {
      const user = await addUser(req.body);
      res.send({message:"data is added",data:user})
      if (user.length) {
        res.status = 201;
        res.body = {
          status: 'success',
          data: user
        };
      } else {
        res.status = 400;
        res.body = {
          status: 'error',
          message: 'Something went wrong.'
        };
      }
    } catch (err) {
      console.log(err)
    }
  });


  user.put(`/update/:id`, async (req,res) => {
    try {
      const user = await updateUser(req.params.id, req.body);
      res.send({message:"data is updated",data:user})
      if (user.length) {
        res.status = 200;
        res.body = {
          status: 'success',
          data: user
        };
      } else {
        res.status = 404;
        res.body = {
          status: 'error',
          message: 'That movie does not exist.'
        };
      }
    } catch (err) {
      res.status = 400;
      res.body = {
        status: 'error',
        message: err.message || 'Sorry, an error has occurred.'
      };
    }
  });


  user.delete(`/delete/:id`, async (req,res) => {
    try {
      const user = await deleteUser(req.params.id);
      res.send({message:"data is deleted",data:user})
      if (user.length) {
        res.status = 200;
        res.body = {
          status: 'success',
          data: user
        };
      } else {
        res.status = 404;
        res.body = {
          status: 'error',
          message: 'That movie does not exist.'
        };
      }
    } catch (err) {
      res.status = 400;
      res.body = {
        status: 'error',
        message: err.message || 'Sorry, an error has occurred.'
      };
    }
  })






module.exports=user;