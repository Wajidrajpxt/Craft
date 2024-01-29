import React from "react";

export default function Data({
  name,
  phone,
  price,
  oninc,
  ondec,
  ondelete,
  count,
}) {
  console.log(name);
  return (
    <div
      style={{
        border: "1px solid",
        marginTop: "20px",
        backgroundColor: "white",
        padding: "10px",
      }}
    >
      <div className=" w-[500px] flex justify-center items-center flex-col ">
        <img style={{ height: "50px", width: "50px" }} src={phone} alt={name} />
        <h2 className="text-[28px] font-semibold">{name}</h2>
        <p className="text-[22px] font-semibold">${price}</p>
        <button
          className="h-[50px] bg-[red] w-[100px] text-[white]"
          onClick={ondelete}
        >
          Remove Item
        </button>
      </div>

      <div className="flex justify-center items-center p-5">
        <button
          className="h-[30px] f w-[100px] bg-[green] text-[30px] text-[white] flex justify-center items-center"
          onClick={oninc}
        >
          +
        </button>
        <span className="text-[28px] font-semibold">{count}</span>
        <button
          className="h-[30px]  w-[100px] bg-[red] text-[30px] text-[white] flex justify-center items-center"
          onClick={ondec}
        >
          -
        </button>
      </div>
    </div>
  );
}
