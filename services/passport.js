const passport = require("passport");
const TwitterStrategy = require("passport-twitter").Strategy;

const {
  TWITTER_CONSUMER_KEY,
  TWITTER_CONSUMER_SECRET
} = require("../config/keys");

passport.use(new TwitterStrategy({
  consumerKey: TWITTER_CONSUMER_KEY,
  consumerSecret: TWITTER_CONSUMER_SECRET,
  callbackURL: "/auth/twitter/callback"
},
function(token, tokenSecret, profile, cb) {
  // User.findOrCreate({ twitterId: profile.id }, function (err, user) {
  //   return cb(err, user);
  // });
  console.log("Profile =>",profile);
  console.log("token =>",token);
  console.log("tokenSecret =>",tokenSecret);
  cb();
}
));