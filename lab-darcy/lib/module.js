"use strict";

const fs = require('fs');

function BitmapTransformer(inputFilePath, outputFilePath, transform) {

    fs.readFile(inputFilePath, (err, data) => {
        if (err) return console.error(err);

        const bitmap = {
            header: {
                type: data.slice(0, 2).toString(),
                fileSize: data.slice(2, 6).readUInt16LE(),
                offsetToPixelArray: data.slice(10, 14).readUInt32LE(),
            },
            dibHeader: {
                width: data.slice(18, 22),
                height: data.slice(22, 26),
                bitsPerPixel: data.slice(28, 30),
            },
            pixelArray: data.slice(data.slice(10, 14).readUInt32LE()),
        }
        console.log(bitmap);

        const transformImage = (transform) => {
            if (transform !== undefined) {

                if (transform === 'mirror') {
                    let mirrorImage = [];

                    for (let i = bitmap.pixelArray.length - 1; i > 0; i--) {
                        mirrorImage.push(bitmap.pixelArray[i]);
                    }
                    let newData = data.slice(0, bitmap.offsetToPixelArray) + mirrorImage;
                    return newData;
                }
                fs.writeFile(outputFilePath, newData, err => {
                    if (err) return console.log(err)
                })
            }
            let newData = transformImage(transform);

            // if (transform === 'grayScale') {
            //         let grayScale = [];
            //         console.log('bitmap pixel array=', bitmap.pixelArray.length);
            //         for (let i = bitmap.pixelArray.length - 1; i > 0; i--) {
            //                 grayScale.push(bitmap.pixelArray[i]);
            //             }
            //             console.log('data=', data);

            //             let newData = data.slice(0, bitmap.offsetToPixelArray) + grayScale;
            //             return newData;
            //         }
            //     }
            // }
        }
        BitmapTransformer(inputFilePath, outputFilePath, transform);
    })
}

module.exports = {};
module.exports.BitmapTransformer = BitmapTransformer;
module.exports.transformImage = transformImage;
