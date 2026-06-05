const mongoose = require("mongoose");

mongoose
  .connect(
    "mongodb+srv://pranithanandhakumar_db_user:FreshGo2026@cluster0.wysuaim.mongodb.net/freshgo?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then(() => {
    console.log("CONNECTED ✅");
    process.exit(0);
  })
  .catch((err) => {
    console.log("ERROR ❌");
    console.log(err.message);
    process.exit(1);
  });