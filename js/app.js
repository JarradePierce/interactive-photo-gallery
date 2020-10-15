/*
 baguetteBox
 */
baguetteBox.run('.gallery');


/*
  gallery loop
*/

photos = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'];

main = document.querySelector('main');
html = '';
for(var i = 0; i < photos.length + 1; i++){
  console.log(photos[i]);
  main.innerHTML = html;
  html += `<div class="photo-div">${`<img class="photos" src="photos/${photos[i]}.jpg" />`}</div>`;
  console.log(html);
}
