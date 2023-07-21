const PasswordInput = ({ label, placeholder,className,value,setValue }) => {
  return (
    <div className={`textInputDiv flex flex-col space-y-2 w-full ${className}`}>
      <label for={label} className="font-semibold">
        {label}
      </label>
      <input
        type="password"
        placeholder={placeholder}
        className="w-full p-2 border border-gray-400 border-solid rounded placeholder-gray-500 text-black"
        id={label}
        value={value}
          onChange={(e)=>{
              setValue(e.target.value);
          }}
      />
    </div>
  );
};
export default PasswordInput;