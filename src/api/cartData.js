import { BASEURL } from "./baseUrl";

// سبد خرید
export const cartdata = async () => {
  const response = await fetch(`${BASEURL}/users/1`);
  const data = await response.json();
  return data;
};
