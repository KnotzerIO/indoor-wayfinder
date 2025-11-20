import IndoorMapWrapper from "@/components/IndoorMapWrapper";
import MobileRouteDetails from "@/components/MobileRouteDetails";
import Toolbar from "@/components/Toolbar";
import { createContext, useEffect, useState } from "react";
import { isDesktop, isMobile } from "react-device-detect";
import { useSearchParams } from "react-router-dom";
import {
  MapDataContextType,
  Navigation,
  NavigationContextType,
  ObjectItem,
  Category,
} from "../utils/types";
import Sidebar from "@/components/Sidebar";
import db from "@/assets/db.json";

export const NavigationContext = createContext<NavigationContextType | null>(
  null
);
export const MapDataContext = createContext<MapDataContextType | null>(null);
function Map() {
  let [searchParams, setSearchParams] = useSearchParams();
  const DEFAULT_POSITION = "v35";
  const startPosition = searchParams.get("position") || DEFAULT_POSITION;
  const [navigation, setNavigation] = useState<Navigation>({
    start: startPosition,
    end: "",
  });
  const [isEditMode, setIsEditMode] = useState<boolean>(false);
  const navigationValue: NavigationContextType = {
    navigation,
    setNavigation,
    isEditMode,
    setIsEditMode,
  };
  const categories: Category[] = db.categories;
  const objects = (): ObjectItem[] => {
    const objectsData: ObjectItem[] = db.objects;
    // Add categoryName to each object
    objectsData.forEach((obj) => {
      obj.categoryName = categories.find(
        (cat) => cat.id === obj.categoryId
      )?.name;
    });
    return objectsData;
  };

  useEffect(() => {
    setSearchParams({ position: navigation.start });
  }, [navigation.start]);

  const mapData = { objects: objects(), categories };
  return (
    <MapDataContext.Provider value={mapData}>
      <NavigationContext.Provider value={navigationValue}>
        <div className="flex bg-gray-100 text-gray-800 relative overflow-hidden w-full h-screen">
          {isDesktop && <Sidebar />}
          <main
            className={`flex w-full ${isDesktop && "-ml-96"} justify-center flex-grow flex-col md:p-10 p-2 transition-all duration-150 ease-in lg:ml-0`}
          >
            <Toolbar />
            <div className="center w-full h-full">
              <IndoorMapWrapper />
            </div>
          </main>
          {navigation.end && isMobile && <MobileRouteDetails />}
        </div>
      </NavigationContext.Provider>
    </MapDataContext.Provider>
  );
}

export default Map;
