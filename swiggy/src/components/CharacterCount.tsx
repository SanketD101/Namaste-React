import { useState } from "react";

function CharacterCount() {
  const [maxlen, setMaxlet] = useState(0);
  const [textAreain, setTextAreain] = useState("");
  const [errorm, setErrorm] = useState(false);
  const [warning, setWarning] = useState(false);
  function handleChange(e) {
    setTextAreain(e.target.value);
    if (
      e.target.value.length == Math.round(maxlen * 0.9) ||
      e.target.value.length == maxlen
    ) {
      setErrorm(false);
      setWarning(true);
    } else if (e.target.value.length > maxlen) {
      setErrorm(true);
      setWarning(false);
    } else {
      setErrorm(false);
      setWarning(false);
    }
  }
  console.log(textAreain.length, Math.round(maxlen * 0.9));
  return (
    <div className="characterCount pt-26">
      <h1>Character Count</h1>
      <p>Track your input length with live character warnings.</p>

      <div className="container">
        <div className="inputs">
          <label>
            Max length:
            <input
              type="number"
              min="0"
              max="1000"
              data-testid="maxlength"
              value={maxlen}
              onChange={(e) => setMaxlet(parseInt(e.target.value))}
            />
          </label>
        </div>
        <textarea
          className="text"
          placeholder="Start Typing"
          data-testid="textarea"
          value={textAreain}
          onChange={handleChange}
        ></textarea>

        <div data-testid="char-info" className="char-info">
          {textAreain.length + "/" + maxlen}
        </div>

        <div className="warnings">
          {warning && (
            <p className="warning-text" data-testid="warning-text">
              You are close to the limit!
            </p>
          )}

          {errorm && (
            <p className="error-message" data-testid="error-text">
              limit exceeded by {textAreain.length - maxlen} character
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
export default CharacterCount;

// import { useState } from "react";

// function CharacterCount() {
//   function handleChange(e) {}

//   return (
//     <div className="characterCount">
//       <h1>Character Count</h1>
//       <p>Track your input length with live character warnings.</p>

//       <div className="container">
//         <div className="inputs">
//           <label>
//             Max length:
//             <input type="number" min="0" max="1000" data-testid="maxlength" />
//           </label>
//         </div>
//         <textarea
//           className="text"
//           placeholder="Start Typing"
//           data-testid="textarea"
//         ></textarea>

//         <div data-testid="char-info" className="char-info">
//           {/*For Example 5/50 */}
//         </div>

//         <div className="warnings">
//           {/* Show Warning if it reaches to 90 */}
//           <p className="warning-text" data-testid="warning-text"></p>

//           {/* Show  Overlimit message if limit is exceeded*/}
//           <p className="error-message" data-testid="error-text"></p>
//         </div>
//       </div>
//     </div>
//   );
// }
// export default CharacterCount;
