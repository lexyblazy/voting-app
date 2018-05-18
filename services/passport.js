const passport = require("passport");
const TwitterStrategy = require("passport-twitter").Strategy;
const User = require("../models/User");

const {
  TWITTER_CONSUMER_KEY,
  TWITTER_CONSUMER_SECRET
} = require("../config/keys");

passport.use(
  new TwitterStrategy(
    {
      consumerKey: TWITTER_CONSUMER_KEY,
      consumerSecret: TWITTER_CONSUMER_SECRET,
      callbackURL: "/auth/twitter/callback",
      proxy: true
    },
    async (token, tokenSecret, profile, done) => {
      try {
        //before we do create a new user, we need to be sure if that user does not exist in our database;
        const existingUser = await User.findOne({ twitterId: profile.id });
        if (existingUser) {
          //we update the user details;
          existingUser.name = profile.displayName;
          existingUser.photo = profile.photos[0].value;
          await existingUser.save();
          return done(null, existingUser);
        }
        //if no exisiting user,
        const user = new User({
          twitterId: profile.id,
          name: profile.displayName,
          photo: profile.photos[0].value
        });
        await user.save();
        return done(null, user);
      } catch (error) {
        console.log(error);
      }
    }
  )
);

passport.serializeUser(function(user, done) {
  done(null, user.id);
});

passport.deserializeUser(function(id, done) {
  User.findById(id, function(err, user) {
    done(err, user);
  });
});
