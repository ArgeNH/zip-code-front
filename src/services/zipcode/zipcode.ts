import { ResponseZipCode } from "@uptc/types/types";

export const getZipcode = async (zipcode: string): Promise<ResponseZipCode> => {
  const res = await fetch(`http://127.0.0.1:8000/zipcode/${zipcode}`);
  const data: ResponseZipCode = await res.json();
  return data;
};
