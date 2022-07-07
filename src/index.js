const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
  let symb = {
    '00': '',
    '10': '.',
    '11': '-',
  }
  
  let sentenceInNum = [];
  
  for (let i = 0; i < expr.length; i += 10) {
    let dec = expr.slice(i, i + 10);
    if (dec == '**********') {
      dec = ' ';
    }
    let letterInNum = [];
    for (let i = 0; i < 10; i += 2) {
      letterInNum.push(dec.slice(i, i +2));
    }
    sentenceInNum.push(letterInNum);
  }
  
  let morseSentence = [];

  for (let item of sentenceInNum) {
    let morseLetter = '';
    item.forEach(el => el in symb ? morseLetter += symb[el] : morseLetter += '');
    morseSentence.push(morseLetter);
  }

  let sentence = '';
  morseSentence.forEach(el => el in MORSE_TABLE ? sentence += MORSE_TABLE[el] : sentence += ' ');
  
  return sentence;
}

module.exports = {
    decode
}