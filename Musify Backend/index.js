const express = require("express");
const mongoose = require("mongoose");
const passport=require("passport");
const User=require("./Models/User");
const authRoutes=require("./Routes/auth");
const songRoutes=require("./Routes/song");
const playlistRoutes=require("./Routes/playlist");
require("dotenv").config();
const app = express();
const cors=require("cors");
const port = 8000;
app.use(cors());
app.use(express.json());
mongoose
  .connect(
    "mongodb+srv://Karan_Gondaliya:" +
      process.env.MONGO_PASSWORD +
      "@cluster0.my2k6el.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("Connected to mongo!");
  })
  .catch((err) => {
    console.log(err);
    console.log("error while connecting to mongo");
  });

// set-up password-jwt
const JwtStrategy = require("passport-jwt").Strategy,
  ExtractJwt = require("passport-jwt").ExtractJwt;
let opts = {};
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = "thisKeyIsSupposedToBeSecret";
passport.use(
  new JwtStrategy(opts, function (jwt_payload, done) {
    User.findOne({_id: jwt_payload.identifier })
      .then((user) => {
        if (user) {
          return done(null, user);
        } else {
          return done(null, false);
        }
      })
      .catch((err) => {
        return done(err, false);
      });
  })
);


app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/auth",authRoutes);
app.use("/song",songRoutes);
app.use("/playlist",playlistRoutes);


app.listen(port, () => {
  console.log("App is running on port: " + port);
});
