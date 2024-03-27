import { MapDataContext } from "@/pages/Map";
import { MapDataContextType, ObjectItem } from "@/utils/types";
import { useContext } from "react";
import { FaTrashAlt } from "react-icons/fa";
import { DialogBody, DialogHeader } from "../ui/Dialog";

interface ObjectEditViewProps {
  object: ObjectItem;
  editedCategoryId: string;
  setEditedCategoryId: (value: string) => void;
  setNewCategoryModalOpen: (value: boolean) => void;
  editedObjectName: string;
  setEditedObjectName: (value: string) => void;
  handleCategoryDelete: (categoryId: string) => void;
  editedObjectDescription: string;
  setEditedObjectDescription: (value: string) => void;
  handleSaveChanges: () => void;
}

function ObjectEditView({
  object,
  editedCategoryId,
  setEditedCategoryId,
  setNewCategoryModalOpen,
  editedObjectName,
  setEditedObjectName,
  handleCategoryDelete,
  editedObjectDescription,
  setEditedObjectDescription,
  handleSaveChanges,
}: ObjectEditViewProps) {
  const { categories } = useContext(MapDataContext) as MapDataContextType;

  return (
    <>
      <DialogHeader>
        <div className="flex items-center">
          <select
            className="border border-gray-300 bg-inherit p-2 rounded mr-2"
            value={editedCategoryId}
            onChange={(e) => {
              const selectedValue = e.target.value;
              setEditedCategoryId(selectedValue);
              if (selectedValue === "new_category") {
                setNewCategoryModalOpen(true);
              }
            }}
          >
            {categories.map((category) => (
              <option key={category.id} value={category.id}>
                {category.name}
              </option>
            ))}
            <option
              value="new_category"
              onClick={() => setNewCategoryModalOpen(true)}
            >
              + Neue Kategorie
            </option>
          </select>

          <button
            className="text-red-500 cursor-pointer"
            onClick={() => handleCategoryDelete(editedCategoryId)}
          >
            <FaTrashAlt />
          </button>
        </div>
      </DialogHeader>
      <DialogBody>
        {/* Object name is disabled because it should not be changed, it's used as an identifier in this code */}
        <input
          type="text"
          className="w-full mb-2 p-2 rounded text-black"
          placeholder={object.name}
          value={editedObjectName}
          disabled
          onChange={(e) => setEditedObjectName(e.target.value)}
        />
        <textarea
          className="w-full mb-2 p-2 border border-gray-300 rounded resize-none"
          placeholder={object.desc}
          value={editedObjectDescription}
          onChange={(e) => setEditedObjectDescription(e.target.value)}
        />

        <button
          className="mt-4 text-green-500 cursor-pointer"
          onClick={handleSaveChanges}
        >
          Änderungen speichern
        </button>
      </DialogBody>
    </>
  );
}

export default ObjectEditView;
