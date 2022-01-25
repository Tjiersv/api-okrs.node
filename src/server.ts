import express from 'express';

export const startServer = () => {
    try {
        console.error("[START]: Init Server");
        const app = express();
        const port = process.env.PORT || 3000;
        app.listen(port, () => console.log(`Server running in port: ${port}`));
    } catch (error) {
        console.error("[START Error]", error);
    }
}