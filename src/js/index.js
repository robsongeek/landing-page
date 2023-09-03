const fields = document.querySelectorAll("[required");
// console.log(fields);
function valitateField(field) {
  function verifyErrors() {
    let foundError = false;

    for (let keyErro in field.validity) {
      if (field.validity[keyErro] && !field.validity.valid) {
        foundError = true;
      }
    }
    return foundError;
  }

  function setCustomMessage(message) {
    const spanError = field.parentNode.querySelector("span.mensagem-erro");
    if (message) {
      spanError.classList.add("active");
      spanError.innerHTNL = message;
    } else {
      spanError.classList.remove("active");
      spanError.innerHTNL = "";
    }
  }

  return function () {
    if (verifyErrors()) {
      field.style.border = "thin solid";
      field.style.borderColor = "#F52E2E";
      setCustomMessage("campo obrigatório");
    } else {
      field.style.borderColor = "#00C22B";
      setCustomMessage();
    }
  };
}

for (let field of fields) {
  field.addEventListener("invalid", (event) => {
    event.preventDefault();
    customValidation(event);
  });
  field.addEventListener("blur", customValidation);
}

function customValidation(event) {
  const field = event.target;
  const validation = valitateField(field);
  validation();
}

document.querySelector("form").addEventListener("submit", (event) => {
  event.preventDefault();
});

