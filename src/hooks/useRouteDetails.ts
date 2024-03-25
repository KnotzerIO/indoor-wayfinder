import { useContext, useEffect, useState } from "react";
import { NavigationContext } from "@/pages/Map";
import { NavigationContextType, ObjectItem } from "@/utils/types";
import { isMobile } from "react-device-detect";
import { resetEdges } from "@/utils/navigationHelper";

export function useRouteDetails(allObjects: ObjectItem[]) {
  const { navigation, setNavigation } = useContext(
    NavigationContext
  ) as NavigationContextType;
  const [object, setObject] = useState<ObjectItem | null>(null);
  const [routeDetails, setRouteDetails] = useState({
    routeLength: 0,
    walkingTime: 0,
    rightRouteLength: 0,
  });

  useEffect(() => {
    const fetchObject = async () => {
      try {
        if (!navigation.end) return;
        allObjects.forEach((object) => {
          if (object.objectId === navigation.end) {
            setObject(object);
          }
        });
      } catch (error) {
        console.error(`Error fetching object by ID: ${navigation.end}`, error);
      }
    };

    const calculateRouteDetails = () => {
      const navigationRoutePath = document.getElementById(
        "navigation-route"
      ) as SVGPathElement | null;
      const routeLength = navigationRoutePath?.getTotalLength() || 0;
      const mapRatio = 20.328;
      const walkingSpeed = isMobile ? 1.2 : 1.4; // Adjusted based on context
      const rightRouteLength = Math.round((routeLength / mapRatio) * 10) / 10;
      const walkingTime = Math.round(rightRouteLength / walkingSpeed);

      setRouteDetails({ routeLength, walkingTime, rightRouteLength });
    };

    fetchObject();
    calculateRouteDetails();
  }, [navigation.end]);

  function handleLeave() {
    resetEdges();
    setNavigation((prevNavigation) => ({
      ...prevNavigation,
      end: "",
    }));
  }

  return { object, ...routeDetails, handleLeave };
}
