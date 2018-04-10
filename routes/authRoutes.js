const router = require('express').Router({mergeParams:true});

router.get('/auth/google',(req,res)=>{
  res.send('this route will handle google oauth');
})

router.get('/auth/facebook',(req,res)=>{
  res.send('this route will handle facebook oauth')
})

router.get('/auth/twitter',(req,res)=>{
  res.send('this route will handle twitter oath');
})

module.exports = router;
