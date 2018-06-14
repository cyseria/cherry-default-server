/**
 * @file 
 * @author Cyseria <xcyseria@gmail.com> 
 * @created time: 2018-06-10 19:00:15 
 * @last modified by: Cyseria
 * @last modified time: 2018-06-10 19:57:47
 */


const fsExtra = require('fs-extra')
const nps = require('path');

const configPath = nps.join(__dirname, '../data/config.json');
module.exports = {
    read: async function (path) {
        path = path || process.cwd();
        try {
            // 没有文件写入空 json 对象
            const pathExists = fsExtra.pathExistsSync(configPath)
            if (!pathExists) {
                await fsExtra.ensureFile(configPath);
                await fsExtra.writeJsonSync(configPath, {});
            }
            
            try {
                const data = await fsExtra.readJsonSync(configPath);
                return data; // obj
            } catch (err) {
                console.log(err);
                return;
            }
        } catch (err) {
            console.error(err)
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