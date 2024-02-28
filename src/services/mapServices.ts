import { Beacon, Category, ObjectItem } from "@/utils/types";
import { ObjectId } from "mongodb";
import apiService from "./apiService";

export async function getObjects(): Promise<ObjectItem[]> {
  try {
    const response = await apiService.get("/objects");
    return response.data as ObjectItem[];
  } catch (error) {
    console.error("Error fetching objects:", error);
    throw error;
  }
}

export async function getObjectByObjectId(_id: string): Promise<ObjectItem> {
  try {
    const response = await apiService.get(`/objects/${_id}`);
    return response.data as ObjectItem;
  } catch (error) {
    console.error(`Error fetching object with ID ${_id}:`, error);
    throw error;
  }
}

export async function getCategories(): Promise<Category[]> {
  try {
    const response = await apiService.get("/categories");
    return response.data as Category[];
  } catch (error) {
    console.error("Error fetching categories:", error);
    throw error;
  }
}

export async function createCategory(
  newCategory: Partial<Category>
): Promise<Category | null> {
  try {
    const response = await apiService.post("/categories", newCategory);
    return response.data as Category;
  } catch (error) {
    console.error("Error creating category:", error);
    throw error;
  }
}

export async function deleteCategory(_id: string): Promise<void> {
  try {
    await apiService.delete(`/categories/${_id}`);
  } catch (error) {
    console.error(`Error deleting category with ID ${_id}:`, error);
    throw error;
  }
}

export async function updateObject(
  _id: string,
  updatedData: Partial<ObjectItem>
): Promise<ObjectItem | null> {
  try {
    const response = await apiService.put(`/objects/${_id}`, updatedData);
    return response.data as ObjectItem;
  } catch (error) {
    console.error(`Error updating object with ID ${_id}:`, error);
    throw error;
  }
}

export async function updateCategory(
  _id: ObjectId,
  updatedData: Partial<Category>
): Promise<Category | null> {
  try {
    const response = await apiService.put(`/categories/${_id}`, updatedData);
    return response.data as Category;
  } catch (error) {
    console.error(`Error updating category with ID ${_id}:`, error);
    throw error;
  }
}

export async function getBeacon(): Promise<Beacon[]> {
  try {
    const response = await apiService.get("/fingerprints");
    return response.data as Beacon[];
  } catch (error) {
    console.error("Error fetching beacons:", error);
    throw error;
  }
}
