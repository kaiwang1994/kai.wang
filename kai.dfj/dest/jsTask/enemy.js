"use strict";function Enemy(e){var n=this;this.ele=null,this.hp=1,this.speed=10,this.dieImgs=[],this.score=10,this.init=function(){switch(n.ele=document.createElement("div"),gameEngine.ele.appendChild(n.ele),gameEngine.allEnemys.push(n),e){case n.Enemy_Type_Large:n.ele.className="enemy-large",n.hp=n.Enemy_Hp_Large,n.speed=n.Enemy_Speed_Large,n.dieImgs=["images2/plane3_die1.png","images2/plane3_die2.png","images2/plane3_die3.png","images2/plane3_die4.png","images2/plane3_die5.png","images2/plane3_die6.png"],n.score=30;break;case n.Enemy_Type_Middle:n.ele.className="enemy-middle",n.hp=n.Enemy_Hp_Middle,n.speed=n.Enemy_Speed_Middle,n.dieImgs=["images2/plane2_die1.png","images2/plane2_die2.png","images2/plane2_die3.png","images2/plane2_die4.png"],n.score=20;break;case n.Enemy_Type_Small:n.ele.className="enemy-small",n.hp=n.Enemy_Hp_Small,n.speed=n.Enemy_Speed_Small,n.dieImgs=["images2/plane1_die1.png","images2/plane1_die2.png","images2/plane1_die3.png"],n.score=10;break;default:alert("没有这种敌机")}return n.ele.style.left=parseInt(Math.random()*(gameEngine.ele.offsetWidth-n.ele.offsetWidth))+"px",n.ele.style.top=-n.ele.offsetHeight+"px",n},this.move=function(){var e=n;n.timer=setInterval(function(){e.ele.offsetTop>gameEngine.ele.offsetHeight?(clearInterval(n.timer),gameEngine.ele.removeChild(e.ele),gameEngine.allEnemys.splice(gameEngine.allEnemys.indexOf(e),1)):e.ele.style.top=e.ele.offsetTop+e.speed+"px"},30)},this.hurt=function(){n.hp--,0==n.hp&&(n.boom(),gameEngine.totalScore+=n.score)},this.boom=function(){clearInterval(n.timer);var e=n,l=0,a=setInterval(function(){l>=e.dieImgs.length?(clearInterval(a),gameEngine.ele.removeChild(e.ele),gameEngine.allEnemys.splice(gameEngine.allEnemys.indexOf(e),1)):e.ele.style.backgroundImage="url("+e.dieImgs[l++]+")"},100)}}Enemy.prototype={Enemy_Type_Large:3,Enemy_Type_Middle:2,Enemy_Type_Small:1,Enemy_Speed_Large:2,Enemy_Speed_Middle:4,Enemy_Speed_Small:7,Enemy_Hp_Large:8,Enemy_Hp_Middle:3,Enemy_Hp_Small:1};