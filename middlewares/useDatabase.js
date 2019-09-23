import { MongoClient } from "mongodb";

const client = new MongoClient(process.env.MONGODB_URI, { useUnifiedTopology: true, useNewUrlParser: true });

const useDatabase = handler => (req, res) => {
  if (!client.isConnected()) {
    return client
      .connect()
      .then(() => {
        console.log("DB connection successful! 😄");
        req.db = client.db("laflammeconnectee");
        return handler(req, res);
      })
      .catch(err => {
        console.log(`DB Connection Error: ${err.message} 🚫`);
      });
  }
  req.db = client.db("laflammeconnectee");
  return handler(req, res);
};
export default useDatabase;
