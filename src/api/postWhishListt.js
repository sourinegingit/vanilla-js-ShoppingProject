import { BASEURL } from "./baseUrl";
export const AddFavorites = async (id, updatedWishlist) => {
  console.log("Updating wishlist for user id", id, "with new wishlist", updatedWishlist);

  // Fetch the current user to get all their existing data
  const response = await fetch(`${BASEURL}/users/${id}`);
  if (!response.ok) {
    console.error("Error fetching user data");
    throw new Error("Error fetching user data");
  }
  const user = await response.json();

  const updatedUser = {
    ...user, 
    wishlist: updatedWishlist, // Update the wishlist with the new data
  };

  // Send the updated user object back to the backend
  const updateResponse = await fetch(`${BASEURL}/users/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(updatedUser), // Send the whole user object, including updated wishlist
  });

  if (!updateResponse.ok) {
    console.error("Network error during update");
    throw new Error("Network error during update");
  }

  // Return the updated user object (including the new wishlist)
  const updatedUserFromDb = await updateResponse.json();
  return updatedUserFromDb;
};
