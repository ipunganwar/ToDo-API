const bcrypt = require('bcrypt');

const encrypt = (plain) => {
	return new Promise((resolve, reject) => {
		bcrypt.hash(plain, +process.env.SALT, function(err, hash) {
  			if(err){
  				reject(err)
  			}
  			else{
  				resolve(hash)
  			}
		})
	})
}

const decrypt = (plain, hash) => {
  return new Promise((resolve, reject) => {
    bcrypt.compare(plain, hash, function(err, res) {
      if(err){
          reject(err)
        }
        else{
          resolve(hash)
        }
    })
  })
}

module.exports = {
  encrypt,
  decrypt
}