import { dbType, loginType, userType } from "@/utils/type";

const db: dbType = {
  users: [],
  tests: [],
  admins: ["dadondev03@gmail.com"],
};

db.tests.push({
  name: "O'zbekiston tarixi",
  quizs: [
    {
      question: "Ingliz tilida nechta harf bor?",
      variants: {
        a: "23",
        b: "24",
        c: "26",
      },
      trueAnswer: "a",
    },
    {
      question: "Rus tilida nechta harf bor?",
      variants: {
        a: "23",
        b: "24",
        c: "38",
      },
      trueAnswer: "c",
    },
  ],
  id: "123",
});

export const getData = () => {
  return db.tests;
};

export const rgtrUser = (data: userType) => {
  db.users.push(data);
  return data.email;
};

export const lgnUser = (data: loginType) => {
  const user = db.users.find((e) => e.email === data.email);
  if (user && user.email === data.email && data.password === user.password) {
    if (db.admins.includes(data.email)) {
      return {
        email: user.email,
        isAdmin: true,
      };
    }
    return { email: user.email };
  }
  return "oops";
};

export default db;
