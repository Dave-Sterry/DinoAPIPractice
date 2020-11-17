export default class Dino {
  static getDino(paragraphs, words) {
    return new Promise(function(resolve, reject) {
      let request = new XMLHttpRequest();
      const url = `http://dinoipsum.herokuapp.com/api/?format=json&paragraphs=${paragraphs}&words=${words}`;
      
      request.onload = function() {
        if (this.status === 200) {
          resolve(request.response);
        }
        else {
          reject(request.response);
        }
      }
      request.open("GET", url, true);
      request.send(); 
    });
  }








}