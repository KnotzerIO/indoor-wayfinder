import { ObjectItem } from "@/utils/types";
import { FiNavigation } from "react-icons/fi";
import { Dialog, DialogBody, DialogHeader } from "./ui/Dialog";

interface ObjectItemDetailsDialogProps {
  open: boolean;
  onClose: () => void;
  object: ObjectItem;
  objectNavigation: () => void;
}

function ObjectItemDetailsDialog({
  open,
  onClose,
  object,
  objectNavigation,
}: ObjectItemDetailsDialogProps) {
  return (
    <>
      <Dialog
        open={open}
        handler={() => {
          onClose();
        }}
      >
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
        </DialogBody>
      </Dialog>
    </>
  );
}

export default ObjectItemDetailsDialog;
