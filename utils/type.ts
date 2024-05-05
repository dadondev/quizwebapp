export type Quiz = {
  name: string;
  quizs: Quizs[];
  id: string;
};

export type Quizs = {
  id: string;
  question: string;
  variants: any;
  trueAnswer: string;
  index?: number;
  setActiveData?: (e: any) => void;
  setOpen?: (a: boolean) => void;
  edit?: {
    setDatas: (a: any) => void;
    datas: Quiz;
  };
};

export type dbType = {
  users: userType[];
  tests: Quiz[];
  admins: string[];
};

export type userType = {
  name: string;
  email: string;
  password: string;
  joins: join[];
};

export type join = {
  name: string;
  score: string;
};

export type loginType = {
  email: string;
  password: string;
};

export type authType = "login" | "register";
