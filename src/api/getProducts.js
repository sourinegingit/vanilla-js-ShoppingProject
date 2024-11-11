import { BASEURL } from "./baseUrl";

export const getProducts = async () => {
    try {
      const response = await fetch(`${BASEURL}/Products`);
      if (!response.ok) throw new Error("Network response was not ok");
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Failed to fetch products:", error);
      return []; // Return an empty array if there’s an error.
    }
  };
  
  export default getProducts;
