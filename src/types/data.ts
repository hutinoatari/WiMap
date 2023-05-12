export type Point = {
    longitude: number;
    latitude: number;
    unixTime: number;
    check: boolean;
};

export type MapConfig = {
    title: string;
    leftLongitude: number;
    rightLongitude: number;
    topLatitude: number;
    underLatitude: number;
    width: number;
    height: number;
    lineSize: number;
    drawMap: (canvas: HTMLCanvasElement) => void;
};
