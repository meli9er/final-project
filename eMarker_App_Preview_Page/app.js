// console.log(10)


let gnbox = document.getElementById("notified")
let vibox = document.getElementById("info")
let spbox = document.getElementById("photos")
let embox = document.getElementById("fromhome")

/////////// Get Notified Area

gnbox.addEventListener('mouseover', function(){
    let featureimage = document.getElementById("homescreen")
    // console.log(featureimage)
    featureimage.src = "images/MapPagewNotification.jpg"
})

gnbox.addEventListener('mouseout', function(){
    let featureimage = document.getElementById("homescreen")
    featureimage.src = "images/HomeScreen.jpg"
})

/////////// View Info Area

vibox.addEventListener('mouseover', function(){
    let featureimage = document.getElementById("homescreen")
    // console.log(featureimage)
    featureimage.src = "images/MarkerInfo.jpg"
})

vibox.addEventListener('mouseout', function(){
    let featureimage = document.getElementById("homescreen")
    featureimage.src = "images/HomeScreen.jpg"
})

/////////// See Photos Area

spbox.addEventListener('mouseover', function(){
    let featureimage = document.getElementById("homescreen")
    featureimage.src = "images/MarkerImages.jpg"
})

spbox.addEventListener('mouseout', function(){
    let featureimage = document.getElementById("homescreen")
    featureimage.src = "images/HomeScreen.jpg"
})

/////////// Explore Markers Area

embox.addEventListener('mouseover', function(){
    let featureimage = document.getElementById("homescreen")
    featureimage.src = "images/InDepthMarkerInfo.jpg"
})

embox.addEventListener('mouseout', function(){
    let featureimage = document.getElementById("homescreen")
    featureimage.src = "images/HomeScreen.jpg"
})
