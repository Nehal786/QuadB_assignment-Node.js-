const db = require('../models');
const {  user } = require('../models');
const User = db.user
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");



async function getUserDetails(req, res) {
  try {
    const { user_id } = req.params;
    const user = await User.findOne({ where: { user_id } });
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    return res.status(200).json(user);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Internal server error' });
  }
}


async function updateUserDetails(req, res) {
  try {
    //const { new_details_of_user } = req.body;
    console.log(req._id);
    const user = await db.user.update(req.body,{
      where:{user_id:req._id}
    })
     
    return res.status(200).json({ message: 'User details updated successfully',
  user });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Internal server error' });
  }
}


async function getUserImage(req, res) {
  try {
    const { user_id } = req.params;
    const user = await User.findOne({ where: { user_id } });
    if (!user || !user.user_image) {
      return res.status(404).json({ error: 'User image not found' });
    }
    return res.status(200).json({ user_image: user.user_image });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Internal server error' });
  }
}


async function insertUser(req, res) {
  try {
    const { user_name,user_email, user_password,user_image,total_orders} = req.body;
    const user = await db.user.create({
      user_name,
      user_email,
      user_image,
      user_password : bcrypt.hashSync(req.body.user_password,8),
      total_orders,
    })
    const token = await jwt.sign({id :user.user_id}, 'heyeyehehyhhyh' ,{
      expiresIn: 12000
  });


    
    return res.status(201).json({ message: 'User inserted successfully' ,
    token,
    user
  });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Internal server error' });
  }
}


async function deleteUser(req, res) {
  try {
    const { user_id } = req.params;
    
     const user =  await db.user.destroy({ where: { user_id } });
    return res.status(200).json({ message: 'User deleted successfully' });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Internal server error' });
  }
}

module.exports = {
  getUserDetails,
  updateUserDetails,
  getUserImage,
  insertUser,
  deleteUser,
};
