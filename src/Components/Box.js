import { useState } from "react";
import './hangman.css'
function Box({letter}) {
  const [matched, setMatched] = useState(false)

  const checkMatch = (e) => {
      if(e.key === "Enter") {
          if (letter.toLowerCase() === e.target.value.toLowerCase()) {
            setMatched(true);
          }
      }
    
  }
//   console.log(letter, matched)

  return (
    <>
      {!matched &&(
        letter === ' ' ? 
        <></> :
        <input 
        className={`matched-${!matched} letter-input`} 
        onKeyPress={(e) => checkMatch(e)} />
      )}
      <span className={`matched-${matched}`}>{letter}</span>
    </>
  );
}

export default Box;
