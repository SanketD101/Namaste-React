import React, { useEffect, useState } from "react";

const HigherOrderFun = () => {
  const [data, setData] = useState<(number | string)[]>(["te", "tt"]);
  const n = [1, 2, 3, 4, 5];
  const data2 = n.map((item) => {
    return item * item;
  });
  const filter1 = n.filter((item) => {
    return item % 2 == 0;
  });
  console.log(typeof filter1);
  //   setData([...data, data2]);
  useEffect(() => {
    setData([...data, ...filter1]);
    setData((pre) => [...pre, ...data2]);
  }, []);
  return (
    <div className="pt-26">
      HigherOrderFun
      <h1>{data}</h1>
      <h1>
        {data.map((i) => (
          <>
            {i} {"="}
          </>
        ))}
      </h1>
      <h2>test</h2>
    </div>
  );
};

export default HigherOrderFun;
