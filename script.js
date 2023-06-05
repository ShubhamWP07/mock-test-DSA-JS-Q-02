
function FirstNonRepeatingChar(s) {
  let charCount = {};

  for (let i = 0; i < s.length; i++) {
    const ch = s[i];
    charCount[ch] = (charCount[ch] || 0) + 1;
  }

  for (let i = 0; i < s.length; i++) {
    const ch = s[i];
    if (charCount[ch] === 1) {
      return i;
    }
  }

  return -1; 
}
