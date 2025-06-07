import { useState } from "react";

export const useSelectData = () => {
  const [selectedIndex, setSelectedIndex] = useState<null | number>(null);

  const OnSubmit = (id: number) => {
    setSelectedIndex(id);
  };

  return { selectedIndex, OnSubmit };
};
