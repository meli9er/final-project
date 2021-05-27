// console.log(10)

// when curser enters "Get Notified" area, image changes

    let gnbox = document.getElementById("notified")
    let vibox = document.getElementById("info")
    let spbox = document.getElementById("photos")
    let embox = document.getElementById("fromhome")

/////////// Get Notified

    gnbox.addEventListener('mouseover', function(){
        let featureimage = document.getElementById("homescreen")
        // console.log(featureimage)
        featureimage.src = "images/MapPagewNotification.jpg"
    })

// when curser leaves area, image returns to original

    gnbox.addEventListener('mouseout', function(){
        let featureimage = document.getElementById("homescreen")
        featureimage.src = "images/HomeScreen.jpg"
    })

///////// View Info

vibox.addEventListener('mouseover', function(){
    let featureimage = document.getElementById("homescreen")
    // console.log(featureimage)
    featureimage.src = "images/MarkerInfo.jpg"
})

// when curser leaves area, image returns to original

vibox.addEventListener('mouseout', function(){
    let featureimage = document.getElementById("homescreen")
    featureimage.src = "images/HomeScreen.jpg"
})


/////////////////// SEe Photos

spbox.addEventListener('mouseover', function(){
    let featureimage = document.getElementById("homescreen")
    featureimage.src = "images/MarkerImages.jpg"
})

// when curser leaves area, image returns to original

spbox.addEventListener('mouseout', function(){
    let featureimage = document.getElementById("homescreen")
    featureimage.src = "images/HomeScreen.jpg"
})


///////////// Explore Markers

embox.addEventListener('mouseover', function(){
    let featureimage = document.getElementById("homescreen")
    featureimage.src = "images/InDepthMarkerInfo.jpg"
})

// when curser leaves area, image returns to original

embox.addEventListener('mouseout', function(){
    let featureimage = document.getElementById("homescreen")
    featureimage.src = "images/HomeScreen.jpg"
})





    // get area by ID

    // identify what image needs to change

    // get image that needs to change

    // set image to new image



// // hover over area to change a photo
// var image = document.getElementById("notified");
// console.log(image)

// notified.addEventListener('mouseover', function(){
//     image.src = "/images/MapPagewNotification.jpg"
// })










///////example from stackoverflow
// var image = document.getElementById("image");

// //Now, we need to add an Event Listener to listen when the image gets mouse over.

// image.addEventListener('mouseover', function(){
//   image.src = "path/to/newimage"
// })
// image.addEventListener('mouseout', function(){
//     image.src = "path/to/otherimage"
//   })