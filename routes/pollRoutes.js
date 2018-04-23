const router = require("express").Router({ mergeParams: true });
const Poll = require("../models/Poll");

router.get("/polls", (req, res) => {
  res.send(req.user);
  seedDB().catch(e=>{
    console.log({error});
  })
});


const  seedDB = async () => {
  const data = [
    {
      title: "Who is your favorite captain",
      options: ["Piccard", "james", "lent"]
    },
    {
      title: "What is your favorite food",
      options: ["Rice", "Beans", "semo"]
    }, 
    {
      title: "What is your favorite color",
      options: ["Red", "Green", "Black"]
    },
  ];
  
   const polls = await Poll.insertMany(data);
   console.log(polls);
}
module.exports = router;
