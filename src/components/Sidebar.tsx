import logo from "../assets/img/pathpal-logo.svg";
import { FiChevronRight } from "react-icons/fi";
import { useContext, useEffect, useState } from "react";
import {
  MapDataContextType,
  NavigationContextType,
  ObjectItem,
} from "@/utils/types";
import { MapDataContext, NavigationContext } from "../pages/Map";

import { navigateToObject } from "@/utils/navigationHelper";

interface ParsedObjects {
  [key: string]: {
    len: number;
    results: ObjectItem[];
  };
}

function Sidebar() {
  const { navigation, setNavigation, setIsEditMode } = useContext(
    NavigationContext
  ) as NavigationContextType;
  const { objects } = useContext(MapDataContext) as MapDataContextType;
  const [parsedObjects, setParsedObjects] = useState<ParsedObjects>({});
  const [isRotating, setIsRotating] = useState(false);
  useEffect(() => {
    const groupedObjects = () => {
      const data: ParsedObjects = {};
      objects.forEach((object) => {
        const firstLetter = object.name.charAt(0).toUpperCase();
        if (!data[firstLetter]) {
          data[firstLetter] = {
            len: 0,
            results: [],
          };
        }
        data[firstLetter].results.push(object);
        data[firstLetter].len += 1;
      });
      setParsedObjects(data);
    };
    groupedObjects();
  }, [objects]);

  function handleObjectNavigation(selectedObjectName: string) {
    const object = objects.find((obj) => obj.name === selectedObjectName);
    setIsEditMode(false);
    if (!object) return;
    console.log(object);
    navigateToObject(object.name, navigation, setNavigation);
  }

  return (
    <aside className="flex flex-col rounded-none w-[35rem] h-screen p-3 bg-white shadow-xl shadow-gray-200 -translate-x-full transform transition-transform duration-150 ease-in lg:translate-x-0 lg:shadow-md ">
      <header className="flex flex-col mb-4 pr-1 border-b py-2 w-full">
        <a
          href="https://github.com/openindoormap/openindoormaps"
          target="_blank"
          rel="noreferrer"
          className="font-semibold text-blue-800 text-xs"
        >
          <div className="flex items-center p-2 mb-4 text-blue-800 border border-blue-300 rounded-lg bg-blue-50">
            <svg
              className="flex-shrink-0 inline w-4 h-4 me-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
            </svg>
            Check out my new project OpenIndoorMaps
          </div>
        </a>
        <div className="flex items-center flex-none mr-10">
          <div className="rounded-md w-16 h-16 p-4 bg-gray-100 center">
            <img
              src={logo}
              alt="PathPal"
              className={` ${isRotating ? "rotate" : ""}`}
              onClick={() => setIsRotating(true)}
              onAnimationEnd={() => setIsRotating(false)}
            />
          </div>
          <div className="flex flex-col">
            <div className="flex flex-col">
              <p className="text-2xl font-semibold text-gray-900 pl-2">
                PathPal
              </p>
              <p className="text-sm font-semibold text-[#225EA9] pl-2">
                Indoor-Navigation
              </p>
            </div>
          </div>
        </div>
      </header>
      <div className="overflow-auto h-full">
        {Object.keys(parsedObjects)
          .sort()
          .map((letter, index) => (
            <div key={index} className="mb-4">
              <header className="p-2">
                <h2 className="text-2xl font-bold">
                  {letter}
                  <span className="ml-2 text-sm font-medium text-gray-900">
                    - {parsedObjects[letter].len}{" "}
                    {parsedObjects[letter].len === 1 ? "Result" : "Results"}
                  </span>
                </h2>
              </header>
              <div className="flex flex-col ">
                {parsedObjects[letter].results.map((item) => (
                  <div
                    key={item.id?.toString()}
                    data-product={item.name}
                    className="flex bg-[#f4faff] m-1 px-4 py-2 shadow-sm rounded-md cursor-pointer h-auto hover:bg-[#e4f2ff]"
                    onClick={() => handleObjectNavigation(item.name)}
                  >
                    <div className="m-1">
                      <p className="text-xs 2xl:text-sm font-semibold">
                        {item.name}
                      </p>
                      <p className="text-xs 2xl:text-sm  text-gray-600">
                        {item.desc}
                      </p>
                    </div>
                    <div className="center ml-auto h-auto center text-xl text-blue-300">
                      <FiChevronRight />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
      </div>
    </aside>
  );
}
export default Sidebar;
