/*
 baguetteBox
 */
window.addEventListener('load', function() {
  baguetteBox.run('.gallery');
});

/*
  Gallery info array
*/
photos = [
  photo = {
    index: "01.jpg",
    title: "Hay Bales",
    caption: "I love hay bales. Took this snap on a drive through the countryside past some straw fields.",
  },
  photo = {
    index: "02.jpg",
    title: "Lake",
    caption: "The lake was so calm today. We had a great view of the snow on the mountains from here.",
  },
  photo = {
    index: "03.jpg",
    title: "Canyon",
    caption: "I hiked to the top of the mountain and got this picture of the canyon and trees below."
  },
  photo = {
    index: "04.jpg",
    title: "Iceberg",
    caption: "It was amazing to see an iceberg up close, it was so cold but didn’t snow today.",
  },
  photo = {
    index: "05.jpg",
    title: "Desert",
    caption: "The red cliffs were beautiful. It was really hot in the desert but we did a lot of walking through the canyons.",
  },
  photo = {
    index: "06.jpg",
    title: "Fall",
    caption: "Fall is coming, I love when the leaves on the trees start to change color.",
  },
  photo = {
    index: "07.jpg",
    title: "Plantation",
    caption: "I drove past this plantation yesterday, everything is so green!",
  },
  photo = {
    index: "08.jpg",
    title: "Dunes",
    caption: "My summer vacation to the Oregon Coast. I love the sandy dunes!",
  },
  photo = {
    index: "09.jpg",
    title: "Countryside Lane",
    caption: "We enjoyed a quiet stroll down this countryside lane.",
  },
  photo = {
    index: "10.jpg",
    title: "Sunset",
    caption: "Sunset at the coast! The sky turned a lovely shade of orange.",
  },
  photo = {
    index: "11.jpg",
    title: "Cave",
    caption: "I did a tour of a cave today and the view of the landscape below was breathtaking.",
  },
  photo = {
    index: "12.jpg",
    title: "Bluebells",
    caption: "I walked through this meadow of bluebells and got a good view of the snow on the mountain before the fog came in.",
  },
];

/*
  gallery loop
*/

main = document.querySelector('main');
html = '';
for(var i = 0; i < photos.length; i++){
  main.innerHTML = html;
  html += `<div class="photo-div">
  ${`<a href="photos/${photos[i].index}" data-caption="${photos[i].caption}">`}
  ${`<img class="photos" src="photos/${photos[i].index}" alt="${photos[i].title}"/>`}</a>
  </div>`;
  console.log(photos[i].index);
}
main.innerHTML = html;
html += `<div class="photo-div">
${`<a href="photos/${photos[photos.length - 1]}" data-caption="${photos[photos.length - 1].caption}">`}
${`<img class="photos" src="photos/${photos[photos.length - 1].index}" alt="${photos[photos.length - 1].title}"/>`}</a>
</div>`;


/*
  search photos
*/
const search = new Filter('search', 'data-caption');
