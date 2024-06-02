import { faker } from "@faker-js/faker/locale/en_US";
import fs from "fs";

const generateRandomAvatar = () => faker.image.avatar();

const imageArray = Array.from({ length: 25 }, () => generateRandomAvatar());

const json = JSON.stringify(imageArray);

fs.writeFile("./dist/images.json", json, function (err) {
  if (err) {
    return console.log(err);
  } else {
    console.log("Mock data generated.");
  }
});
