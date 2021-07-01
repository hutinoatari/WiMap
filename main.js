const mapConfig = {
    leftLongitude: 127.5,
    rightLongitude: 147.5,
    topLatitude: 48.3,
    underLatitude: 28.3,

    width: 120,
    height: 120,
}

const canvas = document.getElementById("screen");
canvas.width = mapConfig.width;
canvas.height = mapConfig.height;
const context = canvas.getContext("2d");
const reloadButton = document.getElementById("reloadButton");
const downloadButton = document.getElementById("downloadButton");
const japanMapImage = new Image();
japanMapImage.src = "japanMap.jpg";

const lonLatToXY = (longitude, latitude) => {
    const x = Math.round((longitude - mapConfig.leftLongitude) / (mapConfig.rightLongitude - mapConfig.leftLongitude) * mapConfig.width);
    const y = Math.round(-(latitude - mapConfig.topLatitude) / (mapConfig.topLatitude - mapConfig.underLatitude) * mapConfig.height);
    return [x, y];
}

const drawCurrentPosition = () => {
    context.drawImage(japanMapImage, 0, 0);

    if(!"geolocation" in navigator){
        alert("このブラウザは未対応です。");
        return;
    }

    navigator.geolocation.getCurrentPosition((position) => {
        const coordinates = position.coords;
        const latitude = coordinates.latitude;
        const longitude = coordinates.longitude;
        const [x, y] = lonLatToXY(longitude, latitude);
        context.fillStyle = "orangered";
        context.fillRect(x-1, y-1, 3, 3);
    }, (err) => {
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