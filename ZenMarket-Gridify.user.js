// ZenMarket-Gridify
// Rafaël De Jongh
// Copyright (c) 2022
//
// --------------------------------------------------
//
// ==UserScript==
// @name          ZenMarket-Gridify
// @version       1.1.2
// @author        Rafaël De Jongh
// @namespace     https://www.rafaeldejongh.com
// @homepageURL   https://github.com/RafaelDeJongh/ZenMarket-Gridify
// @downloadURL   https://github.com/RafaelDeJongh/ZenMarket-Gridify/raw/main/ZenMarket-Gridify.user.js
// @updateURL     https://github.com/RafaelDeJongh/ZenMarket-Gridify/raw/main/ZenMarket-Gridify.user.js?upd
// @require       https://code.jquery.com/jquery-3.1.1.min.js
// @match         *://zenmarket.jp/*
// @description   This style provides a grid layout for ZenMarket.jp faster overview.
// ==/UserScript==
//Global
jQuery(document).ready(function($){
$('<style type=\"text/css\">@media(prefers-color-scheme:light){html,img{filter:none}}@media(prefers-color-scheme:dark){html{filter:invert(.777) hue-rotate(170deg) contrast(1.5)}img,div[style*="background:"]{filter:invert(1) contrast(1.25) hue-rotate(190deg)}}</style>').appendTo("head");
	if(window.location.href.indexOf("yahoo.aspx?")>-1){
		//BrowsingGrid
		$('<style type=\"text/css\">.products{display:grid;flex-direction:column;flex-wrap:wrap;align-items:flex-start;justify-content:flex-start;align-content:flex-start}.col-md-2.img-wrap img{padding:0}.col-md-12.yahoo-search-result,.col-md-2.img-wrap,.col-md-3,.col-md-7{width:100%}.col-md-7 .translate{width:100%;height:60px;overflow:hidden;text-overflow:ellipsis;display:-webkit-box;-webkit-line-clamp:3;-webkit-box-orient:vertical;margin-bottom:1em}.auction-label{display:none}.addToWatchList{width:100%;display:block!important}#yahoo-search-results .img-wrap img{width:100%;height:30vh;object-fit:cover;max-height:100%}#yahoo-search-results .img-wrap img:hover{object-fit:scale-down}#yahoo-search-results div{text-align:center!important;padding:2px 0!important;width:100%!important}.auction-price{width:100%;display:inline-block}.container{width:100vw;padding:0 50px;}#yahoo-search-results{display:grid;grid-template-columns:repeat(5,1fr);grid-gap:15px}@media (max-width:1200px){#yahoo-search-results{grid-template-columns:repeat(4,1fr)}}@media (max-width:860px){#yahoo-search-results{grid-template-columns:repeat(2,1fr)}}@media (max-width:620px){#yahoo-search-results{grid-template-columns:1fr}}</style>').appendTo("head");
	}
});
