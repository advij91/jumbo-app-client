import axiosInstance from "./axiosInstance";
import { Outlet } from "../types";

export async function getOutlets(): Promise<Outlet[]> {
  const response = await axiosInstance.get<Outlet[]>("/api/outlets");
  return response.data;
}

export async function getOutletById(id: string): Promise<Outlet> {
  const response = await axiosInstance.get(`/api/outlets/${id}`);
  return response.data;
}

export async function createOutlet(outletData: Outlet): Promise<Outlet> {
  const response = await axiosInstance.post<Outlet>("/api/outlets", outletData);
  return response.data;
}

export async function updateOutlet(id: string, outletData: Outlet): Promise<Outlet> {
  const response = await axiosInstance.put<Outlet>(`/api/outlets/${id}`, outletData);
  return response.data;
}

export async function deleteOutlet(id: string): Promise<void> {
  await axiosInstance.delete(`/api/outlets/${id}`);
}