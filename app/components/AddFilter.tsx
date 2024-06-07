"use client";
import React, { useState } from "react";
import IconButton from "./IconButton";
import { Funnel } from "@phosphor-icons/react/dist/ssr";
import Modal from "./Modal";
import { createPortal } from "react-dom";

const AddFilter = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      {showModal && createPortal(<Modal />, document.body)}
      <IconButton
        className="shadow"
        onClick={() => setShowModal((prev) => !prev)}
      >
        <Funnel size={16} />
        <span className="text-xs font-medium">Add Filter</span>
      </IconButton>
    </>
  );
};

export default AddFilter;
