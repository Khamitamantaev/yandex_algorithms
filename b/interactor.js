const fs = require('fs')
let fileContent = fs.readFileSync("input.txt", "utf8");

const [taskCode, interactVerdict, checkerVerdict] = fileContent.toString().split('\n')

let result = interactVerdict

if (interactVerdict == 0) {
    result = taskCode == 0 ? checkerVerdict : 3;
}

if (interactVerdict == 1) {
    result = checkerVerdict;
}

if (interactVerdict == 4) {
    result = taskCode == 0 ? 4 : 3;
}

if (interactVerdict == 6) {
    result = 0;
}

if (interactVerdict == 7) {
    result = 1;
}

fs.writeFileSync("output.txt", result.toString())



