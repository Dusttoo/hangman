import { getCookie, getWord, setCookie, shuffle } from "./Components/utils";
import { useEffect, useState } from "react";
import Box from "./Components/Box";

function App() {
  const sentence = getCookie('sentence')
  const scrambled = shuffle(sentence)
  const [words, setWord] = useState('')

  if(!sentence) {
    setCookie("sentence", words, 7);
  }

    useEffect(() => {
      (async () => {
        const fetchWord = await getWord();
        setWord(fetchWord)
      })();
    }, []);

  
  return (
    <>
      <div className="page-container">
        <h1>Hangman</h1>
        <p>{scrambled}</p>
        <div className="puzzle-container">
          {sentence.split("").map((letter) => {
            let cName = "";
            if (letter === " ") {
              cName = "space";
            } else {
              cName = "letter";
            }
            return (
              <>
                <span className={cName}>
                  <Box letter={letter} />
                </span>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default App;
