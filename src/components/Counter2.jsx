import { useState } from "react";

const Counter2 = () => {
  const [count, setCount] = useState(1);

  const plus = () => {
    setCount(count + 1);
  };

  const minus = () => {
    if (count === 1) {
      return null;
    }
    setCount(count - 1);
  };

  return (
    <div className="flex gap-[20px]">
      <div className=" border border-1 flex w-[110px] h-[40px] rounded-[5px] justify-between items-center text-center m-auto px-[15px]">
        <button className="font-semibold text-[20px]" onClick={minus}>
          -
        </button>

        <p className="m-auto">{count}</p>

        <button className="font-semibold text-[20px]" onClick={plus}>
          +
        </button>
      </div>
      <img
        className="w-[40px] h-[40px] cursor-pointer"
        src="/images/Visa.svg"
        alt=""
      />
    </div>
  );
};

export default Counter2;
