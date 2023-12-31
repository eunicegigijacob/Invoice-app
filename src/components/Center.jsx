import { AnimatePresence, motion, useAnimation } from "framer-motion";
import InvoiceCard from "./InvoiceCard";
import { useDispatch, useSelector } from "react-redux";
import invoiceSlice from "../redux/invoiceSlice";
import CreateInvoice from "./CreateInvoice";
import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { ChevronDownIcon } from "@heroicons/react/24/solid";

const Center = () => {
  const location = useLocation();
  const controls = useAnimation();
  const dispatch = useDispatch();
  const filter = ["paid", "pending", "draft"];
  const [isDropdown, setIsDropdown] = useState(false);
  const [openCreateInvoice, setOpenCreateInvoice] = useState(false);

  const [filterValue, setfilterValue] = useState("");

  const invoices = useSelector((state) => state.invoices.filteredInvoice);

  useEffect(() => {
    dispatch(invoiceSlice.actions.filterInvoice({ status: filterValue }));
  }, [filterValue, dispatch]);

  useEffect(() => {
    controls.start({
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 20,
      },
    });
  }, [controls]);

  const transition = {
    stiffness: 200,
  };

  const varients = {
    open: { opacity: 1, x: -20, duration: 200, transition },
    close: { opacity: 0, x: -100, duration: 500, transition },
  };

  return (
    <div>
      <div className="dark:bg-[#03142E] scrollbar-hide duration-300 min-h-screen bg-[#f8f8fb] py-[34px] px-2 md:px-8 lg:px-12 lg:py-[72px]  ">
        <motion.div
          key={location.pathname}
          initial={{ x: "0" }}
          animate={{ x: 0 }}
          exit={{ x: "-150%" }}
          transition={{ duration: 0.5 }}
          className="   max-w-3xl flex flex-col   mx-auto my-auto"
        >
          {/* Center Header */}

          <div className=" min-w-full max-h-[64px] flex items-center justify-between">
            <div>
              <h1 className=" lg:text-4xl md:text-2xl  text-xl  dark:text-white tracking-wide font-semibold">
                Invoices
              </h1>
              <p className=" text-gray-500 font-light">
                There are {invoices.length} total invoices.
              </p>
            </div>

            <div className=" flex  max-h-full  items-center ">
              <div className=" flex items-center">
                <p className=" hidden md:block dark:text-white font-medium">
                  Filter by status
                </p>
                <p className="  md:hidden dark:text-white font-medium">
                  Filter
                </p>
                <div
                  onClick={() => {
                    setIsDropdown((state) => !state);
                  }}
                  className=" cursor-pointer ml-3 "
                >
                  {
                    <motion.div
                      className="text-[#42A5F5]"
                      animate={
                        isDropdown
                          ? { transition, rotate: -180 }
                          : { transition, rotate: 0 }
                      }
                    >
                      <ChevronDownIcon width={20} height={20} />
                    </motion.div>
                  }
                </div>
              </div>
              {isDropdown && (
                <motion.div
                  as="select"
                  variants={varients}
                  animate={isDropdown ? "open" : "close"}
                  className="  w-40 bg-white dark:bg-[#1E2139] dark:text-white flex px-6 py-4 flex-col  top-[160px] lg:top-[120px]  absolute  shadow-2xl rounded-xl space-y-2    "
                >
                  {filter.map((item, i) => (
                    <div
                      key={i}
                      onClick={() => {
                        item === filterValue
                          ? setfilterValue("")
                          : setfilterValue(item);
                      }}
                      className=" items-center cursor-pointer flex space-x-2 "
                    >
                      <input
                        value={item}
                        checked={filterValue === item ? true : false}
                        type="checkbox"
                        className=" accent-[#42A5F5] hover:accent-[#90CAF9] "
                      />
                      <p>{item}</p>
                    </div>
                  ))}
                </motion.div>
              )}

              <button
                onClick={() => setOpenCreateInvoice(true)}
                className=" hover:opacity-80 ml-4 md:ml-10 flex items-center py-2 px-2 md:space-x-3 space-x-2 bg-[#1E88E5] dark:bg-[#273f64] rounded-full"
              >
                <p className="bg-white font-bold w-[25px] rounded-[50%]">+</p>
                <p className=" md:block hidden dark:text-[#EAEAEA] text-black font-semibold text-lg">
                  New invoice
                </p>
                <p className=" md:hidden block dark:text-[#EAEAEA] text-black font-semibold text-base">
                  New
                </p>
              </button>
            </div>
          </div>

          {/* Invoice Cards */}

          <div className=" mt-10   space-y-4">
            {invoices.map((invoice, index) => (
              <motion.div
                key={invoice.id}
                initial={{ opacity: 0, y: -50 }}
                animate={{
                  opacity: 1,
                  y: 0,
                  transition: { delay: index * 0.2 },
                }}
                exit={{ opacity: 0, y: 50 }}
                transition={{ duration: 0.5 }}
              >
                <InvoiceCard invoice={invoice} />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
      <AnimatePresence>
        {openCreateInvoice && (
          <CreateInvoice
            openCreateInvoice={openCreateInvoice}
            setOpenCreateInvoice={setOpenCreateInvoice}
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default Center;
