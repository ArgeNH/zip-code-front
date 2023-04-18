export const getZipcode = async (zipcode: string) => {
  const res = await fetch(`http://127.0.0.1:8000/zipcode/${zipcode}`);
  const data = await res.json();
  console.log(data);
  return data;
};
