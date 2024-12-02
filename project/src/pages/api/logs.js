import fs from "fs";
import path from "path";

const LogHandler = (request, response) => {
  const { body } = request;
  const { status, endpoint, url, time } = body;
  const currentPath = path.resolve("public/log.json");
  const content = {
    status: status,
    endpoint: endpoint,
    url: url,
    time: time,
  };
  fs.appendFileSync(currentPath, content);
  response.status(200).send("Recorded");
};

export default LogHandler;
