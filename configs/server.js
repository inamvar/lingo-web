var isDevelopment=process.env.NODE_ENV!=='production';

const server=isDevelopment?"https://localhost:7663/api/v1":"https://lingo-elearning.com";

export default server;