import { useEffect, useCallback, useMemo, useState } from "react";

import "./App.css";

const store: any = {
  state: {
    name: "haha",
  },

  dispatch(action: any) {
    const { type, text } = action;
    console.log(
      "🚀 --> dispatchEvent --> ",
      `do ${type} action, text is ${text}`
    );

    if (type in this.state) {
      this.state[type] = text;
    }
  },

  getState() {
    return this.state;
  },
};

function App() {
  const action = {
    type: "send-request",
    text: "i am data",
  };

  console.log(111);

  // 手动处理日志 弊端：每个地方都要添加代码
  console.log("dispatching", action);
  store.dispatch(action);
  console.log("next state", store.getState());

  // 重写dispatch方法 弊端：如果参数有调整 那么要新重写
  let next = store.dispatch;
  store.dispatch = function dispatchAndLog1(action) {
    console.log("dispatching1", action);
    let result = next(action);
    console.log("next state1", store.getState());
    return result;
  };

  next = store.dispatch;
  store.dispatch = function dispatchAndLog2(action) {
    console.log("dispatching2", action);
    let result = next(action);
    console.log("next state2", store.getState());
    return result;
  };

  return <div className="App"></div>;
}

export default App;
