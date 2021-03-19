import { useReducer, useEffect } from "react";
import ExpiredStorage from "expired-storage";
function useLocalStorageReducer(b, c, d, f) {
  void 0 === f && (f = 1800);
  var d = useReducer(c, d, function (a) {
      try {
        var c = new ExpiredStorage().getItem(b),
          d = JSON.stringify(a);
        return c ? JSON.parse(c) : JSON.parse(d);
      } catch (b) {
        return console.error(b), a;
      }
    }),
    g = d[0],
    d = d[1];
  return (
    useEffect(
      function () {
        try {
          var a = new ExpiredStorage();
          !1 !== f && "number" == typeof f
            ? a.setItem(b, JSON.stringify(g), f)
            : window.localStorage.setItem(b, JSON.stringify(g));
        } catch (a) {
          console.error(a);
        }
        localStorage.setItem(b, JSON.stringify(g));
      },
      [f, b, g]
    ),
    [g, d]
  );
}
export { useLocalStorageReducer };
