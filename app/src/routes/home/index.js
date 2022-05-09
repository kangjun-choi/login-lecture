"use strict";

const express = require("express");
const router = express.Router();

const ctrl = require("./home.ctrl");

// app.get(route(경로), callback function) 경로 설정
router.get("/", ctrl.home);

router.get("/login", ctrl.login);


// 외부에서 사용할 수 있도록 내보내기
module.exports = router;