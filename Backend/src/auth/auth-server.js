var registerModel = require("../register/register-model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

module.exports = {
  authenticate: function(req, res) {
    // console.log("Auth server");
    
    registerModel.findOne(
      {
        email: req.body.email
      },

      async function(err, user) {
        if (!user)
          return (
             res.status(400).send({ msg: "User is not registered with us" })
          );
        else {
         
          
          const isMatch = await bcrypt.compare(
            req.body.password,
            user.password
          );
          const payload = { id: user.id, email: user.email };
          const secretKey = "verify";
          const options = { issuer: "Randhir", expiresIn: "10m" };
          const logintoken = jwt.sign(payload, secretKey, options);
        
          

          if(user.isVerified,user,isMatch)
{

  res.status(201).json(logintoken)

}         
          
        
        
        
        }})}}