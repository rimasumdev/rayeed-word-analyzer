import PropTypes from "prop-types";

const TextArea = ({ text, setText }) => {
  const handleChange = (e) => {
    console.log(e.target.value);
    setText(e.target.value);
  };
  return (
    <div className="relative h-[60%] md:h-[70%] lg:h-[80%] rounded-lg bg-slate-50 w-full flex justify-center items-center">
      <textarea
        onChange={handleChange}
        className="w-full h-full p-4 rounded-lg focus:outline-none overflow-y-auto resize-none"
        placeholder="Enter your text here"
      ></textarea>
      <div className="absolute bottom-0 right-0">
        <div className=" flex justify-center items-center h-full w-full bg-slate-50 p-4 space-x-2">
          <h2 className="text-xs text-slate-500">Reading Time:</h2>
          {text.length > 0 ? (
            <p className="text-xs text-slate-700 font-bold">
              {Math.floor(text.trim().split(" ").length / 200) < 1
                ? `${Math.floor(
                    (text.trim().split(" ").length % 200) / (200 / 60)
                  )} sec`
                : `${Math.floor(
                    text.trim().split(" ").length / 200
                  )} min ${Math.floor(
                    (text.trim().split(" ").length % 200) / (200 / 60)
                  )} sec`}
            </p>
          ) : (
            <p className="text-xs text-slate-700 font-bold">0</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default TextArea;

TextArea.propTypes = {
  text: PropTypes.string.isRequired,
  setText: PropTypes.func.isRequired,
};
