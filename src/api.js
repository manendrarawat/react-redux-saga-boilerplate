export const fetchData = async () => {

    try{
        const response = await fetch('https://randomuser.me/api');
         const data = response.json();
         return data;
    }
    catch(e){
        console.log(e);
    }
    
}