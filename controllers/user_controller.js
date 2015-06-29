var usuarios = {
  admin: {username:"admin", password:"admin"},
  user: {username:"user", password:"user"}
};


exports.autenticar = function(user, password, callback) {
  if (usuarios[user]) {
    if (usuarios[user].password === password) {
      callback(null, usuarios[user]);
    } else {
      callback({message: "Password incorrecto"});
    }
  } else {
    // No existe el usuarios
    callback({message: "Usuario no existe"});
  }
};
