
const cardObjectDefinitions = [
    {id:1, imagePath:'/images/card-KingHearts.png'},
    {id:2, imagePath:'/images/card-JackClubs.png'},
    {id:3, imagePath:'/images/card-QueenDiamonds.png'},
    {id:4, imagePath:'/images/card-AceSpades.png'}
]

const cardBackImgPath ='/images/card-back-blue.png' 

const cardContainerElem=document.querySelector('.card-container')










createCards()


function createCards()
{
    cardObjectDefinitions.forEach((cardItem)=>{ 
        createCard(cardItem)
    })
}


function createCard(cardItem){
    //create div element that make up card
    const cardElem =createElement('div')
    const cardInnerElem =createElement('div')
    const cardFrontElem =createElement('div')
    const cardBackElem =createElement('div')

   
     //create Front and back iamge Element for card
    const cardFrontImg=createElement('img')
    const cardBackImg=createElement('img')

    //add class and id to a Card Element
    addClassToElement(cardElem, 'card')
    addIdToElement(cardElem, cardItem.id)

    //add class to inner card element
    addClassToElement(cardInnerElem, 'card-inner')

    //add class to front card element
    addClassToElement(cardFrontElem, 'card-front')

    //add class to Back card element
    addClassToElement(cardBackElem, 'card-back')

    //add Src attribute and appropiate value to img Element Back of card
    addSrcToImageElem(cardBackImg, cardBackImgPath)

    //add Src attribute and appropiate value to img Element front of card
    addSrcToImageElem(cardFrontImg, cardItem.imagePath)

    //asign class to back Image element to back of card
    addClassToElement(cardBackImg, 'card-img')

    //asign class to back Image element to fornt of card
    addClassToElement(cardFrontImg, 'card-img')

    //add front image element as a child element to a front card elment
     addChildElement(cardFrontElem, cardFrontImg)

    //add back image element as a child element to a back card elment
    addChildElement(cardBackElem, cardBackImg)

    //add front image element as a child element to a front card elment
    addChildElement(cardInnerElem, cardFrontElem)

    //add back image element as a child element to a back card elment
    addChildElement(cardInnerElem, cardBackElem)

    //add inner element as a child element to  card elment
    addChildElement(cardElem, cardInnerElem)

    //add card element to child element to appropriate grid cell
    addCardToGridCell(cardElem)

}
function createElement(elemType){
    return document.createElement(elemType)
}
function addClassToElement(elem , className){
    elem.classList.add(className)
}
function addIdToElement( elem, id)
{
    elem.id = id
}
function addSrcToImageElem(imgElem, src){
    imgElem.src =src
}
function addChildElement(parentElem , childElem)
{
    parentElem.appendChild(childElem)
}

function addCardToGridCell(card)
{
    const cardPositionClassName =mapCardIdToGridCell(card)

    const cardPosElem= document.querySelector(cardPositionClassName)
    
    addChildElement(cardPosElem , card)
}





function mapCardIdToGridCell(card)
{
   if (card.id == 1)
   {
    return '.card-pos-a'
   }
   else if(card.id == 2) 
   {
    return '.card-pos-b'
   }
   else if(card.id == 3) 
   {
    return '.card-pos-c'
   }
   else if(card.id  == 4) 
   {
    return '.card-pos-d'
   }
}