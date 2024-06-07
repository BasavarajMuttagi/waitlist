"use client";
import { SquareSplitHorizontal } from "@phosphor-icons/react/dist/ssr";
import { useState } from "react";
import { createPortal } from "react-dom";
import HideColumnsModal from "./HideColumnsModal";

const HideColumns = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <div>
      {showModal && createPortal(<HideColumnsModal  setShowModal={setShowModal}/>, document.body)}
      <SquareSplitHorizontal
        size={16}
        className="text-slate-700 cursor-pointer"
        onClick={() => setShowModal((prev) => !prev)}
      />
    </div>
  );
};

export default HideColumns;
