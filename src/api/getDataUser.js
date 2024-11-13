import { BASEURL } from "./baseUrl";

export const getDataUser = async (userid) => {
    try {
      const response = await fetch(`${BASEURL}/users/${userid}`);
      if (!response.ok) throw new Error("Response was not ok");
      const user = await response.json(); // Await response.json()
      return user;
    } catch (error) {
      console.log(error);
    }
  };
  export default getDataUser;