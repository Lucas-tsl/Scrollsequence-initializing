const imagesData = [
  { src: 'image1.jpg', title: 'Titre Image 1', description: 'Description Image 1' },
  { src: 'image2.jpg', title: 'Titre Image 2', description: 'Description Image 2' },
  { src: 'image3.jpg', title: 'Titre Image 3', description: 'Description Image 3' },
  { src: 'image4.jpg', title: 'Titre Image 4', description: 'Description Image 4' },
  { src: 'image5.jpg', title: 'Titre Image 5', description: 'Description Image 5' },
  { src: 'image6.jpg', title: 'Titre Image 6', description: 'Description Image 6' },
  { src: 'image7.jpg', title: 'Titre Image 7', description: 'Description Image 7' },
  { src: 'image8.jpg', title: 'Titre Image 8', description: 'Description Image 8' },
  { src: 'image9.jpg', title: 'Titre Image 9', description: 'Description Image 9' },
  { src: 'image10.jpg', title: 'Titre Image 10', description: 'Description Image 10' },
  { src: 'image11.jpg', title: 'Titre Image 11', description: 'Description Image 11' },
  { src: 'image12.jpg', title: 'Titre Image 12', description: 'Description Image 12' },
  { src: 'image13.jpg', title: 'Titre Image 13', description: 'Description Image 13' },
  { src: 'image14.jpg', title: 'Titre Image 14', description: 'Description Image 14' },
  { src: 'image15.jpg', title: 'Titre Image 15', description: 'Description Image 15' },
  { src: 'image16.jpg', title: 'Titre Image 16', description: 'Description Image 16' },
  { src: 'image17.jpg', title: 'Titre Image 17', description: 'Description Image 17' },
  { src: 'image18.jpg', title: 'Titre Image 18', description: 'Description Image 18' },
  { src: 'image19.jpg', title: 'Titre Image 19', description: 'Description Image 19' },
  { src: 'image20.jpg', title: 'Titre Image 20', description: 'Description Image 20' },
  { src: 'image21.jpg', title: 'Titre Image 21', description: 'Description Image 21' },
  { src: 'image22.jpg', title: 'Titre Image 22', description: 'Description Image 22' },
  { src: 'image23.jpg', title: 'Titre Image 23', description: 'Description Image 23' },
  { src: 'image24.jpg', title: 'Titre Image 24', description: 'Description Image 24' },
  { src: 'image25.jpg', title: 'Titre Image 25', description: 'Description Image 25' },
  { src: 'image26.jpg', title: 'Titre Image 26', description: 'Description Image 26' }
];

window.addEventListener('scroll', () => {
  const totalImages = imagesData.length;
  const scrollFraction = window.scrollY / (document.body.scrollHeight - window.innerHeight);
  const frameIndex = Math.min(
    totalImages - 1,
    Math.floor(scrollFraction * totalImages)
  );

  const imageData = imagesData[frameIndex];
  document.getElementById('scrollImage').src = imageData.src;
  document.getElementById('imageTitle').textContent = imageData.title;
  document.getElementById('imageDescription').textContent = imageData.description;
});
