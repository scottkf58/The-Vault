'use strict';
 module.exports = function () {
  var vault = {};

  function setValue (key, value) {
    vault.key = key;
    vault.value = value;
  }

  function getValue (key) {
    if(vault.key){
      return vault.value;
    }else{
      return null;
    }
  }
  return {
    setValue:setValue,
    getValue:getValue,
  };

};

