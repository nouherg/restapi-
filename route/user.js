const express = require("express");
const {
  Adduser,
  Getusers,
  Deleteuser,
  Updateuser,
  Getoneuser,
} = require("../controlles/user");

const userRoutes = express.Router();

userRoutes.post("/new", Adduser);
userRoutes.get("/all", Getusers);
userRoutes.delete("/del/:id", Deleteuser);
userRoutes.put("/edit/:id", Updateuser);
userRoutes.get("/me/:id", Getoneuser);

module.exports = userRoutes;