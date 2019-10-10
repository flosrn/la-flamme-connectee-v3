export const schema = {
  firstName: {
    presence: { allowEmpty: false, message: "^Veuillez indiquer votre prénom" },
    length: {
      maximum: 32,
      message: "^Le prénom est trop long (maximum 32 charactères)"
    }
  },
  lastName: {
    presence: { allowEmpty: false, message: "^Veuillez indiquer votre nom" },
    length: {
      maximum: 32,
      message: "^Le nom est trop long (maximum 32 charactères)"
    }
  },
  email: {
    presence: { allowEmpty: false, message: "^Veuillez indiquer votre adresse mail" },
    email: {
      message: "^Veuilez entrer une adresse mail valide"
    },
    length: {
      maximum: 64,
      message: "^Le mail est trop long (maximum 64 charactères)"
    }
  },
  password: {
    presence: { allowEmpty: false, message: "^Le mot de passe est requis" },
    length: {
      minimum: 6,
      message: "^Le mot de passe doit contenir 6 charactères au minimum"
    }
  },
  passwordConfirm: {
    presence: { allowEmpty: false, message: "^Veuillez confirmer votre mot de passe" },
    length: {
      maximum: 64,
      message: "^Le mot de passe est trop long (maximum 64 charactères)"
    },
    equality: {
      attribute: "password",
      message: "^Les mots de passe ne sont pas identique"
    }
  }
};
