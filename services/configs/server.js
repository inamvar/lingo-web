var isDevelopment=process.env.NODE_ENV!=='production';

const server=isDevelopment?"https://127.0.0.1:5004/api/v1":"https://lingo-elearning.com";
export default server;