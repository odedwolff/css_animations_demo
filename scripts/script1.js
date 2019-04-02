
const animationCtx ={
	framesIntervalMs: 5
}  

function go(){
	console.log("go");
	//h1.style("rotateY:30deg")
	rotateAnimate(0, 180, 50, 100);

}


function init(){
	console.log("init");
	// var div = document.getElementById("div1");
	// setTimeout(function(){div.style="background:yellow";},1000)
	//test1();

	// testBreakDown();

	
	initWaves();
	
	initTiltTracking();

	setTwissterOpacity(0);
	
}


function rotateAnimate(startEngle, endEngle, frameRate, degPerSec){
	var totalFrames = Math.abs(endEngle - startEngle) / degPerSec * frameRate;
	var degPerFrame = (endEngle - startEngle) / totalFrames;
	var cnt = 0;
	
	var rotTo = startEngle;
	var timer = setInterval(
		function(){
			divRot.style = "transform: rotate(" + rotTo + "deg)";
			rotTo+=degPerFrame;
			cnt +=1;
			if(cnt == totalFrames){
				clearInterval(timer);
			}
		}, 
	1/frameRate);
}



function startWischer1(){
	//divRotCss.classList.add("cssRotGo");
	elms = document.getElementsByClassName("wischerMoveObj1");
	for(var i = 0 ; i< elms.length ; i++){
		elms[i].classList.add("wischer1Run");	
	}
}

function stopWischer1(){
	elms = document.getElementsByClassName("wischerMoveObj1");
	for(var i = 0 ; i< elms.length ; i++){
		elms[i].classList.remove("wischer1Run");	
	}
}

function startWischer2(){
	//divRotCss.classList.add("cssRotGo");
	elms = document.getElementsByClassName("wischerMoveObj2");
	for(var i = 0 ; i< elms.length ; i++){
		elms[i].classList.add("wischer2Run");	
	}
}

function stopWischer2(){
	elms = document.getElementsByClassName("wischerMoveObj2");
	for(var i = 0 ; i< elms.length ; i++){
		elms[i].classList.remove("wischer2Run");	
	}
}

function startWischer3(){
	//divRotCss.classList.add("cssRotGo");
	elms = document.getElementsByClassName("wischerMoveObj3");
	for(var i = 0 ; i< elms.length ; i++){
		elms[i].classList.add("wischer3Run");	
	}
}

function stopWischer3(){
	elms = document.getElementsByClassName("wischerMoveObj3");
	for(var i = 0 ; i< elms.length ; i++){
		elms[i].classList.remove("wischer3Run");	
	}
}








function startSwinging(){

	elms = document.getElementsByClassName("swingable");
	for(var i = 0 ; i< elms.length ; i++){
		elms[i].classList.add("swinging");	
	}
}


function startSwingingAynch(periodLenSec){
	
	elms = document.getElementsByClassName("swingable");
	for(var i = 0 ; i< elms.length ; i++){
		var delay = Math.random() * periodLenSec * 1000;
		//console.log("delat=" + delay);
		setTimeout(
			(function(elm){
				elm.classList.add("swinging");	
			}).bind(null, elms[i])
			,delay);
	}
}

function startSwingingDelta(dPhaseSec){
	
	elms = document.getElementsByClassName("swingable");
	for(var i = 0 ; i< elms.length ; i++){
		//console.log("delat=" + delay);
		setTimeout(
			(function(elm){
				elm.classList.add("swinging");	
			}).bind(null, elms[i])
			,dPhaseSec * 1000 * i);
	}
}

function startTwister(dPhaseSec, defuseSec){
	//setTwissterOpacity(1);
	elms = document.getElementsByClassName("twistLetterCont");
		for(var i = 0 ; i< elms.length ; i++){
			//console.log("delat=" + delay);
			setTimeout(
				(function(elm){
					elm.style.opacity = 1;
					elm.classList.add("twisting_in");	
				}).bind(null, elms[i])
				,dPhaseSec * 1000 * i);
			
			// setTimeout(function(elm){elm.classList.remove("twisting_in")}.bind(null, elms[i]),
			//  (dPhaseSec * 1000 * i) + (defuseSec * 1000));
	}
	
}

function reloadTwister(){
	elms = document.getElementsByClassName("twistLetterCont");
	for(var i = 0 ; i< elms.length ; i++){
		elms[i].classList.remove("twisting_in");
		elms[i].classList.remove("twist_pre_ride");	
		elms[i].classList.remove("twist_ride_away");	
		setTwissterOpacity(0);
	}
}

function setTwissterOpacity(val){
	elms = document.getElementsByClassName("twistLetterCont");
	for(var i = 0 ; i< elms.length ; i++){
		elms[i].style.opacity = val;
	}
}



function initTwisster(){
	setTwissterOpacity(0);
}

function twisterStage3(dPhaseSec, idleSpinSec){
	elms = document.getElementsByClassName("twistLetterCont");
		for(var i = 0 ; i< elms.length ; i++){
			//console.log("delat=" + delay);
			setTimeout(
				(function(elm){
					elm.classList.remove("twist");	
					elm.classList.add("twist_pre_ride");	
				}).bind(null, elms[i])
				,dPhaseSec * 1000 * i);
			
			setTimeout(function(elm){
				elm.classList.remove("twist_pre_ride");
				elm.classList.add("twist_ride_away")
			}.bind(null, elms[i]),
			(dPhaseSec * 1000 * i) + (idleSpinSec * 1000));
	}	

}

function twistIntegrated(){
	 
	/*  startTwister(.75, null);
	 setTimeout(function(){
	 	twisterStage3(.7, .7);
	 }
		 ,6000); */
		 
	var dPhase = 1.5;

		 startTwister(dPhase, null);
		 setTimeout(function(){
			 twisterStage3(dPhase, .7);
		 }
			 ,12000);
}

const pulsarCtx = {
	isRunning:false
}

function startPulsar(dPhaseSec){
	if(pulsarCtx.isRunning){
		return;
	}
	pulsarCtx.isRunning = true;
	elms = document.getElementsByClassName("letterContainerPulsar");
		for(var i = 0 ; i< elms.length ; i++){
			setTimeout(
				(function(elm){
					elm.classList.add("pulsarPumping");	
				}).bind(null, elms[i])
				,dPhaseSec * 1000 * i);		
	}
}

//start pulsar if not already started
function resumePulsar(){
	startPulsar(0.1);
}





function stopPulsar(){
	if(pulsarCtx.isRunning){
		pulsarCtx.isRunning=false;
		elms = document.getElementsByClassName("letterContainerPulsar");
			for(var i = 0 ; i< elms.length ; i++){
				elms[i].classList.remove("pulsarPumping");			
		}	
	}
}

function rollWord(){
	document.getElementById("divRollerWord").classList.add("rolling");		 
}

function rollPhase2(){
	document.getElementById("divRollerWord").classList.add("rollingPhase2");		 
}

function resetRollWord(){
	document.getElementById("divRollerWord").classList.remove("rolling");
	document.getElementById("divRollerWord").classList.remove("rollingPhase2");
	document.getElementById("divContRollerR1").classList.remove("clsTranformInR1");
	document.getElementById("divContRollerR2").classList.remove("clsTranformInR2");	
	document.getElementById("divContRollerR1").classList.remove("clsTranformInR1reverse");
	document.getElementById("divContRollerR2").classList.remove("clsTranformInR2reverse");	 
	document.getElementById("divRollerWord").classList.remove("rollerFadeOut");
	document.getElementById("divRollerWordDouble").classList.remove("fakeRollerFadeIn");
}

function integratedRoll(){
	rollWord();
	setTimeout(function(){rollPhase2();}, 13500);
}


function transformIn(){
	document.getElementById("divContRollerR1").classList.add("clsTranformInR1");		 
	document.getElementById("divContRollerR2").classList.add("clsTranformInR2");		 
}

function transformOut(){
	document.getElementById("divContRollerR1").classList.remove("clsTranformInR1");
	document.getElementById("divContRollerR2").classList.remove("clsTranformInR2");		
	document.getElementById("divContRollerR1").classList.add("clsTranformInR1reverse");
	document.getElementById("divContRollerR2").classList.add("clsTranformInR2reverse");		 
}


function transmitRoller(){
	document.getElementById("divRollerWord").classList.remove("rolling");
	document.getElementById("divRollerWord").classList.add("rollerFadeOut");
	document.getElementById("divRollerWordDouble").classList.add("fakeRollerFadeIn");

}

function rollerLoop(){
	(function loop(){
		resetRollWord();
		setTimeout(transformIn,1000);
		setTimeout(rollWord, 3000);
		setTimeout(transformOut, 15000);
		setTimeout(transmitRoller, 17000);
		setTimeout(loop, 18000);
	})();	
}

function animFocus(){
	document.getElementById("divLinesFocusText").classList.add("focusAnim");
}

function clearFocusAnim(){
		document.getElementById("divLinesFocusText").classList.remove("focusAnim");

}


function breakDownTextToLtters(text, classToAdd){
	out="";
	var c;
	var newElm;
	for (var i = 0;i<text.length;i++){
		c=text[i];
		if(c==" "){
			c= "&nbsp";
		}	
		newElm = "<div class='" +classToAdd +"'>" + c+ "</div>\n";
		out+=newElm;
	}
	return out;

}


//the containing element is assumed to contain the prargrpah 
// to be processed, as only child element 
function replaceParagpheWithSplittedDives(containingElment){
	p=containingElment.firstElementChild;
	var text=p.innerHTML;
	// var processedText=breakDownTextToLtters(text, "classFlashLetter");
	var processedText=breakDownTextToLtters(text, "classFlashLetter classFlashLetterTransparent");
	newDomContent="<div id='divProcessedP'>\n" +  processedText + "\n</div>"
	containingElment.innerHTML=newDomContent;
	//console.log(text);
}

flshingCtx = {
	processed:false
}
function preProcessFlashing(){	
	if(flshingCtx.processed){
		clearFlashing(false);
	}else{
		replaceParagpheWithSplittedDives(document.getElementById("divFashingContent"));
		flshingCtx.processed = true;
	}
}

function startFlashing(){
 	addClsToClsMmbrs("classFlashLetter", "flashing10", 2000);
}


function addClsToClsMmbrs(clsSelect, clsAdd, rndTimingSpectrumMs){
	elms = document.getElementsByClassName(clsSelect);
	var hasRndTiming= rndTimingSpectrumMs != null && rndTimingSpectrumMs != 0;
	for(var i = 0 ; i< elms.length ; i++){
		var delay;
		if(hasRndTiming){
			delay= rndTimingSpectrumMs * Math.random();
		}else{
			delay=100;
		}
		setTimeout(function(elm){
			elm.classList.add(clsAdd);
		}.bind(null, elms[i]), delay);		
	}
}



function showLettersGrad(timeSpectrumMs){
	var elms  = document.getElementsByClassName("classFlashLetter");
	var delayMs;
	for(var i = 0 ; i< elms.length ; i++){
		delayMs = Math.random() * timeSpectrumMs;
		setTimeout(function(elm){
			elm.style.opacity = 1;
		}.bind(null, elms[i]), delayMs);
	}
}


