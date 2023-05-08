import { ResponseZipCode } from "@uptc/types/types";

export const getZipcode = async (
  zipcode: string
): Promise<ResponseZipCode | any> => {
  try {
    const res = await fetch(`http://127.0.0.1:8000/zipcode/${zipcode}`);
    const data: ResponseZipCode = await res.json();
    return data;
  } catch (error: Error | any) {
    return error.message;
  }
};

export const getZipcodeByFile = async (file: File) => {
  try {
    const formData = new FormData();
    formData.append("file", file);
    const res = await fetch(`http://127.0.0.1:8000/zipcode/upload_file`, {
      method: "POST",
      body: formData,
    });
    const data = await res.json();
    return data;
  } catch (error: Error | any) {
    return error.message;
  }
};
