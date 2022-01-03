export function setCookie(name, value, days) {
  var expires = "";
  if (days) {
    var date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    expires = "; expires=" + date.toUTCString();
  }
  document.cookie = name + "=" + (value || "") + expires + "; path=/";
}
export function getCookie(name) {
  var nameEQ = name + "=";
  var ca = document.cookie.split(";");
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == " ") c = c.substring(1, c.length);
    if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
  }
  return null;
}
export function eraseCookie(name) {
  document.cookie = name + "=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;";
}

export const getWord = async () => {
    const response = await fetch(
      "https://api.hatchways.io/assessment/sentences/1"
    );

    const sentence = await response.json()
    if(sentence) {
        return sentence.data.sentence;
    }
}

export const isAlpha = function (ch) {
  return (
    typeof ch === "string" &&
    ch.length === 1 &&
    ((ch >= "a" && ch <= "z") || (ch >= "A" && ch <= "Z"))
  );
};

export const shuffle = function (str, breaker = " ") {
  let a = str.split(""),
    n = a.length;

    console.log(str, a)

  for (let i = n - 1; i > 0; i--) {
    if (a[i] !== breaker) {
      let j = Math.floor(Math.random() * (i + 1));
      if (a[j] !== breaker) {
        let tmp = a[i];
        a[i] = a[j];
        a[j] = tmp;
      }
    }
  }
  return a.join("");
};