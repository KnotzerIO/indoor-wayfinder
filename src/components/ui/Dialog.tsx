import React, { useEffect, useRef, useState } from "react";

interface DialogProps {
  open: boolean;
  handler: () => void;
  children: React.ReactNode;
}

export function Dialog({ open, handler, children }: DialogProps) {
  const dialogRef = useRef<HTMLDivElement>(null);
  const [showDialog, setShowDialog] = useState(open);
  const [animationPhase, setAnimationPhase] = useState<"fadeIn" | "fadeOut">(
    "fadeIn"
  );

  useEffect(() => {
    if (open) {
      setShowDialog(true);
      setAnimationPhase("fadeIn");
      dialogRef.current?.focus();
    }
  }, [open]);

  useEffect(() => {
    const closeOnEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        handler();
      }
    };
    document.addEventListener("keydown", closeOnEscape);
    return () => document.removeEventListener("keydown", closeOnEscape);
  }, [handler]);

  useEffect(() => {
    if (!open && showDialog) {
      setAnimationPhase("fadeOut");
    }
  }, [open, showDialog]);

  const onAnimationEnd = () => {
    if (animationPhase === "fadeOut") {
      setShowDialog(false);
    }
  };

  return (
    <div
      className={`fixed inset-0 z-50 ${showDialog ? "block" : "hidden"}`}
      aria-modal="true"
      aria-hidden={!showDialog}
      role="dialog"
    >
      <div
        className="fixed inset-0 bg-black bg-opacity-60 backdrop-blur-sm"
        onClick={handler}
      ></div>
      <div
        className="fixed inset-0 flex justify-center items-center"
        style={{ pointerEvents: "none" }}
      >
        <div
          ref={dialogRef}
          className={`bg-white m-4 rounded-lg shadow-xl w-full max-w-md focus:outline-none transition-transform transform-gpu ${animationPhase === "fadeIn" ? "scale-95 opacity-0 animate-fadeIn" : "animate-fadeOut"} md:w-3/5 lg:w-2/5 2xl:w-1/4 min-w-[80%] md:min-w-[60%] lg:min-w-[40%] 2xl:min-w-[25%] max-w-[80%] md:max-w-[60%] lg:max-w-[40%] 2xl:max-w-[25%] pointer-events-auto`}
          tabIndex={-1}
          onAnimationEnd={onAnimationEnd}
        >
          {children}
        </div>
      </div>
    </div>
  );
}

export function DialogHeader({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center shrink-0 p-4 pb-0 text-blue-gray-900 antialiased font-sans text-2xl font-semibold leading-snug center">
      {children}
    </div>
  );
}

export function DialogBody({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative p-4 text-blue-gray-500 antialiased font-sans text-base font-light leading-relaxed">
      {children}
    </div>
  );
}

export function DialogFooter({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center justify-end shrink-0 flex-wrap p-4 text-blue-gray-500 pt-0">
      {children}
    </div>
  );
}
