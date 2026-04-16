const ts = require("typescript");
const fs = require("fs");

const path = './NetscriptDefinitions.d.ts'

function extract(text) {
    const sourceFile = ts.createSourceFile(
        "netscript.d.ts",
        text,
        ts.ScriptTarget.Latest,
        true
    );

    const output = [];

    function visit(node) {
        if (ts.isInterfaceDeclaration(node)) {
            output.push(
                `interface ${node.name.text} extends bitburner.${node.name.text} {}`
            );
        }

        if (ts.isTypeAliasDeclaration(node)) {
            output.push(
                `type ${node.name.text} = bitburner.${node.name.text};`
            );
        }

        if (ts.isEnumDeclaration(node)) {
            output.push(
                `type ${node.name.text} = bitburner.${node.name.text};`
            );
        }

        ts.forEachChild(node, visit);
    }

    visit(sourceFile);

    return output.join("\n");
}

(async () => {
    const fileData = fs.readFileSync(path).toString()
    const result = extract(fileData);

    fs.writeFileSync("./bitburner-mapping.ts", result);

    console.log("Generated bitburner-mapping.ts");
})();