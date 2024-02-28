import { isBluetoothAvailable } from "@/utils/checkDevice";
import { useState } from "react";
import { FaCheck, FaRegCopy } from "react-icons/fa";
import { useCopyToClipboard } from "usehooks-ts";
import { Dialog, DialogBody, DialogFooter, DialogHeader } from "../ui/Dialog";
interface PositionInfoModalProps {
  open: boolean;
  onClose: () => void;
}
function BluetoothInfoModal({ open, onClose }: PositionInfoModalProps) {
  const [, copy] = useCopyToClipboard();
  const [copied, setCopied] = useState(false);
  function handleCopyClick() {
    copy("chrome://flags/#enable-experimental-web-platform-features");
    setCopied(true);
    setInterval(() => {
      setCopied(false);
    }, 3000);
  }
  return (
    <>
      <Dialog open={open} handler={onClose}>
        <DialogHeader>Experimentelles Feature!</DialogHeader>
        <DialogBody>
          <p className="font-bold text-black">
            Status: {isBluetoothAvailable() ? "Kompatibel" : "Nicht Kompatibel"}
          </p>
          <p>
            Die Indoor-Positionsbestimmung ist nur eingeschränkt möglich. Bitte
            beachten Sie die folgenden Voraussetzungen für die Nutzung:
          </p>
          <ul className="list-disc mx-5">
            <li>
              Diese Funktion ist ausschließlich auf{" "}
              <span className="font-bold">Android-Geräten</span> verfügbar.
            </li>
            <li>
              Verwenden Sie den{" "}
              <span className="font-bold">Google Chrome-Browser</span>
            </li>
            <li>Bluetooth ist aktiviert</li>
            <li>
              Aktivieren Sie das experimentelle Web-Plattform-Feature
              <button
                onClick={handleCopyClick}
                className="flex center text-start py-1 pl-2 lowercase border rounded-sm"
              >
                <p className="border-r border-gray-400/50 pr-3 font-bold text-xs">
                  chrome://flags/#enable-experimental-web-platform-features
                </p>
                {copied ? (
                  <FaCheck className="h-4 w-4 mx-3 text-gray" />
                ) : (
                  <FaRegCopy className="h-4 w-4 mx-3 text-gray" />
                )}
              </button>
            </li>
          </ul>
          <p>Stand: 01.01.2024</p>
        </DialogBody>
        <DialogFooter>
          <button
            className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-gradient-to-tr from-green-600 to-green-400 text-white shadow-md shadow-green-500/20 hover:shadow-lg hover:shadow-green-500/40 active:opacity-[0.85]"
            onClick={onClose}
          >
            <>Verstanden</>
          </button>
        </DialogFooter>
      </Dialog>
    </>
  );
}

export default BluetoothInfoModal;
