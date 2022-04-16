import React from "react";

function Input(props) {
  return (
    <div className="w-[500px] h-[2rem] rounded-full relative">
      <input
        type={props.type}
        placeholder={props.placeholder}
        value={props.value}
        onChange={props.onChange ? (e) => props.onChange(e) : null}
        className="w-full h-full px-5 border-0 outline-none rounded-full bg-white text-black font-thin"
      />
    </div>
  );
}

export default Input;
