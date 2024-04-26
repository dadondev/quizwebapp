import Header from "@/components/Header";
import HeaderMain from "@/components/HeaderMain";

const page = async () => {
  return (
    <div className="h-full grid grid-rows-[auto_1fr]">
      <Header />
      <HeaderMain />
    </div>
  );
};

export default page;
