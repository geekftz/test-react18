import axios from "axios";
import { Suspense, useState } from "react";

function wrapPromise(promise: Promise<any>) {
  let status = "pending";
  let result: any;

  const suspender = promise.then(
    (resolve) => {
      status = "success";
      result = resolve;
    },
    (err) => {
      status = "error";
      result = err;
    }
  );
  console.log("🚀 --> wrapPromise --> suspender:", suspender);

  return {
    read() {
      // 暴露一个read方法
      if (status === "pending") {
        throw suspender;
      } else if (status === "error") {
        throw result;
      } else if (status === "success") {
        return result;
      }
    },
  };
}

function fetchData(url: string) {
  const promiseData = axios.get(url).then((data) => {
    return data.data;
  });
  return wrapPromise(promiseData);
}

const data = fetchData("https://dog.ceo/api/breeds/image/random");

const ShowDog: React.FC = () => {
  const style = {
    height: 300,
    width: 300,
  };
  console.log("🚀 --> style:", style);

  const dogData = data.read();

  console.log("🚀 --> dogData:", dogData);
  return (
    <>
      <img src={dogData.message} style={style} />
    </>
  );
};

function App() {
  return (
    <div className="App">
      <div className="App">
        <header className="App-header">
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          <div>logo</div>
          <Suspense
            fallback={
              <>
                <h1>正在加载....</h1>
              </>
            }
          >
            <ShowDog></ShowDog>
          </Suspense>
        </header>
      </div>
    </div>
  );
}

export default App;
