import PaidStatus from "./PaidStatus";
import rightArrow from "../assets/icon-arrow-right.svg";
import { Link } from "react-router-dom";
import { ChevronRightIcon } from "@heroicons/react/24/solid";

const InvoiceCard = ({ invoice }) => {
  return (
    <Link to={`invoice?${invoice.id}`}>
      {/* Big Screen  */}
      <div className=" hidden md:flex cursor-pointer duration-100  ease-in-out  hover:border border-[#1565C0] py-4 shadow-sm px-6 dark:bg-[#172336] bg-white rounded-lg  items-center justify-between">
        <div className=" flex items-center ">
          <h2 className=" dark:text-white ">
            <span className=" text-[#092a45]">#</span>
            {invoice.id}
          </h2>

          <h2 className=" text-sm text-gray-400 font-light ml-6">
            Due {invoice.paymentDue}
          </h2>

          <h2 className=" text-sm text-gray-400 font-light ml-10">
            {invoice.clientName}
          </h2>
        </div>

        <div className="  flex  items-center ">
          <h1 className=" text-xl mr-8  dark:text-white">
            {new Intl.NumberFormat("en-NG", {
              style: "currency",
              currency: "NGN",
            }).format(invoice.total)}
          </h1>

          <PaidStatus type={invoice.status} />

          <ChevronRightIcon />
        </div>
      </div>

      {/* Phone Screen */}
      <div className=" md:hidden flex cursor-pointer hover:border border-[#1565C0] py-4 shadow-sm px-6 dark:bg-[#1E2139] bg-white rounded-lg  items-center justify-between">
        <div className=" flex flex-col">
          <h2 className=" dark:text-white ">
            <span className=" text-[#092a45]">#</span>
            {invoice.id}
          </h2>

          <h2 className=" text-sm text-gray-400 font-light mt-3 ">
            Due {invoice.paymentDue}
          </h2>
          <h1 className=" text-xl  dark:text-white">
            {new Intl.NumberFormat("en-NG", {
              style: "currency",
              currency: "NGN",
            }).format(invoice.total)}
          </h1>
        </div>

        <div className=" flex   flex-col">
          <h2 className=" text-sm mb-4 text-gray-400 font-light  text-right  ">
            {invoice.clientName}
          </h2>

          <PaidStatus type={invoice.status} />
        </div>
      </div>
    </Link>
  );
};

export default InvoiceCard;
