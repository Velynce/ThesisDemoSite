// JavaScript Document

(function() {
	"use strict";
	var introButton = document.getElementById("introButton");
	var aboutButton = document.getElementById("aboutButton");
	var techButton = document.getElementById("techButton");
	var workButton = document.getElementById("workButton");
	var preveiwButton = document.getElementById("previewButton");
	var devButton = document.getElementById("devButton");

	introButton.addEventListener("click", introScroll, false);

	function introScroll(event) {
		event.preventDefault();
		TweenMax.to(window, 1, {scrollTo:{y:"#intro", offsetY:70}});
	}

	aboutButton.addEventListener("click", aboutScroll, false);

	function aboutScroll() {
		TweenMax.to(window, 1, {scrollTo:{y:"#about", offsetY:70}});
	}

	techButton.addEventListener("click", techScroll, false);

	function techScroll() {
		TweenMax.to(window, 1, {scrollTo:{y:"#tech", offsetY:70}});
	}

	workButton.addEventListener("click", workScroll, false);

	function workScroll() {
		TweenMax.to(window, 1, {scrollTo:{y:"#work", offsetY:70}});
	}

	preveiwButton.addEventListener("click", prevScroll, false);

	function prevScroll() {
		TweenMax.to(window, 1, {scrollTo:{y:"#preview", offsetY:70}});
	}

	devButton.addEventListener("click", devScroll, false);

	function devScroll() {
		TweenMax.to(window, 1, {scrollTo:{y:"#dev", offsetY:70}});
	}
	
	var logo = document.querySelector("#logo");

	TweenMax.from(logo, 1, {autoAlpha:0, delay: 2});

	var title = document.querySelectorAll(".titles");

	TweenMax.from(title, 1, {autoAlpha:0, delay:1});

	var nav = document.getElementById("navbar");
	
})();