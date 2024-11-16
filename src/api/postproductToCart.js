import { BASEURL } from "./baseUrl";

export const postproductone = async (userid, data) => {

  
  try {
    const response = await fetch(`${BASEURL}/users/${userid}`, {
      method: 'PATCH', 
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({cart:data}), // Convert the data object to JSON
    });

    if (!response.ok) {
      throw new Error(`Error: ${response.status} ${response.statusText}`);
    }

    const updatedUser = await response.json();
    return updatedUser;
  } catch (error) {
    console.error('Error updating product:', error);
    throw error; 
  }
};
