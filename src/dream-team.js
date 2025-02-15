const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members ) {
  if(members === null || members === undefined
    || typeof members !== "object" || members.length === 0 || !Array.isArray(members)) return false;
  let arr = [];
  for (const member of members) {
    if(member !== null && typeof member === 'string') {
      arr.push(member.trim().charAt(0).toUpperCase());
    }
  }
  if(arr.length === 0) return false;
  arr = arr.sort();
  return arr.join('');
}

module.exports = {
  createDreamTeam
};
