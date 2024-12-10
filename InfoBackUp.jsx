import PropTypes from "prop-types";

const Info = ({ text }) => {
  return (
    <div className="h-[40%] md:h-[30%] lg:h-[20%] w-full grid grid-cols-3 lg:grid-cols-6 justify-center items-center lg:gap-4 gap-3 flex-wrap overflow-y-auto">
      <GetLimit label="Characters" text={text} />
      <div className=" flex flex-col justify-center items-center h-full w-full bg-slate-50 p-4 space-y-2 rounded-lg">
        {text.length > 0 ? (
          <p className="text-md md:text-2xl font-bold">
            {text.trim().split(" ").length}
          </p>
        ) : (
          <p className="text-md md:text-2xl font-bold">0</p>
        )}
        <h2 className="text-sm md:text-2xl font-normal text-slate-400">
          Words
        </h2>
      </div>
      <div className=" flex flex-col justify-center items-center h-full w-full bg-slate-50 p-4 space-y-2 rounded-lg">
        {text.includes(".") ||
        text.includes("!") ||
        text.includes("?") ||
        text.includes("।") ? (
          <p className="text-md md:text-2xl font-bold">
            {text.split(".").length -
              1 +
              text.split("!").length -
              1 +
              text.split("?").length -
              1 +
              text.split("।").length -
              1}
          </p>
        ) : (
          <p className="text-md md:text-2xl font-bold">0</p>
        )}
        <h2 className="text-sm md:text-2xl font-normal text-slate-400">
          Sentences
        </h2>
      </div>
      <div className=" flex flex-col justify-center items-center h-full w-full bg-slate-50 p-4 space-y-2 rounded-lg">
        {text.length > 0 ? (
          <p
            className={`${
              text.length > 63206 ? "text-red-500" : ""
            } text-md md:text-2xl font-bold`}
          >
            {text.length > 63206 ? "Limit Exceeded!" : 63206 - text.length}{" "}
            <span className="text-xs text-slate-400">Left</span>
          </p>
        ) : (
          <p className="text-md md:text-2xl font-bold">63206</p>
        )}
        <h2 className="text-sm md:text-2xl font-normal text-slate-400">
          Facebook
        </h2>
        {text.length > 63206 && (
          <p className="text-xs text-slate-400">Max Limit: 63206</p>
        )}
      </div>
      <div className=" flex flex-col justify-center items-center h-full w-full bg-slate-50 p-4 space-y-2 rounded-lg">
        {text.length > 0 ? (
          <p
            className={`${
              text.length > 280 ? "text-red-500" : ""
            } text-md md:text-2xl font-bold`}
          >
            {text.length > 280 ? "Limit Exceeded!" : 280 - text.length}{" "}
            <span className="text-xs text-slate-400">Left</span>
          </p>
        ) : (
          <p className="text-md md:text-2xl font-bold">280</p>
        )}
        <h2 className="text-sm md:text-2xl font-normal text-slate-400">
          Twitter
        </h2>
        {text.length > 280 && (
          <p className="text-xs text-slate-400">Max Limit: 280</p>
        )}
      </div>
      <div className=" flex flex-col justify-center items-center h-full w-full bg-slate-50 p-4 space-y-2 rounded-lg">
        {text.length > 0 ? (
          <p
            className={`${
              text.length > 2200 ? "text-red-500" : ""
            } text-md md:text-2xl font-bold`}
          >
            {text.length > 2200 ? "Limit Exceeded!" : 2200 - text.length}{" "}
            <span className="text-xs text-slate-400">Left</span>
          </p>
        ) : (
          <p className="text-md md:text-2xl font-bold">2200</p>
        )}
        <h2 className="text-sm md:text-2xl font-normal text-slate-400">
          Instagram
        </h2>
        {text.length > 2200 && (
          <p className="text-xs text-slate-400">Max Limit: 2200</p>
        )}
      </div>
    </div>
  );
};

export default Info;

function GetLimit({ label, text }) {
  return (
    <div className=" flex flex-col justify-center items-center h-full w-full bg-slate-50 p-4 space-y-2 rounded-lg">
      <p className="text-md md:text-2xl font-bold">{text.length}</p>
      <h2 className="text-sm md:text-2xl font-normal text-slate-400">
        {label}
      </h2>
    </div>
  );
}

Info.propTypes = {
  text: PropTypes.string.isRequired,
};

GetLimit.propTypes = {
  label: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};
