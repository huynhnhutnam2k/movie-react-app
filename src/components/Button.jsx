import React from "react";

function Button(props) {
  const { primary, text } = props;
  return (
    <>
      <div
        className={`w-[250px] py-2 cursor-pointer flex justify-center items-center rounded-[30px] transition-all duration-300 text-white bg-transparent text-[30px] font-bold ${
          primary
            ? "bg-main border-0 shadow-get shadow "
            : "hover:bg-white hover:text-main  border-2 border-white"
        }`}
      >
        {text}
      </div>
    </>
  );
}
export const OutlineButton = (props) => {
  const { text, onClick } = props;
  return (
    <>
      <div
        className="py-1 px-4 text-white font-bold border-2 rounded-3xl text-[16px] cursor-pointer"
        onClick={onClick ? () => onClick() : null}
      >
        {text}
      </div>
    </>
  );
};
export default Button;
