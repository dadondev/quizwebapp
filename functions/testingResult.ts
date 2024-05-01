import { Quiz } from "@/utils/type";

function testingResult(test: Quiz, result: string[]) {
  let trueAnswers = 0;

  result.forEach((e, i) => {
    if (test.quizs[i].variants[test.quizs[i].trueAnswer] === e) {
      trueAnswers++;
    }
  });

  return trueAnswers;
}

export default testingResult;
