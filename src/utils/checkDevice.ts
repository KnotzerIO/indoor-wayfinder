import { isAndroid, isChrome, isDesktop } from "react-device-detect";
import { toast } from "react-toastify";
//! Bluetooth API to scan BLE Devices is only available in Chrome on Android
export function checkDeviceCompatibility(): string | null {
  if (isDesktop) {
    toast.error("Dieses Feature ist auf diesem Gerät nicht verfügbar.");
    // return "Dieses Feature ist auf diesem Gerät nicht verfügbar.";
  } else if (!isAndroid) {
    toast.error("Feature ist nur auf Android verfügbar.");
    // return "Feature ist nur auf Android verfügbar.";
  } else if (!isChrome) {
    toast.error("Bitte öffnen Sie diese Seite in Google Chrome, um das Feature nutzen zu können.");
    // return "Bitte öffnen Sie diese Seite in Google Chrome, um das Feature nutzen zu können.";
  }
  return null;
}

export function isBluetoothAvailable(): boolean {
  return isAndroid && isChrome;
}