//assign sequence to individual letters
function setSequencesToFlasingLetter(rndTimingSpectrumMs){
	/* elms = document.getElementsByClassName("classFlashLetter");
	var hasRndTiming= rndTimingSpectrumMs != null && rndTimingSpectrumMs != 0;
	for(var i = 0 ; i< elms.length ; i++){
		elms[i].classList.add("classFlashLetterTransparent");

		var delay= rndTimingSpectrumMs * Math.random();
		setTimeout(function(elm){
			setTimeout(function(){
				elm.classList.remove("classFlashLetterTransparent");
				elm.classList.add("flashing10")
			},0);
			setTimeout(function(){
				elm.classList.remove("flashing10");
				elm.classList.add("flashing20")
			},750);
			setTimeout(function(){
				elm.classList.remove("flashing20");
				elm.classList.add("flashing40")
			},1500);
			setTimeout(function(){
				elm.classList.remove("flashing40");
				elm.classList.add("flashing80")
			},2000);
			setTimeout(function(){
				elm.classList.remove("flashing80");
			},2500);
		}.bind(null, elms[i]), delay);		
	} */

	showLettersGrad(8000);

	//now the entire div flshing 
	var container = document.getElementById("divProcessedP");
	setTimeout(function(){
		container.classList.add("snychFlash1");
	},/*5000*/8800);
	setTimeout(function(){
		container.classList.remove("snychFlash1");
		container.classList.add("snychFlash2");
	},/* 7500 */ 10800);
	setTimeout(function(){
		container.classList.remove("snychFlash2");
		container.classList.add("snychFlash3");
	},/* 10000 */ 12800);
	setTimeout(function(){
		container.classList.remove("snychFlash3");
	},/* 13000 */14800);

	setTimeout(function(){
		gradualHide(300);
	//},17000);
	},15600);

	setTimeout(function(){
		console.log("end Cycle flashing text");
	},17000);

	
}



function clearFlashingOld(toTranspaerent){

	var flashingChildren = document.getElementById("divProcessedP").children;
	for (var i = 0; i<flashingChildren.length; i++){
		if(toTranspaerent){
			flashingChildren[i].classList= "classFlashLetterTransparent";
		}else{
			flashingChildren[i].classList= "classFlashLetter";
		}
	}

	var elm = document.getElementById("divProcessedP");
	if (elm){
		elm.classList.remove("snychFlash1");	
	}
}

function clearFlashing(toTranspaerent){

	var flashingChildren = document.getElementById("divProcessedP").children;
	for (var i = 0; i<flashingChildren.length; i++){
		if(toTranspaerent){
			flashingChildren[i].className= "classFlashLetter classFlashLetterTransparent";
		}else{
			flashingChildren[i].className= "classFlashLetter";
		}
	}

	var elm = document.getElementById("divProcessedP");
	if (elm){
		elm.removeAttribute("class");	
	}
}




function removeClassFromClass(clsSelect, clsRmv){
	elms = document.getElementsByClassName(clsSelect);
	for(var i = 0 ; i< elms.length ; i++){
		elms[i].classList.remove(clsRmv);
	}
}

function flashSync(){
	document.getElementById("divProcessedP").classList.add("snychFlash1");
}


function flashingSequence(){
	setSequencesToFlasingLetter(1000);
}

function gradualHide(timeSpectrumMs){
	var elms = document.getElementsByClassName("classFlashLetter");
	for(var i = 0; i < elms.length; i++){
		var delay=timeSpectrumMs*Math.random();
		setTimeout(function(elm){
			elm.classList.add("classFlashLetterTransparent");
			elm.style.opacity=0;
		}.bind(null, elms[i]), delay);
	}
}

function startSwimming(){
	// elms = document.getElementsByClassName("clsFish1");
	// for(var i = 0; i < elms.length; i++){

	// }
	addClsToClsMmbrs("clsFish1", "animFishTransLeft", 500);
}

function clearSwimming(){
	removeClassFromClass("clsFish1", "animFishTransLeft");
}
		 
function startWalking(){
	// document.getElementById("leftFoot").classList.add("walking");
	// setTimeout(function(){
	// 	document.getElementById("rightFoot").classList.add("walking");
	// },800);
	startWalkingNoCss();
}

function stopWalking(){
	removeClassFromClass("foot", "walking");
}


function startWalkingNoCss(){
	var frameRateFps=20;
	var dTimeMs=1000/frameRateFps;
	var latestTransforms={
		"leftFoot":{
			translateX:0,
			translateY:0
		},
		"rightFoot":{
			translateX:0,
			translateY:0
		}
	};
	leftFoot=document.getElementById("leftFoot");
	rightFoot=document.getElementById("rightFoot");
	// for(var i=0; i< 50; i++){
	// 	//** refernce- transform: translate(-300px,0) scale(1, .5);
	// 	// var transformCtx= "transform: translate("+10px+,0) scale(1, .5);
	// 	// setInterval(function(transform,opacity){
	// 	// 	leftFoot.style.transform = transform;
	// 	// }.bind(null,transformCtx, opacity),i*dTime);

	// 	setInterval(function(){
	// 		current 
	// 	} i*dTime);
	// }
	var stepSizePx=200;
	function walkCylce(cycleBginMs, domDivElm){
		// var currentTranslateX=latestTransforms[domDivElm.id]['translateX'];
		// domDivElm.style.opacity=1;
		setTimeout(function(){
			var currentTranslateX=latestTransforms[domDivElm.id]['translateX'];
			var newX=currentTranslateX + stepSizePx;
			// var transform="transform: translate(" + newX + "px,0)";
			var transform= "translate(" + newX + "px,0)";
			domDivElm.style.opacity=0;
			domDivElm.style.transform= transform;
			domDivElm.style.opacity=1;
			latestTransforms[domDivElm.id]['translateX'] = newX;
		},cycleBginMs);

	}

	function preStep(domElm){
		domElm.style.transform= "translate("+stepSizePx/2 + "px,0)";
		latestTransforms[domElm.id]['translateX']=stepSizePx/2;
	}

	// walkCylce(100, leftFoot);

	var cycleLenMs=700;

	preStep(rightFoot);
	for (var i = 1; i < 12; i++) {
		walkCylce(i * cycleLenMs, leftFoot);
		walkCylce(i * cycleLenMs + cycleLenMs / 2, rightFoot);
	}

}

const grasshoppCtx={
	sequenceRunning:false
}

function startGrassHoppersSeq(){
	if(grasshoppCtx.sequenceRunning){
		return;
	}
	grasshoppCtx.sequenceRunning=true;
	//preJumpTest();
	grasshopperSequence();
}



function hopSeq(ghDivId, fComplete){
	const dTimeMs=5;
	const hAccPxPerSecSqr = 3000;
	const vSpeedpxPerSec = 400;
	const shootupSpeedPxPerSec=-1000;
	const numHops=6;
	const pauseBetweenHopsMs=1700;
	var landingX = 0;
	function hopStep(domElm, transX, transY, hSpeedPxPerSec, fComplete){
		//if you are falling and hit the ground, your done
		landingX=transX;
		if(hSpeedPxPerSec > 0 && transY > 0){
			// landingX=transX;
			if(fComplete){
				fComplete();
			}
			return;
		}
		
		domElm.style.transform="translate("+transX + "px," + transY + "px)";
		setTimeout(function(){
			hopStep(
				domElm,
				transX + vSpeedpxPerSec * dTimeMs / 1000,
				transY + hSpeedPxPerSec * dTimeMs / 1000,
				hSpeedPxPerSec + hAccPxPerSecSqr * dTimeMs / 1000, 
				fComplete
			);
		}, dTimeMs);
			
	}


	var gh1 = document.getElementById(ghDivId); 
	// var gh1 = document.getElementById("divGH1"); 
	// hopStep(gh1, 0, 0, shootupSpeedPxPerSec);
	for(var i = 0; i < numHops ; i++){
		
		setTimeout(function(){
			preJump(gh1.id, landingX);
		}, pauseBetweenHopsMs * i );

		setTimeout(function(hopNr){
			var f=null;
			if(hopNr == numHops-1){
				f= fComplete;
			}
			hopStep(gh1, landingX, 0, shootupSpeedPxPerSec, f);
		}.bind(null,i), pauseBetweenHopsMs * i + 600);
		// }, pauseBetweenHopsMs * i + 600);
	}
}


function SpringSeqMulti(){
	setTimeout(function(){
		hopSeq("divGH1");
	},0);
	setTimeout(function(){
		hopSeq("divGH2");
	},400);
}


function preJump(elmId, translateX){
	const dTimeMs=5;
	const fps = 1000/dTimeMs;
	const animLenMsShrink=300;
	const animLenMsPause=200;
	const animLenMsExpend=50;
	// const minYscale=0.3;
	// const maxYscale=0.3;
	//linear slopes
	const shrinkSlopePerSec=-1.5;
	const expendSlopePerSec=12;
	const initiailScaley=1.0;

	var currentScaleY;
	var shrinkTime=0;
	var expendTime=0;
	var numIterrations;
	var domElm = document.getElementById(elmId);

	shrink(initiailScaley, 0, animLenMsShrink / dTimeMs, shrinkSlopePerSec);
	setTimeout(function(){
		expend();
	}, animLenMsShrink+ animLenMsPause+ animLenMsExpend);
	
	
	function shrink(baseScale, i, nuItterations, slope){
		currentScaleY=baseScale + (i/fps )* slope;
		domElm.style.transform = "scale(1," + currentScaleY + ") translate(" + translateX + "px,0)";
		if(i<nuItterations){
			setTimeout(function(){
				shrink(baseScale, i+1, nuItterations, slope);
			},dTimeMs);
		}
	}

	function expend(){
		shrink(currentScaleY, 0, animLenMsExpend/dTimeMs, expendSlopePerSec);
	}
}

function jumpCombinedPeriod(elmId){
	preJump(elmId);
	setTimeout(
		function(){
			hopSeq(elmId);
		},600
	);

}

function grasshopperSequence(){
	//preJump("divGH1");
	//jumpCombinedPeriod("divGH1");
	
	hopSeq("divGH1", null);
	setTimeout(
		function(){
			hopSeq("divGH2", null);
		},200
	);
	setTimeout(
		function(){
			hopSeq("divGH3", function(){
				console.log("seq ended grasshopper");
				grasshoppCtx.sequenceRunning=false;
			});
		},400
	);
}


function stopGears(){
	removeClassFromClass("plsClockwise", "plsClockwiseGoEase");
	removeClassFromClass("plsAnticlockwise", "plsAnticlockwiseGoEase");
	removeClassFromClass("plsClockwise", "plsClockwiseGoLinear");
	removeClassFromClass("plsAnticlockwise", "plsAnticlockwiseGoLinear");
}
function stratGearsEase(){
	stopGears();
	addClsToClsMmbrs("plsClockwise", "plsClockwiseGoEase",null);
	addClsToClsMmbrs("plsAnticlockwise", "plsAnticlockwiseGoEase",null);
}

function stratGearsLinear(){
	stopGears();
	addClsToClsMmbrs("plsClockwise", "plsClockwiseGoLinear",null);
	addClsToClsMmbrs("plsAnticlockwise", "plsAnticlockwiseGoLinear",null);
}

function startWheeling(){
	addClsToClsMmbrs("divWhellRotatingBox", "wheeling");
}

function clearWheeling(){
	removeClassFromClass("divWhellRotatingBox", "wheeling");
}

