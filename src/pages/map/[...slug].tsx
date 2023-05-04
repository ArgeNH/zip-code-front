import React from "react";
import { useRouter } from "next/router";

import Map from "@uptc/components/Map/Map";

const Mapping = () => {
  const router = useRouter();
  const { slug = [] } = router.query;

  const [latitude, longitude] = slug as string[];

  return (
    <div className="flex min-h-screen flex-col items-center justify-start p-12 gap-5">
      <div className="flex flex-row justify-start w-[900px] gap-10">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => router.push("/")}
        >
          Volver
        </button>
        <h1 className="text-4xl font-bold text-center">Mapa de la zona</h1>
      </div>
      <Map latitude={latitude} longitude={longitude} />
    </div>
  );
};

export default Mapping;
