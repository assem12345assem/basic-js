
/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  isReverse;
  aCode = 'A'.charCodeAt();
  zCode = 'Z'.charCodeAt();
  constructor(value) {
    this.isReverse = value === false;
  }
  encrypt(message, key) {
    return this.helper(message, key, this.encryptHelper.bind(this));
  }
  decrypt(message, key) {
    return this.helper(message, key, this.decryptHelper.bind(this));
  }
  helper (message, key, strategy) {
    if(!message || !key) throw new Error('Incorrect arguments!')
    const msg = message.toUpperCase();
    const keyDist = key.toUpperCase().split('').map((c) => c.charCodeAt() - this.aCode);
    const n = msg.length;
    const m = keyDist.length;
    const ans = new Array(n);
    for (let i = 0, j = 0; i < n; i++) {
      const char = msg.charAt(i);
      const charCode = char.charCodeAt();
      if(charCode < this.aCode || charCode > this.zCode) {
        ans[i] = char;
      } else {
        const distance = keyDist[j];
        ans[i] = strategy(charCode, distance);
        j++;
        if(j >= m) j = 0;
      }

    }
    if(this.isReverse) ans.reverse();
    return ans.join('');
  }
  encryptHelper(charCode, distance) {
    const n = charCode + distance;
    return String.fromCharCode(n <= this.zCode ? n : this.aCode + n - this.zCode - 1);
  }
  decryptHelper(charCode, distance) {
    const n = charCode - distance;
    return String.fromCharCode( n >= this.aCode ? n : this.zCode - (this.aCode - n) + 1);
  }

}

module.exports = {
  VigenereCipheringMachine
};
