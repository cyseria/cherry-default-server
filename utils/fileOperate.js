/**
 * @file 
 * @author Cyseria <xcyseria@gmail.com> 
 * @created time: 2018-06-10 19:00:15 
 * @last modified by: Cyseria
 * @last modified time: 2018-06-10 19:57:47
 */

const fs = require('fs');
const fsExtra = require('fs-extra')
const nps = require('path');

const configPath = nps.join(__dirname, '../data/config.json');
module.exports = {
    read: async function (path) {
        path = path || process.cwd();
        try {
            const data = await fsExtra.readJsonSync(configPath);
            return data; // obj
        } catch (err) {
            console.log(err);
            return;
        }
    },
    write: async function (json) {
        try {
            const data = await fsExtra.writeJsonSync(configPath, json);
            return true;
        } catch (err) {
            console.log(err);
            return false;
        }
    }
}