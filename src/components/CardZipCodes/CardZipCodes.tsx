import { FC } from "react";

import Image from "next/image";
import Link from "next/link";

import { Card } from "flowbite-react";

import { Zipcode } from "@uptc/types/types";

interface PropsCardZipCodes {
  zipcodes: Zipcode[];
}

const CardZipCodes: FC<PropsCardZipCodes> = ({ zipcodes }) => {
  return (
    <>
      {zipcodes?.map((zipcode) => (
        <div className="w-auto" key={zipcode?._id}>
          <Card
            className="bg-slate-800 rounded-md border border-slate-500"
            style={{ backgroundColor: "#1F2937" }}
          >
            <div className="flex flex-col items-center pb-10">
              <Image
                className="mb-3 h-24 w-24"
                src={`https://flagsapi.com/${zipcode.country_code}/shiny/64.png`}
                alt={zipcode?.country_name ?? "City Flag"}
                width={144}
                height={108}
              />
              <h5 className="mb-1 text-xl truncate font-medium text-white dark:text-white">
                {zipcode?.city ? zipcode?.city : "No city"}
              </h5>
              <span className="text-sm truncate	 text-gray-400 dark:text-gray-400">
                {zipcode?.country_name && zipcode?.country_name}
              </span>
              <span className="text-sm truncate	 text-gray-400 dark:text-gray-400">
                {zipcode?.province && zipcode?.province}
              </span>
              <span className="text-sm truncate	 text-gray-400 dark:text-gray-400">
                {zipcode?.state && zipcode?.state}
              </span>
              <div className="mt-4 flex space-x-3 lg:mt-6">
                {zipcode?.latitude !== "0.00000000" &&
                zipcode?.longitude !== "0.00000000" ? (
                  <Link
                    className="inline-flex items-center rounded-lg bg-blue-700 py-2 px-4 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    href={`/map/${zipcode?.latitude}/${zipcode?.longitude}`}
                  >
                    Ver en el mapa
                  </Link>
                ) : (
                  <button
                    disabled
                    className="inline-flex items-center rounded-lg bg-gray-500 py-2 px-4 text-center text-sm font-medium text-white focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
                  >
                    Ver en el mapa
                  </button>
                )}
              </div>
            </div>
          </Card>
        </div>
      ))}
    </>
  );
};

export default CardZipCodes;
