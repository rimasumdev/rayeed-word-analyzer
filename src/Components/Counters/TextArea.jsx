import PropTypes from "prop-types";
import { useState } from "react";
const TextArea = ({ text, setText }) => {
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const handleChange = (e) => {
    let words = e.target.value;
    const tagsToRemove = /<script>|<img>|<iframe>|<link>|<meta>|<style>/gi;
    const found = words.toLowerCase().match(tagsToRemove);
    if (found) {
      setError(true);
      words = words.replace(tagsToRemove, "");
      setErrorMessage(`Removed Harmful Tag: ${found[0].replace(/<|>/g, "")}`);
    } else {
      setError(false);
      setErrorMessage("");
    }

    // Check for event handlers and styles
    const attributesToRemove = /on\w+="[^"]*"|style="[^"]*"/g;
    const foundAttributes = words.match(attributesToRemove);
    if (foundAttributes) {
      setError(true);
      words = words.replace(attributesToRemove, "");
      setErrorMessage(
        `Removed Harmful Attributes: ${foundAttributes
          .join(", ")
          .replace(/"/g, "")}`
      );
    }

    setText(words);
  };
  return (
    <div className="relative h-[60%] md:h-[70%] lg:h-[80%] rounded-lg bg-slate-50 w-full flex justify-center items-center">
      <textarea
        onChange={handleChange}
        className="w-full h-full p-4 rounded-lg focus:outline-none overflow-y-auto resize-none"
        placeholder="Enter your text here"
        value={text}
      ></textarea>
      {error && (
        <div className="absolute left-0 bottom-0 bg-slate-50 p-4 space-x-2 rounded-bl-lg">
          <p className="text-xs text-red-500 font-bold">{errorMessage}</p>
        </div>
      )}
      <div className="absolute bottom-0 right-0">
        <div className=" flex justify-center items-center h-full w-full bg-slate-50 p-4 space-x-2 rounded-br-lg">
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