//starts elements containted in given word weeling graduatllly
function wheelReedWorld(wordContainerId){
	// const timeSpaceingMs = 100;
	const timeSpaceingMs = 150;
	// elms = document.getElementsByClassName(clsSelect);
	var querySelector = "#" + wordContainerId + " .divWhellRotatingBox";
	var elms = document.querySelectorAll(querySelector);
	for (var i = 0; i < elms.length; i++){
		setTimeout(function(elm){
			elm.classList.add("wheeling");
		}.bind(null, elms[i])
		, timeSpaceingMs*i);
	}
}

function wheelingSpinAllWords(){
	//wheelReedWorld("word1");
	var wordIds= ["wheelWord1", "wheelWord2","wheelWord3"];
	// const intervalMs = 700;
	const intervalMs = 1050;
	for(var i = 0; i < wordIds.length ; i++){
		setTimeout(
			function(wordId){
				wheelReedWorld(wordId);
			}.bind(null, wordIds[i])
			,intervalMs * i);
	}
}



var wheelingConstsCtx = {
	rangeVr: 250,
	rangeHor: 250, 
	// dx: 10,
	// dy:10,
	veloPxPSec:300,
	dtMs:5,
	distThreshPx:20,
};



//move lineary at set speed toward given target 
//***taget avlues are in "translate" space -***!!!
function wheelingStepToTargetOld(domElm, targetX, targetY,currentTranslateX, currentTranslateY,dxMs, dyMs){
	
	if(close (targetX, targetY,currentTranslateX, currentTranslateY)){
		// return {tanslationX:currentTranslateX, translationY:currentTranslateY};
		//console.log("targetX, targetY,currentTranslateX, currentTranslateY=" + 
		//	targetX +";" + targetY +";" +  currentTranslateX+";" +  currentTranslateY);
		return;
	}
	repostion(domElm, currentTranslateX, currentTranslateY);
	currentTranslateX = currentTranslateX + dxMs * wheelingConstsCtx.dtMs;
	currentTranslateY = currentTranslateY + dyMs * wheelingConstsCtx.dtMs;
	setTimeout(
		function(){
		wheelingStepToTarget(domElm, targetX, targetY,currentTranslateX, currentTranslateY,dxMs, dyMs);
		},
		wheelingConstsCtx.dtMs);
}


//move lineary at set speed toward given target 
//***taget avlues are in "translate" space -***!!!
function wheelingStepToTarget(domElm, targetX, targetY,currentTranslateX, currentTranslateY,dxMs, dyMs, staticRotate){
	
	if(close (targetX, targetY,currentTranslateX, currentTranslateY)){
		// return {tanslationX:currentTranslateX, translationY:currentTranslateY};
		//console.log("targetX, targetY,currentTranslateX, currentTranslateY=" + 
		//	targetX +";" + targetY +";" +  currentTranslateX+";" +  currentTranslateY);
		return;
	}
	repostion(domElm, currentTranslateX, currentTranslateY, staticRotate);
	currentTranslateX = currentTranslateX + dxMs * wheelingConstsCtx.dtMs;
	currentTranslateY = currentTranslateY + dyMs * wheelingConstsCtx.dtMs;
	setTimeout(
		function(){
		wheelingStepToTarget(domElm, targetX, targetY,currentTranslateX, currentTranslateY,dxMs, dyMs, staticRotate);
		},
		wheelingConstsCtx.dtMs);
}




function close(x1, y1, x2, y2){
	return (x2 - x1)**2 +  (y2 - y1)**2 <=  wheelingConstsCtx.distThreshPx**2;
}

function repostionOld(domElm, transX, transY){
	domElm.style.transform="translate("+ transX + "px," + transY +  "px) rotate(180deg)";
} 

function repostionOld2(domElm, transX, transY, staticRotate){
	var trnsfStr = "translate("+ transX + "px," + transY +  "px)";
	if(staticRotate){
		trnsfStr = trnsfStr + " rotate(" + staticRotate + "deg)"
	}
	 
	domElm.style.transform=trnsfStr;
} 



//claculates dx and dy for given vector 
//return dx and dy in px per miliSec 
function calcAxisSpeeds(orgX,orgY,trgX,trgY, veloPxPSec){
	//var  rawV = [trgX - orgX, trgY- orgY];
	var rawVMag = Math.sqrt((trgX - orgX)**2 + (trgY- orgY)**2);
	var dx= ((trgX - orgX) / rawVMag) * (veloPxPSec / 1000);
	var dy= (trgY - orgY) / rawVMag * (veloPxPSec / 1000);
	return {dxPxMs:dx, dyPxMs:dy};
}

function testMotion(){
	domElm = document.getElementById("divMovableObject");
	targetX = 800;
	targetY = -50;
	axSpeeds = calcAxisSpeeds(0,0,targetX, targetY, 400);
	//wheelingStepToTarget(domElm, targetX, targetY,0, 0,axSpeeds["dxPxMs"], axSpeeds["dyPxMs"],180);

	moveThingToPlace(domElm, 100, -20,0,0,1, -0.2, null);
}


/*
function testTransform(){
	domObj = document.getElementById("divMovableObject");
	var trnfParams = {
		srcTrnsX:0,
		trgTrnsX:20,
		srcTrnsY:0,
		trgTrnsY:-200,
		srcRotateDeg:0,
		trgRotateDeg:2800,
		srcScale:1,
		trgScale:12
	}
	transformCnstSpeed(domObj, trnfParams, 200, 2);
}*/ 




function spreadPhsases(elm, delayBetweenPhasesMs){
	//spread vertically 

	const targetY= Math.random() * wheelingConstsCtx.rangeVr- wheelingConstsCtx.rangeVr / 2;
	axSpeeds = calcAxisSpeeds(0,0,0, targetY, wheelingConstsCtx.veloPxPSec);
	//const endPhaseLocation = wheelingStepToTarget(elm, 0, targetY,0, 0, axSpeeds["dxPxMs"], axSpeeds["dyPxMs"],180);
	var trnfParams = {
		srcTrnsX:0,
		trgTrnsX:0,
		srcTrnsY:0,
		trgTrnsY:targetY,
		srcRotateDeg:180,
		trgRotateDeg:180,
		srcScale:1,
		trgScale:1
	}
	transformCnstSpeed(elm, trnfParams, 200, .2);	


	var targetX;
	const f2 = function(){
		//spraed horizontally  
		const orgX= 0;
		//that is, target y of previous stage
		const orgY= targetY;
		targetX= Math.random() * wheelingConstsCtx.rangeHor -  wheelingConstsCtx.rangeHor / 2;
		axSpeeds = calcAxisSpeeds(orgX, orgY,targetX, orgY, wheelingConstsCtx.veloPxPSec);
		//wheelingStepToTarget(elm, targetX, orgY, orgX, orgY, axSpeeds["dxPxMs"], axSpeeds["dyPxMs"],180);

		var trnfParams = {
			srcTrnsX:0,
			trgTrnsX:targetX,
			srcTrnsY:orgY,
			trgTrnsY:orgY,
			srcRotateDeg:180,
			trgRotateDeg:180,
			srcScale:1,
			trgScale:1
		}
		transformCnstSpeed(elm, trnfParams, 200, .2);	



	}
	setTimeout(f2, delayBetweenPhasesMs);

	const f3 = function(){
		const initTrnsX = targetX;
		const initTrnsY = targetY;
		//console.log("initTrnsY= " + initTrnsX );
		freeFAllingStep(elm, 0, initTrnsX, initTrnsY, 700, 180, 200);
	};
	setTimeout(f3, delayBetweenPhasesMs * 2);

}

function spreadCombined(){
	elms= document.querySelectorAll("#divWheelContent .divWhellRotatingBox" );
	for(var i = 0 ; i < elms.length; i++){
		spreadPhsases(elms[i], 1050);
	}
}

const freeFallCtx = {
	a_PxPerSecSqr:25000.0,
	thrshClosePx: 50
}

function freeFAll(domElm, remainingFall,trnsX, trnsY){
}



function freeFAllingStep(domElm,v_PxPSec,trnsX, trnsY,remainingFall,rotate, fps){
	const frameIntervalMs = 1000/fps;
	if(remainingFall <= freeFallCtx.thrshClosePx){
		domElm.style.opacity=0;
		return;
	}
	var transStr="translate(" + trnsX + "px," + trnsY + "px)";
	if(rotate){
		transStr = transStr + " rotate(" + rotate + "deg)";
	}
	domElm.style.transform= transStr;
	//const framStranlateY = v_PxPSec * animationCtx.framesIntervalMs;
	const framStranlateY = v_PxPSec * frameIntervalMs / 1000;
	trnsY = trnsY + framStranlateY;
	v_PxPSec= v_PxPSec + freeFallCtx.a_PxPerSecSqr * frameIntervalMs / 1000;
	remainingFall = remainingFall-framStranlateY;
	setTimeout(
		function(){
			freeFAllingStep(domElm,v_PxPSec,trnsX, trnsY,remainingFall, rotate, fps)
		}
		,animationCtx.framesIntervalMs);
}




function freeFAllingStepOld(domElm,v_PxPSec,trnsX, trnsY,remainingFall,rotate){
	if(remainingFall <= freeFallCtx.thrshClosePx){
		domElm.style.opacity=0;
		return;
	}
	var transStr="translate(" + trnsX + "px," + trnsY + "px)";
	if(rotate){
		transStr = transStr + " rotate(" + rotate + "deg)";
	}
	domElm.style.transform= transStr;
	const framStranlateY = v_PxPSec * animationCtx.framesIntervalMs;
	trnsY = trnsY + framStranlateY;
	v_PxPSec= v_PxPSec + freeFallCtx.a_PxPerSecSqr * animationCtx.framesIntervalMs / 1000;
	remainingFall = remainingFall-framStranlateY;
	setTimeout(
		function(){
			freeFAllingStep(domElm,v_PxPSec,trnsX, trnsY,remainingFall, rotate)
		}
		,animationCtx.framesIntervalMs);
}

function testFreeFall(){
	elm=document.getElementById("divMovableObject");
	freeFAllingStep(elm,0,0, 0,300,null);
}


function wheelElmsReset(){
	elms= document.querySelectorAll("#divWheelContent .divWhellRotatingBox" );
	for(var i=0; i < elms.length ; i++){
		elms[i].classList="divWhellRotatingBox";
		elms[i].style.transform="rotate(180deg)";
		elms[i].style.opacity=1;
	}
}


function wheelingScript(){
	//const fullPeriodMs= 3150 * 2;
	const fullPeriodMs= 5800;
	wheelingSpinAllWords();
	setTimeout(function(){
		wheelElmsReset();
		wheelingSpinAllWords();
	}, fullPeriodMs);
	setTimeout(spreadCombined, fullPeriodMs * 2);
}



//----------------------------------------------theme clouds-------------------------------------------------------



function setUpLayer(layerDomELm){
	var color;
 	var colorStr;
 	const trans = setRandTranslation(300, 0, layerDomELm);
 	color = rndColor();
 	colorStr = "hsl(" + color['h'] + "," + color['s'] + "%," + color['l'] + "%)";
 	//colorStr="black";
 	layerDomELm.style.color = colorStr;
 	return trans;
}




