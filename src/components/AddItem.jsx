import { TrashIcon } from "@heroicons/react/24/solid";

const AddItem = ({
  itemDetails,
  setItem,
  isValidatorActive,
  onDelete,
  handelOnChange,
}) => {
  return (
    <div>
      <div className=" flex dark:text-white justify-between items-center">
        <div className=" flex flex-wrap ">
          <div className="  flex px-2 py-2   flex-col items-start">
            <h1>Item Name</h1>
            <input
              name="name"
              onChange={(e) => {
                handelOnChange(itemDetails.id, e);
              }}
              value={itemDetails.name}
              type="text"
              className={` dark:bg-[#8c9296] py-2 px-4 border-[.2px] rounded-lg  border-gray-300 focus:outline-none dark:border-gray-800`}
            />
          </div>

          <div className=" flex px-2 py-2  flex-col items-start">
            <h1>Qty.</h1>
            <input
              name="quantity"
              type="number"
              onChange={(e) => {
                handelOnChange(itemDetails.id, e);
              }}
              value={itemDetails.quantity}
              min={0}
              className={` dark:bg-[#8c9296] py-2 px-4 border-[.2px] rounded-lg   max-w-[60px] border-gray-300 focus:outline-none
                border-red-500 dark:border-red-500 outline-red-500 border-2 dark:border-gray-800`}
            />
          </div>

          <div className=" flex px-2 py-2  flex-col items-start">
            <h1>Price</h1>
            <input
              name="price"
              type="number"
              onChange={(e) => {
                handelOnChange(itemDetails.id, e);
              }}
              value={itemDetails.price}
              min={0}
              className={` dark:bg-[#8c9296] py-2 max-w-[100px] px-4 border-[.2px] rounded-lg  f border-gray-300 focus:outline-none dark:border-gray-800`}
            />
          </div>

          <div className=" flex px-2 py-2  flex-col items-start">
            <h1>Total</h1>
            <div className=" max-w-[100px] dark:bg-[#8c9296] py-2 px-4 border-[.2px] rounded-lg focus:outline-none   border-gray-300 dark:border-gray-800 dark:text-white">
              {itemDetails.total}
            </div>
          </div>
        </div>
        <button
          onClick={() => {
            onDelete(itemDetails.id);
          }}
        >
          <TrashIcon className=" text-gray-500 hover:text-red-500 cursor-pointer mt-4 h-6 w-6" />
        </button>
      </div>
    </div>
  );
};

export default AddItem;
