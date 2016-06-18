/**
 * Created by Stefan Wimmer <stefanwimmer128@gmail.com> on 17.06.16.
 */

let $ = {};

$.version = require("./package.json").version;

$ = require("./lib/exception")($);
$ = require("./lib/group")($);

module.exports = $;
