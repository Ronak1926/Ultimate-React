import { useState } from "react";
import data from "./data";

export default function Accordion() {
  const [selected, setSelected] = useState(null);
  const [enableMultiSelection, setEnableMultiSelection] = useState(false);
  const [multipleSelected, setMultipleSelected] = useState([]);

  const handleSingleSelection = (id) => {
    if (selected === id) {
      setSelected(null);
    } else {
      setSelected(id);
    }
  };

  const handleMultiSelection = (id) => {
    const updated = [...multipleSelected];
    const index = updated.indexOf(id);
    if (index === -1) {
      updated.push(id);
    } else {
      updated.splice(index, 1);
    }
    setMultipleSelected(updated);
  };

  return (
    <div className="flex h-screen w-full justify-center items-center flex-col gap-[20px]">
      <button
        className="py-[10px] px-[20px] text-white font-bold text-2xl bg-black"
        onClick={() => setEnableMultiSelection(!enableMultiSelection)}
      >
        {enableMultiSelection ? "Disable multiselection" : "Enable multiselection"}
      </button>

      <div className="w-[800px]">
        {data?.length > 0 ? (
          data.map((dataItem) => {
            const isOpen = enableMultiSelection
              ? multipleSelected.includes(dataItem.id)
              : selected === dataItem.id;

            return (
              <div
                key={dataItem.id}
                className="bg-black mb-[10px] py-[10px] px-[20px] rounded"
              >
                <div
                  onClick={() =>
                    enableMultiSelection
                      ? handleMultiSelection(dataItem.id)
                      : handleSingleSelection(dataItem.id)
                  }
                  className="text-white flex justify-between items-center cursor-pointer"
                >
                  <h3>{dataItem.que}</h3>
                  <span>{isOpen ? "-" : "+"}</span>
                </div>

                {isOpen && (
                  <div className="text-white h-auto pt-2">
                    <p>{dataItem.ans}</p>
                  </div>
                )}
              </div>
            );
          })
        ) : (
          <div>No data found</div>
        )}
      </div>
    </div>
  );
}
