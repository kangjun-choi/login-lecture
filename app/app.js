'use strict';


// 모듈 =======================================================
const express = require("express");
const bodyParser = require("body-parser");
const app = express();

// 라우팅 =======================================================
const home = require("./src/routes/home")

// 앱 세팅 =======================================================
app.set("views", "./src/views"); // view 경로 설정
app.set("view engine", "ejs"); // view 엔진 설정
// express.static : 정적 경로 추가
// __dirname : 현재 경로를 표시(app.js 경로를 표시)
app.use(express.static(`${__dirname}/src/public`));
app.use(bodyParser.json());

app.use("/", home);  // use => 미들 웨어를 등록해주는 메서드.



module.exports = app;