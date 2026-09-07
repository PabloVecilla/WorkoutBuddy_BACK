const app = require("./app"); 
const sequelize = require("../config/database"); 

const PORT = process.env.PORT || 3000; 

async function startServer() { // -> only accept http requests if connection is successful
    try {
      await sequelize.authenticate(); // -> test connection to DB
      console.log("Database Connected"); 
  
      await sequelize.sync(); // -> updates DB to match the sequelize model --> ONLY for development. 
      console.log("Models synced"); 
  
      app.listen(PORT, () => {
        console.log(`API listening on http://localhost:${PORT}`);
      });
  
    } catch (err) {
      console.error("Database connection failed: ", err); 
    }
  }
  startServer(); 