const express = require("express");
const path = require("path");

const app = express();
const port = Number(process.env.PORT) || 3000;

app.get("/api/health", (_request, response) => {
  response.json({ status: "ok", app: "QuickStack" });
});

app.use(express.static(path.join(__dirname, "public")));

app.listen(port, () => {
  console.log(`QuickStack está disponible en http://localhost:${port}`);
});
