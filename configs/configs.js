const isDevelopment=process.env.NODE_ENV!=='production';
export const Configs={
    serverSideUrl:isDevelopment?"https://127.0.0.1:5004/api/v1":"http://127.0.0.1:5004/api/v1",
    // serverSideUrl:isDevelopment?"https://127.0.0.1:5004/api/v1":"http://127.0.0.1:5004/api/v1",
     clientSideUrl:isDevelopment?"https://127.0.0.1:5004/api/v1":"https://api.lingo4030.com/api/v1"
    //clientSideUrl:isDevelopment?"https://127.0.0.1:5004/api/v1":"http://127.0.0.1:5004/api/v1"
}