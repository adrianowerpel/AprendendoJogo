(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 1400,
	height: 700,
	fps: 24,
	color: "#FFFFFF",
	manifest: []
};



// symbols:



(lib.areia2 = function() {
	this.spriteSheet = ss["AprendendoJogoMovie_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.aviao = function() {
	this.spriteSheet = ss["AprendendoJogoMovie_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.cobra = function() {
	this.spriteSheet = ss["AprendendoJogoMovie_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.crab1 = function() {
	this.spriteSheet = ss["AprendendoJogoMovie_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.crab2 = function() {
	this.spriteSheet = ss["AprendendoJogoMovie_atlas_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.crab3 = function() {
	this.spriteSheet = ss["AprendendoJogoMovie_atlas_"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.crab4 = function() {
	this.spriteSheet = ss["AprendendoJogoMovie_atlas_"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.crab5 = function() {
	this.spriteSheet = ss["AprendendoJogoMovie_atlas_"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.crab6 = function() {
	this.spriteSheet = ss["AprendendoJogoMovie_atlas_"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.crab7 = function() {
	this.spriteSheet = ss["AprendendoJogoMovie_atlas_"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.crab8 = function() {
	this.spriteSheet = ss["AprendendoJogoMovie_atlas_"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.crab9 = function() {
	this.spriteSheet = ss["AprendendoJogoMovie_atlas_"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.ilha = function() {
	this.spriteSheet = ss["AprendendoJogoMovie_atlas_"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.ilhafrente = function() {
	this.spriteSheet = ss["AprendendoJogoMovie_atlas_"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.morcego = function() {
	this.spriteSheet = ss["AprendendoJogoMovie_atlas_"];
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.nativo = function() {
	this.spriteSheet = ss["AprendendoJogoMovie_atlas_"];
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.puma = function() {
	this.spriteSheet = ss["AprendendoJogoMovie_atlas_"];
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.sombraAguia = function() {
	this.spriteSheet = ss["AprendendoJogoMovie_atlas_"];
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.Start = function() {
	this.spriteSheet = ss["AprendendoJogoMovie_atlas_"];
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.StartMouseAcima = function() {
	this.spriteSheet = ss["AprendendoJogoMovie_atlas_"];
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();



(lib.StartMousePress = function() {
	this.spriteSheet = ss["AprendendoJogoMovie_atlas_"];
	this.gotoAndStop(20);
}).prototype = p = new cjs.Sprite();



(lib.tigre = function() {
	this.spriteSheet = ss["AprendendoJogoMovie_atlas_"];
	this.gotoAndStop(21);
}).prototype = p = new cjs.Sprite();



(lib.Titulo = function() {
	this.spriteSheet = ss["AprendendoJogoMovie_atlas_"];
	this.gotoAndStop(22);
}).prototype = p = new cjs.Sprite();



(lib.tituloAreia = function() {
	this.spriteSheet = ss["AprendendoJogoMovie_atlas_"];
	this.gotoAndStop(23);
}).prototype = p = new cjs.Sprite();



(lib.águia = function() {
	this.spriteSheet = ss["AprendendoJogoMovie_atlas_"];
	this.gotoAndStop(24);
}).prototype = p = new cjs.Sprite();



(lib.walkCrab = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.crab1();
	this.instance.setTransform(-59,-58);

	this.instance_1 = new lib.crab2();
	this.instance_1.setTransform(-59,-58);

	this.instance_2 = new lib.crab3();
	this.instance_2.setTransform(-60,-59.5);

	this.instance_3 = new lib.crab4();
	this.instance_3.setTransform(-60,-59);

	this.instance_4 = new lib.crab5();
	this.instance_4.setTransform(-57.5,-58.5);

	this.instance_5 = new lib.crab6();
	this.instance_5.setTransform(-61,-62);

	this.instance_6 = new lib.crab7();
	this.instance_6.setTransform(-60.5,-68);

	this.instance_7 = new lib.crab8();
	this.instance_7.setTransform(-60,-59);

	this.instance_8 = new lib.crab9();
	this.instance_8.setTransform(-56.5,-64);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance,p:{x:-59}}]}).to({state:[{t:this.instance_1,p:{x:-59,y:-58}}]},1).to({state:[{t:this.instance_2,p:{x:-60,y:-59.5}}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6,p:{x:-60.5}}]},1).to({state:[{t:this.instance_7,p:{x:-60}}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_7,p:{x:-59}}]},1).to({state:[{t:this.instance_6,p:{x:-59.5}}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_2,p:{x:-61,y:-60.5}}]},1).to({state:[{t:this.instance_1,p:{x:-60,y:-59}}]},1).to({state:[{t:this.instance,p:{x:-60}}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-59,-58,114,114);


(lib.Start_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Start();

	this.instance_1 = new lib.StartMouseAcima();

	this.instance_2 = new lib.StartMousePress();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,302,94);


(lib.Symbol12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Titulo();
	this.instance.setTransform(0,0,0.918,1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,518,178);


(lib.Symbol11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.tituloAreia();
	this.instance.setTransform(0,0,0.918,1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,518,178);


(lib.Symbol9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.sombraAguia();
	this.instance.setTransform(0,430.2,0.538,0.538,-90);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,300.6,430.2);


(lib.Symbol8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.nativo();
	this.instance.setTransform(0,0,2.434,2.101);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,730.2,502.2);


(lib.Symbol7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.tigre();
	this.instance.setTransform(0,0,1.141,1.046);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,730.2,502.2);


(lib.Symbol6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.águia();
	this.instance.setTransform(0,0,0.456,0.491);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,730.2,490.5);


(lib.Symbol5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.cobra();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,960,500);


(lib.Symbol4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.morcego();
	this.instance.setTransform(0,0,1.826,1.245);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,730.2,498.2);


(lib.Symbol3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.puma();
	this.instance.setTransform(0,0,1.217,1.237);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,730.2,502.2);


(lib.Symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("Eg5CAnOMAAAhObMByEAAAMAAABObg");
	this.shape.setTransform(365.1,251.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,730.2,502.2);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.aviao();
	this.instance.setTransform(145.2,0,2.737,2.737,15);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1094.3,796.3);


(lib.animacao = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// sombraaguia
	this.instance = new lib.Symbol9();
	this.instance.setTransform(958.3,274.1,1,1,0,0,0,150.3,215.1);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(81).to({_off:false},0).wait(1).to({x:915.9,y:274.2},0).wait(1).to({x:873.6,y:274.3},0).wait(1).to({x:831.3,y:274.4},0).wait(1).to({x:789,y:274.5},0).wait(1).to({x:746.6,y:274.6},0).wait(1).to({x:704.3,y:274.7},0).wait(1).to({x:662,y:274.9},0).wait(1).to({x:619.7,y:275},0).wait(1).to({x:577.4,y:275.1},0).wait(1).to({x:535,y:275.2},0).wait(1).to({x:492.7,y:275.3},0).wait(1).to({x:450.4,y:275.4},0).wait(1).to({x:408.1,y:275.6},0).wait(1).to({x:365.8,y:275.7},0).wait(1).to({x:323.4,y:275.8},0).wait(1).to({x:281.1,y:275.9},0).wait(1).to({x:238.8,y:276},0).wait(1).to({x:196.5,y:276.1},0).wait(1).to({x:154.2,y:276.2},0).wait(1).to({x:111.8,y:276.4},0).wait(1).to({x:69.5,y:276.5},0).wait(1).to({x:27.2,y:276.6},0).wait(1).to({x:-15.1,y:276.7},0).wait(1).to({x:-57.5,y:276.8},0).wait(1).to({x:-99.7,y:276.9},0).wait(1).to({x:-142.1,y:277.1},0).wait(56));

	// crab
	this.instance_1 = new lib.walkCrab();
	this.instance_1.setTransform(-72,306.1,1,1,0,0,0,-2,-1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({regY:-4,scaleX:1,x:-61.7,y:303.1},0).wait(1).to({scaleX:1,x:-51.5},0).wait(1).to({scaleX:0.99,x:-41.2},0).wait(1).to({scaleX:0.99,x:-31},0).wait(1).to({scaleX:0.99,x:-20.8},0).wait(1).to({scaleX:0.99,x:-10.5},0).wait(1).to({scaleX:0.99,x:-0.3},0).wait(1).to({scaleX:0.98,x:9.9},0).wait(1).to({scaleX:0.98,x:20.2},0).wait(1).to({scaleX:0.98,x:30.4},0).wait(1).to({scaleX:0.98,x:40.6},0).wait(1).to({scaleX:0.98,x:50.9},0).wait(1).to({scaleX:0.97,x:61.1},0).wait(1).to({scaleX:0.97,x:71.3},0).wait(1).to({scaleX:0.97,x:81.6},0).wait(1).to({scaleX:0.97,x:91.8},0).wait(1).to({scaleX:0.97,x:102},0).wait(1).to({scaleX:0.96,x:112.3},0).wait(1).to({scaleX:0.96,x:122.6},0).wait(1).to({scaleX:0.96,x:132.8},0).wait(1).to({scaleX:0.96,x:143},0).wait(1).to({scaleX:0.96,x:153.3},0).wait(1).to({scaleX:0.95,x:163.5},0).wait(1).to({scaleX:0.95,x:173.7},0).wait(1).to({scaleX:0.95,x:184},0).wait(1).to({scaleX:0.95,x:194.2},0).wait(1).to({scaleX:0.95,x:204.4},0).wait(1).to({scaleX:0.94,x:214.7},0).wait(1).to({scaleX:0.94,x:224.9},0).wait(1).to({scaleX:0.94,x:235.1},0).wait(1).to({scaleX:0.94,x:245.4},0).wait(1).to({scaleX:0.94,x:255.6},0).wait(1).to({scaleX:0.93,x:265.9},0).wait(1).to({scaleX:0.93,x:276.1},0).wait(1).to({scaleX:0.99,skewY:180,x:267.9},0).wait(1).to({scaleX:0.99,x:259.7},0).wait(1).to({scaleX:1,x:251.5},0).wait(1).to({scaleX:1,x:243.3},0).wait(1).to({scaleX:1,x:235.1},0).wait(1).to({scaleX:1.01,x:226.9},0).wait(1).to({scaleX:1.01,x:218.6},0).wait(1).to({scaleX:1.01,x:210.5},0).wait(1).to({scaleX:1.02,x:202.3},0).wait(1).to({scaleX:1.02,x:194.1},0).wait(1).to({scaleX:0.96,skewY:0,x:202.6},0).wait(1).to({x:211.1},0).wait(1).to({scaleX:0.96,x:219.7},0).wait(1).to({x:228.2},0).wait(1).to({x:236.7},0).wait(1).to({scaleX:0.97,x:245.3},0).wait(1).to({x:253.8},0).wait(1).to({x:262.4},0).wait(1).to({scaleX:0.97,x:270.9},0).wait(1).to({x:279.4},0).wait(1).to({x:288},0).wait(1).to({scaleX:0.97,x:296.5},0).wait(1).to({x:305.1},0).wait(1).to({scaleX:0.97,x:313.6},0).wait(1).to({x:322.2},0).wait(1).to({x:330.7},0).wait(1).to({scaleX:0.97,x:339.2},0).wait(1).to({x:347.8},0).wait(1).to({x:356.3},0).wait(1).to({scaleX:0.97,x:364.9},0).wait(1).to({x:373.4},0).wait(1).to({x:382},0).wait(1).to({scaleX:0.97,x:390.5},0).wait(1).to({x:399},0).wait(1).to({x:407.6},0).wait(1).to({scaleX:0.97,x:416.1},0).wait(1).to({x:424.7},0).wait(1).to({scaleX:0.97,x:433.2},0).wait(1).to({x:441.7},0).wait(1).to({x:450.3},0).wait(1).to({scaleX:0.97,x:458.8},0).wait(1).to({x:467.4},0).wait(1).to({x:475.9},0).wait(1).to({scaleX:0.98,x:484.5},0).wait(1).to({x:493},0).wait(1).to({scaleX:1,skewY:180,x:464.1},0).wait(1).to({x:435.2},0).wait(1).to({x:406.3},0).wait(1).to({x:377.4},0).wait(1).to({x:348.5},0).wait(1).to({x:319.6},0).wait(1).to({x:290.7},0).wait(1).to({x:261.8},0).wait(1).to({x:232.8},0).wait(1).to({x:204},0).wait(1).to({x:175},0).wait(1).to({x:146.1},0).wait(1).to({x:117.2},0).wait(1).to({x:88.3},0).wait(1).to({x:59.4},0).wait(1).to({x:30.5},0).wait(1).to({x:1.6},0).wait(1).to({x:-27.3},0).wait(1).to({x:-56.2},0).wait(1).to({x:-85.1},0).wait(64));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-129,249.1,114,114);


(lib.telaPrincipal = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_135 = function() {
		/* Clique para ir para a página da Web
		Clicar na instância do símbolo especificada carrega o URL em uma nova janela do navegador.
		
		Instruções:
		1. Substitua http://www.adobe.com pelo endereço URL desejado.
		      Mantenha as aspas ("").
		*/
		
		this.Start.addEventListener("click", fl_ClickToGoToWebPage);
		
		function fl_ClickToGoToWebPage() {
			window.open("Jogo/\index.html", "_self");
		}
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(135).call(this.frame_135).wait(1));

	// btnStart
	this.Start = new lib.Start_1();
	this.Start.setTransform(292.1,331.9,0.115,0.115,0,0,0,150.6,47);
	this.Start.alpha = 0;
	this.Start._off = true;
	new cjs.ButtonHelper(this.Start, 0, 1, 2);

	this.timeline.addTween(cjs.Tween.get(this.Start).wait(118).to({_off:false},0).wait(1).to({regX:151,scaleX:0.17,scaleY:0.17,alpha:0.059},0).wait(1).to({scaleX:0.22,scaleY:0.22,alpha:0.118},0).wait(1).to({scaleX:0.27,scaleY:0.27,x:292.2,alpha:0.176},0).wait(1).to({scaleX:0.32,scaleY:0.32,alpha:0.235},0).wait(1).to({scaleX:0.38,scaleY:0.38,alpha:0.294},0).wait(1).to({scaleX:0.43,scaleY:0.43,alpha:0.353},0).wait(1).to({scaleX:0.48,scaleY:0.48,x:292.3,alpha:0.412},0).wait(1).to({scaleX:0.53,scaleY:0.53,alpha:0.471},0).wait(1).to({scaleX:0.58,scaleY:0.58,y:331.8,alpha:0.529},0).wait(1).to({scaleX:0.64,scaleY:0.64,alpha:0.588},0).wait(1).to({scaleX:0.69,scaleY:0.69,x:292.4,alpha:0.647},0).wait(1).to({scaleX:0.74,scaleY:0.74,alpha:0.706},0).wait(1).to({scaleX:0.79,scaleY:0.79,alpha:0.765},0).wait(1).to({scaleX:0.84,scaleY:0.84,alpha:0.824},0).wait(1).to({scaleX:0.9,scaleY:0.9,alpha:0.882},0).wait(1).to({scaleX:0.95,scaleY:0.95,x:292.5,alpha:0.941},0).wait(1).to({scaleX:1,scaleY:1,y:331.9,alpha:1},0).wait(1));

	// titulo
	this.instance = new lib.Symbol12();
	this.instance.setTransform(287,162.7,1,1,0,0,0,259,89);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(80).to({_off:false},0).wait(1).to({alpha:0.067},0).wait(1).to({alpha:0.133},0).wait(1).to({alpha:0.2},0).wait(1).to({alpha:0.267},0).wait(1).to({alpha:0.333},0).wait(1).to({alpha:0.4},0).wait(1).to({alpha:0.467},0).wait(1).to({alpha:0.533},0).wait(1).to({alpha:0.6},0).wait(1).to({alpha:0.667},0).wait(1).to({alpha:0.733},0).wait(1).to({alpha:0.8},0).wait(1).to({alpha:0.867},0).wait(1).to({alpha:0.933},0).wait(1).to({alpha:1},0).wait(41));

	// tituloAreia
	this.instance_1 = new lib.Symbol11();
	this.instance_1.setTransform(287,162.7,1,1,0,0,0,259,89);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(67).to({_off:false},0).wait(1).to({alpha:0.077},0).wait(1).to({alpha:0.154},0).wait(1).to({alpha:0.231},0).wait(1).to({alpha:0.308},0).wait(1).to({alpha:0.385},0).wait(1).to({alpha:0.462},0).wait(1).to({alpha:0.538},0).wait(1).to({alpha:0.615},0).wait(1).to({alpha:0.692},0).wait(1).to({alpha:0.769},0).wait(1).to({alpha:0.846},0).wait(1).to({alpha:0.923},0).wait(1).to({alpha:1},0).wait(56));

	// animacao
	this.instance_2 = new lib.animacao();
	this.instance_2.setTransform(57,57,1,1,0,0,0,57,57);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(136));

	// background
	this.instance_3 = new lib.areia2();
	this.instance_3.setTransform(0,0,0.808,0.849);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(136));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-129,0,694.9,424.5);


// stage content:
(lib.AprendendoJogoMovie = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_324 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(324).call(this.frame_324).wait(1));

	// laterais
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("EgUJA2rMAAAhtVMAoTAAAMAAABtVg");
	this.shape.setTransform(123,350.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("EgUIA2rMAAAhtVMAoSAAAMAAABtVg");
	this.shape_1.setTransform(1271,350.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(325));

	// telatitulo
	this.instance = new lib.telaPrincipal();
	this.instance.setTransform(698.4,354.4,1.669,1.669,0,0,0,283.1,212.3);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(324).to({_off:false},0).wait(1));

	// puma
	this.instance_1 = new lib.Symbol3();
	this.instance_1.setTransform(250,0,1.232,1.394);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(45).to({_off:false},0).wait(1).to({regX:365.1,regY:251.1,x:699.9,y:350.1,alpha:0.053},0).wait(1).to({alpha:0.105},0).wait(1).to({alpha:0.158},0).wait(1).to({alpha:0.211},0).wait(1).to({alpha:0.263},0).wait(1).to({alpha:0.316},0).wait(1).to({alpha:0.368},0).wait(1).to({alpha:0.421},0).wait(1).to({alpha:0.474},0).wait(1).to({alpha:0.526},0).wait(1).to({alpha:0.579},0).wait(1).to({alpha:0.632},0).wait(1).to({alpha:0.684},0).wait(1).to({alpha:0.737},0).wait(1).to({alpha:0.789},0).wait(1).to({y:350,alpha:0.842},0).wait(1).to({alpha:0.895},0).wait(1).to({alpha:0.947},0).wait(1).to({alpha:1},0).wait(2).to({y:350.1},0).wait(2).to({alpha:0.944},0).wait(1).to({x:700,alpha:0.889},0).wait(1).to({alpha:0.833},0).wait(1).to({alpha:0.778},0).wait(1).to({scaleX:1.23,alpha:0.722},0).wait(1).to({alpha:0.667},0).wait(1).to({alpha:0.611},0).wait(1).to({alpha:0.556},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.444},0).wait(1).to({alpha:0.389},0).wait(1).to({alpha:0.333},0).wait(1).to({alpha:0.278},0).wait(1).to({alpha:0.222},0).wait(1).to({alpha:0.167},0).wait(1).to({alpha:0.111},0).wait(1).to({alpha:0.056},0).wait(1).to({alpha:0},0).wait(183).to({_off:true},1).wait(56));

	// morcego
	this.instance_2 = new lib.Symbol4();
	this.instance_2.setTransform(250,0,1.233,1.405);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(85).to({_off:false},0).wait(1).to({regX:365.1,regY:249.1,x:700,y:350.1,alpha:0.052},0).wait(1).to({alpha:0.103},0).wait(1).to({alpha:0.155},0).wait(1).to({alpha:0.206},0).wait(1).to({alpha:0.258},0).wait(1).to({alpha:0.309},0).wait(1).to({alpha:0.361},0).wait(1).to({alpha:0.413},0).wait(1).to({alpha:0.464},0).wait(1).to({alpha:0.516},0).wait(1).to({alpha:0.567},0).wait(1).to({alpha:0.619},0).wait(1).to({alpha:0.671},0).wait(1).to({alpha:0.722},0).wait(1).to({alpha:0.774},0).wait(1).to({alpha:0.825},0).wait(1).to({alpha:0.877},0).wait(1).to({alpha:0.928},0).wait(1).to({alpha:0.98},0).wait(4).to({x:699.8,alpha:0.922},0).wait(1).to({scaleX:1.23,x:699.6,alpha:0.865},0).wait(1).to({x:699.3,alpha:0.807},0).wait(1).to({scaleX:1.24,x:699.2,alpha:0.749},0).wait(1).to({x:698.9,alpha:0.692},0).wait(1).to({scaleX:1.24,x:698.7,alpha:0.634},0).wait(1).to({scaleX:1.24,x:698.5,alpha:0.576},0).wait(1).to({x:698.3,alpha:0.519},0).wait(1).to({scaleX:1.24,x:698,alpha:0.461},0).wait(1).to({x:697.9,alpha:0.404},0).wait(1).to({scaleX:1.24,x:697.6,alpha:0.346},0).wait(1).to({x:697.4,alpha:0.288},0).wait(1).to({scaleX:1.24,x:697.2,alpha:0.231},0).wait(1).to({scaleX:1.24,x:697,alpha:0.173},0).wait(1).to({x:696.8,alpha:0.115},0).wait(1).to({scaleX:1.24,x:696.6,alpha:0.058},0).wait(1).to({x:696.4,alpha:0},0).wait(144).to({_off:true},1).wait(56));

	// tigre
	this.instance_3 = new lib.Symbol7();
	this.instance_3.setTransform(250,0,1.232,1.394);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(204).to({_off:false},0).wait(1).to({regX:365.1,regY:251.1,scaleX:1.23,x:700,y:350.1,alpha:0.05},0).wait(1).to({alpha:0.1},0).wait(1).to({alpha:0.15},0).wait(1).to({alpha:0.2},0).wait(1).to({alpha:0.25},0).wait(1).to({alpha:0.3},0).wait(1).to({alpha:0.35},0).wait(1).to({alpha:0.4},0).wait(1).to({alpha:0.45},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.55},0).wait(1).to({alpha:0.6},0).wait(1).to({alpha:0.65},0).wait(1).to({alpha:0.7},0).wait(1).to({alpha:0.75},0).wait(1).to({alpha:0.8},0).wait(1).to({alpha:0.85},0).wait(1).to({alpha:0.9},0).wait(1).to({alpha:0.95},0).wait(1).to({alpha:1},0).wait(4).to({alpha:0.941},0).wait(1).to({alpha:0.882},0).wait(1).to({alpha:0.824},0).wait(1).to({alpha:0.765},0).wait(1).to({alpha:0.706},0).wait(1).to({alpha:0.647},0).wait(1).to({alpha:0.588},0).wait(1).to({alpha:0.529},0).wait(1).to({alpha:0.471},0).wait(1).to({alpha:0.412},0).wait(1).to({alpha:0.353},0).wait(1).to({alpha:0.294},0).wait(1).to({alpha:0.235},0).wait(1).to({alpha:0.176},0).wait(1).to({alpha:0.118},0).wait(1).to({alpha:0.059},0).wait(1).to({alpha:0},0).wait(24).to({_off:true},1).wait(56));

	// nativo
	this.instance_4 = new lib.Symbol8();
	this.instance_4.setTransform(250,0,1.232,1.394);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(244).to({_off:false},0).wait(1).to({regX:365.1,regY:251.1,scaleX:1.23,x:700,y:350.1,alpha:0.029},0).wait(1).to({alpha:0.057},0).wait(1).to({alpha:0.086},0).wait(1).to({alpha:0.114},0).wait(1).to({alpha:0.143},0).wait(1).to({alpha:0.171},0).wait(1).to({alpha:0.2},0).wait(1).to({alpha:0.229},0).wait(1).to({alpha:0.257},0).wait(1).to({alpha:0.286},0).wait(1).to({alpha:0.314},0).wait(1).to({alpha:0.343},0).wait(1).to({alpha:0.371},0).wait(1).to({alpha:0.4},0).wait(1).to({alpha:0.429},0).wait(1).to({alpha:0.457},0).wait(1).to({alpha:0.486},0).wait(1).to({alpha:0.514},0).wait(1).to({alpha:0.543},0).wait(1).to({alpha:0.571},0).wait(1).to({alpha:0.6},0).wait(1).to({alpha:0.629},0).wait(1).to({alpha:0.657},0).wait(1).to({alpha:0.686},0).wait(1).to({alpha:0.714},0).wait(1).to({alpha:0.743},0).wait(1).to({alpha:0.771},0).wait(1).to({alpha:0.8},0).wait(1).to({alpha:0.829},0).wait(1).to({alpha:0.857},0).wait(1).to({alpha:0.886},0).wait(1).to({alpha:0.914},0).wait(1).to({alpha:0.943},0).wait(1).to({alpha:0.971},0).wait(1).to({alpha:1},0).wait(6).to({alpha:0.975},0).wait(1).to({alpha:0.95},0).wait(1).to({alpha:0.925},0).wait(1).to({alpha:0.9},0).wait(1).to({alpha:0.875},0).wait(1).to({alpha:0.85},0).wait(1).to({alpha:0.825},0).wait(1).to({alpha:0.8},0).wait(1).to({alpha:0.775},0).wait(1).to({alpha:0.75},0).wait(1).to({alpha:0.725},0).wait(1).to({alpha:0.7},0).wait(1).to({alpha:0.675},0).wait(1).to({alpha:0.65},0).wait(1).to({alpha:0.625},0).wait(1).to({alpha:0.6},0).wait(1).to({alpha:0.575},0).wait(1).to({alpha:0.55},0).wait(1).to({alpha:0.525},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.475},0).wait(1).to({alpha:0.45},0).wait(1).to({alpha:0.425},0).wait(1).to({alpha:0.4},0).wait(1).to({alpha:0.375},0).wait(1).to({alpha:0.35},0).wait(1).to({alpha:0.325},0).wait(1).to({alpha:0.3},0).wait(1).to({alpha:0.275},0).wait(1).to({alpha:0.25},0).wait(1).to({alpha:0.225},0).wait(1).to({alpha:0.2},0).wait(1).to({alpha:0.175},0).wait(1).to({alpha:0.15},0).wait(1).to({alpha:0.125},0).wait(1).to({alpha:0.1},0).wait(1).to({alpha:0.075},0).wait(1).to({alpha:0.05},0).wait(1).to({alpha:0.025},0).wait(1).to({x:700.1,alpha:0},0).wait(1));

	// aguia
	this.instance_5 = new lib.Symbol6();
	this.instance_5.setTransform(250,0,1.232,1.427);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(164).to({_off:false},0).wait(1).to({regX:365.1,regY:245.3,x:700,y:350.1,alpha:0.05},0).wait(1).to({alpha:0.1},0).wait(1).to({alpha:0.15},0).wait(1).to({alpha:0.2},0).wait(1).to({alpha:0.25},0).wait(1).to({alpha:0.3},0).wait(1).to({alpha:0.35},0).wait(1).to({alpha:0.4},0).wait(1).to({alpha:0.45},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.55},0).wait(1).to({alpha:0.6},0).wait(1).to({alpha:0.65},0).wait(1).to({alpha:0.7},0).wait(1).to({alpha:0.75},0).wait(1).to({alpha:0.8},0).wait(1).to({alpha:0.85},0).wait(1).to({alpha:0.9},0).wait(1).to({alpha:0.95},0).wait(1).to({scaleX:1.23,alpha:1},0).wait(4).to({alpha:0.941},0).wait(1).to({alpha:0.882},0).wait(1).to({alpha:0.824},0).wait(1).to({alpha:0.765},0).wait(1).to({alpha:0.706},0).wait(1).to({alpha:0.647},0).wait(1).to({alpha:0.588},0).wait(1).to({alpha:0.529},0).wait(1).to({alpha:0.471},0).wait(1).to({alpha:0.412},0).wait(1).to({alpha:0.353},0).wait(1).to({alpha:0.294},0).wait(1).to({alpha:0.235},0).wait(1).to({alpha:0.176},0).wait(1).to({alpha:0.118},0).wait(1).to({alpha:0.059},0).wait(1).to({alpha:0},0).wait(64).to({_off:true},1).wait(56));

	// cobra
	this.instance_6 = new lib.Symbol5();
	this.instance_6.setTransform(158,0,1.25,1.4);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(124).to({_off:false},0).wait(1).to({regX:480,regY:250,x:758,y:350,alpha:0.05},0).wait(1).to({alpha:0.1},0).wait(1).to({alpha:0.15},0).wait(1).to({alpha:0.2},0).wait(1).to({alpha:0.25},0).wait(1).to({alpha:0.3},0).wait(1).to({alpha:0.35},0).wait(1).to({alpha:0.4},0).wait(1).to({alpha:0.45},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.55},0).wait(1).to({alpha:0.6},0).wait(1).to({alpha:0.65},0).wait(1).to({alpha:0.7},0).wait(1).to({alpha:0.75},0).wait(1).to({alpha:0.8},0).wait(1).to({alpha:0.85},0).wait(1).to({alpha:0.9},0).wait(1).to({alpha:0.95},0).wait(1).to({alpha:1},0).wait(1).to({alpha:0.95},0).wait(1).to({alpha:0.9},0).wait(1).to({alpha:0.85},0).wait(1).to({alpha:0.8},0).wait(1).to({alpha:0.75},0).wait(1).to({alpha:0.7},0).wait(1).to({alpha:0.65},0).wait(1).to({alpha:0.6},0).wait(1).to({alpha:0.55},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.45},0).wait(1).to({alpha:0.4},0).wait(1).to({alpha:0.35},0).wait(1).to({alpha:0.3},0).wait(1).to({alpha:0.25},0).wait(1).to({alpha:0.2},0).wait(1).to({alpha:0.15},0).wait(1).to({alpha:0.1},0).wait(1).to({alpha:0.05},0).wait(1).to({alpha:0},0).wait(104).to({_off:true},1).wait(56));

	// quadrado
	this.instance_7 = new lib.Symbol2();
	this.instance_7.setTransform(250,0,1.232,1.394);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(36).to({_off:false},0).wait(1).to({regX:365.1,regY:251.1,scaleX:1.23,x:700,y:350.1,alpha:0.125},0).wait(1).to({alpha:0.25},0).wait(1).to({alpha:0.375},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.625},0).wait(1).to({alpha:0.75},0).wait(1).to({alpha:0.875},0).wait(1).to({alpha:1},0).wait(281));

	// ilhafrente
	this.instance_8 = new lib.ilhafrente();
	this.instance_8.setTransform(250,0,0.9,1.051);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).to({_off:true},66).wait(259));

	// aviao
	this.instance_9 = new lib.Symbol1();
	this.instance_9.setTransform(1995.4,-103.9,1.465,1.787,3.8,0,0,546,398.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(1).to({regX:547.2,regY:398.1,rotation:4,x:1957.2,y:-93.6},0).wait(1).to({x:1917.2,y:-82.5},0).wait(1).to({x:1877.2,y:-71.5},0).wait(1).to({x:1837.2,y:-60.4},0).wait(1).to({x:1797.2,y:-49.4},0).wait(1).to({x:1757.2,y:-38.3},0).wait(1).to({x:1717.2,y:-27.2},0).wait(1).to({x:1677.2,y:-16.2},0).wait(1).to({x:1637.2,y:-5.1},0).wait(1).to({x:1597.1,y:5.9},0).wait(1).to({x:1557.1,y:17},0).wait(1).to({x:1517.1,y:28},0).wait(1).to({x:1477.1,y:39.1},0).wait(1).to({x:1437.1,y:50.2},0).wait(1).to({x:1397.1,y:61.2},0).wait(1).to({x:1357.1,y:72.3},0).wait(1).to({x:1317.1,y:83.3},0).wait(1).to({x:1277.1,y:94.4},0).wait(1).to({x:1237,y:105.5},0).wait(1).to({x:1197,y:116.5},0).wait(1).to({x:1157,y:127.6},0).wait(1).to({x:1117,y:138.6},0).wait(1).to({x:1077,y:149.7},0).wait(1).to({x:1037,y:160.7},0).wait(1).to({x:997,y:171.8},0).wait(1).to({x:957,y:182.9},0).wait(1).to({x:917,y:193.9},0).wait(1).to({x:876.9,y:205},0).wait(1).to({x:836.9,y:216},0).wait(1).to({x:796.9,y:227.1},0).wait(1).to({x:756.9,y:238.2},0).wait(1).to({x:716.9,y:249.2},0).wait(1).to({x:676.9,y:260.3},0).wait(1).to({x:636.9,y:271.3},0).wait(1).to({x:596.9,y:282.4},0).wait(1).to({x:556.9,y:293.4},0).wait(29).to({_off:true},1).wait(259));

	// ilhafundo
	this.instance_10 = new lib.ilha();
	this.instance_10.setTransform(250,0,0.9,1.049);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).to({_off:true},66).wait(259));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(694,-517.6,2850.1,1568.6);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;