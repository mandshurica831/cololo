const fs = require("fs");
const Q = require('q');
const path = require('path');
const colors = require('colors');

const pwd = process.cwd();

const reqAll = {
  s: function(directory, callback){
   this.Recur(directory, [ ]).
     then(function(files) { callback(null, files); }).
     fail(function(error) { callback(error, null); }).
     done();

    return directory;
  },
  Recur: function(directory, files) {
    var deferred = Q.defer();

   files = files || [ ];
   fs.lstat(directory, function(error, stat) {
     if (error) {
       deferred.reject(error);
       return;
     }
     if (stat.isFile()) {
       this.readFile(directory, files).
         then(deferred.resolve.bind(deferred)).
         done();
     } else if (stat.isDirectory()) {
       this.readDir(directory, files).
         then(deferred.resolve.bind(deferred)).
         done();
     } else {
       deferred.reject(new Error());
     }
   }.bind(this));
   return deferred.promise;
 },
 readFile: function(filename, files) {
   var deferred = Q.defer();

   files.push(filename);
   deferred.resolve(files);

   return deferred.promise;
 },
 readDir: function(directory, files) {
   var deferred = Q.defer();

   fs.readdir(directory, function(error, filenames) {
     var promises = [ ];
     if (error) {
       deferred.reject(error);
       return;
     }
     filenames.
       map(function(filename) { return path.join(directory, filename); }).
       forEach(function(filename) {
         promises.push(this.Recur(filename, files));
       }.bind(this));
     Q.all(promises).
       then(function(files) { deferred.resolve(files[0]); }).
       fail(deferred.reject.bind(deferred)).
       done();
   }.bind(this));
   return deferred.promise;
 }
}

module.exports = reqAll;
