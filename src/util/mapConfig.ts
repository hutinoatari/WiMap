import { MapConfig } from "../types/data";

const japanMapConfig: MapConfig = {
    leftLongitude: 127.5,
    rightLongitude: 147.5,
    topLatitude: 48.3,
    underLatitude: 28.3,
    width: 120,
    height: 120,
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

export { japanMapConfig };
