let Today = new Date();
let dd = String(Today.getDate()).padStart(2, "0");
let mm = String(Today.getMonth() + 1).padStart(2, "0"); //January is 0!
let yyyy = Today.getFullYear();

export let Time = Today.getHours() + ":" + Today.getMinutes();

Today = mm + "/" + dd + "/" + yyyy;

export let Now = Today + " " + Time;

export default Today;
