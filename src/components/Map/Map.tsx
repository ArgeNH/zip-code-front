import { FC } from "react";

interface PropsMap {
  latitude: string;
  longitude: string;
}

const Map: FC<PropsMap> = ({ latitude, longitude }) => {
  return (
    <>
      <iframe
        src={`https://embed.waze.com/iframe?zoom=15&lat=${latitude}&lon=${longitude}&pin=1`}
        width="100%"
        height="820"
      ></iframe>
    </>
  );
};

export default Map;
