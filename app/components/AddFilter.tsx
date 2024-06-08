"use client";
import React, { useEffect, useState } from "react";
import IconButton from "./IconButton";
import { Funnel } from "@phosphor-icons/react/dist/ssr";
import Modal from "./Modal";
import { createPortal } from "react-dom";
import useWaitlistStore from "../store";

const AddFilter = () => {
  const [showModal, setShowModal] = useState(false);
  useEffect(() => {
    useWaitlistStore.persist.rehydrate();
  }, []);

  return (
    <>
      {showModal &&
        createPortal(<Modal setShowModal={setShowModal} />, document.body)}
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
