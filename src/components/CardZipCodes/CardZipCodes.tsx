import { FC } from "react";
import Image from "next/image";
import { Card } from "flowbite-react";

interface PropsCardZipCodes {
  // TODO
  zipcodes: any[] | null;
}

const CardZipCodes: FC<PropsCardZipCodes> = ({ zipcodes }) => {
  console.log(zipcodes);

  return (
    <>
      {zipcodes?.map((zipcode) => (
        <div className="w-auto" key={zipcode?._id}>
          <Card className="bg-slate-800 rounded-md border border-slate-500">
            <div className="flex flex-col items-center pb-10">
              <Image
                className="mb-3 h-24 w-24 rounded-full shadow-lg"
                src="https://flowbite.com/docs/images/people/profile-picture-3.jpg"
                alt="Bonnie image"
                width={96}
                height={96}
              />
              <h5 className="mb-1 text-xl truncate font-medium text-white dark:text-white">
                {zipcode?.city ? zipcode?.city : "No city"}
              </h5>
              <span className="text-sm truncate	 text-gray-400 dark:text-gray-400">
                {zipcode?.country_code && zipcode?.country_code}
              </span>
              <span className="text-sm truncate	 text-gray-400 dark:text-gray-400">
                {zipcode?.province && zipcode?.province}
              </span>
              <div className="mt-4 flex space-x-3 lg:mt-6">
                <a
                  href="#"
                  className="inline-flex items-center rounded-lg bg-blue-700 py-2 px-4 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Ver en el mapa
                </a>
              </div>
            </div>
          </Card>
        </div>
      ))}
    </>
  );
};

export default CardZipCodes;
