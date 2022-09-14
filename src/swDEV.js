let swUrl = `${import.meta.env.VITE_APP_URI}/sw.js`;
var register


const notifcaciones = async()=>
{
    const subs = await register.pushManager.subscribe({
        userVisibleOnly: true,
        applicationServerKey: "BNk42dMwQPrzGqMwiM7mjlL9exyjt9qU9ZcbaETrG8gpWqZ0m2lCDrnYXoKIkzO7VuyKZspBdleEqxu-eWWtzD8"
    })
    localStorage.setItem("subs",JSON.stringify(subs))
    
     
     
     

} 

export default  async function swDev() {
   register = await navigator.serviceWorker.register(swUrl)
   
   try{
      await notifcaciones();
   }
    catch(e){
        console.log("no notificaciones");
    }
   
}

export {register} 
