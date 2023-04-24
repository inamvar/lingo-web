var isDevelopment=process.env.NODE_ENV!=='production';
const server=isDevelopment?"https://localhost:7153/api/v1":"https://google.com";

// https://api.esfpak.ir/api/server/v1

export default server;