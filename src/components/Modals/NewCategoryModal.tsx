import React from "react";
import { Dialog, DialogBody, DialogHeader } from "../ui/Dialog";

interface NewCategoryModalProps {
  isNewCategoryModalOpen: boolean;
  setNewCategoryModalOpen: (value: boolean) => void;
  handleSaveNewCategory: () => void;
  newCategoryName: string;
  setNewCategoryName: (value: string) => void;
}

const NewCategoryModal: React.FC<NewCategoryModalProps> = ({
  isNewCategoryModalOpen,
  setNewCategoryModalOpen,
  handleSaveNewCategory,
  newCategoryName,
  setNewCategoryName,
}) => {
  return (
    <Dialog
      open={isNewCategoryModalOpen}
      handler={() => setNewCategoryModalOpen(false)}
    >
      <DialogHeader>
        <p>Create New Category</p>
      </DialogHeader>
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
          onClick={handleSaveNewCategory}
        >
          Save New Category
        </button>
      </DialogBody>
    </Dialog>
  );
};

export default NewCategoryModal;
