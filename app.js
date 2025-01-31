const express = require("express");
const path = require("path");

const app = express();

app.set("view engine","ejs")
app.use(express.static("views"));
app.use(express.urlencoded({'extended':true}));
app.use(express.json());

let header=["IDNO","LASTNAME","FIRSTNAME","COURSE","LEVEL"];

let studentlist = [
	{
		idno:'1000',
		lastname:'durano',
		firstname:'dennis',
		course:'bscpe',
		level:'4'
	},
	{
		idno:'2000',
		lastname:'hello',
		firstname:'world',
		course:'bsit',
		level:'2'
	},
	{
		idno:'3000',
		lastname:'alpha',
		firstname:'bravo',
		course:'bscs',
		level:'3'
	},
	{
		idno:'4000',
		lastname:'sample',
		firstname:'user',
		course:'bsit',
		level:'3'
	},
	
];

app.get("/deletestudent",(req,res)=>{
	let idno = req.query.idno;
	let index = req.query.index;
	//program to remove an item from the array
	console.log("Deleting Student idno :"+idno);
	studentlist.splice(index,1);
	res.redirect("/");
});



app.post("/save",(req,res)=>{
	let idno = req.body.idno;
	let lastname = req.body.lastname;
	let firstname = req.body.firstname;
	let course = req.body.course;
	let level = req.body.level;
	studentlist.push({
		idno:idno,
		lastname:lastname,
		firstname:firstname,
		course:course,
		level:level 
	});
	res.redirect("/");
});

app.get("/",(req,res)=>{
	let name = "dennis durano";
	res.render("index.ejs",{header,studentlist})
	
});

app.listen("4321",()=>{
	console.log("listening at port 4321");
});

app.post("/update", (req, res) => {
    const index = parseInt(req.body.index);
    const idno = req.body.idno;
    const lastname = req.body.lastname;
    const firstname = req.body.firstname;
    const course = req.body.course;
    const level = req.body.level;

   
    studentlist[index] = {
        idno: idno,
        lastname: lastname,
        firstname: firstname,
        course: course,
        level: level
    };

    res.redirect("/");
});
