import { Point, MapConfig } from "../types/data";

const unixTimeToYYYYMMDDhhmm = (unixTime: number): string => {
    const d = new Date(unixTime);
    const year = d.getFullYear();
    const month = d.getMonth() + 1;
    const date = d.getDate();
    const hour = d.getHours();
    const minute = d.getMinutes();
    const YYYYMMDDhhmm = `${year}/${month}/${date} ${(hour + "").padStart(
        2,
        "0"
    )}:${(minute + "").padStart(2, "0")}`;
    return YYYYMMDDhhmm;
};

const pointToX = (point: Point, mapConfig: MapConfig): number => {
    const x = Math.round(
        ((point.longitude - mapConfig.leftLongitude) /
            (mapConfig.rightLongitude - mapConfig.leftLongitude)) *
            mapConfig.width
    );
    return x;
};
const pointToY = (point: Point, mapConfig: MapConfig): number => {
    const y = Math.round(
        (-(point.latitude - mapConfig.topLatitude) /
            (mapConfig.topLatitude - mapConfig.underLatitude)) *
            mapConfig.height
    );
    return y;
};

export { unixTimeToYYYYMMDDhhmm, pointToX, pointToY };
