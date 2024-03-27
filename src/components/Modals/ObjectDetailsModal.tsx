import { MapDataContext } from "@/pages/Map";
import { MapDataContextType, ObjectItem } from "@/utils/types";
import { useContext, useState } from "react";
import {
  createCategory,
  deleteCategory,
  updateObject,
} from "../../services/mapServices";
import { Dialog } from "../ui/Dialog";
import NewCategoryModal from "./NewCategoryModal";
import ObjectDetailsView from "./ObjectDetailsView";
import ObjectEditView from "./ObjectEditView";

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
  //TODO: Refactor this mess
  const [isEditMode, setIsEditMode] = useState(false);
  const [editedCategoryId, setEditedCategoryId] = useState("");
  const [editedObjectName, setEditedObjectName] = useState("");
  const [editedObjectDescription, setEditedObjectDescription] = useState("");
  const [isNewCategoryModalOpen, setNewCategoryModalOpen] = useState(false);
  const [newCategoryName, setNewCategoryName] = useState("");
  const { refetchData } = useContext(MapDataContext) as MapDataContextType;
  const handleEditClick = () => {
    setEditedCategoryId(object.categoryId);
    setEditedObjectName(object.name);
    setEditedObjectDescription(object.desc);
    setIsEditMode(true);
  };

  async function handleSaveChanges() {
    try {
      await updateObject(object.id, {
        id: object.id,
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

  async function handleSaveNewCategory() {
    try {
      await createCategory({ name: newCategoryName });
      setEditedCategoryId(newCategoryName);
      setNewCategoryName("");
      refetchData();
      setNewCategoryModalOpen(false);
    } catch (error) {
      console.error("Error creating category:", error);
    }
  }

  async function handleCategoryDelete(categoryId: string) {
    try {
      await deleteCategory(categoryId);
      refetchData();
    } catch (error) {
      console.error("Error deleting category:", error);
    }
  }

  return (
    <>
      <Dialog
        open={open}
        handler={() => {
          onClose();
          setIsEditMode(false);
        }}
      >
        {isEditMode ? (
          <ObjectEditView
            object={object}
            editedCategoryId={editedCategoryId}
            setEditedCategoryId={setEditedCategoryId}
            setNewCategoryModalOpen={setNewCategoryModalOpen}
            editedObjectName={editedObjectName}
            setEditedObjectName={setEditedObjectName}
            handleCategoryDelete={handleCategoryDelete}
            editedObjectDescription={editedObjectDescription}
            setEditedObjectDescription={setEditedObjectDescription}
            handleSaveChanges={handleSaveChanges}
          />
        ) : (
          <ObjectDetailsView
            object={object}
            handleEditClick={handleEditClick}
            objectNavigation={objectNavigation}
          />
        )}
      </Dialog>
      <NewCategoryModal
        isNewCategoryModalOpen={isNewCategoryModalOpen}
        setNewCategoryModalOpen={setNewCategoryModalOpen}
        handleSaveNewCategory={handleSaveNewCategory}
        newCategoryName={newCategoryName}
        setNewCategoryName={setNewCategoryName}
      />
    </>
  );
}

export default ObjectItemDetailsModal;
