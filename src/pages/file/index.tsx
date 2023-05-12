import React, { useState } from "react";

import { useRouter } from "next/router";
import { Spinner, Accordion } from "flowbite-react";
import { getZipcodeByFile } from "@uptc/services/zipcode/zipcode";
import CardZipCodes from "@uptc/components/CardZipCodes/CardZipCodes";

const Files = () => {
  const router = useRouter();

  const [loading, setLoading] = useState<boolean>(false);
  const [file, setFile] = useState<File | null>(null);
  const [response, setResponse] = useState({ data: [] });

  const handleFile = async (e: React.ChangeEvent<HTMLInputElement>) => {
    setLoading(true);
    if (e.target!.files) {
      const file = e.target.files[0];

      setFile(file);

      if (file.type !== "text/csv") {
        alert("El archivo debe ser de tipo CSV");
        setLoading(false);
        return;
      }

      const data = await getZipcodeByFile(file);

      setResponse({ data: data?.zipcode });
    }
    setLoading(false);
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-start p-12 gap-2">
      <div className="flex flex-row justify-start w-[900px] gap-10">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => router.push("/")}
        >
          Volver
        </button>
        <label className="text-4xl font-bold text-center" htmlFor="file_input">
          Busqueda por archivo csv
        </label>
      </div>

      <div className="flex flex-col gap-4 items-center justify-center w-[920px] mt-5">
        <div className="flex flex-col gap-3 items-center w-[500px]">
          <input
            className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
            aria-describedby="file_input_help"
            id="file_input"
            type="file"
            onChange={handleFile}
          />
          <p className="mt-1 text-sm text-gray-300" id="file_input_help">
            Solo archivos con la extension .CSV
          </p>
        </div>
      </div>

      <div className="flex flex-col gap-4 items-center justify-center w-[720px]">
        {loading ? (
          <Spinner aria-label="Extra large spinner example" size="xl" />
        ) : (
          <div className="flex flex-col gap-4 w-[920px]">
            {response?.data && response?.data?.length !== 0 && (
              <h3 className="text-left">
                Resultados de la busqueda: {response?.data?.length}
              </h3>
            )}

            {response?.data && response?.data?.length !== 0 ? (
              <Accordion collapseAll={true}>
                {response?.data?.map((zipcode: any, index: number) => (
                  <Accordion.Panel key={index}>
                    <Accordion.Title>
                      {zipcode?.code} - Resultados:{" "}
                      {zipcode?.zipcodes?.length ?? 0}
                    </Accordion.Title>
                    <Accordion.Content>
                      {zipcode?.zipcodes && zipcode?.zipcodes?.length !== 0 ? (
                        <div className="grid grid-cols-4 gap-4">
                          <CardZipCodes zipcodes={zipcode?.zipcodes} />
                        </div>
                      ) : (
                        <p className="text-lg text-center mt-2">
                          {zipcode?.message}
                        </p>
                      )}
                    </Accordion.Content>
                  </Accordion.Panel>
                ))}
              </Accordion>
            ) : (
              <p className="text-lg text-center mt-12">No hay resultados</p>
            )}

            {/* {response?.data && response?.data?.length !== 0 ? (
              <div className="grid grid-cols-4 gap-4">
                <CardZipCodes zipcodes={response?.data} />
              </div>
            ) : (
              <p className="text-lg text-center mt-12">No hay resultados</p>
            )} */}
          </div>
        )}
      </div>
    </div>
  );
};

export default Files;
