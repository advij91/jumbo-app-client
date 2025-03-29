import axiosInstance from "./axiosInstance";

export const getOutlets = async () => {
  const response = axiosInstance.get("/api/outlets");
  return response.data;
}

export const getOutletById = async (id) => {
  const response = axiosInstance.get(`/api/outlets/${id}`);
  return response.data;
}

export async function createOutlet(outletData){
  const response = axiosInstance.post<Outlet>("/api/outlets", outletData);
  return response.data;
}

export async function updateOutlet(id, outletData) {
  const response = axiosInstance.put<Outlet>(`/api/outlets/${id}`, outletData);
  return response.data;
}

export async function deleteOutlet(id) {
  await axiosInstance.delete(`/api/outlets/${id}`);
}