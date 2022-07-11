function Button({ children, onClick, className }) {
  return <button
    className={"bg-white px-5 py-4 font-medium w-fit rounded flex items-center gap-2 text-gray-800 " + className}
    onClick={onClick}
  >
    {children}
  </button>
}

export default Button;