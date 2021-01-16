/*
	there is three switchs
		one input switch is reserve tank (reserveTS)
		other input switch is main supply (mainS)
		another one is gatage switch (placticTS)
*/

let motorSwitchOn = document.getElementById('on');
let motorSwitchOff = document.getElementById('off');
let artical = document.getElementById("water-flow");
//inputs
let mainS = document.getElementById("mainS");
let reserveS = document.getElementById("reserveS");
let garageS = document.getElementById("garageS");

//output Sapan
let outputSpan = document.getElementById("output");

motorSwitchOn.addEventListener("click", (e)=>{
	artical.classList.add("artical-show");
});//click event on motor on

motorSwitchOff.addEventListener("click", (e)=>{
	console.log(motorSwitchOn.value)
	artical.classList.remove("artical-show");
});//click event off motor on


function waterFlowLogic() {
	if (mainS.value === "off" && reserveS.value === "off" && garageS.value === "off") {	//1
		outputFn("Reserve tank to Plastic tank");
	} else if (mainS.value === "off" && reserveS.value === "off" && garageS.value === "on") { //2
		outputFn("Reserve tank to Garage");
	} else if (mainS.value === "off" && reserveS.value === "on" && garageS.value === "off") { //3
		outputFn("Reserve tank to Reserve tank");
	} else if (mainS.value === "off" && reserveS.value === "on" && garageS.value === "on") { //4
		outputFn("Reserve tank to Reserve tank");
	} else if (mainS.value === "on" && reserveS.value === "off" && garageS.value === "off") { //5
		outputFn("Main supply to plastic tank");
	} else if (mainS.value === "on" && reserveS.value === "off" && garageS.value === "on") { //6
		outputFn("Main supply to Plastic tank");
	} else if (mainS.value === "on" && reserveS.value === "on" && garageS.value === "off") { //7
		outputFn("Main supply to Reserve tank");
	} else if (mainS.value == "on" && reserveS.value == "on" && garageS.value == "on") { //8
		outputFn("Reserve tank to Reserve tank");
	} else {
		alert("Pleaser Enter on / off");
	}
}

//pass btn
let submitBtn = document.getElementById("frm");
submitBtn.addEventListener("submit", (e)=>{
	e.preventDefault();
	waterFlowLogic();
	console.log(mainS.value);
});

//display flow of water
function outputFn(text) {
	// body...
	outputSpan.innerText = text;
}