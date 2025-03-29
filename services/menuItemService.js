import axiosInstance from "./axiosInstance";
const pubBucketURL = process.env.NEXT_PUBLIC_BUCKET_URL;

export async function getMenuItems() {
  const response = await axiosInstance.get("/api/items");
  const items = response.data;

  // Map through items to replace mainurl and remove bucket name
  return items.map((item) => ({
    ...item,
    imageUrl: item.imageUrl ? item.imageUrl.replace(/^https?:\/\/[^/]+\/[^/]+/, pubBucketURL) : "", // Replace mainurl and bucket name with pubBucketURL
  }));
}

export async function getMenuItemById(id) {
  const response = await axiosInstance.get<MenuItem>(`/api/items/${id}`);
  const item = response.data;

  // Replace mainurl and remove bucket name
  return {
    ...item,
    imageUrl: item.imageUrl.replace(/^https?:\/\/[^/]+\/[^/]+/, pubBucketURL), // Replace mainurl and bucket name with pubBucketURL
  };
}

export async function deleteMenuItem(id) {
  await axiosInstance.delete(`/api/items/${id}`);
}

// Upload a new menu item
export async function uploadMenuItem(formData) {
  const response = await axiosInstance.post<MenuItem>("/api/item/upload", formData, {
    headers: {
      "Content-Type": "multipart/form-data", // Ensure the request is sent as form-data
    },
  });
  return response.data;
}