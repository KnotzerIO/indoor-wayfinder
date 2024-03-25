import { useContext, useState } from "react";
import { MapDataContextType, ObjectItem } from "@/utils/types";
import { FiNavigation } from "react-icons/fi";
import {
  updateObject,
  createCategory,
  deleteCategory,
} from "../../services/mapServices";
import { FaTrashAlt } from "react-icons/fa";
import { MapDataContext } from "@/pages/Map";
import { Dialog, DialogHeader, DialogBody } from "../ui/Dialog";

interface ObjectItemDetailsModalProps {
  open: boolean;
  onClose: () => void;
  object: ObjectItem;
  objectNavigation: () => void;
}

function ObjectItemDetailsModal({
  open,
  onClose,
  object,
  objectNavigation,
}: ObjectItemDetailsModalProps) {
  const [isEditMode, setIsEditMode] = useState(false);
  const [editedCategoryId, setEditedCategoryId] = useState("");
  const [editedObjectName, setEditedObjectName] = useState("");
  const [editedObjectDescription, setEditedObjectDescription] = useState("");
  const [isNewCategoryModalOpen, setNewCategoryModalOpen] = useState(false);
  const [newCategoryName, setNewCategoryName] = useState("");
  const [isEditable, setIsEditable] = useState(false);
  const { categories, refetchData } = useContext(
    MapDataContext
  ) as MapDataContextType;
  const handleEditClick = () => {
    setEditedCategoryId(object.categoryId);
    setEditedObjectName(object.name);
    setEditedObjectDescription(object.desc);
    setIsEditMode(true);
  };

  async function handleSaveChanges() {
    try {
      console.log(JSON.stringify(object));
      console.log("Edited Object:", {
        objectId: object.objectId,
        categoryId: editedCategoryId,
        name: editedObjectName,
        desc: editedObjectDescription,
      });
      await updateObject(object.id, {
        categoryId: editedCategoryId,
        name: editedObjectName,
        desc: editedObjectDescription,
      });
      refetchData();
      setIsEditMode(false);
      onClose();
    } catch (error) {
      console.error("Error updating object:", error);
    }
  }

  async function handleNewCategorySave() {
    try {
      const newCategory = await createCategory({ name: newCategoryName });
      console.log("New Category:", newCategory);
      refetchData();
      setNewCategoryModalOpen(false);
    } catch (error) {
      console.error("Error creating category:", error);
    }
  }

  async function handleCategoryDelete(categoryId: string) {
    try {
      await deleteCategory(categoryId);
      await categories;
      await refetchData();
    } catch (error) {
      console.error("Error deleting category:", error);
    }
  }

  return (
    <>
      {/* Object Details Modal */}
      <Dialog
        open={open}
        handler={() => {
          onClose();
          setIsEditMode(false);
        }}
      >
        <DialogHeader>
          {isEditMode ? (
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
          ) : (
            <p>{object.categoryName}</p>
          )}
        </DialogHeader>
        <div className="w-20 h-[2px] mx-auto bg-blue-900 border-0 rounded "></div>
        <DialogBody>
          {isEditMode ? (
            <>
              <input
                type="text"
                className="w-full mb-2 p-2 border border-gray-300 rounded text-black"
                placeholder={object.name}
                value={editedObjectName}
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
            </>
          ) : (
            <div className="mb-6">
              <p
                className="text-lg font-medium text-gray-900"
                onDoubleClick={() => setIsEditable(!isEditable)}
              >
                {object.name}
              </p>
              <p className="text-md text-gray-700">{object.desc}</p>
            </div>
          )}

          {!isEditMode && (
            <div className="inline-flex rounded-md right-0 bottom-0 p-2 absolute">
              <button
                type="button"
                className="text-white bg-blue-500 hover:bg-blue-800 hover:ring-2 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center"
                onClick={objectNavigation}
              >
                <FiNavigation />
              </button>
            </div>
          )}

          {!isEditMode && isEditable && (
            <button
              className="text-blue-500 border-0 bg-inherit outline-none"
              onClick={handleEditClick}
              autoFocus={false}
            >
              Bearbeiten
            </button>
          )}
        </DialogBody>
      </Dialog>

      {/* New Category Modal */}
      <Dialog
        open={isNewCategoryModalOpen}
        handler={() => setNewCategoryModalOpen(false)}
      >
        <DialogHeader>
          <p>Neue Kategorie erstellen</p>
        </DialogHeader>
        <div className="w-20 h-[2px] mx-auto bg-blue-900 border-0 rounded "></div>
        <DialogBody>
          <input
            type="text"
            className="w-full mb-2 p-2 border border-gray-300 rounded"
            placeholder="New Category Name"
            value={newCategoryName}
            onChange={(e) => setNewCategoryName(e.target.value)}
          />
          <button
            className="mt-4 text-green-500 cursor-pointer"
            onClick={handleNewCategorySave}
          >
            Save New Category
          </button>
        </DialogBody>
      </Dialog>
    </>
  );
}

export default ObjectItemDetailsModal;
