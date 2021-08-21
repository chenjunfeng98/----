const {promisify} = require('util');
const fs = require('fs');

const readFileAsync = promisify(fs.readFile);
const writeFileAsync = promisify(fs.writeFile);

exports.getId = async (dbpath)=>{
    const data = await readFileAsync(dbpath);
    return JSON.parse(data)
}

exports.addId = async (dbpath,value)=>{
    const data = JSON.stringify(value);
    await writeFileAsync(dbpath,data)
}


