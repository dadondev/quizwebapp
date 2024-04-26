export function settingTimer(minutes: string, seconds: string) {
  let newTime = minutes + ":" + seconds;
  if (+seconds - 1 < 0) {
    newTime = newTime.slice(0, 2) + ":" + 59;
    if (+minutes > 1) {
      newTime =
        (+minutes - 1 < 10 ? "0" + (+minutes - 1) : +minutes - 1) +
        ":" +
        newTime.slice(3);
    } else {
      newTime = "00:" + newTime.slice(3);
    }
  } else {
    newTime =
      minutes +
      ":" +
      (+seconds - 1 >= 10 ? +seconds - 1 : "0" + (+seconds - 1));
  }
  return newTime;
}
