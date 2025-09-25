import { config } from "dotenv";
import { vl } from "moondream";
import fs from "fs";

config();
config({ path: ".env.local", override: true });

// supply MOONDREAM_API_KEY for Cloud or MOONDREAM_API_URL for a custom server
const apiKey = process.env.MOONDREAM_API_KEY;
const apiUrl =
  process.env.MOONDREAM_API_URL || (!apiKey ? "http://localhost:2020/v1" : undefined);

const model = new vl({
  ...(apiKey ? { apiKey } : {}),
  ...(apiUrl ? { apiUrl } : {}),
});

// read the image we're going to use
const image = fs.readFileSync("/Users/maxym/Dev/moondream-examples/images/frieren.jpg");

async function main() {
  // let's generate a caption for the image
  const captionResponse = await model.caption({
    image,
    length: "normal",
    stream: false,
  });
  console.log(captionResponse);
}

main();
