import { useEffect, useState, FC } from "react";
import Head from "next/head";
import { Point, MapConfig } from "../types/data";
import { unixTimeToYYYYMMDDhhmm, pointToX, pointToY } from "../util/util";
import { japanMapConfig } from "../util/mapConfig";

const App: FC<{}> = () => {
    const [mapConfig, setMapConfig] = useState<MapConfig>(japanMapConfig);
    const [pointList, setPointList] = useState<Point[]>([]);
    const [mapImage, setMapImage] = useState<string | null>(null);
    useEffect(() => {
        const data = localStorage.getItem("pointList");
        if (!data) return;
        setPointList(JSON.parse(data));
    }, []);
    useEffect(() => {
        const json = JSON.stringify(pointList);
        localStorage.setItem("pointList", json);
    }, [pointList]);
    useEffect(() => {
        const newPointList = pointList.filter((e) => e.check);
        const canvas = document.createElement("canvas");
        canvas.width = mapConfig.width;
        canvas.height = mapConfig.height;
        mapConfig.drawMap(canvas);
        const context = canvas.getContext("2d");
        context.strokeStyle = "darkorange";
        context.lineWidth = 1;
        context.beginPath();
        for (let i = 0; i < newPointList.length; i += 1) {
            if (i == 0) {
                context.moveTo(
                    pointToX(newPointList[i], mapConfig),
                    pointToY(newPointList[i], mapConfig)
                );
            } else {
                context.lineTo(
                    pointToX(newPointList[i], mapConfig),
                    pointToY(newPointList[i], mapConfig)
                );
            }
        }
        context.stroke();
        context.fillStyle = "darkorange";
        for (let i = 0; i < newPointList.length; i += 1) {
            if (i == newPointList.length - 1) context.fillStyle = "red";
            context.fillRect(
                pointToX(newPointList[i], mapConfig) - 1,
                pointToY(newPointList[i], mapConfig) - 1,
                3,
                3
            );
        }
        setMapImage(canvas.toDataURL("image/jpeg", 1));
    }, [pointList, mapConfig]);
    return (
        <>
            <Head>
                <title>WiMap</title>
                <meta charSet="UTF-8" />
                <meta
                    name="description"
                    content="現在地を繋いで地図上に経路を表示する。"
                />
                <meta name="viewport" content="width=device-width" />
                <meta name="og:title" content="WiMap" />
                <meta
                    name="og:image"
                    content="https://wimap-hutinoatari.vercel.app/ogp.png"
                />
                <meta name="twitter:card" content="summary_large_image" />
            </Head>

            <header>
                <h1>WiMap</h1>
            </header>

            <main>
                <div>{mapImage && <img src={mapImage} />}</div>
                <button
                    onClick={() => {
                        if (!("geolocation" in navigator)) {
                            alert("このブラウザは位置情報に未対応です。");
                            return;
                        }
                        navigator.geolocation.getCurrentPosition(
                            (position) => {
                                const coordinates = position.coords;
                                const longitude = coordinates.longitude;
                                const latitude = coordinates.latitude;
                                setPointList([
                                    ...pointList,
                                    {
                                        longitude,
                                        latitude,
                                        unixTime: Date.now(),
                                        check: true,
                                    },
                                ]);
                            },
                            (err) => {
                                alert("データの取得に失敗しました。");
                            },
                            {
                                timeout: 5000,
                                maximumAge: 0,
                            }
                        );
                    }}
                >
                    現在地取得
                </button>
                <button
                    onClick={() =>
                        setPointList(
                            pointList.map((e) => ({ ...e, check: true }))
                        )
                    }
                >
                    全部表示
                </button>
                <button
                    onClick={() =>
                        setPointList(
                            pointList.map((e) => ({ ...e, check: false }))
                        )
                    }
                >
                    全部非表示
                </button>
                <button
                    onClick={() => {
                        const img = document.createElement("a");
                        img.href = `data:img/jpeg;${mapImage}`;
                        img.download = `WiMapImage${Date.now()}.jpg`;
                        img.click();
                    }}
                >
                    画像取得
                </button>
                <ul>
                    {pointList.map((point, i) => (
                        <li key={`point-${point.unixTime}`}>
                            <input
                                type={"checkbox"}
                                checked={pointList[i].check}
                                onChange={(e) => {
                                    const newList = pointList.map((p, j) =>
                                        j === i
                                            ? { ...p, check: e.target.checked }
                                            : p
                                    );
                                    setPointList(newList);
                                }}
                            />
                            <time>
                                {unixTimeToYYYYMMDDhhmm(point.unixTime)}
                            </time>
                            <button
                                onClick={() => {
                                    if (!window.confirm("本当に削除しますか？"))
                                        return;
                                    const newPointList = pointList.filter(
                                        (_, j) => i !== j
                                    );
                                    setPointList(newPointList);
                                }}
                            >
                                削除
                            </button>
                        </li>
                    ))}
                </ul>
            </main>

            <footer>
                <p>
                    <small>&copy;2021 淵野アタリ</small>
                </p>
            </footer>
        </>
    );
};

export default App;
