export type Point = {
    longitude: number;
    latitude: number;
    unixTime: number;
    check: boolean;
};

export type MapConfig = {
    leftLongitude: number;
    rightLongitude: number;
    topLatitude: number;
    underLatitude: number;
    width: number;
    height: number;
    drawMap: (canvas: HTMLCanvasElement) => void;
};