function setRandTranslation(rangeHor, rangeVer, elm){	
	const x= Math.random() * rangeHor - rangeHor / 2;
	const y= Math.random() * rangeVer - rangeVer / 2;
	elm.style.transform = "translate(" +x + "px," + y + "px)";
	return {'x':x, 'y':y};
}

function f8(){
	console.log("f8");
}

//get some random stauration and brightness of - magnetta 
function rndColor(){
	
	/* sort of pale gree 
	return {
			'h':146,
			's': Math.random() * 100,
			'l': Math.random() * 100
	} */

	//grayscale 
	return {/*'h':270,*/
			'h':0,
			's': 0,
			'l': Math.random() * 11
	}
}


//wheelingStepToTarget(domElm, targetX, targetY,currentTranslateX, currentTranslateY,dxMs, dyMs)

//reuse...
const moveThingToPlace = wheelingStepToTarget;
constCloudCtx = {
	totalXtranslatePx : 7000,
	dxPxSecMin: 500,
	dxPxSecMax: 1000
}





//move along x
function moveCloudLayerOld(domElm,initX,initY){
	const dxRange = constCloudCtx.dxPxSecMax - constCloudCtx.dxPxSecMin;
	const dx = Math.random() * dxRange + constCloudCtx.dxPxSecMin;
	console.log("dx=" + dx);

	// moveThingToPlace(
	// 	/*domElm*/domElm, 
	// 	/*targetX*/constCloudCtx.totalXtranslatePx,
	// 	 /*targetY*/0,
	// 	/*currentTranslateX*/initX,
	// 	/*currentTranslateY*/initY,
	// 	/*dxMs*/dx/1000,
	// 	/*dyMs*/ 0,
	// 	/*staticRotate*/null
	// 	);

	
	
}


function moveCloudLayer(domElm,initX,initY){
	/* const minDurationSec = 3;
	const maxDurationSec = 5; */

	const minDurationSec = 5;
	const maxDurationSec = 7;
	const durationSec = Math.random() * (maxDurationSec - minDurationSec) + minDurationSec

	
	const translateYMax = 500;
	const translateYMin = -500;
	const translateYFinal = Math.random() * (translateYMax-translateYMin) + translateYMin;

	var trnfParams = {
		srcTrnsX:initX,
		//trgTrnsX:2000,
		trgTrnsX:2750,
		srcTrnsY:initY,
		trgTrnsY:translateYFinal,
		srcRotateDeg:0,
		trgRotateDeg:0,
		srcScale:1,
		trgScale:1
	}
	transformCnstSpeed(domElm, trnfParams, 200, durationSec);

}




function moveClouds(){
		elms= document.querySelectorAll("#divCloudsContent .layer" );
		 for (var i = 0 ; i < elms.length; i++){
		 	var trans=setUpLayer(elms[i])
		 	setTimeout(
		 		function(elm,x,y){
		 			moveCloudLayer(elm,x,y);
		 		}.bind(null, elms[i],trans['x'],trans['y']),500
		 	);
		 }
}


var movFunctions=[];

function setupLayers1(){
	movFunctions=[];
	elms= document.querySelectorAll("#divCloudsContent .layer" );
		 for (var i = 0 ; i < elms.length; i++){
		 	trans=setUpLayer(elms[i])
		 	movFunctions.push(function(elm,x,y){
		 			moveCloudLayer(elm,x,y);
		 		}.bind(null, elms[i],trans['x'],trans['y']));
	}
}

function moveLayers1(){
	for (var i = 0; i < movFunctions.length; i++) {
		movFunctions[i]();
	}
}

//*--------------------------------------utilities-------------------------------------------------------------




function transformCnstSpeed(domObj, trnsfParams, fps, durSec){
	// const distance = Math.sqrt((tranformParams.trgTrsnsY- tranformParams.srcTrnsY)^^2 + 
	// 	(tranformParams.trgTrsnsX- tranformParams.srcTrnsX)^^2);

	const numFrames = fps * durSec;
	
	var dxPxFr = null;
	var dyPxFr = null;
	var dRotDegFr = null;
	var dScaleFr = null;

	if(trnsfParams.srcTrnsX != null){
		dxPxFr = (trnsfParams.trgTrnsX-trnsfParams.srcTrnsX) /  numFrames;
	}
	if(trnsfParams.srcTrnsY != null){
		dyPxFr = (trnsfParams.trgTrnsY-trnsfParams.srcTrnsY) /  numFrames;
	}
	if(trnsfParams.srcRotateDeg != null){
		dRotDegFr = (trnsfParams.trgRotateDeg-trnsfParams.srcRotateDeg) /  numFrames;
	}
	if(trnsfParams.srcScale != null){
		dScale = (trnsfParams.trgScale / trnsfParams.srcScale)**(1/numFrames);
	}

	var callParams= {
		'currentTranslateX': trnsfParams.srcTrnsX, 
		'currentTranslateY': trnsfParams.srcTrnsY, 
		'currentRotate': trnsfParams.srcRotateDeg,
		'currentScale': trnsfParams.srcScale,
		'dxPxFr': dxPxFr,
		'dyPxFr': dyPxFr,
		'dRotDegFr': dRotDegFr,
		'dScale': dScale
	}
	TranformStep(domObj, callParams, 1000/fps, numFrames, fps);
}

//function TranformStep(domObj, curTrsnslateX, curTranslateY, curRotate, dxPxFr, dyPxFr, dRotDeg, framesToGo, fps){
function TranformStep(domObj, moveParams, intervalMs, framesToGo, fps){
	if(framesToGo <= 0){
		return;
	}
	repostion(domObj, moveParams.currentTranslateX, moveParams.currentTranslateY, moveParams.currentRotate, moveParams.currentScale);
	moveParams.currentTranslateX= moveParams.currentTranslateX + moveParams.dxPxFr;
	moveParams.currentTranslateY = moveParams.currentTranslateY + moveParams.dyPxFr;
	moveParams.currentRotate = moveParams.currentRotate + moveParams.dRotDegFr;
	moveParams.currentScale = moveParams.currentScale * moveParams.dScale;
	var intervalMs = 1000 / fps;
	setTimeout(
		function(){
				TranformStep(domObj, moveParams, intervalMs, framesToGo - 1, fps);
		},intervalMs
	);
}

//repostion(domElm, transX, transY, rotate)
function repostion(domElm, transX, transY, rotate, scale){	
	if(!transX){
		transX=0;
	}
	if(!transY){
		transY=0;
	}
	var trnsfStr = "translate("+ transX + "px," + transY +  "px)";
	if(rotate){
		trnsfStr = trnsfStr + " rotate(" + rotate + "deg)"
	}if(scale){
		trnsfStr = trnsfStr +  " scale(" + scale + ")"
	}

	domElm.style.transform=trnsfStr;
} 


function testTransform(){
	domObj = document.getElementById("divMovableObject");
	var trnfParams = {
		srcTrnsX:0,
		trgTrnsX:20,
		srcTrnsY:0,
		trgTrnsY:-200,
		srcRotateDeg:0,
		trgRotateDeg:2800,
		srcScale:1,
		trgScale:12
	}
	transformCnstSpeed(domObj, trnfParams, 200, 2);
}


//------------------------------------zoom steps-----------------------------------------

const zoomStepConsts = {
	maxScale:1.5,
	minScale:.25,
	
		//const cycleDurMs = 1400;
	stepUpDurMs:400,
	stepDownDurMs:300,
	postStepDownDurMs:0,
}

zoomStepConsts.totalCycleLenMs=zoomStepConsts.stepUpDurMs + zoomStepConsts.stepDownDurMs + zoomStepConsts.postStepDownDurMs;
/* 

function walkRight(){
	const transXInitL=-75;
	const	transYInitL=250;
	const	transXInitR=-300;
	const	transYInitR=280;
	const	repetitions=4;
	const	stepLenPx=450;

	
	const leftFootDomElm=document.getElementById("zoomFootL");
	const rightFootDomElm=document.getElementById("zoomFootR"); 
	
	//init position 
	repostion(rightFootDomElm, transXInitR, transYInitR, 0, zoomStepConsts.maxScale);
	repostion(leftFootDomElm, transXInitL, transYInitL, 0, zoomStepConsts.maxScale);
	
	zoomStep(rightFootDomElm,  transXInitR, transYInitR, stepLenPx,  repetitions);
	setTimeout(function() {
		zoomStep(leftFootDomElm,  transXInitL, transYInitL, stepLenPx, repetitions);
	//}, zoomStepConsts.totalCycleLenMs * 0.7);
	}, zoomStepConsts.totalCycleLenMs  + 200);

}


 */



function walkLeft(){
	//const transXInitL=1200;
	const transXInitL=1175;

	const	transYInitL=250;
	//const	transXInitR=1425;
	const	transXInitR=1400;


	const	transYInitR=280;
	const	steps=3;
	const	stepLenPx=-450;
	
	const leftFootDomElm=document.getElementById("zoomFootL");
	const rightFootDomElm=document.getElementById("zoomFootR"); 
	
	//init position 
	repostion(rightFootDomElm, transXInitR, transYInitR, 0, zoomStepConsts.maxScale);
	repostion(leftFootDomElm, transXInitL, transYInitL, 0, zoomStepConsts.maxScale);
	
	zoomStep(rightFootDomElm,  transXInitR, transYInitR, stepLenPx,  steps + 1);
	setTimeout(function() {
		zoomStep(leftFootDomElm,  transXInitL, transYInitL, stepLenPx, steps );
	//}, zoomStepConsts.totalCycleLenMs * 0.7);
	}, zoomStepConsts.totalCycleLenMs  + 200);

}


function walkFromRightToCenter(){
	//const transXInitL=1200;
	//const transXInitL=1525;
	const transXInitL=1000;

	//const	transXInitR=1425;
	//const	transXInitR=1750;
	const transXInitR=1225;


	const	transYInitL=250;

	const	transYInitR=280;
	const	steps=1;
	const	stepLenPx=-450;
	
	const leftFootDomElm=document.getElementById("zoomFootL");
	const rightFootDomElm=document.getElementById("zoomFootR"); 
	
	//init position 
	repostion(rightFootDomElm, transXInitR, transYInitR, 0, zoomStepConsts.maxScale);
	repostion(leftFootDomElm, transXInitL, transYInitL, 0, zoomStepConsts.maxScale);
	
	zoomStep(rightFootDomElm,  transXInitR, transYInitR, stepLenPx,  steps);
	setTimeout(function() {
		zoomStep(leftFootDomElm,  transXInitL, transYInitL, stepLenPx, steps);
	//}, zoomStepConsts.totalCycleLenMs * 0.7);
	}, zoomStepConsts.totalCycleLenMs  + 200);

	const finalPositionL = transXInitL + stepLenPx * repetitions ;
	const finalPositionR = transXInitR + stepLenPx * repetitions ;

	
	//const finalPositionL = 500;
	//Y posiiton is assumed to not change
	//return {'x':finalPositionL, 'y':transYInitL};
	return {'x':finalPositionR, 'y':transYInitR};

}


