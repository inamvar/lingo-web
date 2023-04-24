var isDevelopment=process.env.NODE_ENV!=='production';
const server=isDevelopment?"https://api.esfpak.ir/api/server/v1":"https://google.com";

export default server;