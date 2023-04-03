// eslint-disable-next-line no-undef
const fs = require("fs");

function getNameSansVersion(name) {
  const ix = name.lastIndexOf("@");
  return ix > 0 ? name.substring(0, ix) : name;
}

try {
  const rawProject = fs.readFileSync("./package.json", "utf8");
  const project = JSON.parse(rawProject);
  const myName = project.name + "@" + project.version;
  const data = fs.readFileSync("./licences.json", "utf8");
  const rawLicences = JSON.parse(data);
  const outputFile = "./src/assets/licences.json";

  const licences = [];
  for (const [key, value] of Object.entries(rawLicences)) {
    if (key === myName) {
      continue;
    }
    let packageLicence;
    const name = getNameSansVersion(key);
    try {
      packageLicence = fs.readFileSync(value.licenseFile, "utf8");
    } catch (error) {
      packageLicence = "";
    }

    const licence = licences.find(
      (item) =>
        item.type === value.licenses &&
        item.publisher === value.publisher &&
        item.licence === packageLicence
    );
    if (licence) {
      licence.packages.push(name);
    } else {
      licences.push({
        packages: [name],
        type: value.licenses,
        publisher: value.publisher,
        licence: packageLicence,
      });
    }
  }
  const result = { licences: licences };
  fs.writeFileSync(outputFile, JSON.stringify(result, null, " "), "utf8");
} catch (error) {
  console.log(error);
}
