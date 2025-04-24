const fashionImages = [
    "images/fashion1.jpg",
    "images/fashion2.jpg",
    "images/fashion3.jpg",
    "images/fashion4.jpg",
    "images/fashion5.jpg",
    // Add more image paths
  ];
  
  const grid = document.querySelector('.fashion-grid');
  
  fashionImages.forEach(image => {
    const item = document.createElement('div');
    item.classList.add('fashion-item');
    item.innerHTML = `<img src="${image}" alt="Fashion" />`;
    grid.appendChild(item);
  });
  