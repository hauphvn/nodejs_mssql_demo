import app from "./src/app.js";
import logger from "./src/logger.js";
import 'colors';

const PORT = process.env.PORT || 9000;
app.listen(PORT, () => {
    console.log('Server running on'.red.bgYellow, PORT);
    logger.info(`Server start on port: ${PORT} at `);
})
