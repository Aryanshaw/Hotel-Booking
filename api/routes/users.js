import express  from "express";
import {
    deleteUser,
    updateUser,
    getUser,
    getAllUsers,
  } from "../controller/user.js";
 import {verifyAdmin, verifyToken,verifyUser} from "../utils/verifyToken.js"


const router = express.Router();


router.get("/checkauthentication" ,verifyToken , (req, res , next) => {
   res.send("Hello user , you are authenticated")
});
router.get("/checkuser/:id" ,verifyUser , (req, res , next) => {
   res.send("Hello user , you are authenticated and you can delete account")
});
router.get("/checkadmin/:id" ,verifyAdmin , (req, res , next) => {
   res.send("Hello admin , you are logged in and you can delete account")
});
//update

router.put("/:id",verifyUser, updateUser);
//delete
router.delete("/:id",verifyUser, deleteUser);
//get
router.get("/find/:id",verifyUser, getUser);

//get all
router.get("/",verifyAdmin, getAllUsers);



export default router