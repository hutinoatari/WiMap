const mapConfig = {
    leftLongitude: 127.5,
    rightLongitude: 147.5,
    topLatitude: 48.3,
    underLatitude: 28.3,

    width: 120,
    height: 120,
}

let pointDatas = [];

const canvas = document.getElementById("screen");
canvas.width = mapConfig.width;
canvas.height = mapConfig.height;
const context = canvas.getContext("2d");
const addButton = document.getElementById("addButton");
const displayButton = document.getElementById("displayButton");
const downloadButton = document.getElementById("downloadButton");
const historyList = document.getElementById("historyList");
const japanMapImage = new Image();
japanMapImage.src = "japanMap2.png";

const getPointDatas = () => {
    const data = localStorage.getItem("points");
    if(!data) return;
    pointDatas = JSON.parse(data);
}
const setPointDatas = () => {
    const json = JSON.stringify(pointDatas);
    localStorage.setItem("points", json);
}

const deletePoint = (n) => {
    const newData = pointDatas.filter((e, i) => i !== n);
    pointDatas = newData;
    setPointDatas();
    showList();
}

const lonLatToXY = (longitude, latitude) => {
    const x = Math.round((longitude - mapConfig.leftLongitude) / (mapConfig.rightLongitude - mapConfig.leftLongitude) * mapConfig.width);
    const y = Math.round(-(latitude - mapConfig.topLatitude) / (mapConfig.topLatitude - mapConfig.underLatitude) * mapConfig.height);
    return [x, y];
}

const unixTimeToYYYYMMDDhhmm = (unixTime) => {
    const d = new Date(unixTime);
    const year = d.getFullYear();
    const month = d.getMonth()+1;
    const date = d.getDate();
    const hour = d.getHours();
    const minute = d.getMinutes();
    const str = `${year}/${month}/${date} ${(hour+"").padStart(2, "0")}:${(minute+"").padStart(2, "0")}`;
    return str;
}

const showList = () => {
    historyList.textContent = "";
    pointDatas.forEach((pointData, i) => {
        const li = document.createElement("li");
        const button = document.createElement("button");
        button.addEventListener("click", () => deletePoint(i));
        button.textContent = "削除";
        const text =document.createTextNode(unixTimeToYYYYMMDDhhmm(pointData.time));
        li.appendChild(button);
        li.appendChild(text);
        historyList.appendChild(li);
    });
}

const drawJapanMap = () => {
    context.drawImage(japanMapImage, 0, 0, mapConfig.width, mapConfig.height);
}

const drawSinglePoint = (x, y) => {
    context.fillStyle = "red";
    context.fillRect(x-1, y-1, 3, 3);
}

const drawTrail = () => {
    drawJapanMap();
    context.strokeStyle = "orange";
    context.lineWidth = 1;
    context.beginPath();
    for(let i=0; i<pointDatas.length; i+=1){
        if(i == 0) context.moveTo(pointDatas[i].x, pointDatas[i].y);
        context.lineTo(pointDatas[i].x, pointDatas[i].y);
    }
    context.stroke();
    context.fillStyle = "orange";
    for(let i=0; i<pointDatas.length; i+=1){
        if(i == pointDatas.length-1) context.fillStyle = "red";
        context.fillRect(pointDatas[i].x-1, pointDatas[i].y-1, 3, 3);
    }
}

const getCurrentPosition = () => {
    if(!"geolocation" in navigator){
        alert("このブラウザは位置情報に未対応です。");
        return;
    }

    navigator.geolocation.getCurrentPosition((position) => {
        const coordinates = position.coords;
        const latitude = coordinates.latitude;
        const longitude = coordinates.longitude;
        const [x, y] = lonLatToXY(longitude, latitude);
        pointDatas.push({x, y, time: Date.now()});
        setPointDatas();
        showList();
        drawJapanMap();
        drawSinglePoint(x, y);
    }, (err) => {
        alert("データの取得に失敗しました。");
    }, {
        timeout: 5000,
        maximumAge: 0,
    });
}

const downloadMap = () => {
    const dataURI = canvas.toDataURL("image/jpeg", 1);
    const img = document.createElement("a");
    img.href = `data:img/jpeg;${dataURI}`;
    img.download = `iMapImage${Date.now()}.jpg`;
    img.click();
}
downloadButton.onclick = () => downloadMap();

addButton.onclick = () => getCurrentPosition();

displayButton.onclick = () => drawTrail();

japanMapImage.onload = () => drawJapanMap();
getPointDatas();
showList();