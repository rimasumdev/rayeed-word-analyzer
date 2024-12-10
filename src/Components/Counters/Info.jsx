import PropTypes from "prop-types";

const Info = ({ text }) => {
  const count = {
    characters: text.length.toString(),
    words:
      text.length > 0
        ? text.trim().split(" ").filter(Boolean).length.toString()
        : "0",
    sentences: (
      text.split(".").length -
      1 +
      text.split("!").length -
      1 +
      text.split("?").length -
      1 +
      text.split("।").length -
      1
    ).toString(),
    facebook:
      text.length > 63206
        ? "Limit Exceeded!"
        : (63206 - text.length).toString(),
    twitter:
      text.length > 280 ? "Limit Exceeded!" : (280 - text.length).toString(),
    instagram:
      text.length > 2200 ? "Limit Exceeded!" : (2200 - text.length).toString(),
  };
  return (
    <div className="h-[40%] md:h-[30%] lg:h-[20%] w-full grid grid-cols-3 lg:grid-cols-6 justify-center items-center lg:gap-4 gap-3 flex-wrap overflow-y-auto">
      <GetLimit label="Characters" count={count.characters} />
      <GetLimit label="Words" count={count.words} />
      <GetLimit label="Sentences" count={count.sentences} />
      <GetLimit label="Facebook" count={count.facebook} left={true} />
      <GetLimit label="Twitter" count={count.twitter} left={true} />
      <GetLimit label="Instagram" count={count.instagram} left={true} />
    </div>
  );
};

export default Info;

function GetLimit({ label, count, left }) {
  return (
    <div className=" flex flex-col justify-center items-center h-full w-full bg-slate-50 p-4 space-y-2 rounded-lg">
      <p className="text-md md:text-2xl font-bold">
        {left ? (
          <>
            {count} <span className="text-xs text-slate-400">Left</span>
          </>
        ) : (
          count
        )}
      </p>
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
  count: PropTypes.string.isRequired,
  left: PropTypes.bool,
};
