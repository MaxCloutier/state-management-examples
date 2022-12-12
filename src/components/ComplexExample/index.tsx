import { useEffect, useState } from "react";

const items = [
  { value: 1, increment: 0, label: "Item 1" },
  { value: 2, increment: 0, label: "Item 2" },
  { value: 3, increment: 0, label: "Item 3" },
  { value: 4, increment: 0, label: "Item 4" },
  { value: 5, increment: 0, label: "Item 5" },
  { value: 6, increment: 0, label: "Item 6" },
];
export const ComplexExample = () => {
  const [selectedItem, setSelectedItem] = useState<
    { value: number; label: string; increment: number } | undefined
  >();
  const [state, updateState] = useState<any>({
    title: "",
    description: "",
    select: "pouet",
    selectedItem: null,
  });

  useEffect(() => {
    console.log("updating selected item");
    const currItem = items.find(
      ({ value }) => `${value}` === state.selectedItem
    );
    setSelectedItem(currItem);
  }, [state.selectedItem]);

  console.log("re-rendering", selectedItem);

  const incrementSelected = () => {
    if (selectedItem) {
      setSelectedItem({
        ...selectedItem,
        increment: selectedItem.increment + 1,
      });
    }
  };

  return (
    <div>
      Title: {state.title} <br />
      Description: {state.description} <br />
      Selected option: {state.select} <br />
      Selected Item: {selectedItem?.label} - {selectedItem?.increment} <br />
      <button onClick={() => incrementSelected()}>Increment selected</button>
      <br />
      <br />
      Select Item
      <select
        defaultValue={state.selectedItem}
        onChange={({ currentTarget: { value } }) => {
          updateState({ ...state, selectedItem: value });
        }}
      >
        {items.map(({ value, label }) => (
          <option key={value} value={value}>
            {label}
          </option>
        ))}
      </select>
      <div>
        <label>
          Title <br />
          <input
            value={state.title}
            onChange={({ currentTarget: { value } }) =>
              updateState({ ...state, title: value })
            }
          />
        </label>
        <label>
          Description <br />
          <input
            value={state.description}
            onChange={({ currentTarget: { value } }) =>
              updateState({ ...state, description: value })
            }
          />
        </label>
        <label>
          Select <br />
          <select
            defaultValue={state.select}
            onChange={({ currentTarget: { value } }) =>
              updateState({ ...state, select: value })
            }
          >
            <option value="test">Test</option>
            <option value="potato">Potato</option>
            <option value="pouet">Pouet</option>
          </select>
        </label>
      </div>
    </div>
  );
};
