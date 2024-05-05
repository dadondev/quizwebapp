"use client";
import EditModal from "@/components/EditModal";
import EditQuizCard from "@/components/EditQuizCard";
import Header from "@/components/Header";
import isAdmin from "@/components/isAdmin";
import getSingleData from "@/functions/getSingleData";
import { giveLetterIndex } from "@/utils/alphabet";
import { Quiz, Quizs } from "@/utils/type";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

const page = () => {
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const [datas, setDatas] = useState<Quiz>();
  const { id } = useParams();
  const [modalData, setModalData] = useState<Quizs>();
  const [index, setIndex] = useState(0);
  useEffect(() => {
    isAdmin(router);
    getSingleData({
      setDatas,
      setIndex,
      id: id as string,
    });
  }, []);
  return (
    <>
      <Header />
      <main className="container mx-auto pt-10 grid gap-3">
        {datas &&
          datas.quizs.map((e, i) => (
            <EditQuizCard
              {...e}
              index={i}
              id={e.id}
              key={i}
              setOpen={setOpen}
              setActiveData={setModalData}
              edit={{
                datas,
                setDatas,
              }}
            />
          ))}
      </main>
      {createPortal(
        <EditModal
          index={index}
          datas={
            datas
              ? datas
              : {
                  id: "12",
                  name: "poaskdas",
                  quizs: [],
                }
          }
          open={open}
          setDatas={setDatas}
          id={modalData ? modalData.id : ""}
          setOpen={setOpen}
          question={modalData?.question || ""}
          variant={modalData?.variants}
          trueAnswer={modalData ? giveLetterIndex(modalData.trueAnswer) : 0}
        />,
        document.body
      )}
    </>
  );
};

export default page;
