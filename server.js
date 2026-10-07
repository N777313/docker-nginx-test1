const http = require("http");

const PORT = process.env.PORT || 8080;
const INSTANCE = process.env.INSTANCE || "unknown";

const server = http.createServer((req, res) => {
  res.writeHead(200, {
    "Content-Type": "text/plain"
  });

  res.end(`Salem from ${INSTANCE}\n`);
});

server.listen(PORT, "0.0.0.0", () => {
  console.log(`${INSTANCE} running on port ${PORT}`);
});
