import jwt from "jsonwebtoken";
// import {c}

export const verifyToken = (req, res, next) => {
  const token = req.cookies.access_token;
  if (!token) {
    return next("You are not authenticated");
  }

  jwt.verify(token, process.env.JWT, (err, user) => {
    if (err) {
      return next("Token not valid");
    }
    req.user = user;
    next()
  });
};

export const verifyUser = (req, res, next) => {
  verifyToken(req, res,next,()=>{
    if(req.user.id=== req.params.id || req.user.isAdmin) {
         next()
    }else{
      // if (err) {
        return next("You are not allowed to delete");
      // }
    }
  })
}
export const verifyAdmin = (req, res, next) => {
  verifyToken(req, res,next,()=>{
    if(req.user.isAdmin) {
         next()
    }else{
      // if (err) {
        return next("You are not allowed to delete");
      // }
    }
  })
}