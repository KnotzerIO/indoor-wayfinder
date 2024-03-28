import { useRouteDetails } from "@/hooks/useRouteDetails";
import { FaX } from "react-icons/fa6";
import { TbRoute } from "react-icons/tb";

function MobileRouteDetails() {
  const { object, rightRouteLength, walkingTime, handleLeave } =
    useRouteDetails();
  return (
    <div className="absolute navigation-info-pulse bottom-0 left-0 right-0 mx-auto w-full bg-white border-t border-blue-300 shadow-lg rounded-t-lg overflow-hidden">
      <button className="absolute right-2 top-2" onClick={handleLeave}>
        <FaX className="text-gray-400" />
      </button>

      <div className="p-4 pb-0">
        <h1 className="text-gray-900 text-xl font-semibold mb-1">
          {object?.name}
        </h1>
        <p className="text-gray-500 text-sm">{object?.categoryName}</p>
      </div>
      <div className="bg-gray-200 text-gray-900 px-3 py-1 center w-fit rounded-md text-sm font-semibold m-3">
        <TbRoute className="inline-block mr-1" />
        {walkingTime} seconds away - {rightRouteLength} meters
      </div>
    </div>
  );
}

export default MobileRouteDetails;
