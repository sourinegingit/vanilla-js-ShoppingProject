import { BASEURL } from "./baseUrl";

export const getOneProduct=async(id)=>{
try {
    const response=await fetch(`${BASEURL}/Products/${id}`);
    if(!response.ok) throw new Error("Network response was not ok to show detail product");
    const data=await response.jsone();
    console.log("dataId",data);
    return data;
} catch (error) {
    console.log("Failed to fetch products:", error);
    return [];
}
}

export default getOneProduct;