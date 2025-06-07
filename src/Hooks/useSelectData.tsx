import { useState } from "react";
import { useNavigate } from "react-router";

export const useSelectData = () => {
  const [selectedIndex, setSelectedIndex] = useState<null | number>(17933);
  const Naviagate = useNavigate();

  const OnSubmit = (id: number) => {
    setSelectedIndex(id);
    Naviagate(`${id}`);
  };

  return { selectedIndex, OnSubmit };
};
