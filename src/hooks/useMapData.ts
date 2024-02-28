// useMapData.ts
import { useState, useEffect } from "react";
import { getObjects, getCategories } from "../services/mapServices";
import { Category, ObjectItem } from "@/utils/types";

function useMapData() {
  const [objects, setObjects] = useState<ObjectItem[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);

  const fetchData = async () => {
    try {
      const objectsData = await getObjects();
      const categoriesData = await getCategories();

      setObjects(objectsData);
      setCategories(categoriesData);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return { objects, categories, refetchData: fetchData };
}

export default useMapData;
