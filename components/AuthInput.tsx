const AuthInput = ({
  name,
  setName,
  setValidate,
  validate,
  placeholder,
  type,
  which,
}: {
  name: string;
  setValidate: (a: string[]) => void;
  setName: (a: string) => void;
  validate: string[];
  placeholder: string;
  type: string;
  which: string;
}) => {
  return (
    <input
      value={name}
      onChange={(e) => {
        setValidate(validate.filter((e) => e !== which));
        setName(e.target.value);
      }}
      type={type}
      placeholder={placeholder}
      className={
        "outline-none focus:border-text focus:outline-none border-2 transition-all px-3 py-2 rounded-lg w-full pr-9 " +
        (validate.includes(which) ? "border-red-500" : "border-textGray/10 ")
      }
    />
  );
};

export default AuthInput;
