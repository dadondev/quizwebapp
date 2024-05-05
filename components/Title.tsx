import { ReactNode } from "react";

const Title = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <strong
      className={"sm:text-xl leading-none text-lg text-center " + className}
    >
      {children}
    </strong>
  );
};

export default Title;
