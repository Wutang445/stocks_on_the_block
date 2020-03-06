const path = require("path");
const express = require("express");
const compression = require("compression");
const session = require("express-session");
const passport = require("passport");
const SequelizeStore = require("connect-session-sequelize")(session.Store);
const morgan = require("morgan");
const app = express();
const db = require("./db");
const sessionStore = new SequelizeStore({ db });
const PORT = process.env.PORT || 3000;

passport.serializeUser((user, done) => done(null, user.id));

passport.deserializeUser(async (id, done) => {
  try {
    const user = await db.models.user.findByPk(id);
    done(null, user);
  } catch (err) {
    done(err);
  }
});

const devApp = async () => {
  app.use(morgan("dev"));

  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  app.use(compression());

  app.use(
    session({
      secret: process.env.SESSION_SECRET || "King Kunta",
      store: sessionStore,
      resave: false,
      saveUninitialized: false
    })
  );
  app.use(passport.initialize());
  app.use(passport.session());

  app.use("/auth", require("./auth/userAuth"));
  app.use("/api", require("./api"));

  app.use(express.static(path.join(__dirname, "..", "public")));

  app.use((err, req, res, next) => {
    console.error(err);
    console.error(err.stack);
    res.status(err.status || 500).send(err.message || "Internal server error.");
  });

  const syncData = () => db.sync();

  const startListening = () => {
    app.listen(PORT, () => console.log(`Mixing it up on port ${PORT}`));
  };

  await sessionStore.sync();
  await syncData();

  startListening();
};

devApp();
