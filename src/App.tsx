import React, { useEffect, useCallback, useMemo, useState } from "react";

import "./App.css";

function TableData(data) {
  return (
    // <>
    //   {data.map((rec) => (
    //     <React.Fragment key={rec.id}>
    //       <td>{rec.hobby}</td>
    //     </React.Fragment>
    //   ))}
    // </>
    <React.Fragment>
      <td>John Doe</td>
      <td>16</td>
      <td>Developer</td>;
    </React.Fragment>
  );
}

function App() {
  return (
    <div className="App">
      {TableData([
        {
          id: 1,
          hobby: "basket",
        },
        {
          id: 2,
          hobby: "foot",
        },
      ])}
    </div>
  );
}

export default App;
