import { app } from "./app";

app.listen({ 
    port: 3333,
    host: '0.0.0.0' 
}).then(() => {
    console.log("🚀 Server running on http://localhost:3333");
}).catch((err) => {
    console.error("❌ Error starting server:", err);
    process.exit(1);
});