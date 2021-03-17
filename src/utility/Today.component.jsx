let Today = new Date();
let dd = String(Today.getDate()).padStart(2, "0");
let mm = String(Today.getMonth() + 1).padStart(2, "0"); //January is 0!
let yyyy = Today.getFullYear();

Today = mm + "/" + dd + "/" + yyyy;

//let Today = new Date().toISOString().slice(0, 10);

export default Today;
