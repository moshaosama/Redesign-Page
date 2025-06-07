import { CiCalendarDate, CiDeliveryTruck, CiLocationOn } from "react-icons/ci";
import { MdOutlinePayment } from "react-icons/md";
import { RiDeleteBin5Line } from "react-icons/ri";
import { TbShieldCheck } from "react-icons/tb";

export const HeaderData = [
  {
    id: crypto.randomUUID(),
    Title: "Postcode",
    Icon: <CiLocationOn size={27} />,
  },
  {
    id: crypto.randomUUID(),
    Title: "Waste Type",
    Icon: <RiDeleteBin5Line size={27} />,
  },
  {
    id: crypto.randomUUID(),
    Title: "Select Skip",
    Icon: <CiDeliveryTruck size={27} />,
  },
  {
    id: crypto.randomUUID(),
    Title: "Permit Check",
    Icon: <TbShieldCheck size={27} />,
  },
  {
    id: crypto.randomUUID(),
    Title: "Choose Date",
    Icon: <CiCalendarDate size={27} />,
  },
  {
    id: crypto.randomUUID(),
    Title: "Payment",
    Icon: <MdOutlinePayment size={27} />,
  },
];
