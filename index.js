const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");

const app = express();

let HealthCheck = require("./infra/Health");

// Setting Port
app.set("port", 9009);

require("dotenv");
let staticUrl = "/";
let publicFolder = path.resolve(__dirname, "./out");

let runServer = () => {
  app.use(staticUrl, express.static(path.join(publicFolder)));

  const healthApp = new HealthCheck(app);
  healthApp.setHealthCheckEndpoints("webstorybook", null);

  // Parse incoming requests data (https://github.com/expressjs/body-parser)
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json());

  // Serving index.html
  app.all("/*", function (req, res) {
    res.sendFile(path.join(publicFolder, "index.html"));
  });

  // Listen for requests
  let server = app.listen(app.get("port"), function () {
    let port = server.address().port;
    console.log(`Server started on port: ${port}`);
  });
};

runServer();
