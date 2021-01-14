/* eslint quotes: ["error", "double"]  */

const question = "What environments does libp2p support?"

const choices = [
  {
    answer: "`libp2p` only supports the browser for now.",
    correct: false,
    feedback: "That's quite not right. Try again."
  },
  {
    answer: "`libp2p` supports a lot of environments: javascript (both NodeJs and Browsers), Go lang, Rust, Python, JVM, C++, and Nim.",
    correct: true,
    feedback: "That's right!"
  },
  {
    answer: "`libp2p` does not support many environments besides NodeJs. Browser support is in the works.",
    correct: false,
    feedback: "Sorry, but that's not quite right."
  }
]

export default {
  question,
  choices
}