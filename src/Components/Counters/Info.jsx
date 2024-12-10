import PropTypes from "prop-types";

const Info = ({ text }) => {
  return (
    <div className="h-[40%] md:h-[30%] lg:h-[20%] w-full grid grid-cols-3 lg:grid-cols-6 justify-center items-center lg:gap-4 gap-3 flex-wrap overflow-y-auto">
      <GetLimit label="Characters" text={text.length.toString()} />
      <GetLimit
        label="Words"
        text={
          text.length > 0
            ? text.trim().split(" ").filter(Boolean).length.toString()
            : "0"
        }
      />
      <GetLimit
        label="Sentences"
        text={(
          text.split(".").length -
          1 +
          text.split("!").length -
          1 +
          text.split("?").length -
          1 +
          text.split("।").length -
          1
        ).toString()}
      />
      <GetLimit
        label="Facebook"
        text={
          text.length > 63206
            ? "Limit Exceeded!"
            : (63206 - text.length).toString()
        }
      />
      <GetLimit
        label="Twitter"
        text={
          text.length > 280 ? "Limit Exceeded!" : (280 - text.length).toString()
        }
      />
      <GetLimit
        label="Instagram"
        text={
          text.length > 2200
            ? "Limit Exceeded!"
            : (2200 - text.length).toString()
        }
      />
    </div>
  );
};

export default Info;

function GetLimit({ label, text }) {
  return (
    <div className=" flex flex-col justify-center items-center h-full w-full bg-slate-50 p-4 space-y-2 rounded-lg">
      <p className="text-md md:text-2xl font-bold">{text}</p>
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