function walkFromLeftToCenter(){
	
	/* const transXInitL=-125;
	const transXInitR=-350;
	const	transYInitL=250;
	const	transYInitR=280;
	const	steps=2;
	const	stepLenPx=450; */

    const offSetX =70;
	const transXInitL=-125 + offSetX;
	const transXInitR=-350 + offSetX;
	const	transYInitL=250;
	const	transYInitR=280;
	const	steps=2;
	const	stepLenPx=450;
	
	const leftFootDomElm=document.getElementById("zoomFootL");
	const rightFootDomElm=document.getElementById("zoomFootR"); 
	
	//init position 
	repostion(rightFootDomElm, transXInitR, transYInitR, 0, zoomStepConsts.maxScale);
	repostion(leftFootDomElm, transXInitL, transYInitL, 0, zoomStepConsts.maxScale);
	
	zoomStep(rightFootDomElm,  transXInitR, transYInitR, stepLenPx,  steps);
	setTimeout(function() {
		zoomStep(leftFootDomElm,  transXInitL, transYInitL, stepLenPx, steps - 1);
	//}, zoomStepConsts.totalCycleLenMs * 0.7);
	}, zoomStepConsts.totalCycleLenMs  + 200);

	//const finalPositionL = transXInitL + stepLenPx * steps ;

	const finalPositionR = transXInitR + stepLenPx * steps ;

	//const finalPositionL = 500;
	//Y posiiton is assumed to not change
	//return {'x':finalPositionL, 'y':transYInitL};
	return {'x':finalPositionR, 'y':transYInitR};

}



function zoomStep(domElm, orgX, orgY, dxStep, repetitions){
	if(repetitions == 0){
		return;
	}
	//var trgX, trgY, orgX, orgY;
	var trgX, trgY;


	//step up 
	trgX = orgX + dxStep / 2;
	trgY= orgY;
	var trnfParams = {
				srcTrnsX:orgX,
				trgTrnsX:trgX,
				srcTrnsY:orgY,
				trgTrnsY:trgY,
				srcRotateDeg:0,
				trgRotateDeg:0,
				srcScale:zoomStepConsts.maxScale,
				trgScale:zoomStepConsts.minScale
	}
	transformCnstSpeed(domElm, trnfParams, 100, zoomStepConsts.stepUpDurMs / 1000);

	//step down 
	orgX = trgX;
	orgY = trgY;
	trgX = trgX + dxStep / 2;
	trgY= orgY;
	setTimeout(function(){
		
		var trnfParams = {
			srcTrnsX:orgX,
			trgTrnsX:trgX,
			srcTrnsY:orgY,
			trgTrnsY:orgY,
			srcRotateDeg:0,
			trgRotateDeg:0,
			srcScale:zoomStepConsts.minScale,
			trgScale:zoomStepConsts.maxScale
		};
		transformCnstSpeed(domElm, trnfParams, 100, zoomStepConsts.stepDownDurMs / 1000);
	}, zoomStepConsts.stepUpDurMs + 100);
	
	//invoke next step
	//orgX = trgX;
	//orgY = trgY;
	setTimeout(function () {
		zoomStep(domElm, trgX, trgY, dxStep, repetitions - 1)
	}, zoomStepConsts.totalCycleLenMs * 2 + 400);
}


function rootSequenceZoomStep(color){
	document.querySelectorAll("#divZoomStepsContent")[0].style.color = color;
	
	var finalRpos;
	
	walkLeft();
	setTimeout(() => {
		finalRpos = walkFromLeftToCenter();
		setTimeout(() => {
			stomp(finalRpos);
		}, /*3000*/ 3250);
	}, 6000);	
	
}


function repeatInColors(){
	const color1="blue";
	const color2="red";
	rootSequenceZoomStep(color1);
	setTimeout(() => {
		document.querySelectorAll("#divZoomSteps")[0].style.background = color1;
		rootSequenceZoomStep(color2);
	}, /*11000*/ 9000);
}

const zoomStepColors = {
	//'colors' :  ["red", "blue"],
	'colors' :  ["#ffc145", "#9f6900"],
	'idx': 0
}




function repeatWithColorChange(){
	const curColor = zoomStepColors.colors[zoomStepColors.idx];
	rootSequenceZoomStep(curColor);
	setTimeout(() => {
		document.querySelectorAll("#divZoomSteps")[0].style.background = curColor;
		zoomStepColors.idx = (zoomStepColors.idx + 1 ) % (zoomStepColors.colors.length)
		repeatWithColorChange()
	}, /*12000*/ 12000);
	
}

function stomp(org){
	//zoom out
	//const domElm= document.getElementById("zoomFootL");
	const domElm= document.getElementById("zoomFootR");

	var trnfParams = {
		srcTrnsX:org.x,
		trgTrnsX:org.x,
		srcTrnsY:org.y,
		trgTrnsY:org.y,
		srcRotateDeg:0,
		trgRotateDeg:0,
		srcScale:zoomStepConsts.maxScale,
		trgScale:zoomStepConsts.minScale
	};
	transformCnstSpeed(domElm, trnfParams, 200, /*1*/ .8);
	//zoom in
	setTimeout(() => {
		//const domElm= document.getElementById("zoomFootL");
		var trnfParams = {
		srcTrnsX:org.x,
		trgTrnsX:org.x,
		srcTrnsY:org.y,
		trgTrnsY:org.y,
		srcRotateDeg:0,
		trgRotateDeg:0,
		srcScale:zoomStepConsts.minScale,
		trgScale:1800
	};
	transformCnstSpeed(domElm, trnfParams, 200, 0.35);
	}, 1300);
}


//---------------------------waves--------------------------------------------------------


const waveCtx={
	enabled:false,
	// waveLenPerChar : 2*Math.PI / 10,
	periodsPerSec : .2,
	elementsPerPeriod: 30,
	intervalWavesVer:null, 
	intervalWavesHor:null,
	waveArr:null,
	/**time beetween frames */
	animIntervalMa: 20,
	default_amp:40,
	amp:0,
	//ampMin:0.1,
	ampMin:1,
	ampMinRel: 1/200,
	t:0,
	decayIntervalId:null,
	//decayRateSec: .05,
	decayRateSec: .85,
	fadeInRateSec:1.5,
	handleScrollSession: _handleScrollSession,
	/* lower scroll speed to have influence on surface */
	minScrollSpeedPxSec:2,
	scrollSpeedToAmpFctr: 1 / 50,
	lastExecMs:null, 
	spacingXPx:12, 
	spacingYPx:30, 
	marginTopPx:50,
	marginLeftPx:50, 
	flatenned:false,
	charsInLines:90
}

function _handleScrollSession(scrollSpeed){
	const newAmp = scrollSpeed * waveCtx.scrollSpeedToAmpFctr;
	//console.log("new amp, waveCtx.amp=" + newAmp + "," + waveCtx.amp );
	if(newAmp > waveCtx.amp){
		waveCtx.amp = newAmp;
	}
}

function fadeWavesIn(){

}

function drawStill(){
	drawVerWaves(null, true);

}



function msSinceMidnightF(){
	var now = new Date(),
    then = new Date(
        now.getFullYear(),
        now.getMonth(),
        now.getDate(),
        0,0,0),
	diff = now.getTime() - then.getTime();
	return diff;
}


function startWavesVer(){
	if (waveCtx.enabled){
		return;
	}

	waveCtx.intervalWavesVer = setInterval(
		function(){
			if(waveCtx.amp <= waveCtx.ampMin ){
				if(!waveCtx.flatenned){
					drawVerWaves(msSinceMidnight, true);
					waveCtx.flatenned= true;
				}
				return;
			}
			waveCtx.flatenned= false;
			/* var d = new Date(), e = new Date(d);
			var msSinceMidnight = e - d.setHours(0,0,0,0) */
			var msSinceMidnight = msSinceMidnightF();
			drawVerWaves(msSinceMidnight, false);
		},waveCtx.animIntervalMa);

	waveCtx.enabled = true;
}



//initiate loops for both vertial and horizontal wave themes !!!!
function initWaves(){
	prepareWaves();
	drawStill();
	startWavesVer();
	startWavesVerWDecay();
	
	prepareWavesHor();
	drawHorWaves(0, false);
	//startWavesHor();
	startWavesHorWDecay();
	
	startScrollSample();

}



function startWavesVerWDecayOld(){
	waveCtx.decayIntervalId = setInterval(() => {
		waveCtx.amp = waveCtx.amp  * Math.pow(waveCtx.decayRateSec, waveCtx.animIntervalMa / 1000);
	}, waveCtx.animIntervalMa);

}

function startWavesVerWDecay(){
	waveCtx.lastExecMs = Date.now();
	waveCtx.decayIntervalId = setInterval(() => {
		if(!waveCtx.enabled){
			return;
		}
		var xdMs = Date.now()- waveCtx.lastExecMs;
		waveCtx.lastExecMs = Date.now();
		waveCtx.amp = waveCtx.amp  * Math.pow(waveCtx.decayRateSec, xdMs / 1000);
	}, waveCtx.animIntervalMa);

}





function stopWavesVer(){
	waveCtx.enabled=false;
	if(waveCtx.intervalWavesVer != null){
		clearInterval(waveCtx.intervalWavesVer);
		waveCtx.intervalWavesVer = null;
	}
}

function stopVerWaves(){

}





// var waveArr;






//split text into div, each one containing a single letter, assigned the given class. 
//then add to current line div, eventurally yielding a 2d array of DIVs
//function split2D(textBlock, charsPerLine, classToAsign){

function split2D(textBlock, charsPerLine, classToAsign, contextObj, arrKey, elmSuffix){	
	contextObj[arrKey] = [];
	var outHtml="<div class='lines'>\r";
	var c, line, elmId;
	for(var i = 0, glb_i=0;  glb_i < textBlock.length ; i++){
		line = [];
		outHtml= outHtml + "\t<div class='line'>\r\t"
		for(j = 0 ; j < charsPerLine &&  glb_i < textBlock.length; j++){
			c=textBlock[glb_i];
			elmId = elmIdStr(i,j, elmSuffix);
			if(isWhiteSpace(c)){
				c="&nbsp";
			}
			outHtml= outHtml + "<div class=" + classToAsign + " id=" + elmId + "> " + c + "</div>";
			glb_i = glb_i + 1;
			line.push(elmId);
		}
		outHtml= outHtml + "\r</div>"
		//waveArr[i,j] should contain the id of the i,j dom element to allow obtaining the 
		// i,j html element arbitrary 
		contextObj[arrKey].push(line);
	}
	outHtml= outHtml + "\r</div>"
	return outHtml;
}

function isWhiteSpace(c){
	return 	/\s/.test(c);
}

function elmIdStr(i,j, elmSuffix){
	return "elm_" + i + "_"+ j + "_" + elmSuffix;
}


function prepareWaves(){
	const textBlock = 
	`physical wave*s such as those we see when a rock is thrown into water 
	 are what many people think about when they first began to think about waves. These
	waves have distinct properties specific to their type but also exhibit characteristics
	in common with more abstract waves such as sound waves and light (electromagnetic) waves.`;

	//`physical wave*s such as those we see when a rock is thrown into water `;
	
	//var genHtml = split2D(textBlock, 40, 'char1', 'waveArr');
	var genHtml = split2D(textBlock, waveCtx.charsInLines , 'char1', waveCtx, 'waveArr', 'ver');
	
	
	document.getElementById('divDynContent').innerHTML = genHtml;
	// drawHorWaves(null);
	//drawVerWaves(9);
}

function wavesVerStatic(){
	drawVerWaves(0, false);
}

