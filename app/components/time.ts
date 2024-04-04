export function getTime() {
  let time = Date.now();
  let date = new Date(time);
  let t = `${date.getHours()}`;
  let s = `${date.getMinutes()}`;
  if (t.length < 2) {
    t = `0${date.getHours()}`;
  }
  if (s.length < 2) {
    s = `0${date.getMinutes()}`;
  }
  return `${t}:${s}`;
}
