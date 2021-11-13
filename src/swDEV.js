export default function swDev() {
let swUrl = `${process.env.PUBLIC_URL}/sw.js`;
navigator.serviceWorker.register(swUrl).then(registration => {console.log(registration)}).catch(error => {console.log(error)});	
}