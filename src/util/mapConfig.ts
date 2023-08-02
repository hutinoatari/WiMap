import { MapConfig } from "../types/data";

const japanMapConfig: MapConfig = {
    title: "日本",
    leftLongitude: 127.5,
    rightLongitude: 147.5,
    topLatitude: 48.3,
    underLatitude: 28.3,
    width: 120,
    height: 120,
    lineSize: 1,
    drawMap: (canvas) => {
        const context = canvas.getContext("2d");
        context.fillStyle = "lightskyblue";
        context.fillRect(0, 0, 120, 120);
        context.fillStyle = "lightgreen";
        context.beginPath();
        context.moveTo(85, 16);
        context.lineTo(108, 28);
        context.lineTo(94, 38);
        context.lineTo(76, 33);
        context.closePath();
        context.fill();
        context.beginPath();
        context.moveTo(75, 43);
        context.lineTo(83, 43);
        context.lineTo(78, 76);
        context.lineTo(46, 87);
        context.lineTo(43, 81);
        context.lineTo(25, 85);
        context.lineTo(22, 81);
        context.lineTo(63, 66);
        context.closePath();
        context.fill();
        context.beginPath();
        context.moveTo(40, 83);
        context.lineTo(42, 88);
        context.lineTo(30, 91);
        context.lineTo(30, 87);
        context.closePath();
        context.fill();
        context.beginPath();
        context.moveTo(19, 86);
        context.lineTo(27, 92);
        context.lineTo(19, 103);
        context.lineTo(12, 90);
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
