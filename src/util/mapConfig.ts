import { MapConfig } from "../types/data";

const japanMapConfig: MapConfig = {
    title: "日本",
    leftLongitude: 127.5,
    rightLongitude: 147.5,
    topLatitude: 48.3,
    underLatitude: 28.3,
    width: 480,
    height: 480,
    lineSize: 4,
    drawMap: (canvas) => {
        const context = canvas.getContext("2d");
        context.fillStyle = "lightskyblue";
        context.fillRect(0, 0, 480, 480);
        context.fillStyle = "lightgreen";
        context.beginPath();
        context.moveTo(340, 64);
        context.lineTo(432, 112);
        context.lineTo(376, 152);
        context.lineTo(304, 132);
        context.closePath();
        context.fill();
        context.beginPath();
        context.moveTo(300, 172);
        context.lineTo(332, 172);
        context.lineTo(312, 304);
        context.lineTo(184, 348);
        context.lineTo(172, 324);
        context.lineTo(100, 340);
        context.lineTo(88, 324);
        context.lineTo(252, 264);
        context.closePath();
        context.fill();
        context.beginPath();
        context.moveTo(160, 332);
        context.lineTo(168, 352);
        context.lineTo(120, 364);
        context.lineTo(120, 348);
        context.closePath();
        context.fill();
        context.beginPath();
        context.moveTo(76, 344);
        context.lineTo(108, 368);
        context.lineTo(76, 412);
        context.lineTo(48, 360);
        context.closePath();
        context.fill();
    },
};
const kantoMapConfig: MapConfig = {
    title: "関東",
    leftLongitude: 138.1,
    rightLongitude: 141.1,
    topLatitude: 37.6,
    underLatitude: 34.6,
    width: 60,
    height: 60,
    lineSize: 1,
    drawMap: (canvas) => {
        const context = canvas.getContext("2d");
        context.fillStyle = "lightskyblue";
        context.fillRect(0, 0, 60, 60);
        context.fillStyle = "lightgreen";
        context.beginPath();
        context.moveTo(58, 0);
        context.lineTo(54, 15);
        context.lineTo(55, 37);
        context.lineTo(55, 37);
        context.lineTo(35, 54);
        context.lineTo(40, 40);
        context.lineTo(36, 39);
        context.lineTo(33, 41);
        context.lineTo(31, 49);
        context.lineTo(25, 46);
        context.lineTo(20, 50);
        context.lineTo(21, 53);
        context.lineTo(15, 60);
        context.lineTo(13, 49);
        context.lineTo(2, 60);
        context.lineTo(0, 60);
        context.lineTo(0, 9);
        context.lineTo(13, 0);
        context.closePath();
        context.fill();
        context.strokeStyle = "black";
        context.beginPath();
        context.moveTo(6, 23);
        context.lineTo(25, 14);
        context.lineTo(31, 28);
        context.lineTo(12, 32);
        context.closePath();
        context.stroke();
        context.beginPath();
        context.moveTo(25, 14);
        context.lineTo(41, 10);
        context.lineTo(42, 24);
        context.lineTo(31, 28);
        context.closePath();
        context.stroke();
        context.beginPath();
        context.moveTo(41, 10);
        context.lineTo(54, 15);
        context.lineTo(55, 37);
        context.lineTo(31, 28);
        context.lineTo(42, 24);
        context.closePath();
        context.stroke();
        context.beginPath();
        context.moveTo(31, 28);
        context.lineTo(55, 37);
        context.lineTo(35, 54);
        context.lineTo(40, 40);
        context.lineTo(36, 39);
        context.closePath();
        context.stroke();
        context.beginPath();
        context.moveTo(12, 32);
        context.lineTo(31, 28);
        context.lineTo(36, 39);
        context.lineTo(17, 35);
        context.closePath();
        context.stroke();
        context.beginPath();
        context.moveTo(17, 35);
        context.lineTo(36, 39);
        context.lineTo(33, 41);
        context.lineTo(27, 42);
        context.lineTo(20, 39);
        context.closePath();
        context.stroke();
        context.beginPath();
        context.moveTo(20, 39);
        context.lineTo(27, 42);
        context.lineTo(33, 41);
        context.lineTo(31, 49);
        context.lineTo(25, 46);
        context.lineTo(20, 50);
        context.closePath();
        context.stroke();
    },
};

export { japanMapConfig, kantoMapConfig };
