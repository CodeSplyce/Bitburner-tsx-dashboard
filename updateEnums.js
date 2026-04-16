const fs = require("fs")

const path = './NetscriptDefinitions.d.ts'
const enumsPath = './src/NetscriptEnums.ts'

const fileData = fs.readFileSync(path).toString()

const regex = new RegExp(/declare (enum \w+ {\n[^}]*})$/gm)
const matches = fileData.matchAll(regex)

const enums = []
if (matches) {
    for (const match of matches) {
        enums.push(`export ${match[1]}`)
    }
    
    fs.writeFileSync(enumsPath, enums.join("\n"))
    console.log('Netscript Enum Definitions Updated')
}