const ImageHandler = require('./ImageHandler.js');


let path = 'input/tucan.jpg';
let handler = new ImageHandler(path);

/**
 * Esta función debe transformar una imagen en escala de rojos.
 *
 * Una forma de conseguirlo es simplemente poner los canales G y B a 0 para cada pixel.
 */


function redConverter()
{
    let redHandler = new ImageHandler(path);
    let outputPath = 'output/tucan_red.jpg';
    let redPixels = redHandler.getPixels();
    let pixels = [];
    
    for (let i=0; i<redHandler.getShape()[0];i++){
        pixels.push([]);
        for (let j=0; j<redHandler.getShape()[1];j++){
            
            let pixel =[0,0,0];           
            redPixels[i][j][1]=0;
            redPixels[i][j][2]=0;   
            pixel[0] = (redPixels[i][j][0]);
            pixel[1]= (redPixels[i][j][1]);
            pixel[1]= (redPixels[i][j][2]);

            console.log(pixel);
            pixels[i].push(pixel);
        }
    }
    console.log(pixels)
    redHandler.savePixels(pixels, outputPath);
}

 /**
 * Esta función debe transformar una imagen en escala de verdes.
 * 
 * Una forma de conseguirlo es simplemente poner los canales R y B a 0 para cada pixel.
 */
function greenConverter() {
    let greenHandler = new ImageHandler(path);
    let outputPath = 'output/tucan_green.jpg';
    let greenPixels = greenHandler.getPixels();
    let pixels = [];
    
    for (let i=0; i<greenHandler.getShape()[0];i++){
        pixels.push([]);
        for (let j=0; j<greenHandler.getShape()[1];j++){
            let pixel =[0,0,0];
            greenPixels[i][j][0,2]="0"

            pixel[1] = (greenPixels[i][j][1])
            
            pixels[i].push(pixel);
        }
    }
    console.log(pixels)
    greenHandler.savePixels(pixels, outputPath);
}

/**
 * Esta función debe transformar una imagen a su equivalente en escala de grises.
 *
 * Una forma de conseguirlo es calcular la media de los valores RGB de cada pixel y
 * asignarle a cada canal de RGB esa media.
 *
 * Es decir, si un pixel tiene el valor [100, 120, 200], su media es 140 y por lo tanto
 * lo debemos transformar en el pixel [140, 140, 140].
 */

function greyConverter() {
    let greyHandler = new ImageHandler(path);
    let outputPath = 'output/tucan_grey.jpg';
    let greyPixels = greyHandler.getPixels();
    let pixels = [];
       
        for (let i=0; i<greyHandler.getShape()[0];i++){
            pixels.push([]);
            for (let j=0; j<greyHandler.getShape()[1];j++){
                let pixel =[0,0,0];
                pixel[0] = ((greyPixels[i][j][0] +greyPixels[i][j][1]+greyPixels[i][j][2])/3);
                pixel[1] = ((greyPixels[i][j][0] +greyPixels[i][j][1]+greyPixels[i][j][2])/3);
                pixel[2] = ((greyPixels[i][j][0] +greyPixels[i][j][1]+greyPixels[i][j][2])/3);
                
                pixels[i].push(pixel);
            }
        }
    greyHandler.savePixels(pixels, outputPath);
 }

 /**
 * Esta función debe reducir el brillo de la imagen según el parámetro qye recibe la función.
 *
 * Una forma de conseguirlo es dividir el valor de cada pixel por el parámetro dimFactor.
 */
function dimBrightness(dimFactor) {
    
    let briHandler = new ImageHandler(path);
    let outputPath = 'output/tucan_dimed.jpg';
    let briPixels = briHandler.getPixels();
    let pixels = [];
    //let dimFactor=dimFactor;
        for (let i=0; i<briHandler.getShape()[0];i++){
            pixels.push([]);
            for (let j=0; j<briHandler.getShape()[1];j++){
                let pixel =[0,0,0];
                pixel[0] = briPixels[i][j][0]/dimFactor;
                pixel[1] = briPixels[i][j][1]/dimFactor;
                pixel[2] = briPixels[i][j][2]/dimFactor;
                
                pixels[i].push(pixel);
            }
        }
        
    briHandler.savePixels(pixels, outputPath);
}

/**
 * Esta función debe invertir el color de la imagen.
 *
 * Una forma de conseguirlo es asignar a cada valor RGB de cada píxel el valor 255 - valorRGB.
 *
 * Por ejemplo, si un pixel tiene valor [10, 20, 50] su nuevo valor sera [255 - 10, 255 - 20, 255 - 50] => [245, 235, 205]
 */
function invertColors(){

    let invHandler = new ImageHandler(path);
    let outputPath = 'output/tucan_inverse.jpg';
    let invPixels = invHandler.getPixels();
    let pixels = [];
    const rest=255;
        for (let i=0; i<invHandler.getShape()[0];i++){
            pixels.push([]);
            for (let j=0; j<invHandler.getShape()[1];j++){
                let pixel =[0,0,0];
                pixel[0] = 255-invPixels[i][j][0];
                pixel[1] = 255-invPixels[i][j][1];
                pixel[2] = 255-invPixels[i][j][2];
                
                pixels[i].push(pixel);
            }
        }
        
    invHandler.savePixels(pixels, outputPath);
}

 function merge(alphaFirst, alphaSecond){
    let catHandler = new ImageHandler('input/cat.jpg');
    let dogHandler = new ImageHandler('input/dog.jpg');
    let outputPath = 'output/merged.jpg';

    let catPixels = catHandler.getPixels();
    let dogPixels = dogHandler.getPixels();

    let pixels = [];
    for (let i = 0; i < catHandler.getShape()[0]; i++) {
        pixels.push([]);
        for (let j = 0; j < catHandler.getShape()[1]; j++) {
            let pixel = [0, 0, 0];
            pixel[0] = (catPixels[i][j][0] * alphaFirst + dogPixels[i][j][0]  * alphaSecond);
            pixel[1] = (catPixels[i][j][1] * alphaFirst + dogPixels[i][j][1]  * alphaSecond);
            pixel[2] = (catPixels[i][j][2] * alphaFirst + dogPixels[i][j][2]  * alphaSecond);
            pixels[i].push(pixel);
        }
    }

    dogHandler.savePixels(pixels, outputPath);
}

dimBrightness(0.8);
//invertColors();
//redConverter();
//greenConverter();
//greyConverter();
