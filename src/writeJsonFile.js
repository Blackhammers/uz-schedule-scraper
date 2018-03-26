const fs = require('fs-extra');

const writeToFile = object => {
  let newObject = {
    key: new Date().getTime(),
    data: object
  };
  let fileName = newObject.key.toString();
  console.log('Saving ' + fileName + ' to /files directory.');
  let newJsonObject = JSON.stringify(newObject);
  fs.writeFileSync('../files/' + fileName + '.json', newJsonObject);
};

module.exports = {
  writeJsonFile: this.writeJsonFile
};
