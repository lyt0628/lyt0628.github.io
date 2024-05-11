"use strict";


function nodeName(elem, name){
    return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();
}


exports.nodeName = nodeName;
