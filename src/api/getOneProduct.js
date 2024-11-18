import { BASEURL } from "./baseUrl";

export const getOneProduct = async (id) => {
  try {
    const response = await fetch(`${BASEURL}/Products/${id}`);
    // console.log(response);

    if (!response.ok)
      throw new Error("Network response was not ok to show detail product");
    const data = await response.json();
    // console.log("dataId",data);
    return data;
  } catch (error) {
    console.log("Failed to fetch products:", error);
    return [];
  }
};

export default getOneProduct;
