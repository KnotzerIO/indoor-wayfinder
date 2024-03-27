import { ObjectItem } from "@/utils/types";
import { FiNavigation } from "react-icons/fi";
import { DialogBody, DialogHeader } from "../ui/Dialog";

interface ObjectDetailsViewProps {
  object: ObjectItem;
  handleEditClick: () => void;
  objectNavigation: () => void;
}

function ObjectDetailsView({
  object,
  handleEditClick,
  objectNavigation,
}: ObjectDetailsViewProps) {
  const isEditable = import.meta.env.PROD ? false : true;
  return (
    <>
      <DialogHeader>
        <p>{object.categoryName}</p>
      </DialogHeader>
      <DialogBody>
        <div className="mb-6">
          <p className="text-lg font-medium text-gray-900">{object.name}</p>
          <p className="text-md text-gray-700">{object.desc}</p>
        </div>
        <div className="inline-flex rounded-md right-0 bottom-0 p-2 absolute">
          <button
            type="button"
            className="text-white bg-blue-500 hover:bg-blue-800 hover:ring-2 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center"
            onClick={objectNavigation}
          >
            <FiNavigation />
          </button>
        </div>
        {isEditable && (
          <button
            className="text-blue-500 border-0 bg-inherit outline-none"
            onClick={handleEditClick}
            autoFocus={false}
          >
            Edit
          </button>
        )}
      </DialogBody>
    </>
  );
}

export default ObjectDetailsView;
