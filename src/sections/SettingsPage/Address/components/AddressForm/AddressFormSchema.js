export const schema = {
  street1: {
    presence: { allowEmpty: false, message: "^Veuillez renseigner votre rue" }
  },
  zip: {
    numericality: {
      onlyInteger: true,
      message: "^Le code postal ne doit contenir que des chiffres"
    },
    length: {
      minimum: 5,
      maximum: 5,
      message: "^Le code postal doit contenir 5 chiffres"
    },
    presence: { allowEmpty: false, message: "^Veuillez renseigner votre code postal" }
  },
  city: {
    presence: { allowEmpty: false, message: "^Veuillez renseigner votre ville" }
  }
};
