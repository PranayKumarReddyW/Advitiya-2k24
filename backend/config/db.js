const mongoose = require("mongoose");

exports.dbConnect = () => {
  return mongoose
    .connect(process.env.MONGO_URI)
    .then(() => {
      console.log("✅ Database connected successfully");
    })
    .catch((err) => {
      console.error("❌ Error connecting to database:", err.message || err);
      process.exit(1);
    });
};
