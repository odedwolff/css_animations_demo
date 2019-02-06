
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



function goCssRot(){
	//divRotCss.classList.add("cssRotGo");
	elms = document.getElementsByClassName("wischer");
	for(var i = 0 ; i< elms.length ; i++){
		elms[i].classList.add("wischerRun");	
	}
}

function stopRotate(){
	elms = document.getElementsByClassName("wischer");
	for(var i = 0 ; i< elms.length ; i++){
		elms[i].classList.remove("wischerRun");	
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
	elms = document.getElementsByClassName("twistLetterCont");
		for(var i = 0 ; i< elms.length ; i++){
			//console.log("delat=" + delay);
			setTimeout(
				(function(elm){
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

	}
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
	 
	 startTwister(.75, null);
	 setTimeout(function(){
	 	twisterStage3(.7, .7);
	 }
	 	,6000);
}


function startPulsar(dPhaseSec){
	elms = document.getElementsByClassName("letterContainerPulsar");
		for(var i = 0 ; i< elms.length ; i++){
			setTimeout(
				(function(elm){
					elm.classList.add("pulsarPumping");	
				}).bind(null, elms[i])
				,dPhaseSec * 1000 * i);		
	}
}


function stopPulsar(){
	elms = document.getElementsByClassName("letterContainerPulsar");
		for(var i = 0 ; i< elms.length ; i++){
					elms[i].classList.remove("pulsarPumping");			
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


function preProcessFlashing(){	
	replaceParagpheWithSplittedDives(document.getElementById("divFashingContent"));
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


//assign sequence to individual letters
function setSequencesToFlasingLetter(rndTimingSpectrumMs){
	elms = document.getElementsByClassName("classFlashLetter");
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
	}


	//now the entire div flshing 
	var container = document.getElementById("divProcessedP");
	setTimeout(function(){
		container.classList.add("snychFlash1");
	},5000);
	setTimeout(function(){
		container.classList.remove("snychFlash1");
		container.classList.add("snychFlash2");
	},7500);
	setTimeout(function(){
		container.classList.remove("snychFlash2");
		container.classList.add("snychFlash3");
	},10000);
	setTimeout(function(){
		container.classList.remove("snychFlash3");
	},13000);

	setTimeout(function(){
		gradualHide(2000);
	},17000);
	
}



function clearFlashing(toTranspaerent){

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
	elms = document.getElementsByClassName("classFlashLetter");
	for(var i = 0; i < elms.length; i++){
		var delay=timeSpectrumMs*Math.random();
		setTimeout(function(elm){
			elm.classList.add("classFlashLetterTransparent");
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



function hopSeq(ghDivId){
	const dTimeMs=5;
	const hAccPxPerSecSqr = 3000;
	const vSpeedpxPerSec = 400;
	const shootupSpeedPxPerSec=-1000;
	const numHops=6;
	const pauseBetweenHopsMs=1700;
	var landingX = 0;
	function hopStep(domElm, transX, transY, hSpeedPxPerSec){
		//if you are falling and hit the ground, your done
		landingX=transX;
		if(hSpeedPxPerSec > 0 && transY > 0){
			// landingX=transX;
			return;
		}
		
		domElm.style.transform="translate("+transX + "px," + transY + "px)";
		setTimeout(function(){
			hopStep(
				domElm,
				transX + vSpeedpxPerSec * dTimeMs / 1000,
				transY + hSpeedPxPerSec * dTimeMs / 1000,
				hSpeedPxPerSec + hAccPxPerSecSqr * dTimeMs / 1000
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

		setTimeout(function(){
			hopStep(gh1, landingX, 0, shootupSpeedPxPerSec);
		}, pauseBetweenHopsMs * i + 600);
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

function preJumpTest(){
	//preJump("divGH1");
	//jumpCombinedPeriod("divGH1");
	
	hopSeq("divGH1");
	setTimeout(
		function(){
			hopSeq("divGH2");
		},200
	);
	setTimeout(
		function(){
			hopSeq("divGH3");
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

function setUpLayersOld(){
	elms= document.querySelectorAll("#divCloudsContent .layer" );
 	// var color;
 	// var colorStr;
 	for (var i = 0 ; i < elms.length; i++){
 		// setRandTranslation(900, 0, elms[i]);
 		// color = rndColor();
 		// colorStr = "hsl(" + color['h'] + "," + color['s'] + "%," + color['l'] + "%)";
 		// // colorStr="black";
 		// elms[i].style.color = colorStr;
 		setUpLayer(elms[i]);
 	}
}

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
	return {/*'h':270,*/
			'h':146,
			's': Math.random() * 100,
			'l': Math.random() * 100
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
	const minDurationSec = 3;
	const maxDurationSec = 5;
	const durationSec = Math.random() * (maxDurationSec - minDurationSec) + minDurationSec

	const translateYMax = 500;
	const translateYMin = -500;
	const translateYFinal = Math.random() * (translateYMax-translateYMin) + translateYMin;

	var trnfParams = {
		srcTrnsX:initX,
		trgTrnsX:2000,
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
		 	trans=setUpLayer(elms[i])
		 	setTimeout(
		 		function(elm,x,y){
		 			moveCloudLayer(elm,x,y);
		 		}.bind(null, elms[i],trans['x'],trans['y']),500
		 	);
		 }
}


var movFunctions=[];

function setupLayers1(){
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
	if(framesToGo==0){
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
	
	const transXInitL=-125;

	const transXInitR=-350;


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
	'colors' :  ["red", "blue"],
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
	// waveLenPerChar : 2*Math.PI / 10,
	periodsPerSec : .2,
	elementsPerPeriod: 30,
	intervalWavesVer:null, 
	intervalWavesHor:null,
	waveArr:null,
	/**time beetween frames */
	animIntervalMa: 5,
	default_amp:40,
	amp:0,
	ampMin:0.1,
	ampMinRel: 1/200,
	t:0,
	decayIntervalId:null,
	decayRateSec: .05,
	fadeInRateSec:1.5,
	handleScrollSession: _handleScrollSession,
	/* lower scroll speed to have influence on surface */
	minScrollSpeedPxSec:2,
	scrollSpeedToAmpFctr: 1 / 50
}

function _handleScrollSession(scrollSpeed){
	const newAmp = scrollSpeed * waveCtx.scrollSpeedToAmpFctr;
	console.log("new amp, waveCtx.amp=" + newAmp + "," + waveCtx.amp );
	if(newAmp > waveCtx.amp){
		waveCtx.amp = newAmp;
	}
}

function fadeWavesIn(){

}

function drawStill(){
	drawVerWaves(null, true);

}




function startWavesVer(){
//	stopWavesVer();

	//waveCtx.amp = waveCtx.default_amp;
	waveCtx.intervalWavesVer = setInterval(
		function(){
			if(waveCtx.amp <= waveCtx.minAmp ){
				return;
			}
			var d = new Date(), e = new Date(d);
			var msSinceMidnight = e - d.setHours(0,0,0,0)
			drawVerWaves(msSinceMidnight, false);
		},waveCtx.animIntervalMa);
}

function startWavesVerWDecay(){
	waveCtx.decayIntervalId = setInterval(() => {
		waveCtx.amp = waveCtx.amp  * Math.pow(waveCtx.decayRateSec, waveCtx.animIntervalMa / 1000);
	}, waveCtx.animIntervalMa);

}

function initWaves(){
	prepareWaves();
	drawStill();
	startWavesVer();
	startWavesVerWDecay();
}






function stopWavesVer(){
	if(waveCtx.intervalWavesVer != null){
		clearInterval(waveCtx.intervalWavesVer);
		waveCtx.intervalWavesVer = null;
	}
}

function stopVerWaves(){

}





function startWavesVerWDecayOld(){
	//waveCtx.amp = waveCtx.default_amp;
	const intervalLenMs=50;
	//const minAmp = waveCtx.amp / 40;
	const minAmp = waveCtx.ampMin;
	if(	waveCtx.decayIntervalId != null)
	{
		return;
	}
	waveCtx.decayIntervalId = setInterval(() => {
		if(waveCtx.amp <= minAmp){
			clearInterval(waveCtx.decayIntervalId);
			waveCtx.decayIntervalId= null;
			console.log("decay done");
			stopWavesVer();
			drawStill();
		}
		waveCtx.amp = waveCtx.amp  * Math.pow(waveCtx.decayRateSec, intervalLenMs / 1000);
	}, intervalLenMs);

	startWavesVer();
}

// var waveArr;






//split text into div, each one containing a single letter, assigned the given class. 
//then add to current line div, eventurally yielding a 2d array of DIVs
function split2D(textBlock, charsPerLine, classToAsign){
	// var lines=[];
	// for(i = 0 ; i < textBlock.length ; i++){
	// 	var line = [];
	// 	lines.push(line);
	// 	for(j = 0 ; j < charsPerLine ; j++){
	// 		line.push(textBlock[i]);
	// 	}
	// }
	waveCtx.waveArr = [];
	var outHtml="<div class='lines'>\r";
	var c, line, elmId;
	for(var i = 0, glb_i=0;  glb_i < textBlock.length ; i++){
		line = [];
		outHtml= outHtml + "\t<div class='line'>\r\t"
		for(j = 0 ; j < charsPerLine &&  glb_i < textBlock.length; j++){
			c=textBlock[glb_i];
			elmId = elmIdStr(i,j);
			if(isWhiteSpace(c)){
				c="&nbsp";
			}
			outHtml= outHtml + "<div class=" + classToAsign + " id=" + elmId + "> " + c + "</div>";
			glb_i = glb_i + 1;
			line.push(elmId);
		}
		outHtml= outHtml + "\r</div>"
		//waveArr[i,j] should contain the id of the i,j dom element 
		waveCtx.waveArr.push(line);
	}
	outHtml= outHtml + "\r</div>"
	return outHtml;
}

function isWhiteSpace(c){
	return 	/\s/.test(c);
}

function elmIdStr(i,j){
	return "elm_" + i + "_"+ j;
}


function prepareWaves(){
	const textBlock = 
	// `physical wave*s such as those we see when a rock is thrown into water 
	// are what many people think about when they first began to think about waves. These
	//  waves have distinct properties specific to their type but also exhibit characteristics
	//   in common with more abstract waves such as sound waves and light (electromagnetic) waves.`;

	`physical wave*s such as those we see when a rock is thrown into water `;
	
	var genHtml = split2D(textBlock, 40, 'char1');
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
			x=j * 20;
			// y = i * 40 + Math.sin( (tMs * waveCtx.periodsPerSec / 1000  +  j/ waveCtx.elementsPerPeriod) * 2*Math.PI) * waveCtx.amp;
			y = i * 40;
			if (!flatten){
				y= y + Math.sin( (tMs * waveCtx.periodsPerSec / 1000  +  j/ waveCtx.elementsPerPeriod) * 2*Math.PI) * waveCtx.amp;
			}

			if(elm!=null){
				elm.style.transform="translate(" + x +"px," + y + "px)";
			}
		}
	}
}











 


//-------------------------------------------scroll utils--------------------------------------------






//detect dSpeed at constant intervals. wenn motion stops for a while, returns the heighest speed 
//for that motion


const scrollCtx = {
	sampleIntrMs:100,
	endSessionIntervalMs:400,
	sessionTopSpeed:0,
	endSessionThresholdPxPerSec: 0,
	timeOutIdStopScrolling:null
}



function sampleSpeed(startY){
	var dY = Math.abs(window.scrollY - startY);
	var dT = scrollCtx.sampleIntrMs / 1000;
	var scrollV = dY / dT; 
	console.log("speed=" + scrollV);
	if(scrollV > scrollCtx.endSessionThresholdPxPerSec){
		// console.log(scrollV);
		waveCtx.handleScrollSession(scrollV);
	}
}

//the event handler for the scroll
function launchSpeedSampler(){
	console.log("launching scroll smapler");
	const scrollY0=window.scrollY;
	setTimeout(() => {
		sampleSpeed(scrollY0);	
	}, scrollCtx.sampleIntrMs );
}



function sampleSpeedOld(startY){
	var dY = Math.abs(window.scrollY - startY);
	var dT = scrollCtx.sampleIntrMs / 1000;
	var scrollV = dY / dT; 
	// console.log("speed=" + scrollV);
	if(scrollV > scrollCtx.endSessionThresholdPxPerSec){
		if(scrollCtx.timeOutIdStopScrolling != null){
			clearTimeout(scrollCtx.timeOutIdStopScrolling);
			scrollCtx.timeOutIdStopScrolling = null;
		}
		if(scrollV > scrollCtx.sessionTopSpeed){
			scrollCtx.sessionTopSpeed = scrollV;
		}
	}
	if(scrollCtx.timeOutIdStopScrolling == null){
		scrollCtx.timeOutIdStopScrolling = setTimeout(endScrollSession, scrollCtx.endSessionIntervalMs);
	}
}




	
// }

// function endScrollSession(){
// 	const lastSessionTopSpeed= scrollCtx.sessionTopSpeed;
// 	console.log(lastSessionTopSpeed);
// 	waveCtx.handleScrollSession(lastSessionTopSpeed);
// 	scrollCtx.sessionTopSpeed = 0;
// 	scrollCtx.timeOutIdSample == null;
// }





// windo.addEventListener('scroll', sampleSpeed(window.scrollY));
// window.onscroll="sampleSpeed(window.scrollY)";