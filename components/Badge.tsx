const Badge = ({ text }: { text: string }) => {
  return (
    <p className="px-1 bg-text md:text-lg rounded-xl text-sm relative -top-1 text-white inline-block">
      {text}
    </p>
  );
};

export default Badge;
