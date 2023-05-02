import React from "react";
import { useRouter } from "next/router";

import Map from "@uptc/components/Map/Map";

const Mapping = () => {
  const router = useRouter();
  const { slug } = router.query;

  const [latitude, longitude] = slug as string[];

  return <Map latitude={latitude} longitude={longitude} />;
};

export default Mapping;
