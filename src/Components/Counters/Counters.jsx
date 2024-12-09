import { useState } from "react";
import Info from "./Info";
import TextArea from "./TextArea";

const Counters = () => {
  const [text, setText] = useState("");
  return (
    <div className="container rounded-lg w-full h-full flex flex-col justify-center items-center lg:gap-4 gap-3">
      <Info text={text} />
      <TextArea text={text} setText={setText} />
    </div>
  );
};

export default Counters;
