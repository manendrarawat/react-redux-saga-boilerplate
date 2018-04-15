export const REQUEST_API_DATA = "REQUEST_API_DATA";
export const RECEIVE_API_DATA = "RECEIVE_API_DATA";

export const requestApiData = () => {
   console.log('requestHelloWorld action invoked');
   return  { type: REQUEST_API_DATA }
};

export function receiveApiData(data){
    console.log('receiveHelloWorld action invoked');
    return { type: RECEIVE_API_DATA, 
             data : data 
         }

} 