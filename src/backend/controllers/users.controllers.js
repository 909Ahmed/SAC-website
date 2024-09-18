const asyncHandler = require("express-async-handler");
const { User } = require("../models/user");
const { deleteCouncilByUser_Id } = require("./councils.controllers");
const { deleteMembershipByUser_Id } = require("./memberships.controllers");
const { deleteThreadByUser_Id } = require("./threads.controllers");
const { deleteCommentByUser_Id } = require("./comments.controllers");

var bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');
const JWT_SECRET = 'ASecretKey';

// to fetch all rows from users
const createUser = asyncHandler(async (req, res) => {
  
  try{

    let user = await User.findOne({email : req.body.email});
    if(user){
        return res.status(400).json({success ,error: 'email exists'})
    }

    const salt = await bcrypt.genSalt(10);
    const secPass = await bcrypt.hash(req.body.password ,salt)

    user = await User.create ({
        name : req.body.name,
        email : req.body.email, 
        password : secPass,
    })

    const data ={
        user:{
            id :user.id
        }
    }
    const authToken =jwt.sign(data, JWT_SECRET);
    success = true;
    res.json({success ,authToken});

  }catch(error){
    console.log(error.message);
    res.status(500).send("some error occured")
  }

});

// to fetch a row from users using primary key
const fetchUsersById = asyncHandler(async (req, res) => {
  // assuming that id is passed as a parameter in request
  const id = req.params.id;
  // using findByPk method in sequelize
  const rows = await User.findByPk(id);
  res.json(rows);
});

// Insert one user
const fetchAllUsers = asyncHandler(async (req, res) => {

  // Create a new user in the database
  const Users = await User.findAll();
  res.json(Users);
});


const deleteUserById = asyncHandler(async(req,res)=>{
  const user_id = req.params.id ;
  try{
    console.log(user_id);
    await User.destroy({where: {id: user_id}});
   
    res.status(200).json({ success: true, message: 'profile deleted successfully'});
  }
  catch(error){
    res.status(500).json({success : false ,message : "error occured"}) ;
  }
}) ;

const AuthenticateUser = asyncHandler(async(req,res)=>{
  
  const {name, password} = req.body;

  try{
      let user = await User.findOne({ name});
      if(!user) {
          success =false
          return res.status(400).json({success ,error : "Please try to login with correct credentials"})
      }

      const passCompare = await  bcrypt.compare(password , user.password);

      if(!passCompare){
          success = false;
          return res.status(400).json({success ,error : "Please try to login with correct credentials"})
      }

      const payload ={
          user:{
              id :user.id
          }
      }
      const authToken =jwt.sign(payload, JWT_SECRET);
      success =true; 
      res.json({success ,authToken});

  } catch (error) {
      console.log(error.message);
      res.status(500).send("some error occured") 
  }

});

module.exports = { fetchAllUsers, fetchUsersById, createUser, deleteUserById, AuthenticateUser };