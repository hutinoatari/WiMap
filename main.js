const mapConfig = {
    leftLongitude: 127.2,
    rightLongitude: 149.7,
    topLatitude: 46.7,
    underLatitude: 29.1,

    width: 512,
    height: 512,
}

const canvas = document.getElementById("screen");
canvas.width = mapConfig.width;
canvas.height = mapConfig.height;
const context = canvas.getContext("2d");
const reloadButton = document.getElementById("reloadButton");
const downloadButton = document.getElementById("downloadButton");
const japanMapImage = new Image();
japanMapImage.src = "japanMap.png";

const lonLatToXY = (longitude, latitude) => {
    const x = Math.round((longitude - mapConfig.leftLongitude) / (mapConfig.rightLongitude - mapConfig.leftLongitude) * mapConfig.width);
    const y = Math.round(-(latitude - mapConfig.topLatitude) / (mapConfig.topLatitude - mapConfig.underLatitude) * mapConfig.height);
    return [x, y];
}

const drawCurrentPosition = () => {
    context.drawImage(japanMapImage, 0, 0, mapConfig.width, mapConfig.height);

    if(!"geolocation" in navigator){
        alert("このブラウザは位置情報に未対応です。");
        return;
    }

    navigator.geolocation.getCurrentPosition((position) => {
        const coordinates = position.coords;
        const latitude = coordinates.latitude;
        const longitude = coordinates.longitude;
        const [x, y] = lonLatToXY(longitude, latitude);
        context.fillStyle = "red";
        context.beginPath();
        context.arc(x, y, 4, 0, Math.PI*2);
        context.fill();
    }, (err) => {
        console.error(err);
        alert("データの取得に失敗しました。");
    }, {
        timeout: 5000,
        maximumAge: 0,
    });
}
reloadButton.onclick = () => drawCurrentPosition();

const downloadMap = () => {
    const dataURI = canvas.toDataURL("image/jpeg", 1);
    const img = document.createElement("a");
    img.href = `data:img/jpeg;${dataURI}`;
    img.download = `iMapImage${Date.now()}.jpg`;
    img.click();
}
downloadButton.onclick = () => downloadMap();

japanMapImage.onload = () => drawCurrentPosition();