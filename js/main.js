const carouselContainer = document.querySelector( `.carousel-container` )
const point = document.querySelectorAll( `.point` )

point.forEach ( ( eachPoint , i ) => {
    point[ i ].addEventListener( `click`, (  ) => {
        let position = i
        let operation = position * -25

        console.log( operation )

        carouselContainer.style.transform = `translateX(${operation}%)`

        point.forEach( ( eachPoint , i ) => {
            point[ i ].classList.remove( `active` )
        } )
        point[ i ].classList.add( `active` )
    } )
})