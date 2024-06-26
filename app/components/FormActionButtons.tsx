import useWaitlistStore from "../store";

function FormActionButtons({
  reset,
  setShowModal,
}: {
  reset: () => void;
  setShowModal: (data: boolean) => void;
}) {
  const { resetStore } = useWaitlistStore();
  const handleReset = () => {
    resetStore();
    reset();
    setShowModal(false);
  };
  return (
    <div className="flex items-center justify-end p-2  border-t border-slate-200 bg-white rounded-b-md">
      <div className="flex items-center space-x-4">
        <button
          className="text-[14px] font-medium text-zinc-950 bg-zinc-100 rounded-md drop-shadow px-3 py-2"
          onClick={handleReset}
        >
          Reset to Default
        </button>
        <button
          className="text-[14px] font-medium text-white bg-black rounded-md drop-shadow px-4 py-2"
          type="submit"
        >
          Apply
        </button>
      </div>
    </div>
  );
}

export default FormActionButtons;
