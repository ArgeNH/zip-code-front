import { FC } from "react";

import Image from "next/image";

import { Tooltip } from "flowbite-react";

import { Flags } from "@uptc/types/types";

interface PropsFlags {
  countries: Flags[];
}

const Flags: FC<PropsFlags> = ({ countries }) => {
  return (
    <>
      <p className="text-lg text-center">Banderas:</p>
      <div className="flex flex-row gap-2 flex-wrap items-center justify-center">
        {countries?.map((country, idx) => (
          <Tooltip
            key={`${country.code}-${idx}`}
            content={country.name}
            placement="top"
            style="light"
            trigger="hover"
          >
            <Image
              className="mb-3 h-8 w-8"
              src={`https://flagsapi.com/${country.code}/shiny/64.png`}
              alt={"City Flag"}
              width={64}
              height={28}
            />
          </Tooltip>
        ))}
      </div>
    </>
  );
};

export default Flags;
