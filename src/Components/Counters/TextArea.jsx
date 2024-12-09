import PropTypes from "prop-types";

const TextArea = ({ setText }) => {
  const handleChange = (e) => {
    console.log(e.target.value);
    setText(e.target.value);
  };
  return (
    <div className="h-[60%] md:h-[70%] lg:h-[80%] rounded-lg bg-slate-50 w-full flex justify-center items-center">
      <textarea
        onChange={handleChange}
        className="w-full h-full p-4 rounded-lg focus:outline-none overflow-y-auto resize-none"
        placeholder="Enter your text here"
      ></textarea>
    </div>
  );
};

export default TextArea;

TextArea.propTypes = {
  setText: PropTypes.func.isRequired,
};
