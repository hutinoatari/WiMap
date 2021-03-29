const mapConfig = {
    xl: 127.5,
    xr: 147.5,
    yu: 48.3,
    yd: 28.3,

    w: 120,
    h: 120,
}

const canvas = document.getElementById("screen");
canvas.width = mapConfig.w;
canvas.height = mapConfig.h;
const context = canvas.getContext("2d");
const reloadButton = document.getElementById("reloadButton");
const downloadButton = document.getElementById("downloadButton");
const japanMapImage = new Image();
japanMapImage.src = "japanMap.jpg";

const LoLa2XY = (lo, la) => {
    const x = (la - mapConfig.xl) / (mapConfig.xr - mapConfig.xl) * mapConfig.w;
    const y = -(lo - mapConfig.yu) / (mapConfig.yu - mapConfig.yd) * mapConfig.h;
    return {
        x: Math.floor(x),
        y: Math.floor(y),
    }
}

const drawCurrentLocation = () => {
    context.drawImage(japanMapImage, 0, 0);

    context.fillStyle = "black";
    context.font = "20px monospace";
    context.textAlign = "left";
    context.textBaseline = "top";
    context.fillText("iMap", 10, 15);

    context.font = "10px monospace";
    context.textAlign = "right";
    context.textBaseline = "bottom";
    context.fillText("(C)2021 淵野アタリ", mapConfig.w-5, mapConfig.h-5);

    navigator.geolocation.getCurrentPosition((position) => {
        const la = position.coords.latitude;
        const lo = position.coords.longitude;
        const {x, y} = LoLa2XY(la, lo);
        context.fillStyle = "red";
        context.beginPath();
        context.arc(x, y, 2, 0, 2*Math.PI);
        context.fill();
    });
}
reloadButton.onclick = () => drawCurrentLocation();

const downloadMap = () => {
    const dataURI = canvas.toDataURL("image/jpeg", 0.5);
    const img = document.createElement("a");
    img.href = `data:img/jpeg;${dataURI}`;
    img.download = `iMapImage${Date.now()}.jpg`;
    img.click();
}
downloadButton.onclick = () => downloadMap();

japanMapImage.onload = () => drawCurrentLocation();