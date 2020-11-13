/* eslint-disable no-console */
/* eslint-disable import/prefer-default-export */

function bodyOnClick() {
  console.log("i am body");
}

function menuItemOnClick() {
  console.log("li");
}

function setupEventHandlers(doc, dataObject) {
  const body = doc.getElementsByTagName("body")[0];
  body.addEventListener("click", bodyOnClick);

  const menuArea = doc.getElementById("area");
  menuArea.addEventListener("click", menuItemOnClick);

  const element = doc.getElementById("btn");
  element.addEventListener("click", dataObject.method.bind(dataObject));

  const element1 = doc.getElementById("root");
  element1.addEventListener("click", dataObject.method1.bind(dataObject));
}

export function main(doc) {
  if (!doc) {
    console.log("Document is null");
    return null;
  }

  console.log("test");

  const testObject = {
    field: "Test object field",
    method(event) {
      event.stopPropagation();
      console.log(this.field);
    },
    method1(event) {
      console.log(`##### ${event.target.id} - ${this.field}`);
    },
  };

  setupEventHandlers(doc, testObject);

  return doc;
}

export function formsMain(doc) {
  console.log("forms main");

  const form = doc.getElementById("user");
  for (let index = 0; index < form.elements.length; index += 1) {
    const element = form.elements[index];
    console.log(element.value);
  }

  console.log(form.elements.fn.value);
  console.log(form.elements.ln.value);
  console.log(form.elements.isAdult.checked);

  const isAdult = doc.getElementById("isAdult");
  console.log(isAdult.checked);
}
