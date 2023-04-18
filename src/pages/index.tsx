import { useState, useEffect, ChangeEvent, useRef } from "react";
import Image from "next/image";
import { Inter } from "next/font/google";
import { getZipcode } from "@uptc/services/zipcode/zipcode";

const inter = Inter({ subsets: ["latin"] });

const filterParam = {
  zipCode: "",
};

export default function Home() {
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState<{
    zipCode: string;
  }>(filterParam);
  const [response, setResponse] = useState<{ data: string }>({
    data: "",
  });
  const timeRef = useRef<any>();

  const handleChange = (e: ChangeEvent) => {
    const { name, value } = e.target as HTMLInputElement;

    clearTimeout(timeRef.current);

    setSearch(value);

    timeRef.current = setTimeout(() => {
      setFilter({ ...filter, [name]: value });
    }, 500);
  };

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const data = await getZipcode(filter.zipCode);
      console.log(data);
      setResponse({ data: data.zipcode });
      setLoading(false);
    };
    fetchData();
  }, [filter]);

  console.log(search);

  return (
    <main className="flex min-h-screen flex-col items-center justify-start p-12 gap-4">
      <div>
        <h1 className="text-4xl font-bold text-center mb-4">
          Buscador de Códigos Postales
        </h1>
      </div>
      <div className="mb-12 flex flex-row gap-3 items-center w-[400px]">
        <input
          type="text"
          name="zipCode"
          value={search || ""}
          onChange={handleChange}
          className="rounded-lg border w-full border-gray-300 p-3 text-md text-black w focus:outline-none focus:border-blue-500"
          placeholder="Search a zip code"
        />
        <button className="rounded-lg bg-blue-500 p-3 text-white hover:bg-blue-700">
          Buscar
        </button>
      </div>
    </main>
  );
}
