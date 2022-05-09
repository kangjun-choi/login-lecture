'use strict';

const app = require("../app");

const PORT = 3000;

// app.listen(port number, callback function) : 서버 실행
app.listen(PORT, () => {
    console.log('서버 가동');
});