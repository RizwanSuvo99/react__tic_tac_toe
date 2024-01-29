/* eslint-disable react/prop-types */
export default function Square({ value,handleSquareClick }) {
  return (
    <>
      <button
        onClick={handleSquareClick}
        className="bg-white border border-gray-400 h-12 w-12 m-1 leading-9 text-lg"
      >
        {value}
      </button>
    </>
  ); 
}
