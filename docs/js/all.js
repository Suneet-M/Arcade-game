"use strict";!function(){var n={},i=[];function t(e){if(n[e])return n[e];var t=new Image;t.onload=function(){n[e]=t,s()&&i.forEach(function(e){e()})},n[e]=!1,t.src=e}function s(){var e=!0;for(var t in n)n.hasOwnProperty(t)&&!n[t]&&(e=!1);return e}window.Resources={load:function(e){e instanceof Array?e.forEach(function(e){t(e)}):t(e)},get:function(e){return n[e]},onReady:function(e){i.push(e)},isReady:s}}();var Engine=function(e){var n,i,t=e.document,s=e.window,r=t.createElement("canvas"),o=r.getContext("2d");function a(){var t,e=Date.now();t=(e-n)/1e3,allEnemies.forEach(function(e){e.update(t)}),function(){var e,t,n=["img/water-block.png","img/stone-block.png","img/stone-block.png","img/stone-block.png","img/grass-block.png","img/grass-block.png"];for(o.clearRect(0,0,r.width,r.height),e=0;e<6;e++)for(t=0;t<5;t++)o.drawImage(Resources.get(n[e]),101*t,83*e);allEnemies.forEach(function(e){e.render()}),player.render()}(),n=e,player.win||player.lose?s.cancelAnimationFrame(i):i=s.requestAnimationFrame(a)}return r.width=505,r.height=600,document.querySelector(".canvas-container").appendChild(r),Resources.load(["img/stone-block.png","img/water-block.png","img/grass-block.png","img/enemy-bug.png","img/char-boy.png"]),Resources.onReady(function(){n=Date.now(),a()}),e.ctx=o,{start:a}}(window);function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function _createClass(e,t,n){return t&&_defineProperties(e.prototype,t),n&&_defineProperties(e,n),e}var Enemy=function(){function i(e,t){var n=2<arguments.length&&void 0!==arguments[2]?arguments[2]:-120;_classCallCheck(this,i),this.sprite="img/enemy-bug.png",this.startX=n,this.x=this.startX,this.y=t,this.sp=e,this.random=100}return _createClass(i,[{key:"update",value:function(e){this.x+=this.sp*this.random*e,520<=this.x&&(this.x=this.startX,this.random=100*Math.random()+100),checkCollision(this),checkWin()}},{key:"render",value:function(){ctx.drawImage(Resources.get(this.sprite),this.x,this.y)}},{key:"endX",get:function(){return this.x+tileWidth}},{key:"endY",get:function(){return this.y+tileHeight}}]),i}(),Player=function(){function e(){_classCallCheck(this,e),this.sprite="img/char-boy.png",this.startX=200,this.startY=375,this.x=this.startX,this.y=this.startY,this.win=!1,this.lose=!1}return _createClass(e,[{key:"render",value:function(){ctx.drawImage(Resources.get(this.sprite),this.x,this.y)}},{key:"handleInput",value:function(e){switch(e){case"left":-2===this.x||(this.x-=tileWidth);break;case"up":-40===this.y||(this.y-=tileHeight);break;case"down":375===this.y||(this.y+=tileHeight);break;case"right":402===this.x||(this.x+=tileWidth)}}},{key:"feetY",get:function(){return this.y+tileHeight}},{key:"feetX",get:function(){return this.x+tileWidth/2}}]),e}(),allEnemies=[new Enemy(1.5,64),new Enemy(3,64,-550),new Enemy(6,64,-1e3),new Enemy(2,147),new Enemy(1.2,147,-200),new Enemy(3,147,-800),new Enemy(1,230),new Enemy(2.2,230,-450)],player=new Player,tileWidth=101,tileHeight=83;function checkCollision(e){player.feetX<=e.endX&&player.feetX>=e.x&&player.feetY<=e.endY&&player.feetY>=e.y&&(resetPlayer(),reduceLives())}function resetPlayer(){player.x=player.startX,player.y=player.startY}document.addEventListener("keyup",function(e){player.handleInput({37:"left",38:"up",39:"right",40:"down"}[e.keyCode])}),document.querySelector(".arrow-keys").addEventListener("click",function(e){var t=e.target.dataset.direction;player.handleInput(t)});var lives=Array.from(document.querySelectorAll(".fa-heart")),i=lives.length;function reduceLives(){lives[--i].classList.remove("fas"),lives[i].classList.add("far"),checkLose()}function checkWin(){-40==player.y&&gameWin()}function gameWin(){player.win=!0,num=0,showModal()}function checkLose(){0==i&&gameLose()}function gameLose(){player.lose=!0,num=1,showModal()}function resetLives(){for(i=0;i<lives.length;i++)lives[i].classList.add("fas")}function resetGame(){player.win=!1,player.lose=!1,resetPlayer(),resetLives(),hideModal(),Engine.start()}var num,modalBack=document.querySelector(".modal-back"),modalBody=Array.from(document.querySelectorAll(".modal-body")),closeButtons=Array.from(document.querySelectorAll(".close")),resetButtons=Array.from(document.querySelectorAll(".reset"));function showModal(){modalBack.classList.add("show"),modalBody[num].classList.add("show"),0==num?modalBody[num].classList.add("tada"):modalBody[num].classList.add("wobble"),document.querySelector(".content").innerHTML=document.querySelector(".score-panel").innerHTML,toggleListeners("on"),resetButtons[num].focus()}function hideModal(){modalBody[num].classList.add("bounceOut"),setTimeout(function(){modalBody[num].classList.remove("show","tada","wobble","bounceOut"),modalBack.classList.remove("show")},780),toggleListeners("off")}function toggleListeners(e){switch(e){case"on":closeButtons[num].addEventListener("click",hideModal),resetButtons[num].addEventListener("click",resetGame);break;case"off":closeButtons[num].removeEventListener("click",hideModal),resetButtons[num].removeEventListener("click",resetGame)}}
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlc291cmNlcy5qcyIsImVuZ2luZS5qcyIsImFwcC5qcyJdLCJuYW1lcyI6WyJyZXNvdXJjZUNhY2hlIiwicmVhZHlDYWxsYmFja3MiLCJfbG9hZCIsInVybCIsImltZyIsIkltYWdlIiwib25sb2FkIiwiaXNSZWFkeSIsImZvckVhY2giLCJmdW5jIiwic3JjIiwicmVhZHkiLCJrIiwiaGFzT3duUHJvcGVydHkiLCJ3aW5kb3ciLCJSZXNvdXJjZXMiLCJsb2FkIiwidXJsT3JBcnIiLCJBcnJheSIsImdldCIsIm9uUmVhZHkiLCJwdXNoIiwiRW5naW5lIiwiZ2xvYmFsIiwibGFzdFRpbWUiLCJpZCIsImRvYyIsImRvY3VtZW50Iiwid2luIiwiY2FudmFzIiwiY3JlYXRlRWxlbWVudCIsImN0eCIsImdldENvbnRleHQiLCJtYWluIiwiZHQiLCJub3ciLCJEYXRlIiwiYWxsRW5lbWllcyIsImVuZW15IiwidXBkYXRlIiwicm93IiwiY29sIiwicm93SW1hZ2VzIiwiY2xlYXJSZWN0Iiwid2lkdGgiLCJoZWlnaHQiLCJkcmF3SW1hZ2UiLCJyZW5kZXIiLCJwbGF5ZXIiLCJsb3NlIiwiY2FuY2VsQW5pbWF0aW9uRnJhbWUiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJxdWVyeVNlbGVjdG9yIiwiYXBwZW5kQ2hpbGQiLCJzdGFydCIsIkVuZW15Iiwic3BlZWQiLCJ5IiwieCIsImFyZ3VtZW50cyIsImxlbmd0aCIsInVuZGVmaW5lZCIsIl9jbGFzc0NhbGxDaGVjayIsInRoaXMiLCJzcHJpdGUiLCJzdGFydFgiLCJzcCIsInJhbmRvbSIsIk1hdGgiLCJjaGVja0NvbGxpc2lvbiIsImNoZWNrV2luIiwidGlsZVdpZHRoIiwidGlsZUhlaWdodCIsIlBsYXllciIsInN0YXJ0WSIsImtleSIsImZlZXRYIiwiZW5kWCIsImZlZXRZIiwiZW5kWSIsInJlc2V0UGxheWVyIiwicmVkdWNlTGl2ZXMiLCJhZGRFdmVudExpc3RlbmVyIiwiZSIsImhhbmRsZUlucHV0IiwiMzciLCIzOCIsIjM5IiwiNDAiLCJrZXlDb2RlIiwidGFyZ2V0IiwiZGF0YXNldCIsImRpcmVjdGlvbiIsImxpdmVzIiwiZnJvbSIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJpIiwiY2xhc3NMaXN0IiwicmVtb3ZlIiwiYWRkIiwiY2hlY2tMb3NlIiwiZ2FtZVdpbiIsIm51bSIsInNob3dNb2RhbCIsImdhbWVMb3NlIiwicmVzZXRMaXZlcyIsInJlc2V0R2FtZSIsImhpZGVNb2RhbCIsIm1vZGFsQmFjayIsIm1vZGFsQm9keSIsImNsb3NlQnV0dG9ucyIsInJlc2V0QnV0dG9ucyIsImlubmVySFRNTCIsInRvZ2dsZUxpc3RlbmVycyIsImZvY3VzIiwic2V0VGltZW91dCIsInN3IiwicmVtb3ZlRXZlbnRMaXN0ZW5lciJdLCJtYXBwaW5ncyI6IkFBQUEsY0FPQSxXQUNDLElBQUlBLEVBQWdCLEdBQ2hCQyxFQUFpQixHQTJCckIsU0FBU0MsRUFBTUMsR0FDZCxHQUFHSCxFQUFjRyxHQUtoQixPQUFPSCxFQUFjRyxHQUtyQixJQUFJQyxFQUFNLElBQUlDLE1BQ2RELEVBQUlFLE9BQVMsV0FLWk4sRUFBY0csR0FBT0MsRUFJbEJHLEtBQ0ZOLEVBQWVPLFFBQVEsU0FBU0MsR0FBUUEsT0FRMUNULEVBQWNHLElBQU8sRUFDckJDLEVBQUlNLElBQU1QLEVBZVosU0FBU0ksSUFDUixJQUFJSSxHQUFRLEVBQ1osSUFBSSxJQUFJQyxLQUFLWixFQUNUQSxFQUFjYSxlQUFlRCxLQUM5QlosRUFBY1ksS0FDZkQsR0FBUSxHQUdWLE9BQU9BLEVBYVJHLE9BQU9DLFVBQVksQ0FDbEJDLEtBekZELFNBQWNDLEdBQ1ZBLGFBQW9CQyxNQUt0QkQsRUFBU1QsUUFBUSxTQUFTTCxHQUN6QkQsRUFBTUMsS0FPUEQsRUFBTWUsSUE0RVBFLElBOUJELFNBQWFoQixHQUNaLE9BQU9ILEVBQWNHLElBOEJyQmlCLFFBVkQsU0FBaUJYLEdBQ2hCUixFQUFlb0IsS0FBS1osSUFVcEJGLFFBQVNBLEdBcEdYLEdDU0EsSUFBSWUsT0FBVSxTQUFTQyxH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NUNJLGFBQWFULEtBQUtwQixpQkFBaUIsUUFBU3dCLFdBQzVDLE1BRUQsSUFBSyxNQUNKSSxhQUFhUixLQUFLZSxvQkFBb0IsUUFBU1YsV0FDL0NJLGFBQWFULEtBQUtlLG9CQUFvQixRQUFTWCIsImZpbGUiOiJhbGwuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XHJcbi8qIFJlc291cmNlcy5qc1xyXG4gKiBUaGlzIGlzIHNpbXBseSBhbiBpbWFnZSBsb2FkaW5nIHV0aWxpdHkuIEl0IGVhc2VzIHRoZSBwcm9jZXNzIG9mIGxvYWRpbmdcclxuICogaW1hZ2UgZmlsZXMgc28gdGhhdCB0aGV5IGNhbiBiZSB1c2VkIHdpdGhpbiB5b3VyIGdhbWUuIEl0IGFsc28gaW5jbHVkZXNcclxuICogYSBzaW1wbGUgXCJjYWNoaW5nXCIgbGF5ZXIgc28gaXQgd2lsbCByZXVzZSBjYWNoZWQgaW1hZ2VzIGlmIHlvdSBhdHRlbXB0XHJcbiAqIHRvIGxvYWQgdGhlIHNhbWUgaW1hZ2UgbXVsdGlwbGUgdGltZXMuXHJcbiAqL1xyXG4oZnVuY3Rpb24oKSB7XHJcblx0dmFyIHJlc291cmNlQ2FjaGUgPSB7fTtcclxuXHR2YXIgcmVhZHlDYWxsYmFja3MgPSBbXTtcclxuXHJcblx0LyogVGhpcyBpcyB0aGUgcHVibGljbHkgYWNjZXNzaWJsZSBpbWFnZSBsb2FkaW5nIGZ1bmN0aW9uLiBJdCBhY2NlcHRzXHJcblx0ICogYW4gYXJyYXkgb2Ygc3RyaW5ncyBwb2ludGluZyB0byBpbWFnZSBmaWxlcyBvciBhIHN0cmluZyBmb3IgYSBzaW5nbGVcclxuXHQgKiBpbWFnZS4gSXQgd2lsbCB0aGVuIGNhbGwgb3VyIHByaXZhdGUgaW1hZ2UgbG9hZGluZyBmdW5jdGlvbiBhY2NvcmRpbmdseS5cclxuXHQgKi9cclxuXHRmdW5jdGlvbiBsb2FkKHVybE9yQXJyKSB7XHJcblx0XHRpZih1cmxPckFyciBpbnN0YW5jZW9mIEFycmF5KSB7XHJcblx0XHRcdC8qIElmIHRoZSBkZXZlbG9wZXIgcGFzc2VkIGluIGFuIGFycmF5IG9mIGltYWdlc1xyXG5cdFx0XHQgKiBsb29wIHRocm91Z2ggZWFjaCB2YWx1ZSBhbmQgY2FsbCBvdXIgaW1hZ2VcclxuXHRcdFx0ICogbG9hZGVyIG9uIHRoYXQgaW1hZ2UgZmlsZVxyXG5cdFx0XHQgKi9cclxuXHRcdFx0dXJsT3JBcnIuZm9yRWFjaChmdW5jdGlvbih1cmwpIHtcclxuXHRcdFx0XHRfbG9hZCh1cmwpO1xyXG5cdFx0XHR9KTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdC8qIFRoZSBkZXZlbG9wZXIgZGlkIG5vdCBwYXNzIGFuIGFycmF5IHRvIHRoaXMgZnVuY3Rpb24sXHJcblx0XHRcdCAqIGFzc3VtZSB0aGUgdmFsdWUgaXMgYSBzdHJpbmcgYW5kIGNhbGwgb3VyIGltYWdlIGxvYWRlclxyXG5cdFx0XHQgKiBkaXJlY3RseS5cclxuXHRcdFx0ICovXHJcblx0XHRcdF9sb2FkKHVybE9yQXJyKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdC8qIFRoaXMgaXMgb3VyIHByaXZhdGUgaW1hZ2UgbG9hZGVyIGZ1bmN0aW9uLCBpdCBpc1xyXG5cdCAqIGNhbGxlZCBieSB0aGUgcHVibGljIGltYWdlIGxvYWRlciBmdW5jdGlvbi5cclxuXHQgKi9cclxuXHRmdW5jdGlvbiBfbG9hZCh1cmwpIHtcclxuXHRcdGlmKHJlc291cmNlQ2FjaGVbdXJsXSkge1xyXG5cdFx0XHQvKiBJZiB0aGlzIFVSTCBoYXMgYmVlbiBwcmV2aW91c2x5IGxvYWRlZCBpdCB3aWxsIGV4aXN0IHdpdGhpblxyXG5cdFx0XHQgKiBvdXIgcmVzb3VyY2VDYWNoZSBhcnJheS4gSnVzdCByZXR1cm4gdGhhdCBpbWFnZSByYXRoZXJcclxuXHRcdFx0ICogcmUtbG9hZGluZyB0aGUgaW1hZ2UuXHJcblx0XHRcdCAqL1xyXG5cdFx0XHRyZXR1cm4gcmVzb3VyY2VDYWNoZVt1cmxdO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0LyogVGhpcyBVUkwgaGFzIG5vdCBiZWVuIHByZXZpb3VzbHkgbG9hZGVkIGFuZCBpcyBub3QgcHJlc2VudFxyXG5cdFx0XHQgKiB3aXRoaW4gb3VyIGNhY2hlOyB3ZSdsbCBuZWVkIHRvIGxvYWQgdGhpcyBpbWFnZS5cclxuXHRcdFx0ICovXHJcblx0XHRcdHZhciBpbWcgPSBuZXcgSW1hZ2UoKTtcclxuXHRcdFx0aW1nLm9ubG9hZCA9IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdC8qIE9uY2Ugb3VyIGltYWdlIGhhcyBwcm9wZXJseSBsb2FkZWQsIGFkZCBpdCB0byBvdXIgY2FjaGVcclxuXHRcdFx0XHQgKiBzbyB0aGF0IHdlIGNhbiBzaW1wbHkgcmV0dXJuIHRoaXMgaW1hZ2UgaWYgdGhlIGRldmVsb3BlclxyXG5cdFx0XHRcdCAqIGF0dGVtcHRzIHRvIGxvYWQgdGhpcyBmaWxlIGluIHRoZSBmdXR1cmUuXHJcblx0XHRcdFx0ICovXHJcblx0XHRcdFx0cmVzb3VyY2VDYWNoZVt1cmxdID0gaW1nO1xyXG5cdFx0XHRcdC8qIE9uY2UgdGhlIGltYWdlIGlzIGFjdHVhbGx5IGxvYWRlZCBhbmQgcHJvcGVybHkgY2FjaGVkLFxyXG5cdFx0XHRcdCAqIGNhbGwgYWxsIG9mIHRoZSBvblJlYWR5KCkgY2FsbGJhY2tzIHdlIGhhdmUgZGVmaW5lZC5cclxuXHRcdFx0XHQgKi9cclxuXHRcdFx0XHRpZihpc1JlYWR5KCkpIHtcclxuXHRcdFx0XHRcdHJlYWR5Q2FsbGJhY2tzLmZvckVhY2goZnVuY3Rpb24oZnVuYykgeyBmdW5jKCk7IH0pO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fTtcclxuXHJcblx0XHRcdC8qIFNldCB0aGUgaW5pdGlhbCBjYWNoZSB2YWx1ZSB0byBmYWxzZSwgdGhpcyB3aWxsIGNoYW5nZSB3aGVuXHJcblx0XHRcdCAqIHRoZSBpbWFnZSdzIG9ubG9hZCBldmVudCBoYW5kbGVyIGlzIGNhbGxlZC4gRmluYWxseSwgcG9pbnRcclxuXHRcdFx0ICogdGhlIGltYWdlJ3Mgc3JjIGF0dHJpYnV0ZSB0byB0aGUgcGFzc2VkIGluIFVSTC5cclxuXHRcdFx0ICovXHJcblx0XHRcdHJlc291cmNlQ2FjaGVbdXJsXSA9IGZhbHNlO1xyXG5cdFx0XHRpbWcuc3JjID0gdXJsO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0LyogVGhpcyBpcyB1c2VkIGJ5IGRldmVsb3BlcnMgdG8gZ3JhYiByZWZlcmVuY2VzIHRvIGltYWdlcyB0aGV5IGtub3dcclxuXHQgKiBoYXZlIGJlZW4gcHJldmlvdXNseSBsb2FkZWQuIElmIGFuIGltYWdlIGlzIGNhY2hlZCwgdGhpcyBmdW5jdGlvbnNcclxuXHQgKiB0aGUgc2FtZSBhcyBjYWxsaW5nIGxvYWQoKSBvbiB0aGF0IFVSTC5cclxuXHQgKi9cclxuXHRmdW5jdGlvbiBnZXQodXJsKSB7XHJcblx0XHRyZXR1cm4gcmVzb3VyY2VDYWNoZVt1cmxdO1xyXG5cdH1cclxuXHJcblx0LyogVGhpcyBmdW5jdGlvbiBkZXRlcm1pbmVzIGlmIGFsbCBvZiB0aGUgaW1hZ2VzIHRoYXQgaGF2ZSBiZWVuIHJlcXVlc3RlZFxyXG5cdCAqIGZvciBsb2FkaW5nIGhhdmUgaW4gZmFjdCBiZWVuIHByb3Blcmx5IGxvYWRlZC5cclxuXHQgKi9cclxuXHRmdW5jdGlvbiBpc1JlYWR5KCkge1xyXG5cdFx0dmFyIHJlYWR5ID0gdHJ1ZTtcclxuXHRcdGZvcih2YXIgayBpbiByZXNvdXJjZUNhY2hlKSB7XHJcblx0XHRcdGlmKHJlc291cmNlQ2FjaGUuaGFzT3duUHJvcGVydHkoaykgJiZcclxuXHRcdFx0XHQhcmVzb3VyY2VDYWNoZVtrXSkge1xyXG5cdFx0XHRcdHJlYWR5ID0gZmFsc2U7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdHJldHVybiByZWFkeTtcclxuXHR9XHJcblxyXG5cdC8qIFRoaXMgZnVuY3Rpb24gd2lsbCBhZGQgYSBmdW5jdGlvbiB0byB0aGUgY2FsbGJhY2sgc3RhY2sgdGhhdCBpcyBjYWxsZWRcclxuXHQgKiB3aGVuIGFsbCByZXF1ZXN0ZWQgaW1hZ2VzIGFyZSBwcm9wZXJseSBsb2FkZWQuXHJcblx0ICovXHJcblx0ZnVuY3Rpb24gb25SZWFkeShmdW5jKSB7XHJcblx0XHRyZWFkeUNhbGxiYWNrcy5wdXNoKGZ1bmMpO1xyXG5cdH1cclxuXHJcblx0LyogVGhpcyBvYmplY3QgZGVmaW5lcyB0aGUgcHVibGljbHkgYWNjZXNzaWJsZSBmdW5jdGlvbnMgYXZhaWxhYmxlIHRvXHJcblx0ICogZGV2ZWxvcGVycyBieSBjcmVhdGluZyBhIGdsb2JhbCBSZXNvdXJjZXMgb2JqZWN0LlxyXG5cdCAqL1xyXG5cdHdpbmRvdy5SZXNvdXJjZXMgPSB7XHJcblx0XHRsb2FkOiBsb2FkLFxyXG5cdFx0Z2V0OiBnZXQsXHJcblx0XHRvblJlYWR5OiBvblJlYWR5LFxyXG5cdFx0aXNSZWFkeTogaXNSZWFkeVxyXG5cdH07XHJcbn0pKCk7XHJcbiIsIid1c2Ugc3RyaWN0JztcclxuLyogRW5naW5lLmpzXHJcbiAqIFRoaXMgZmlsZSBwcm92aWRlcyB0aGUgZ2FtZSBsb29wIGZ1bmN0aW9uYWxpdHkgKHVwZGF0ZSBlbnRpdGllcyBhbmQgcmVuZGVyKSxcclxuICogZHJhd3MgdGhlIGluaXRpYWwgZ2FtZSBib2FyZCBvbiB0aGUgc2NyZWVuLCBhbmQgdGhlbiBjYWxscyB0aGUgdXBkYXRlIGFuZFxyXG4gKiByZW5kZXIgbWV0aG9kcyBvbiB5b3VyIHBsYXllciBhbmQgZW5lbXkgb2JqZWN0cyAoZGVmaW5lZCBpbiB5b3VyIGFwcC5qcykuXHJcbiAqXHJcbiAqIEEgZ2FtZSBlbmdpbmUgd29ya3MgYnkgZHJhd2luZyB0aGUgZW50aXJlIGdhbWUgc2NyZWVuIG92ZXIgYW5kIG92ZXIsIGtpbmQgb2ZcclxuICogbGlrZSBhIGZsaXBib29rIHlvdSBtYXkgaGF2ZSBjcmVhdGVkIGFzIGEga2lkLiBXaGVuIHlvdXIgcGxheWVyIG1vdmVzIGFjcm9zc1xyXG4gKiB0aGUgc2NyZWVuLCBpdCBtYXkgbG9vayBsaWtlIGp1c3QgdGhhdCBpbWFnZS9jaGFyYWN0ZXIgaXMgbW92aW5nIG9yIGJlaW5nXHJcbiAqIGRyYXduIGJ1dCB0aGF0IGlzIG5vdCB0aGUgY2FzZS4gV2hhdCdzIHJlYWxseSBoYXBwZW5pbmcgaXMgdGhlIGVudGlyZSBcInNjZW5lXCJcclxuICogaXMgYmVpbmcgZHJhd24gb3ZlciBhbmQgb3ZlciwgcHJlc2VudGluZyB0aGUgaWxsdXNpb24gb2YgYW5pbWF0aW9uLlxyXG4gKlxyXG4gKiBUaGlzIGVuZ2luZSBtYWtlcyB0aGUgY2FudmFzJyBjb250ZXh0IChjdHgpIG9iamVjdCBnbG9iYWxseSBhdmFpbGFibGUgdG8gbWFrZSBcclxuICogd3JpdGluZyBhcHAuanMgYSBsaXR0bGUgc2ltcGxlciB0byB3b3JrIHdpdGguXHJcbiAqL1xyXG5cclxudmFyIEVuZ2luZSA9IChmdW5jdGlvbihnbG9iYWwpIHtcclxuXHQvKiBQcmVkZWZpbmUgdGhlIHZhcmlhYmxlcyB3ZSdsbCBiZSB1c2luZyB3aXRoaW4gdGhpcyBzY29wZSxcclxuXHQgKiBjcmVhdGUgdGhlIGNhbnZhcyBlbGVtZW50LCBncmFiIHRoZSAyRCBjb250ZXh0IGZvciB0aGF0IGNhbnZhc1xyXG5cdCAqIHNldCB0aGUgY2FudmFzIGVsZW1lbnRzIGhlaWdodC93aWR0aCBhbmQgYWRkIGl0IHRvIHRoZSBET00uXHJcblx0ICovXHJcblx0dmFyIGRvYyA9IGdsb2JhbC5kb2N1bWVudCxcclxuXHRcdHdpbiA9IGdsb2JhbC53aW5kb3csXHJcblx0XHRjYW52YXMgPSBkb2MuY3JlYXRlRWxlbWVudCgnY2FudmFzJyksXHJcblx0XHRjdHggPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKSxcclxuXHRcdGxhc3RUaW1lLFxyXG5cdFx0aWQ7XHJcblxyXG5cdGNhbnZhcy53aWR0aCA9IDUwNTtcclxuXHRjYW52YXMuaGVpZ2h0ID0gNjAwO1xyXG5cdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYW52YXMtY29udGFpbmVyJykuYXBwZW5kQ2hpbGQoY2FudmFzKTtcclxuXHJcblx0LyogVGhpcyBmdW5jdGlvbiBzZXJ2ZXMgYXMgdGhlIGtpY2tvZmYgcG9pbnQgZm9yIHRoZSBnYW1lIGxvb3AgaXRzZWxmXHJcblx0ICogYW5kIGhhbmRsZXMgcHJvcGVybHkgY2FsbGluZyB0aGUgdXBkYXRlIGFuZCByZW5kZXIgbWV0aG9kcy5cclxuXHQgKi9cclxuXHRmdW5jdGlvbiBtYWluKCkge1xyXG5cdFx0LyogR2V0IG91ciB0aW1lIGRlbHRhIGluZm9ybWF0aW9uIHdoaWNoIGlzIHJlcXVpcmVkIGlmIHlvdXIgZ2FtZVxyXG5cdFx0ICogcmVxdWlyZXMgc21vb3RoIGFuaW1hdGlvbi4gQmVjYXVzZSBldmVyeW9uZSdzIGNvbXB1dGVyIHByb2Nlc3Nlc1xyXG5cdFx0ICogaW5zdHJ1Y3Rpb25zIGF0IGRpZmZlcmVudCBzcGVlZHMgd2UgbmVlZCBhIGNvbnN0YW50IHZhbHVlIHRoYXRcclxuXHRcdCAqIHdvdWxkIGJlIHRoZSBzYW1lIGZvciBldmVyeW9uZSAocmVnYXJkbGVzcyBvZiBob3cgZmFzdCB0aGVpclxyXG5cdFx0ICogY29tcHV0ZXIgaXMpIC0gaHVycmF5IHRpbWUhXHJcblx0XHQgKi9cclxuXHRcdHZhciBub3cgPSBEYXRlLm5vdygpLFxyXG5cdFx0XHRkdCA9IChub3cgLSBsYXN0VGltZSkgLyAxMDAwLjA7XHJcblxyXG5cdFx0LyogQ2FsbCBvdXIgdXBkYXRlL3JlbmRlciBmdW5jdGlvbnMsIHBhc3MgYWxvbmcgdGhlIHRpbWUgZGVsdGEgdG9cclxuXHRcdCAqIG91ciB1cGRhdGUgZnVuY3Rpb24gc2luY2UgaXQgbWF5IGJlIHVzZWQgZm9yIHNtb290aCBhbmltYXRpb24uXHJcblx0XHQgKi9cclxuXHRcdHVwZGF0ZShkdCk7XHJcblx0XHRyZW5kZXIoKTtcclxuXHJcblx0XHQvKiBTZXQgb3VyIGxhc3RUaW1lIHZhcmlhYmxlIHdoaWNoIGlzIHVzZWQgdG8gZGV0ZXJtaW5lIHRoZSB0aW1lIGRlbHRhXHJcblx0XHQgKiBmb3IgdGhlIG5leHQgdGltZSB0aGlzIGZ1bmN0aW9uIGlzIGNhbGxlZC5cclxuXHRcdCAqL1xyXG5cdFx0bGFzdFRpbWUgPSBub3c7XHJcblxyXG5cdFx0LyogVXNlIHRoZSBicm93c2VyJ3MgcmVxdWVzdEFuaW1hdGlvbkZyYW1lIGZ1bmN0aW9uIHRvIGNhbGwgdGhpc1xyXG5cdFx0ICogZnVuY3Rpb24gYWdhaW4gYXMgc29vbiBhcyB0aGUgYnJvd3NlciBpcyBhYmxlIHRvIGRyYXcgYW5vdGhlciBmcmFtZVxyXG5cdFx0ICogb25seSB1bnRpbGwgcGxheWVyIHdpbnMuXHJcblx0XHQgKi9cclxuXHRcdGlmIChwbGF5ZXIud2luIHx8IHBsYXllci5sb3NlKSB7XHJcblx0XHRcdHdpbi5jYW5jZWxBbmltYXRpb25GcmFtZShpZCk7XHJcblx0XHR9XHJcblx0XHRlbHNlIHtcclxuXHRcdFx0aWQgPSB3aW4ucmVxdWVzdEFuaW1hdGlvbkZyYW1lKG1haW4pO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0LyogVGhpcyBmdW5jdGlvbiBkb2VzIHNvbWUgaW5pdGlhbCBzZXR1cCB0aGF0IHNob3VsZCBvbmx5IG9jY3VyIG9uY2UsXHJcblx0ICogcGFydGljdWxhcmx5IHNldHRpbmcgdGhlIGxhc3RUaW1lIHZhcmlhYmxlIHRoYXQgaXMgcmVxdWlyZWQgZm9yIHRoZVxyXG5cdCAqIGdhbWUgbG9vcC5cclxuXHQgKi9cclxuXHRmdW5jdGlvbiBpbml0KCkge1xyXG5cdFx0cmVzZXQoKTtcclxuXHRcdGxhc3RUaW1lID0gRGF0ZS5ub3coKTtcclxuXHRcdG1haW4oKTtcclxuXHR9XHJcblxyXG5cdC8qIFRoaXMgZnVuY3Rpb24gaXMgY2FsbGVkIGJ5IG1haW4gKG91ciBnYW1lIGxvb3ApIGFuZCBpdHNlbGYgY2FsbHMgYWxsXHJcblx0ICogb2YgdGhlIGZ1bmN0aW9ucyB3aGljaCBtYXkgbmVlZCB0byB1cGRhdGUgZW50aXR5J3MgZGF0YS4gQmFzZWQgb24gaG93XHJcblx0ICogeW91IGltcGxlbWVudCB5b3VyIGNvbGxpc2lvbiBkZXRlY3Rpb24gKHdoZW4gdHdvIGVudGl0aWVzIG9jY3VweSB0aGVcclxuXHQgKiBzYW1lIHNwYWNlLCBmb3IgaW5zdGFuY2Ugd2hlbiB5b3VyIGNoYXJhY3RlciBzaG91bGQgZGllKSwgeW91IG1heSBmaW5kXHJcblx0ICogdGhlIG5lZWQgdG8gYWRkIGFuIGFkZGl0aW9uYWwgZnVuY3Rpb24gY2FsbCBoZXJlLiBGb3Igbm93LCB3ZSd2ZSBsZWZ0XHJcblx0ICogaXQgY29tbWVudGVkIG91dCAtIHlvdSBtYXkgb3IgbWF5IG5vdCB3YW50IHRvIGltcGxlbWVudCB0aGlzXHJcblx0ICogZnVuY3Rpb25hbGl0eSB0aGlzIHdheSAoeW91IGNvdWxkIGp1c3QgaW1wbGVtZW50IGNvbGxpc2lvbiBkZXRlY3Rpb25cclxuXHQgKiBvbiB0aGUgZW50aXRpZXMgdGhlbXNlbHZlcyB3aXRoaW4geW91ciBhcHAuanMgZmlsZSkuXHJcblx0ICovXHJcblx0ZnVuY3Rpb24gdXBkYXRlKGR0KSB7XHJcblx0XHR1cGRhdGVFbnRpdGllcyhkdCk7XHJcblx0XHQvLyBjaGVja0NvbGxpc2lvbnMoKTtcclxuXHR9XHJcblxyXG5cdC8qIFRoaXMgaXMgY2FsbGVkIGJ5IHRoZSB1cGRhdGUgZnVuY3Rpb24gYW5kIGxvb3BzIHRocm91Z2ggYWxsIG9mIHRoZVxyXG5cdCAqIG9iamVjdHMgd2l0aGluIHlvdXIgYWxsRW5lbWllcyBhcnJheSBhcyBkZWZpbmVkIGluIGFwcC5qcyBhbmQgY2FsbHNcclxuXHQgKiB0aGVpciB1cGRhdGUoKSBtZXRob2RzLiBJdCB3aWxsIHRoZW4gY2FsbCB0aGUgdXBkYXRlIGZ1bmN0aW9uIGZvciB5b3VyXHJcblx0ICogcGxheWVyIG9iamVjdC4gVGhlc2UgdXBkYXRlIG1ldGhvZHMgc2hvdWxkIGZvY3VzIHB1cmVseSBvbiB1cGRhdGluZ1xyXG5cdCAqIHRoZSBkYXRhL3Byb3BlcnRpZXMgcmVsYXRlZCB0byB0aGUgb2JqZWN0LiBEbyB5b3VyIGRyYXdpbmcgaW4geW91clxyXG5cdCAqIHJlbmRlciBtZXRob2RzLlxyXG5cdCAqL1xyXG5cdGZ1bmN0aW9uIHVwZGF0ZUVudGl0aWVzKGR0KSB7XHJcblx0XHRhbGxFbmVtaWVzLmZvckVhY2goZnVuY3Rpb24oZW5lbXkpIHtcclxuXHRcdFx0ZW5lbXkudXBkYXRlKGR0KTtcclxuXHRcdH0pO1xyXG5cdH1cclxuXHJcblx0LyogVGhpcyBmdW5jdGlvbiBpbml0aWFsbHkgZHJhd3MgdGhlIFwiZ2FtZSBsZXZlbFwiLCBpdCB3aWxsIHRoZW4gY2FsbFxyXG5cdCAqIHRoZSByZW5kZXJFbnRpdGllcyBmdW5jdGlvbi4gUmVtZW1iZXIsIHRoaXMgZnVuY3Rpb24gaXMgY2FsbGVkIGV2ZXJ5XHJcblx0ICogZ2FtZSB0aWNrIChvciBsb29wIG9mIHRoZSBnYW1lIGVuZ2luZSkgYmVjYXVzZSB0aGF0J3MgaG93IGdhbWVzIHdvcmsgLVxyXG5cdCAqIHRoZXkgYXJlIGZsaXBib29rcyBjcmVhdGluZyB0aGUgaWxsdXNpb24gb2YgYW5pbWF0aW9uIGJ1dCBpbiByZWFsaXR5XHJcblx0ICogdGhleSBhcmUganVzdCBkcmF3aW5nIHRoZSBlbnRpcmUgc2NyZWVuIG92ZXIgYW5kIG92ZXIuXHJcblx0ICovXHJcblx0ZnVuY3Rpb24gcmVuZGVyKCkge1xyXG5cdFx0LyogVGhpcyBhcnJheSBob2xkcyB0aGUgcmVsYXRpdmUgVVJMIHRvIHRoZSBpbWFnZSB1c2VkXHJcblx0XHQgKiBmb3IgdGhhdCBwYXJ0aWN1bGFyIHJvdyBvZiB0aGUgZ2FtZSBsZXZlbC5cclxuXHRcdCAqL1xyXG5cdFx0dmFyIHJvd0ltYWdlcyA9IFtcclxuXHRcdFx0XHQnaW1nL3dhdGVyLWJsb2NrLnBuZycsICAgLy8gVG9wIHJvdyBpcyB3YXRlclxyXG5cdFx0XHRcdCdpbWcvc3RvbmUtYmxvY2sucG5nJywgICAvLyBSb3cgMSBvZiAzIG9mIHN0b25lXHJcblx0XHRcdFx0J2ltZy9zdG9uZS1ibG9jay5wbmcnLCAgIC8vIFJvdyAyIG9mIDMgb2Ygc3RvbmVcclxuXHRcdFx0XHQnaW1nL3N0b25lLWJsb2NrLnBuZycsICAgLy8gUm93IDMgb2YgMyBvZiBzdG9uZVxyXG5cdFx0XHRcdCdpbWcvZ3Jhc3MtYmxvY2sucG5nJywgICAvLyBSb3cgMSBvZiAyIG9mIGdyYXNzXHJcblx0XHRcdFx0J2ltZy9ncmFzcy1ibG9jay5wbmcnICAgIC8vIFJvdyAyIG9mIDIgb2YgZ3Jhc3NcclxuXHRcdFx0XSxcclxuXHRcdFx0bnVtUm93cyA9IDYsXHJcblx0XHRcdG51bUNvbHMgPSA1LFxyXG5cdFx0XHRyb3csIGNvbDtcclxuXHJcblx0XHQvLyBCZWZvcmUgZHJhd2luZywgY2xlYXIgZXhpc3RpbmcgY2FudmFzXHJcblx0XHRjdHguY2xlYXJSZWN0KDAsMCxjYW52YXMud2lkdGgsY2FudmFzLmhlaWdodCk7XHJcblxyXG5cdFx0LyogTG9vcCB0aHJvdWdoIHRoZSBudW1iZXIgb2Ygcm93cyBhbmQgY29sdW1ucyB3ZSd2ZSBkZWZpbmVkIGFib3ZlXHJcblx0XHQgKiBhbmQsIHVzaW5nIHRoZSByb3dJbWFnZXMgYXJyYXksIGRyYXcgdGhlIGNvcnJlY3QgaW1hZ2UgZm9yIHRoYXRcclxuXHRcdCAqIHBvcnRpb24gb2YgdGhlIFwiZ3JpZFwiXHJcblx0XHQgKi9cclxuXHRcdGZvciAocm93ID0gMDsgcm93IDwgbnVtUm93czsgcm93KyspIHtcclxuXHRcdFx0Zm9yIChjb2wgPSAwOyBjb2wgPCBudW1Db2xzOyBjb2wrKykge1xyXG5cdFx0XHRcdC8qIFRoZSBkcmF3SW1hZ2UgZnVuY3Rpb24gb2YgdGhlIGNhbnZhcycgY29udGV4dCBlbGVtZW50XHJcblx0XHRcdFx0ICogcmVxdWlyZXMgMyBwYXJhbWV0ZXJzOiB0aGUgaW1hZ2UgdG8gZHJhdywgdGhlIHggY29vcmRpbmF0ZVxyXG5cdFx0XHRcdCAqIHRvIHN0YXJ0IGRyYXdpbmcgYW5kIHRoZSB5IGNvb3JkaW5hdGUgdG8gc3RhcnQgZHJhd2luZy5cclxuXHRcdFx0XHQgKiBXZSdyZSB1c2luZyBvdXIgUmVzb3VyY2VzIGhlbHBlcnMgdG8gcmVmZXIgdG8gb3VyIGltYWdlc1xyXG5cdFx0XHRcdCAqIHNvIHRoYXQgd2UgZ2V0IHRoZSBiZW5lZml0cyBvZiBjYWNoaW5nIHRoZXNlIGltYWdlcywgc2luY2VcclxuXHRcdFx0XHQgKiB3ZSdyZSB1c2luZyB0aGVtIG92ZXIgYW5kIG92ZXIuXHJcblx0XHRcdFx0ICovXHJcblx0XHRcdFx0Y3R4LmRyYXdJbWFnZShSZXNvdXJjZXMuZ2V0KHJvd0ltYWdlc1tyb3ddKSwgY29sICogMTAxLCByb3cgKiA4Myk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHJcblx0XHRyZW5kZXJFbnRpdGllcygpO1xyXG5cdH1cclxuXHJcblx0LyogVGhpcyBmdW5jdGlvbiBpcyBjYWxsZWQgYnkgdGhlIHJlbmRlciBmdW5jdGlvbiBhbmQgaXMgY2FsbGVkIG9uIGVhY2ggZ2FtZVxyXG5cdCAqIHRpY2suIEl0cyBwdXJwb3NlIGlzIHRvIHRoZW4gY2FsbCB0aGUgcmVuZGVyIGZ1bmN0aW9ucyB5b3UgaGF2ZSBkZWZpbmVkXHJcblx0ICogb24geW91ciBlbmVteSBhbmQgcGxheWVyIGVudGl0aWVzIHdpdGhpbiBhcHAuanNcclxuXHQgKi9cclxuXHRmdW5jdGlvbiByZW5kZXJFbnRpdGllcygpIHtcclxuXHRcdC8qIExvb3AgdGhyb3VnaCBhbGwgb2YgdGhlIG9iamVjdHMgd2l0aGluIHRoZSBhbGxFbmVtaWVzIGFycmF5IGFuZCBjYWxsXHJcblx0XHQgKiB0aGUgcmVuZGVyIGZ1bmN0aW9uIHlvdSBoYXZlIGRlZmluZWQuXHJcblx0XHQgKi9cclxuXHRcdGFsbEVuZW1pZXMuZm9yRWFjaChmdW5jdGlvbihlbmVteSkge1xyXG5cdFx0XHRlbmVteS5yZW5kZXIoKTtcclxuXHRcdH0pO1xyXG5cclxuXHRcdHBsYXllci5yZW5kZXIoKTtcclxuXHR9XHJcblxyXG5cdC8qIFRoaXMgZnVuY3Rpb24gZG9lcyBub3RoaW5nIGJ1dCBpdCBjb3VsZCBoYXZlIGJlZW4gYSBnb29kIHBsYWNlIHRvXHJcblx0ICogaGFuZGxlIGdhbWUgcmVzZXQgc3RhdGVzIC0gbWF5YmUgYSBuZXcgZ2FtZSBtZW51IG9yIGEgZ2FtZSBvdmVyIHNjcmVlblxyXG5cdCAqIHRob3NlIHNvcnRzIG9mIHRoaW5ncy4gSXQncyBvbmx5IGNhbGxlZCBvbmNlIGJ5IHRoZSBpbml0KCkgbWV0aG9kLlxyXG5cdCAqL1xyXG5cdGZ1bmN0aW9uIHJlc2V0KCkge1xyXG5cdFx0Ly8gbm9vcFxyXG5cdH1cclxuXHJcblx0LyogR28gYWhlYWQgYW5kIGxvYWQgYWxsIG9mIHRoZSBpbWFnZXMgd2Uga25vdyB3ZSdyZSBnb2luZyB0byBuZWVkIHRvXHJcblx0ICogZHJhdyBvdXIgZ2FtZSBsZXZlbC4gVGhlbiBzZXQgaW5pdCBhcyB0aGUgY2FsbGJhY2sgbWV0aG9kLCBzbyB0aGF0IHdoZW5cclxuXHQgKiBhbGwgb2YgdGhlc2UgaW1hZ2VzIGFyZSBwcm9wZXJseSBsb2FkZWQgb3VyIGdhbWUgd2lsbCBzdGFydC5cclxuXHQgKi9cclxuXHRSZXNvdXJjZXMubG9hZChbXHJcblx0XHQnaW1nL3N0b25lLWJsb2NrLnBuZycsXHJcblx0XHQnaW1nL3dhdGVyLWJsb2NrLnBuZycsXHJcblx0XHQnaW1nL2dyYXNzLWJsb2NrLnBuZycsXHJcblx0XHQnaW1nL2VuZW15LWJ1Zy5wbmcnLFxyXG5cdFx0J2ltZy9jaGFyLWJveS5wbmcnXHJcblx0XSk7XHJcblx0UmVzb3VyY2VzLm9uUmVhZHkoaW5pdCk7XHJcblxyXG5cdC8qIEFzc2lnbiB0aGUgY2FudmFzJyBjb250ZXh0IG9iamVjdCB0byB0aGUgZ2xvYmFsIHZhcmlhYmxlICh0aGUgd2luZG93XHJcblx0ICogb2JqZWN0IHdoZW4gcnVuIGluIGEgYnJvd3Nlcikgc28gdGhhdCBkZXZlbG9wZXJzIGNhbiB1c2UgaXQgbW9yZSBlYXNpbHlcclxuXHQgKiBmcm9tIHdpdGhpbiB0aGVpciBhcHAuanMgZmlsZXMuXHJcblx0ICovXHJcblx0Z2xvYmFsLmN0eCA9IGN0eDtcclxuXHJcblx0cmV0dXJuIHtcclxuXHRcdHN0YXJ0Om1haW5cclxuXHR9O1xyXG59KSh3aW5kb3cpO1xyXG4iLCIndXNlIHN0cmljdCc7XHJcbi8vIEVuZW1pZXMgb3VyIHBsYXllciBtdXN0IGF2b2lkXHJcbmNsYXNzIEVuZW15IHtcclxuXHRjb25zdHJ1Y3RvcihzcGVlZCwgeSwgeCA9IC0xMjApIHtcclxuXHRcdHRoaXMuc3ByaXRlID0gJ2ltZy9lbmVteS1idWcucG5nJztcclxuXHRcdHRoaXMuc3RhcnRYID0geDtcclxuXHRcdHRoaXMueCA9IHRoaXMuc3RhcnRYO1xyXG5cdFx0dGhpcy55ID0geTtcclxuXHJcblx0XHR0aGlzLnNwID0gc3BlZWQ7XHJcblx0XHR0aGlzLnJhbmRvbSA9IDEwMDtcclxuXHR9XHJcblxyXG5cdC8vIFVzZWQgdG8gY2hlY2sgY29sbGlzaW9uXHJcblx0Z2V0IGVuZFgoKSB7XHJcblx0XHRyZXR1cm4gdGhpcy54ICsgdGlsZVdpZHRoO1xyXG5cdH1cclxuXHJcblx0Z2V0IGVuZFkoKSB7XHJcblx0XHRyZXR1cm4gdGhpcy55ICsgdGlsZUhlaWdodDtcclxuXHR9XHJcblxyXG5cdC8vIFRvIG1vdmUgdGhlIGVuZW15XHJcblx0dXBkYXRlKGR0KSB7XHJcblx0XHQvLyBJbmNyZW1lbnQgaW4gcG9zaXRpb24gYnkgc3BlY2lmaWMgc3BlZWRcclxuXHRcdHRoaXMueCArPSB0aGlzLnNwICogdGhpcy5yYW5kb20gKiBkdDtcclxuXHJcblx0XHQvLyBGb3IgcmVzdGluZyBwb3NpdGlvbiAmIHJhbmRvbWl6aW5nIHNwZWVkIGV2ZXJ5IHRpbWUgZW5lbXkgY3Jvc3NlcyB0aGUgcm9hZFxyXG5cdFx0aWYodGhpcy54ID49IDUyMCkge1xyXG5cdFx0XHR0aGlzLnggPSB0aGlzLnN0YXJ0WDsgLy8gcmVzZXQgZW5lbXkgcG9zaXRpb25cclxuXHRcdFx0Ly9nZXR0aW5nIGEgcmFuZG9tIG51bWJlciBiL3cgMTAwLTIwMFxyXG5cdFx0XHR0aGlzLnJhbmRvbSA9IE1hdGgucmFuZG9tKCkgKiAoMjAwLTEwMCkgKyAxMDA7XHJcblx0XHR9XHJcblxyXG5cdFx0Y2hlY2tDb2xsaXNpb24odGhpcyk7XHJcblx0XHRjaGVja1dpbigpO1xyXG5cdH1cclxuXHJcblx0Ly8gRHJhd3MgdGhlIGVuZW15IG9uIHRoZSBzY3JlZW5cclxuXHRyZW5kZXIoKSB7XHJcblx0XHRjdHguZHJhd0ltYWdlKFJlc291cmNlcy5nZXQodGhpcy5zcHJpdGUpLCB0aGlzLngsIHRoaXMueSk7XHJcblx0fVxyXG59XHJcblxyXG4vLyBPdXIgUGxheWVyXHJcbmNsYXNzIFBsYXllciB7XHJcblx0Y29uc3RydWN0b3IoKSB7XHJcblx0XHR0aGlzLnNwcml0ZSA9ICdpbWcvY2hhci1ib3kucG5nJztcclxuXHJcblx0XHQvLyBQbGFjZWQgdGhlIHBsYXllcidzIGZlZXQgaW4gY2VudGVyIG9mIHRoZSBibG9ja1xyXG5cdFx0dGhpcy5zdGFydFggPSAyMDA7XHJcblx0XHR0aGlzLnN0YXJ0WSA9IDM3NTtcclxuXHRcdHRoaXMueCA9IHRoaXMuc3RhcnRYO1xyXG5cdFx0dGhpcy55ID0gdGhpcy5zdGFydFk7XHJcblxyXG5cdFx0dGhpcy53aW4gPSBmYWxzZTtcclxuXHRcdHRoaXMubG9zZSA9IGZhbHNlO1xyXG5cdH1cclxuXHJcblx0Ly8gQXBwcm94aW1hdGUgbG9jYXRpb24gb2YgcGxheWVyJ3MgZmVldCB1c2luZyBibG9jaydzIGRpbWVuc2lvbnNcclxuXHRnZXQgZmVldFkoKSB7XHJcblx0XHRyZXR1cm4gdGhpcy55ICsgdGlsZUhlaWdodDtcclxuXHR9XHJcblxyXG5cdGdldCBmZWV0WCgpIHtcclxuXHRcdC8vIEhhbGYgb2YgYmxvY2sncyBob3Jpem9udGFsIGRpbWVuc2lvbiB1c2VkXHJcblx0XHRyZXR1cm4gdGhpcy54ICsgKHRpbGVXaWR0aC8yKTtcclxuXHR9XHJcblxyXG5cdC8vIERyYXdzIHRoZSBwbGF5ZXIgb24gdGhlIHNjcmVlblxyXG5cdHJlbmRlcigpIHtcclxuXHRcdGN0eC5kcmF3SW1hZ2UoUmVzb3VyY2VzLmdldCh0aGlzLnNwcml0ZSksIHRoaXMueCwgdGhpcy55KTtcclxuXHR9XHJcblxyXG5cdC8vIFRvIG1vdmUgdGhlIHBsYXllclxyXG5cdGhhbmRsZUlucHV0KGtleSkge1xyXG5cdFx0Ly8gRWFjaCBibG9jayBvbiB0aGUgY2FudmFzIGlzIGxheWVkIGFzIDEwMXB4KjgzcHhcclxuXHRcdC8vIHNvIGNoYXJhY3RlciBtdXN0IG1vdmUgdGhlIHNhbWUgcGl4ZWxzXHJcblx0XHQvLyB0byBrZWVwIGhpbS9oZXIgY2VudGVyZWQgb24gdGhlIGJsb2NrXHJcblx0XHRzd2l0Y2ggKGtleSkge1xyXG5cdFx0Y2FzZSAnbGVmdCc6XHJcblx0XHRcdCh0aGlzLnggIT09IC0yKSA/IHRoaXMueCAtPSB0aWxlV2lkdGggOiAxO1xyXG5cdFx0XHRicmVhaztcclxuXHJcblx0XHRjYXNlICd1cCc6XHJcblx0XHRcdCh0aGlzLnkgIT09IC00MCkgPyB0aGlzLnkgLT0gdGlsZUhlaWdodCA6IDE7XHJcblx0XHRcdGJyZWFrO1xyXG5cclxuXHRcdGNhc2UgJ2Rvd24nOlxyXG5cdFx0XHQodGhpcy55ICE9PSAzNzUpID8gdGhpcy55ICs9IHRpbGVIZWlnaHQgOiAxO1xyXG5cdFx0XHRicmVhaztcclxuXHJcblx0XHRjYXNlICdyaWdodCc6XHJcblx0XHRcdCh0aGlzLnggIT09IDQwMikgPyB0aGlzLnggKz0gdGlsZVdpZHRoIDogMTtcclxuXHRcdFx0YnJlYWs7XHJcblx0XHR9XHJcblx0fVxyXG59XHJcblxyXG5cclxuLy8gRW5lbXkgYW5kIFBMYXllciBpbnN0YW5jZXNcclxubGV0IGFsbEVuZW1pZXMgPSBbbmV3IEVuZW15KDEuNSwgNjQpLCBuZXcgRW5lbXkoMywgNjQsIC01NTApLCBuZXcgRW5lbXkoNiwgNjQsIC0xMDAwKSxcclxuXHRuZXcgRW5lbXkoMiwgMTQ3KSwgbmV3IEVuZW15KDEuMiwgMTQ3LCAtMjAwKSwgbmV3IEVuZW15KDMsIDE0NywgLTgwMCksXHJcblx0bmV3IEVuZW15KDEsIDIzMCksIG5ldyBFbmVteSgyLjIsIDIzMCwgLTQ1MCldO1xyXG5sZXQgcGxheWVyID0gbmV3IFBsYXllcigpO1xyXG5cclxuLy8gRGltZW5zaW9ucyBmb3IgZXZlcnkgYmxvY2sgb24gdGhlIGNhbnZhc1xyXG5jb25zdCB0aWxlV2lkdGggPSAxMDEsXHJcblx0dGlsZUhlaWdodCA9IDgzO1xyXG5cclxuLy8gS2V5cHJlc3MgSGFuZGxlclxyXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIGZ1bmN0aW9uKGUpIHtcclxuXHJcblx0dmFyIGFsbG93ZWRLZXlzID0ge1xyXG5cdFx0Mzc6ICdsZWZ0JyxcclxuXHRcdDM4OiAndXAnLFxyXG5cdFx0Mzk6ICdyaWdodCcsXHJcblx0XHQ0MDogJ2Rvd24nXHJcblx0fTtcclxuXHJcblx0cGxheWVyLmhhbmRsZUlucHV0KGFsbG93ZWRLZXlzW2Uua2V5Q29kZV0pO1xyXG59KTtcclxuXHJcbi8vIE9uIHNjcmVlbiBrZXkgcHJlc3MgaGFuZGxlclxyXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYXJyb3cta2V5cycpXHJcblx0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xyXG5cdFx0Y29uc3Qga2V5ID0gZS50YXJnZXQuZGF0YXNldC5kaXJlY3Rpb247XHJcblx0XHRcclxuXHRcdHBsYXllci5oYW5kbGVJbnB1dChrZXkpO1xyXG5cdH0pO1xyXG5cclxuLy8gRnVuY3Rpb25zXHJcblxyXG5mdW5jdGlvbiBjaGVja0NvbGxpc2lvbihlbmVteSl7XHJcblx0Ly8gQnkgbWFwcGluZyBhIHJlY3RhbmdsZSBmb3IgdGhlIGVuZW15IGZyb20gW3ggdG8gZW5kWF0gYW5kIFt5IHRvIGVuZFldXHJcblx0Ly8gRm9yIHBsYXllciwgdGhlIGZlZXQncyBwb3NpdGlvbiBpcyB0YWtlbiBpbnRvIGNvbnNpZGVyYXRpb25cclxuXHRpZihwbGF5ZXIuZmVldFggPD0gZW5lbXkuZW5kWCAmJiBwbGF5ZXIuZmVldFggPj0gZW5lbXkueCkge1xyXG5cdFx0aWYocGxheWVyLmZlZXRZIDw9IGVuZW15LmVuZFkgJiYgcGxheWVyLmZlZXRZID49IGVuZW15LnkpIHtcclxuXHRcdFx0cmVzZXRQbGF5ZXIoKTtcclxuXHRcdFx0cmVkdWNlTGl2ZXMoKTtcclxuXHRcdH1cclxuXHR9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlc2V0UGxheWVyKCkge1xyXG5cdHBsYXllci54ID0gcGxheWVyLnN0YXJ0WDtcclxuXHRwbGF5ZXIueSA9IHBsYXllci5zdGFydFk7XHJcbn1cclxuXHJcbmxldCBsaXZlcyA9IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmZhLWhlYXJ0JykpO1xyXG5sZXQgaSA9IGxpdmVzLmxlbmd0aDtcclxuZnVuY3Rpb24gcmVkdWNlTGl2ZXMoKSB7XHJcblx0aS0tO1xyXG5cdGxpdmVzW2ldLmNsYXNzTGlzdC5yZW1vdmUoJ2ZhcycpO1xyXG5cdGxpdmVzW2ldLmNsYXNzTGlzdC5hZGQoJ2ZhcicpO1xyXG5cdGNoZWNrTG9zZSgpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjaGVja1dpbigpIHtcclxuXHRpZihwbGF5ZXIueSA9PSAtNDApIHtcclxuXHRcdGdhbWVXaW4oKTtcclxuXHR9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdhbWVXaW4oKSB7XHJcblx0cGxheWVyLndpbiA9IHRydWU7XHJcblx0bnVtID0gMDsgLy8gdG8gYWN0IG9uIGZpcnN0IG1vZGFsIGZyb20gYXJyYXlcclxuXHRzaG93TW9kYWwoKTtcclxufVxyXG5cclxuZnVuY3Rpb24gY2hlY2tMb3NlKCkge1xyXG5cdGlmKGkgPT0gMCkge1xyXG5cdFx0Z2FtZUxvc2UoKTtcclxuXHR9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdhbWVMb3NlKCkge1xyXG5cdHBsYXllci5sb3NlID0gdHJ1ZTtcclxuXHRudW0gPSAxOyAvLyB0byBhY3Qgb24gc2Vjb25kIG1vZGFsIGZyb20gYXJyYXlcclxuXHRzaG93TW9kYWwoKTtcclxufVxyXG5cclxuZnVuY3Rpb24gcmVzZXRMaXZlcygpIHtcclxuXHRmb3IoaSA9IDA7IGkgPCBsaXZlcy5sZW5ndGg7IGkrKykge1xyXG5cdFx0bGl2ZXNbaV0uY2xhc3NMaXN0LmFkZCgnZmFzJyk7XHJcblx0fVxyXG59XHJcblxyXG5mdW5jdGlvbiByZXNldEdhbWUoKSB7XHJcblx0cGxheWVyLndpbiA9IGZhbHNlO1xyXG5cdHBsYXllci5sb3NlID0gZmFsc2U7XHJcblx0cmVzZXRQbGF5ZXIoKTtcclxuXHRyZXNldExpdmVzKCk7XHJcblx0aGlkZU1vZGFsKCk7XHJcblx0RW5naW5lLnN0YXJ0KCk7XHJcbn1cclxuXHJcbmNvbnN0IG1vZGFsQmFjayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbC1iYWNrJyksXHJcblx0bW9kYWxCb2R5ID0gQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubW9kYWwtYm9keScpKSwgLy8gYm90aCBtb2RhbHMgYWRkZWQgdG8gYXJyYXlcclxuXHRjbG9zZUJ1dHRvbnMgPSBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jbG9zZScpKSxcclxuXHRyZXNldEJ1dHRvbnMgPSBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5yZXNldCcpKTtcclxubGV0IG51bTtcclxuLy8gJ251bScgd2lsbCBzdGF0ZSB3aGljaCBtb2RhbCBpcyBpbiBwZXJzcGVjdGl2ZSBmb3IgYW5pbWF0aW5nLCBzaG93TW9kYWwsIGhpZGVNb2RhbCwgYW5kIHRvZ2dsZUxpc3RlbmVyc1xyXG4vLyBpdCB3aWxsIGNvbnRyaWJ1dGUgdG8gZ29vZCBwZXJmb3JtYW5jZSBiZWNhdXNlIG9ubHkgdGhlIG1vZGFsIHdlIHdhbnQgd2lsbCBoYXZlIGNsYXNzZXMgYW5kIGxpc3RlbmVycyBhZGRlZC5cclxuXHJcbmZ1bmN0aW9uIHNob3dNb2RhbCgpIHtcclxuXHRtb2RhbEJhY2suY2xhc3NMaXN0LmFkZCgnc2hvdycpO1xyXG5cclxuXHQvLyBkaXNwbGF5IHdpbiBtb2RhbCBvciBsb3NlIG1vZGFsXHJcblx0bW9kYWxCb2R5W251bV0uY2xhc3NMaXN0LmFkZCgnc2hvdycpO1xyXG5cclxuXHQvLyBlbnRyeSBhbmltYXRpb24gZm9yIG1vZGFsIGluIHBlcnNwZWN0aXZlXHJcblx0KG51bSA9PSAwKSA/IG1vZGFsQm9keVtudW1dLmNsYXNzTGlzdC5hZGQoJ3RhZGEnKSA6IG1vZGFsQm9keVtudW1dLmNsYXNzTGlzdC5hZGQoJ3dvYmJsZScpO1xyXG5cclxuXHQvLyB0byBkaXNwbGF5IGxpdmVzIGRpcmVjdGx5IGZldGNoIGZyb20gc2NvcmUtcGFuZWxcclxuXHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGVudCcpLmlubmVySFRNTCA9XHJcblx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNjb3JlLXBhbmVsJykuaW5uZXJIVE1MO1xyXG5cclxuXHQvLyBhZGQgZXZlbnQgbGlzdGVuZXJzXHJcblx0dG9nZ2xlTGlzdGVuZXJzKCdvbicpO1xyXG5cclxuXHQvLyBmb2N1cyBvbiByZXNldCBidXR0b24gaW4gcmVzcGVjdGl2ZSBtb2RhbFxyXG5cdHJlc2V0QnV0dG9uc1tudW1dLmZvY3VzKCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGhpZGVNb2RhbCgpIHtcclxuXHRtb2RhbEJvZHlbbnVtXS5jbGFzc0xpc3QuYWRkKCdib3VuY2VPdXQnKTsgLy8gZXhpdCBhbmltYXRpb25cclxuXHJcblx0Ly8gdG8gYWxsb3cgdGltZSBmb3IgYW5pbWF0aW9uXHJcblx0c2V0VGltZW91dCgoKSA9PiB7XHJcblx0XHRtb2RhbEJvZHlbbnVtXS5jbGFzc0xpc3QucmVtb3ZlKCdzaG93JywgJ3RhZGEnLCAnd29iYmxlJywgJ2JvdW5jZU91dCcpO1xyXG5cdFx0bW9kYWxCYWNrLmNsYXNzTGlzdC5yZW1vdmUoJ3Nob3cnKTtcclxuXHR9LDc4MCk7XHJcblxyXG5cdC8vIHJlbW92ZSBldmVudCBsaXN0ZW5lcnNcclxuXHR0b2dnbGVMaXN0ZW5lcnMoJ29mZicpO1xyXG59XHJcblxyXG5mdW5jdGlvbiB0b2dnbGVMaXN0ZW5lcnMoc3cpIHtcclxuXHRzd2l0Y2ggKHN3KSB7XHJcblx0Y2FzZSAnb24nOlxyXG5cdFx0Y2xvc2VCdXR0b25zW251bV0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBoaWRlTW9kYWwpO1xyXG5cdFx0cmVzZXRCdXR0b25zW251bV0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCByZXNldEdhbWUpO1xyXG5cdFx0YnJlYWs7XHJcblxyXG5cdGNhc2UgJ29mZic6XHJcblx0XHRjbG9zZUJ1dHRvbnNbbnVtXS5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIGhpZGVNb2RhbCk7XHJcblx0XHRyZXNldEJ1dHRvbnNbbnVtXS5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIHJlc2V0R2FtZSk7XHJcblx0fVxyXG59Il19
