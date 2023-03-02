# Morse code decoder

## Task

The task is to write a function, that decodes Morse code and returns a string.

---

## Stack
* JavaScript (ES6)
* Webpack
* Git

---

**Input:** String. Its length is multiple of 10.
- Each letter from alphabet encoded with dots(`.`) and dashes(`-`). `10` stands for dot(`.`), `11` stands for dash(`-`).
- Each encoded **letter's length is 10**.
- If the length of the encoded letter is **less then 10**, it `left padded` with `0`.
- `Space` in string is `**********`.
**Output:** String (decoded)
**Example:** `me` -> `m === -- === 0000001111`, `e === . === 0000000010` -> `00000011110000000010`

---

## Prepare and test

- Install [Node.js](https://nodejs.org/en/)
- Fork this repository: `https://github.com/romacher/morse-decoder.git`
- Clone your newly created repo: https://github.com/<%your_github_username%>/morse-decoder/
- Go to the folder `morse-decoder`
- Run `npm install` in command line
- Run `npm test` in command line
- You will see the number of passed and failed tests


### Notes
1. We recommend you to use nodejs of version 14 or lower. If you using any of features that does not supported by node v10, score won't be submitted.
2. Please be sure that each of your test in limit of 30sec.

---

### :white_check_mark: [Solution](https://github.com/Tatty13/morse-decoder/blob/master/src/index.js)

---