function drawVerWaves(tMs, flatten){
	var elm, x, y;
	const width = waveCtx.waveArr[0].length;
	const height= waveCtx.waveArr.length;
	for(var i = 0; i < height; i++){
		for(var j = 0; j < width; j++){
			elm= document.getElementById(waveCtx.waveArr[i][j]);
			x=j * waveCtx.spacingXPx;
			// y = i * 40 + Math.sin( (tMs * waveCtx.periodsPerSec / 1000  +  j/ waveCtx.elementsPerPeriod) * 2*Math.PI) * waveCtx.amp;
			y = i * waveCtx.spacingYPx;
			if (!flatten){
				y= y + Math.sin( (tMs * waveCtx.periodsPerSec / 1000  +  j/ waveCtx.elementsPerPeriod) * 2*Math.PI) * waveCtx.amp;
			}

			x = x + waveCtx.marginLeftPx;
			y = y + waveCtx.marginTopPx;

			if(elm!=null){
				elm.style.transform="translate(" + x +"px," + y + "px)";
			}
		}
	}
}


//-------------------------------------------horizontal waves--------------------------------------------
const horWaveCtx={
	enabled:false,
	// waveLenPerChar : 2*Math.PI / 10,
	periodsPerSec : .2,
	elementsPerPeriod: 30,
	intervalWavesVer:null, 
	intervalWavesHor:null,
	waveArr:null,
	/**time beetween frames */
	//animIntervalMa: 5,
	animIntervalMa: 20,
	default_amp:40,
	//amp:50,
	amp:0,
	ampMin:0.1,
	//ampMin:200,
	ampMinRel: 1/200,
	ampMaxAbs:110,
	t:0,
	decayIntervalId:null,
	//decayRateSec: .75,
	decayRateSec: .5,
	fadeInRateSec:1.5,
	handleScrollSession: _handleScrollSessionHor,
	/* lower scroll speed to have influence on surface */
	minScrollSpeedPxSec:2,
	scrollSpeedToAmpFctr: 1 / 20,
	lastExec:-1, 
	charsPerLine:50
}

function _handleScrollSessionHor(scrollSpeed){
	const newAmp = scrollSpeed * horWaveCtx.scrollSpeedToAmpFctr;
	//console.log("new amp, horWaveCtx.amp=" + newAmp + "," + horWaveCtx.amp );
	if(newAmp > horWaveCtx.amp){
		//horWaveCtx.amp = newAmp;
		if (newAmp > horWaveCtx.ampMaxAbs){
			horWaveCtx.amp = horWaveCtx.ampMaxAbs
		}else{
			horWaveCtx.amp = newAmp;
		}
	}
}



function prepareWavesHor(){
	const textBlock = 
	// `physical wave*s such as those we see when a rock is thrown into water 
	// are what many people think about when they first began to think about waves. These
	//  waves have distinct properties specific to their type but also exhibit characteristics
	//   in common with more abstract waves such as sound waves and light (electromagnetic) waves.`;

	`horizontal waves let's see how it goes. we can never pathom how hard it musut be 
	having green mustard on soft eggs if your mind is wondering the way it does`;
	
	var genHtml = split2D(textBlock, horWaveCtx.charsPerLine, 'char1', horWaveCtx, 'waveArr', 'hor');
	document.getElementById('divDynContentHorVave').innerHTML = genHtml;
	
}


function drawHorWaves(tMs, flatten){
	var elm, x, y;
	const width = horWaveCtx.waveArr[0].length;
	const height= horWaveCtx.waveArr.length;
	for(var i = 0; i < height; i++){
		for(var j = 0; j < width; j++){
			elm= document.getElementById(horWaveCtx.waveArr[i][j]);
			x=j * 20;
			if (!flatten){
				x= x + Math.sin( (tMs * horWaveCtx.periodsPerSec / 1000  +  j/ horWaveCtx.elementsPerPeriod) * 2*Math.PI) * horWaveCtx.amp;
			}
			
			y = i * 40;
			// if (!flatten){
				// y= y + Math.sin( (tMs * horWaveCtx.periodsPerSec / 1000  +  j/ horWaveCtx.elementsPerPeriod) * 2*Math.PI) * horWaveCtx.amp;
			// }

			if(elm!=null){
				elm.style.transform="translate(" + x +"px," + y + "px)";
			}
		}
	}
}

function startWavesHor(){
	if(horWaveCtx.enabled){
		return;
	}	
	horWaveCtx.intervalWavesVer = setInterval(
		function(){
			if(horWaveCtx.amp <= horWaveCtx.ampMin ){
				return;
			}
			var d = new Date(), e = new Date(d);
			var msSinceMidnight = e - d.setHours(0,0,0,0)
			drawHorWaves(msSinceMidnight, false);
		},horWaveCtx.animIntervalMa);
	horWaveCtx.enabled=true;
}


function startWavesHorWDecay(){
	horWaveCtx.lastExec = Date.now();
	horWaveCtx.decayIntervalId = setInterval(() => {
		if(!horWaveCtx.enabled){
			return;
		}
		var xdMs = Date.now()- waveCtx.lastExecMs;
		waveCtx.lastExecMs = Date.now();
		horWaveCtx.amp = horWaveCtx.amp  * Math.pow(horWaveCtx.decayRateSec, xdMs / 1000);
	}, horWaveCtx.animIntervalMa);

}

function startWavesHorWDecayOld(){
	horWaveCtx.decayIntervalId = setInterval(() => {
		if(!horWaveCtx.enabled){
			return;
		}
		horWaveCtx.amp = horWaveCtx.amp  * Math.pow(horWaveCtx.decayRateSec, horWaveCtx.animIntervalMa / 1000);
	}, horWaveCtx.animIntervalMa);

}


function stopWavesHor(){
	horWaveCtx.enabled=false;
	if(horWaveCtx.intervalWavesVer != null){
		clearInterval(horWaveCtx.intervalWavesVer);
		horWaveCtx.intervalWavesVer = null;
	}
}


function  drawStillHor(){
	drawHorWaves(0, false);
}





//-------------------------------------------scroll utils--------------------------------------------






//detect dSpeed at constant intervals. wenn motion stops for a while, returns the heighest speed 
//for that motion


const scrollCtx = {
	sampleIntrMs:100,
	sampleSpeedIntervalMs:50,
	lastYposition: window.scrollY,
		
	varWavesMinActive:0,
	varWavesMaxActive:700,
	
	varWavesHorMinActive:2200,
	varWavesHorMaxActive:2700
	
	
}




function startScrollSample(){
	setInterval(
		checkScrollSpeed, scrollCtx.sampleSpeedIntervalMs
	)
}



function checkScrollSpeed(){
	const currentPos = window.scrollY
	enableWave(currentPos);
	enableWaveHor(currentPos);
	enableGrasshoppers();
	enablePulsar();

	if(currentPos == scrollCtx.lastYposition){
		return;
	}
	
	//console.log("scroll y:" + currentPos);

	
	var dY = Math.abs(currentPos - scrollCtx.lastYposition);
	var dT = scrollCtx.sampleIntrMs / 1000;
	var scrollV = dY / dT;
	// console.log("scroll speed=" + scrollV);
	waveCtx.handleScrollSession(scrollV);
	horWaveCtx.handleScrollSession(scrollV);
	scrollCtx.lastYposition=currentPos;
}


function enableWave(scrollYpos){
	if(panelInViewPortWavesVer()){
		startWavesVer();
	}else{
		stopWavesVer();
	}
}

function enableWaveHor(scrollYpos){
	
	if (panelInViewPortWavesHor()){
		startWavesHor();
	}else{
		stopWavesHor();
	}
}

function enableGrasshoppers(){
	if(panelInViewGrasshoppers()){
		startGrassHoppersSeq();
	}
}

function enablePulsar(){
	if(panelInViewPulsar()){
		resumePulsar();
	}else{
		stopPulsar();
	}
}


function panelInViewPortWavesHor(){
	var topPosInViewPort = document.getElementById("viewpointDetectorWavesHor").getBoundingClientRect().top;
	return topPosInViewPort > -250 && topPosInViewPort < 1200;
}

function panelInViewPortWavesVer(){
	var topPosInViewPort = document.getElementById("viewpointDetectorWavesVer").getBoundingClientRect().top;
	//return topPosInViewPort > 200 && topPosInViewPort < 300;
	
	//don't block from above, because the engaging is not smooth and should not happen 
	//insode viewport 
	return topPosInViewPort < 1300;
}


function panelInViewGrasshoppers(){
	var topPosInViewPort = document.getElementById("viewpointDetectorGrasshopper").getBoundingClientRect().top;
	return topPosInViewPort > 50 && topPosInViewPort < 600;
}


function panelInViewPulsar(){
	var topPosInViewPort = document.getElementById("viewpointDetectorPulsar").getBoundingClientRect().top;
	return topPosInViewPort > 0 && topPosInViewPort < 1200;
}








//-------------------------------------------tumbelweed--------------------------------------------

const tumbleweedCtx = {
	aPxSecSqr: 70,
	animIntervalMs:20
}

function testTumbleweedRoll(){
	var obj = document.getElementById('tumble1');
	
	//roll on the ground
	var startTransPos={
		'x':0,
		'y':0
	}
	tumbleHop(obj, 500, null, 200, 100,0, startTransPos, 0, false, function(){});
	
	//hop 	
}


function testTumbleweedHop(){
	var obj = document.getElementById('tumble1');
	
	//roll on the ground
	var startTransPos={
		'x':0,
		'y':0
	}
	tumbleHop(obj, 500, 0, null, 100, -70, startTransPos, 0, true,
	function(){
		console.log("complete hop");}
		);
	
	//hop 	
}


function testWeedRandSequence(){
	// var pos1={
		// 'x':0,
		// 'y':0
	// }
	//var obj = document.getElementById('tumble1');
	var elms = document.getElementsByClassName("tumbleWeed");
	for(var i = 0; i< elms.length ; i++){
	// for(var i = 0; i< 1 ; i++){
		setTimeout(
			// (function(obj){
				// randHop(9, obj, pos1, 0);
			// }).bind(null, elms[i])
			randHop.bind(null, 11,  elms[i], {'x':0,'y':0}, 0)
		, Math.random() * 1500)
	}
	//randHop(9, obj, pos1, 0);
}


function randHop(stepsTogo, obj, startTransPos, startRot){
	console.log("randStep");
	if(stepsTogo < 1){
		return;
	}
	stepsTogo= stepsTogo - 1;
	const xDis = Math.random() * 50 + 50;
	var vy;
	const shouldJump =  Math.random() > 0.5;
	if(shouldJump){
		//console.log("hop");
		vy = (Math.random() * 20 + 20) * -1 ;
		tumbleHop(obj, 500, 0, null, 100, vy, startTransPos, startRot, true, randHop.bind(null, stepsTogo));
	}else{
		//console.log("roll");
		tumbleHop(obj, 500, null, startTransPos.x + xDis, 100,0, startTransPos, startRot, false, randHop.bind(null, stepsTogo));
	}
}




