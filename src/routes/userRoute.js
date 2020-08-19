const User = require("../models/uADM");
const getToken = require("../../util/token")
const express = require("express");
const router = express.Router();

let response = {};



// Signin User

router.post("/signin/", async(req, res) => {
  const siginUser = await User.findOne({
    email: req.body.email,
    password: req.body.password
  })
  if(siginUser){
      res.send({
        _id: siginUser.id,
        name: siginUser.name,
        email: siginUser.email,
        isADM: siginUser.isADM,
        token: getToken(user)

      })
  } else {
    res.status(401).send({msg: "Invalid Email or Password"})
  }
})


// Get all user from DB
router.get("/all", (req, res) => {
  User.find({}, (err, data) => {
    // Fetch all data from collection
    if (!err) {
      response = { error: false, msg: data };
    } else {
      response = { error: true, msg: "Error fetching data, try your best ;D" };
    }
    res.json(response);
  });
});

// Get user by id
router.get("/user/:id", (req, res) => {
  let id = req.params.id;

  User.findById(id, (err, data) => {
    // Fetch user data by id
    if (err) {
      response = { error: true, msg: "Error fetching data, try your best ;D" };
    } else {
      response = { error: false, msg: data };
    }
    res.json(response);
  });
});

//  Create new User
router.post("/user/new", (req, res) => {
  let db = new User();
  let encriptIt = require("crypto").createHash("md5");
  db.name = req.body.name;
  db.email = req.body.email;
  db.password = encriptIt.update(req.body.password).digest("base64");
  db.save((err) => {
    if (err) {
      response = { error: true, msg: "Error creating user" };
    } else {
      response = { error: false, msg: "User created Succesfully ;D" };
    }
    res.json(response);
  });
});

// Change user information
router.put("/change/:id", (req, res) => {
  let id = req.params.id;

  User.findById(id, (err, data) => {
    if (err) {
      response = { error: true, msg: "Error fetching data" };
    } else {
      if (req.body.email !== undefined) {
        data.email = req.body.email;
      }
      if (req.body.name !== undefined) {
        data.name = req.body.name;
      }
      if (req.body.password !== undefined) {
        data.password = req.body.password;
      }
      if (req.body.isADM !== undefined) {
        data.isADM = req.body.isADM;
      }
      // save data
      data.save((err) => {
        if (err) {
          response = { error: true, msg: "Error updating data" };
        } else {
          response = { error: false, msg: "Data succesfully changed" };
        }
        res.json(response);
      });
    }
  });
});

// Delete user
router.delete("/delete/:id", (req, res) => {
  let response = {};
  let id = req.params.id;
  User.findById(id, (err, data) => {
    // Delete user data by id
    if (err) {
      response = { error: true, msg: "Error fetching data, try your best ;D" };
    } else {
      // data exist? remove it.
      User.remove({ _id: id }, (err) => {
        if (err) {
          response = { error: true, msg: "Error deleting data :C" };
        } else {
          response = {
            error: true,
            msg: `User with id:${id} has been removed`,
          };
        }
        res.json(response);
      });
    }
  });
});

// Make User Test from schema
router.get("/createADM", async (req, res) => {
  try {
    const user = new User({
      name: "exampeledmidq",
      email: "exampeledmidq@gmail.com",
      password:
        "29045pof4po2,eo120'e1e2Portamemememoonnldelp2034903.,.,.SSSavedok",
      isADM: false,
    });
    const newUser = await user.save();
    res.send(newUser);
  } catch (error) {
    res.send({ msg: error.message });
  }
});

module.exports = router;
