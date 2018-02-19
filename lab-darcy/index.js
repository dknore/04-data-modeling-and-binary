"use strict";

const BitmatTransformer = require(`${__dirname}/lib/module.js`).BitmatTransformer;
const transformImage = require(`${__dirname}/lib/module.js`).transformImage;
// const argv = process.argv;

let inputFilePath = `${__dirname}/test/assets/blob.bmp`;
let outputFilePath = `${__dirname}/test/assets/newAssets/newBlob.bmp`;
let transformCommand = 'mirror';

if (transformCommand === 'mirror') {
    BitmapTransformer(inputFilePath, outputFilePath, transformCommand);
} else if (transformCommand === 'grayscale') {
    BitmapTransformer(inputFilePath, outputFilePath, transformCommand);
}