//a hop with a roll. also support roll with no hop (on the ground )
//hop will stop either when absolut y post arrived (think object thrown up, then fall 
//and hits the ground). 
function tumbleHop(elm, rotDegSec, stopYPos, stopXposAbs, vxPxSec,vyPxSec, nextTnsfrPos, nextRot, gravityActive, fComplete){
	//hop is complete when either
	//1.hitting the ground gong down
	//2.completing given sitance (useful when rolling on surface without actually hopping up)
	if( (stopYPos != null && nextTnsfrPos.y >= stopYPos && vyPxSec > 0) ||
		(stopXposAbs != null && Math.abs(nextTnsfrPos.x) >= stopXposAbs)){
		//return;
		fComplete(elm, nextTnsfrPos, nextRot);
		return;
	}
	var transformStr= elm.style.transform="translate(" + nextTnsfrPos.x +"px," + nextTnsfrPos.y + "px) rotate(" + nextRot+ "deg)";
	elm.style.transform= transformStr;
	nextTnsfrPos.x= nextTnsfrPos.x  + vxPxSec * (tumbleweedCtx.animIntervalMs / 1000);
	nextTnsfrPos.y= nextTnsfrPos.y  + vyPxSec * (tumbleweedCtx.animIntervalMs / 1000);
	//if on the ground, roll
	if(vyPxSec== null || vyPxSec == 0 ){
		nextRot = nextRot + rotDegSec * (tumbleweedCtx.animIntervalMs / 1000);
	//in air- roll slower
	}else{
		nextRot = nextRot + rotDegSec * (tumbleweedCtx.animIntervalMs / 1000) / 2;
	}
	//dxToGo = dxToGo + vyPxSec * (tumbleweedCtx.animIntervalMs / 1000)
	if(gravityActive){
			vyPxSec = vyPxSec + tumbleweedCtx.aPxSecSqr * (tumbleweedCtx.animIntervalMs / 1000);
	}
	
	
	setTimeout(function(){
		tumbleHop(elm, rotDegSec, stopYPos, stopXposAbs, vxPxSec ,vyPxSec, nextTnsfrPos, nextRot,gravityActive, fComplete);
	}, tumbleweedCtx.animIntervalMs);
	
}




//---------------------------------------------------------theme big swing -------------------------

function trackTilt(elm){
	
	
	const st = window.getComputedStyle(elm, null);
	const trMtx = st.getPropertyValue("-webkit-transform") ||
         st.getPropertyValue("-moz-transform") ||
         st.getPropertyValue("-ms-transform") ||
         st.getPropertyValue("-o-transform") ||
         st.getPropertyValue("transform") ||
         "Either no transform set, or browser doesn't do getComputedStyle";
	
	//todo- stop tracing when swing doesnt swing 
	//here's a fast fix 
	if(trMtx == "none"){
		return;
	}
		
	const values= trMtx.split('(')[1].split(')')[0].split(',')
	const ret =  Math.round(Math.asin(values[1]) * (180/Math.PI));
	//console.log("tilt: " + ret);
	if(Math.abs(ret) >= bigSwingCtx.archTopDeg){
		handleHighPosition(ret);
	}else{
		//pendelium goes throu bottom area again,re enable
		if(Math.abs(ret) < bigSwingCtx.reenablingRange){
			bigSwingCtx.switchEnabled=true;
		}
	}
	return ret;
}

function initTiltTracking(){
	const elm = document.getElementById("divBigSwingContainer");
	//const bigSwingTiltTracker = setInterval(trackTilt.bind(null,elm), 20);
	bigSwingCtx.trackingIntervalId = setInterval(trackTilt.bind(null,elm), 20);
}

function stopTiltTracking(){
	clearInterval(bigSwingCtx.trackingIntervalId);
	bigSwingCtx.trackingIntervalId= null;
}


//after switching the word, disable this switching funcitonality,
//so it only shoots once 

function handleHighPosition(ret){
	if(bigSwingCtx.switchEnabled){
		const curWord = bigSwingCtx.words[bigSwingCtx.idx];
		console.log("current word=" + curWord);
		document.getElementById("divBigSwingTextContainer").innerHTML = 
			curWord;
		bigSwingCtx.idx = (bigSwingCtx.idx + 1) % bigSwingCtx.words.length;
		bigSwingCtx.switchEnabled=false;
	}
}

const bigSwingCtx = {
	archTopDeg:70, 	
	words: [ 'sunny', 'passing', 'afternoon', 'shower', 'mostly'],
	idx:0,
	reenablingRange:30,
	switchEnabled:true,
	trackingIntervalId:null
}

function startBigSwing(){
	document.getElementById("divBigSwingContainer").classList.add("swingingBig");
	initTiltTracking();
}

function stopBigSwing(){
	stopTiltTracking();
	document.getElementById("divBigSwingContainer").classList.remove("swingingBig");
	
}


//---------------------------------------theme spasm------------------------------------------------------------

const spasmCtx = {
	/* transformMinDurMs:100,
	transformMinMaxMs:700,
	transformMinRatioPerFrameX:1.4,
	transformMaxRatioPerFrameX:1.5,
	transformMinRatioPerFrameY:1.4,
	transformMaxRatioPerFrameY:1.5,
	trnasformNmSpasmInSeq:8, 
	baseLineScalePerFrame:1.1, 
	fPs:50, 
	framesPerSpasm:40, 
	xXpanstionFactor:90,
	yXpanstionFactor:8, 
	hammerPauseMs: 200,
	timeOutBeforeHideMs: 800,
	startTimeRangeMs: 700,
	waitTimeStrechedUp:1000,
	xOffsetPx:250, 
	yOffsetPx:200 */

	transformMinDurMs:100,
	transformMinMaxMs:700,
	transformMinRatioPerFrameX:1.04,
	transformMaxRatioPerFrameX:1.08,
	transformMinRatioPerFrameY:1.04,
	transformMaxRatioPerFrameY:1.08,
	trnasformNmSpasmInSeq:8, 
	baseLineScalePerFrame:1.1, 
	fPs:50, 
	framesPerSpasm:40, 
	xXpanstionFactor:3,
	yXpanstionFactor:1, 
	hammerPauseMs: 200,
	timeOutBeforeHideMs: 800,
	startTimeRangeMs: 700,
	waitTimeStrechedUp:1000,
	xOffsetPx:250, 
	yOffsetPx:200
}



function spasmPrepare(){
	//const text = "moahve desert";
	const text = "zur moab";
	//const text = "d";
	const letterSpacintPx = 80;
	var elm;
	var html = "";
	for(var i = 0; i < text.length ; i++){
		//var leftVal = i*letterSpacintPx;
		var leftVal = i*letterSpacintPx + spasmCtx.xOffsetPx;
		var topOffset = spasmCtx.yOffsetPx;
		//elm = "<div class='classSpasmChar' style='top:100px;left:"+ leftVal +"px'>" + text[i] + "</div>";
		elm = "<div class='classSpasmChar' style='top:" + topOffset + "px;left:"+ leftVal +"px'>" + text[i] + "</div>";
		html= html.concat(elm);
	}
	var parentHtml = document.getElementById("divSpasmContent");
	parentHtml.innerHTML = html;
}



function spasmScriptOld(){
	// fComplete = function(){console.log("all spasms complete")};
	// elm= document.getElementById("divSpasmChar1Container");
	// spasmOut(8, fComplete, 1.0, 1.0, 1.0, elm);
	
	
	
	var waitTime;
	var elms = document.querySelectorAll(".classSpasmChar");
	const fComplete= function(){console.log("all spasms complete")};
	for(var i = 0 ; i < elms.length; i++){
		waitTime = 1000 * Math.random();
		//spasmOut(8, fComplete, 1.0, 1.0, 1.0, elms[i]);
		setTimeout(
			function(elm){
				spasmOut(8, fComplete, 1.0, 1.0, 1.0,elm);
			}.bind(null, elms[i]), waitTime
		);
	}
}


function spasmScript(){
	
	var waitTime;
	var elms = document.querySelectorAll(".classSpasmChar");
	const fComplete= function(){console.log("all spasms complete")};
	for(var i = 0 ; i < elms.length; i++){
		waitTime = spasmCtx.startTimeRangeMs * Math.random();
		//spasmOut(8, fComplete, 1.0, 1.0, 1.0, elms[i]);
		setTimeout(
			function(elm){
				//spasmOut(8, fComplete, 1.0, 1.0, 1.0,elm);
				spasmSequence(elm);
			}.bind(null, elms[i]), waitTime
		);
	}
}




function randRatioSpasmX(){
	return ( Math.random()  * (spasmCtx.transformMaxRatioPerFrameX - spasmCtx.transformMinRatioPerFrameX) +
		spasmCtx.transformMinRatioPerFrameX) 
}


function randRatioSpasmY(){
	return Math.random()  * (spasmCtx.transformMaxRatioPerFrameY - spasmCtx.transformMinRatioPerFrameY) +
		spasmCtx.transformMinRatioPerFrameY;
}

function spasm(spasmsToGo, fCompleteAllSpasms, baselineScale, curScaleX,ratioXPerFrame, curScaleY, ratioYPerFrame, fCompleteThisSpasm, elm){
	if(spasmsToGo == 0){
		//fCompleteAllSpasms(absScaleX, absScaleY);
		fCompleteAllSpasms(curScaleX, curScaleY, elm);
		return;
	}	
	
	// curScaleX = curScaleX * baselineScale;
	// curScaleY = curScaleY * baselineScale;
	// baselineScale = baselineScale * spasmCtx.baseLineScalePerFrame;
	
	
	spasmStep(spasmCtx.framesPerSpasm, baselineScale, curScaleX,ratioXPerFrame, curScaleY, ratioYPerFrame ,fCompleteThisSpasm, elm);
}


function spasmOut(spasmsToGo, fCompleteAllSpasms, baselineScale, curScalex, curScaleY, elm){
	var scaleOutXPerFrame = randRatioSpasmX();
	var scaleOutYPerFrame = randRatioSpasmY();
	const fCompleteThisSpasm = spasmIn.bind(null, spasmsToGo - 1, fCompleteAllSpasms);
	
	console.log("randomal scaling x,y scale=" + scaleOutXPerFrame + "," + scaleOutYPerFrame);
	
	
	//choose either axis as dominant, make the scaling of the other scale relativ to it 
	const smallGrothRate = 1.01;
	if(scaleOutXPerFrame > scaleOutYPerFrame){
		scaleOutYPerFrame = smallGrothRate;
	}else{
		scaleOutXPerFrame = smallGrothRate;
	}
	
	
	
    spasm(spasmsToGo, fCompleteAllSpasms, baselineScale, curScalex,scaleOutXPerFrame, curScaleY, scaleOutYPerFrame, fCompleteThisSpasm,elm)

}


//scale back to baseLineScale
function spasmIn(spasmsToGo, fCompleteAllSpasms, baselineScale, curScalex, curScaleY, elm ){
	// const scaleOutXPerFrame = Math.pow( (baselineScale/(curScalex * spasmCtx.yXpanstionFactor )), 1/spasmCtx.framesPerSpasm);
	// const scaleOutYPerFrame = Math.pow( (baselineScale/(curScaleY * spasmCtx.xXpanstionFactor )), 1/spasmCtx.framesPerSpasm);
	
	const scaleOutXPerFrame = Math.pow( (baselineScale/(curScalex * 1 )), 1/spasmCtx.framesPerSpasm);
	const scaleOutYPerFrame = Math.pow( (baselineScale/(curScaleY * 1 )), 1/spasmCtx.framesPerSpasm);
	const fCompleteThisSpasm = spasmOut.bind(null, spasmsToGo - 1, fCompleteAllSpasms);

	spasm(spasmsToGo, fCompleteAllSpasms, baselineScale, curScalex,scaleOutXPerFrame, curScaleY, scaleOutYPerFrame, fCompleteThisSpasm, elm);

}


