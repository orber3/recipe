import passport from "passport"
import User from  '../models/userModel.js'
const GoogleStrategy = require("passport-google-oauth20").Strategy;

passport.use(new GoogleStrategy({
    clientID : "804267482082-d6nsm6snr43b6v7be897fdii1pht6uc6.apps.googleusercontent.com",
    clientSecret : "khIHw_7gfSmTXLRMem69Q-ik"    ,
    callbackURL : "http://www.example.com/auth/google/callback"

},
function(accessToken, refreshToken, profile, done) {
     User.findOrCreate({ googleId: profile.id }, function (err, user) {
       return done(err, user);
     });
}
));