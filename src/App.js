import { getCookie, getWord, setCookie } from "./Components/utils";
import { useEffect, useState } from "react";

function App() {
  const sentence = getCookie('sentence')
  const [words, setWord] = useState('')
  const [index, setIndex] = useState(0)
  console.log(index)
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
      <h1>Hangman</h1>
      {sentence.split('').map(letter => {
        let cName = ''
        if(letter === ' ') {
          cName='space'
        } else {
          cName='letter'
        }
        return (
          <>
          <span key={index} className={cName}>
            <span className="inner">{letter}</span>
          </span>
          </>
        );

      })}
    </>
  );
}

export default App;
