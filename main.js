import { vl } from "moondream";
import fs from "fs";

// this will run it against a local Moondream Server
// const model = new vl({ endpoint: "http://localhost:2020/v1" });

// ...uncomment this line if you prefer to run it against Moondream Cloud
const model = new vl({ apiKey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJrZXlfaWQiOiIwZjZkZmQ2NS1iMDU2LTQ0ZTgtOGUwNy0yYzAxMDJlMDcyZjQiLCJvcmdfaWQiOiJIalpMcXdqWnM0TjNhOVlRa0hpcndFSWNObDllOU5MdCIsImlhdCI6MTc1ODc3Nzc3NywidmVyIjoxfQ.6dRk6bDxs6Z671KFMKvw4nb5Qtuw5LHl7WnjlfY9Sg8" });

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
