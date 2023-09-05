const PaidStatus = ({ type }) => {
  const classNames = {
    paid: ["text-[#36743e] bg-[#33d69f0f]", "bg-[#5eb76a]"],
    pending: ["text-[#ff7b00] bg-[#ff8f000f]", "bg-[#ff7b00]"],
    draft: ["text-[#b8b9c0] bg-[#dfe3fa0f]", "bg-[#b8b9c0]"],
  };
  return (
    <div
      className={`${
        type === "paid"
          ? classNames.paid[0]
          : type === "pending"
          ? classNames.pending[0]
          : classNames.draft[0]
      } flex justify-center space-x-2 rounded-lg  items-center px-4 py-2`}
    >
      <div
        className={` h-3 w-3 rounded-full  ${
          type === "paid"
            ? classNames.paid[1]
            : type === "pending"
            ? classNames.pending[1]
            : classNames.draft[1]
        } `}
      />
      <p>{type}</p>
    </div>
  );
};

export default PaidStatus;
