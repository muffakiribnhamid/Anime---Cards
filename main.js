let getImages = document.querySelectorAll('.images')


getImages.forEach(img => { 
    img.addEventListener('click',()=> {
        getImages.forEach(img => img.classList.remove('active'));
                
        // Add 'active' class to the clicked image
        img.classList.add('active');
    })
})