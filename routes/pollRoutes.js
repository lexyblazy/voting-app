const router = require('express').Router({mergeParams: true});

router.get('/polls',(req,res)=>{
  res.send(req.user);
})