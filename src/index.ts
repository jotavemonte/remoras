import * as express from 'express';

const app = express();
const port = 9898;

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
