import Image from "next/image";
import Link from "next/link";

const MouseMove = ({
  url,
  text,
  href,
  onClick,
}: {
  url: string;
  text: string;
  href: string;
  onClick?: () => void;
}) => {
  return (
    <Link
      href={href}
      onClick={onClick}
      className="px-4 py-2 flex gap-4 font-bold hover:bg-bg transition-all capitalize cursor-pointer"
    >
      <Image src={url} alt="logout" width={20} height={20} />
      {text}
    </Link>
  );
};

export default MouseMove;
