function getHost() {
  return process.env.NODE_ENV === "production" ? process.env.API_URL : "http://localhost:3000";
}

export default getHost;
