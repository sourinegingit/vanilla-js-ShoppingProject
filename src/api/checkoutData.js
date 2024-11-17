import { BASEURL } from "./baseUrl";

export const checkoutdata = async () => {
    const res=await fetch(`${BASEURL}/users/1`);
    const data=await res.json();
    return data
};
