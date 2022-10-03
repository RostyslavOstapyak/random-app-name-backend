const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');

const app = express();
const PORT = 5000;

const start = async ()=>{
	try{
		app.listen(PORT,()=>console.log(`Server started on port : ${PORT}`))
	} catch (e) {
		console.log(e);
	}
}
start()