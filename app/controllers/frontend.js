/*
* @Author: ramadhansutejo
* @Date:   2016-10-05 11:19:48
* @Last Modified by:   ramadhansutejo
* @Last Modified time: 2016-10-05 12:16:36
*/

'use strict';

exports.index = function(req, res) 
{
	res.render('__frontend/index');
}

exports.test = function(req, res) 
{
	res.render('__frontend/test');
}