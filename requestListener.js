const fs = require("fs");
const path = require("path");
const util = require("util");

const readFile = util.promisify(fs.readFile);

const requestListener = (req, res) => {
  const { url, method } = req;

  switch (method) {
    case "GET": {
      const page = url == "/" ? "index.html" : url;
      const regPage = /^.*\.html$/;
      if (regPage.test(page)) {
        const pagePath = path.join(__dirname, "/pages/", page);
        if (fs.existsSync(pagePath, { encoding: "utf-8" })) {
          readFile(pagePath)
            .then((data) => {
              res.statusCode = 200;
              res.setHeader("Content-Type", "text/html");
              res.end(data);
            })
            .catch((err) => {
              res.statusCode = 500;
              res.end("Server error");
            });
        } else {
          res.statusCode = 404;
          res.end("Page not found");
        }
      } else{
        res.statusCode = 403;
        res.end("Resource is not html");
      }
      break;
    }
    default: {
      res.statusCode = 400;
      res.end("Bad request ((( ");
    }
  }
};

module.exports = requestListener;
