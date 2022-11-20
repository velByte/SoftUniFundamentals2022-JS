
function start(path) {

    let fileName = path.split("\\").pop();
    fileName = fileName.split(".");
    let extension = fileName.pop();


    console.log(`File name: ${fileName.join(".")}`);
    console.log(`File extension: ${extension}`);

}


start('C:\\Internal\\training-internal\\Template.pptx');