function spasmStep(numSpteps, baselineScale, curScaleX, ratioXPerStep, curScaleY, ratioYPerStep ,fCompleteAllSteps, elm){
	
	if(numSpteps == 0){
		fCompleteAllSteps( baselineScale, curScaleX, curScaleY, elm);
		return;
	}
	
	//if(elm == null)
	if (elm==null || typeof elm == 'undefined' || typeof elm.style == 'undefined')
	{		
		console.log("elm is nulö");
		return;
	}

	curScaleX = curScaleX * ratioXPerStep;
	curScaleY = curScaleY * ratioYPerStep;
	
	
	//elm.style.transform = "scale(" + curScaleX *  spasmCtx.xXpanstionFactor + ","  + curScaleY * spasmCtx.yXpanstionFactor +")";
	elm.style.transform = "scale(" + curScaleX  + ","  + curScaleY  +")";

	
	
	setTimeout(
	function(){
		spasmStep(numSpteps-1, baselineScale, curScaleX, ratioXPerStep, curScaleY, ratioYPerStep ,fCompleteAllSteps, elm);
	}, 1000 / spasmCtx.fPs);
}


function scaleStr(x,y){
	return "scale("+ x + "," + y + ")";
}

function expend(elm, stepsLeft, startScaleX , xRatioPerFrame, startYSCale, yRatioPerframe, fComplete){
	expendStep(elm, stepsLeft, startScaleX , xRatioPerFrame, startYSCale, yRatioPerframe, fComplete);
}



function expendStep(elm, stepsLeft, curScaleX , xRatioPerFrame, curScaleY, yRatioPerframe, fComplete){
	if(stepsLeft == 0 ){
		fComplete(elm, curScaleX, curScaleY);
		return;
	}
	curScaleX = curScaleX * xRatioPerFrame;
	curScaleY = curScaleY * yRatioPerframe;
	elm.style.transform = scaleStr(curScaleX,curScaleY);
	setTimeout(function(){
		 expendStep(elm, stepsLeft-1, curScaleX , xRatioPerFrame, curScaleY, yRatioPerframe, fComplete)
	}, 1000 / spasmCtx.fPs
	);
}



function testHmmerDown(){
	// var elm = document.getElementById("divSpasmChar1Container");
	// const fComplete = function(){
		// console.log("hammering test complete");
	// }
	
	// hammerDown(4, fComplete, elm, 8.0, 8.0);
	
	var elm = document.getElementById("divSpasmChar1Container");
	hammerPhase1(elm, 8.0, 8.0);
}



function hammerPhase1(elm, curXScale, curYScale){
	const fComplete = 
		function(elm, curXScale, curYScale){
			setTimeout(function(){
				console.log("hammering phase 1 complete");
				hammerPhase2(elm, curXScale, curYScale)
			}, 1500
			);
		}
	hammerDown(4, fComplete, elm, curXScale, curYScale);
}

function hammerPhase2(elm, curXScale, curYScale){
	const fComplete =function(elm, curScaleX, curScaleY){
		console.log("hammering phase 2 complete");
		hideElm(elm, spasmCtx.timeOutBeforeHideMs);
	};
	hammerDown(8, fComplete, elm, curXScale, curYScale);
}

function hideElm(elm, timeoutMs){
	setTimeout(function(){
		elm.style.opacity = 0;
	}, timeoutMs);
}







function hammerDown(repeatsLeft, fComplete, elm, curXScale, curYScale){
	if(repeatsLeft == 0){
		fComplete(elm, curXScale, curYScale);
		return;
	}
	setTimeout(
		function(){
			fCompleteSingleHammering = hammerDown.bind(null, repeatsLeft -1, fComplete);
			expend(elm, 5, curXScale , 1, curYScale, 0.90, fCompleteSingleHammering);
		},
		spasmCtx.hammerPauseMs
	)
	
}


function testPumpOut(){
	var elm = document.getElementById("divSpasmChar1Container");
	elm.style.opacity = 1;
	var fSpasmComplete= function (curScaleX, curScaleY, elm){
		expend(elm, 15, curScaleX , 1.0, curScaleX, 1.22, 
		function(elm, curXScale, curYScale){
			console.log("completed pump out ver");
			hammerPhase1(elm, curXScale, curYScale);
		});
	}

	const fCompleteInitExp = function(elm, curScaleX, curScaleY){
		spasmOut(8, fSpasmComplete, 1.0,  curScaleX, curScaleY,elm);
		console.log("end pump phase")};
	expend(elm, 30, 0.1 , 1.1, 0.1, 1.1, fCompleteInitExp);
}

function spasmSequence(elm){
	elm.style.opacity = 1;
	var fSpasmComplete= function (curScaleX, curScaleY, elm){
		expend(elm, 15, curScaleX , 1.0, curScaleX, 1.22, 
		function(elm, curXScale, curYScale){
			console.log("completed pump out ver");
			//hammerPhase1(elm, curXScale, curYScale);
			setTimeout(
				function(){hammerPhase1(elm, curXScale, curYScale)}
			,spasmCtx.waitTimeStrechedUp);
		});
	}
	const fCompleteInitExp = function(elm, curScaleX, curScaleY){
		spasmOut(8, fSpasmComplete, 1.0,  curScaleX, curScaleY,elm);
		console.log("end pump phase")};
	expend(elm, 10, 0.1 , 1.1, 0.1, 1.1, fCompleteInitExp);
	//expend(elm, 100, 0.1 , 1.1, 0.1, 1.1, fCompleteInitExp);

}




//---------------the bottom-----------------------------------------

var bottomCtx = {
	dyMin:10,
	dyMax:40,
	fPs:50,
	noDerbyElm:20, 
	intervalRainMs:1000,
	elmId:0,
	intervalId:null,
	rotMinDegSec:-30,
	rotMaxDegSec:30, 
	sinkPxPerSec:15, 
	xRange:1400, 
	sinkPx:200,
	numberOfElm:30000,
	sinkDistancesPx:[300, 350, 400], 
	randSinkMin:300,
	randSinkMax:400,
	selfDestructionTimeoutMs:1000 * 50
};

function randSinkD(){
	//return bottomCtx.sinkDistancesPx[Math.floor(Math.random() * bottomCtx.sinkDistancesPx.length)];
	return Math.random() * (bottomCtx.randSinkMax - bottomCtx.randSinkMin) +  bottomCtx.randSinkMin;
}

var toC = str => str.charCodeAt(0);
var fromC = asciiCode => String.fromCharCode(asciiCode);

function randChar(){
	return fromC(toC('a') + Math.random() * (toC('z') - toC('a')));
}

function sinkElm(elm,totalDepth, sinkPxPerSec, rotDegPerSec,currentDepth, currentRot, x){
	if(currentDepth >= totalDepth){
		setTimeout(
			function(){
				elm.parentNode.removeChild(elm);
			},bottomCtx.selfDestructionTimeoutMs
		);
		return;
	}
	var dtSec = 1 / bottomCtx.fPs; 
	var nextDepth = currentDepth + sinkPxPerSec * dtSec;
	var nextRot = currentRot + rotDegPerSec * dtSec;
	var trxStr = "translate(" + x + "px, " + nextDepth + "px)" 
		+ " rotate(" + nextRot + "deg)";
	elm.style.transform = trxStr;
	setTimeout(
		function(){
			sinkElm(elm,totalDepth, sinkPxPerSec, rotDegPerSec,nextDepth, nextRot, x)
		}, 1000/ bottomCtx.fps
	)

}


function testBottom(){
	/* elm=document.getElementById("divTestBottom");
	sinkElm(elm,200, 40, 11, 0, 0, 200); */
	rainDebry();
}


function rainDebry(){
	/* var parentElm = document.getElementById("divBottomContent");
	bottomCtx.intervalId = setInterval(
		function(){
			var x = Math.random() * 1000;
			var rotRate = Math.random() * (bottomCtx.rotMaxDegSec - bottomCtx.rotMinDegSec) + bottomCtx.rotMinDegSec;
			var c = 'y';
			var id = "divDerbyElm" + bottomCtx.elmId;
			bottomCtx.elmId = bottomCtx.elmId + 1;
			var newElmHtml = "<div id=" + id + " class=debryElm>" + c + "<div>";
			divBottomContent.innerHTML = divBottomContent.innerHTML + newElmHtml;
			var newElm = document.getElementById(id);
			sinkElm(newElm,2000, bottomCtx.sinkPxPerSec, rotRate, 0, 0, x);
		}
	,bottomCtx.intervalRainMs) */
	parentElm = document.getElementById("divBottomContent");
	createRandomElm(parentElm);
}


function createRandomElmOld(parentElm){
	var x = Math.random() * bottomCtx.xRange;
	var rotRate = Math.random() * (bottomCtx.rotMaxDegSec - bottomCtx.rotMinDegSec) + bottomCtx.rotMinDegSec;
	//var c = 'y';
	var c= randChar();
	var id = "divDerbyElm" + bottomCtx.elmId;
	var newElmHtml = "<div id=" + id + " class=debryElm>" + c + "<div>";
	
	parentElm.innerHTML = divBottomContent.innerHTML + newElmHtml;
	
	/* if(parentElm.innerHTML){
		parentElm.innerHTML.concat(newElmHtml);
	}else{
		parentElm.innerHTML=newElmHtml;
	} */

	parentElm.innerHTML.concat(newElmHtml);
	var newElm = document.getElementById(id);
	var sinkD = randSinkD();
	sinkElm(newElm,bottomCtx.sinkD, bottomCtx.sinkPxPerSec, rotRate, 0, 0, x);
	bottomCtx.elmId = bottomCtx.elmId + 1;
	if (bottomCtx.elmId < bottomCtx.numberOfElm){
		setTimeout(createRandomElm.bind(null, parentElm), bottomCtx.intervalRainMs);	
	}
}


function createRandomElm(parentElm){
	var x = Math.random() * bottomCtx.xRange;
	var rotRate = Math.random() * (bottomCtx.rotMaxDegSec - bottomCtx.rotMinDegSec) + bottomCtx.rotMinDegSec;
	//var c = 'y';
	var c= randChar();
	var id = "divDerbyElm" + bottomCtx.elmId;
	//var newElmHtml = "<div id=" + id + " class=debryElm>" + c + "<div>";
	var newElm = document.createElement("div");
	newElm.setAttribute("id", id);
	newElm.setAttribute("class", "debryElm");
	newElm.innerHTML = c;
	//add new element 
    parentElm.appendChild(newElm);
	sinkD = randSinkD();
	sinkElm(newElm,sinkD, bottomCtx.sinkPxPerSec, rotRate, 0, 0, x);
	bottomCtx.elmId = bottomCtx.elmId + 1;
	if (bottomCtx.elmId < bottomCtx.numberOfElm){
		setTimeout(createRandomElm.bind(null, parentElm), bottomCtx.intervalRainMs);	
	}
}



function stopRain(){
	clearInterval(bottomCtx.intervalId);
}




