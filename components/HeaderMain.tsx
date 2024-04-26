import padClasses from "@/utils/padClasses";
import QuizSection from "./QuizSection";

const datas = [
  {
    title: "O'zbekiston tarixi 9-sinf",
    id: "test-1",
    howMuch: 30,
  },
  {
    title: "Jahon tarixi 9-sinf",
    id: "test-2",
    howMuch: 25,
  },
  {
    title: "Jahon tarixi 8-sinf",
    id: "test-3",
    howMuch: 20,
  },
];

const HeaderMain = () => {
  return (
    <main className="h-full container mx-auto xl:max-w-[1310px]">
      <section
        className={
          "justify-center py-5 flex gap-[10px_15px] items-center flex-wrap scale-10 transition-all"
        }
      >
        {datas.map((e, i) => (
          <QuizSection {...e} key={i} />
        ))}
      </section>
    </main>
  );
};

export default HeaderMain;
