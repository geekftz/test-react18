import {
  useEffect,
  useCallback,
  useMemo,
  useState,
  useLayoutEffect,
} from "react";

import "./App.css";

function App() {
  const [state, setState] = useState("hello world");

  // useEffect(() => {
  //   let i = 0;
  //   while (i <= 100000000) {
  //     i++;
  //   }
  //   setState("world hello");
  // }, []);

  useLayoutEffect(() => {
    let i = 0;
    while (i <= 100000000) {
      i++;
    }
    setState("world hello");
  }, []);

  return <div className="App">{state}</div>;
}

export default App;
