import { AnyCnameRecord } from "dns";

function Counter({
  counter,
  decreaseCounter,
  increaseCounter,
  size = "small",
}: AnyCnameRecord) {
  let setSize;
  if (size == "small") {
    setSize = "py-1 px-3";
  } else {
    setSize = "py-2 px-4";
  }

  return (
    <div className="bg-third text-second flex  rounded-md">
      <button className={`${setSize}`} onClick={decreaseCounter}>
        {" "}
        -{" "}
      </button>
      <span className={`${setSize}`}>{counter}</span>
      <button className={`${setSize}`} onClick={increaseCounter}>
        {" "}
        +{" "}
      </button>
    </div>
  );
}

export default Counter;
