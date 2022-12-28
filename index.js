
const cardObjectDefination = [
    {id:1, imagePath:/images/card-KingHearts.png},
    {id:2, imagePath:/images/card-JackClubs.png},
    {id:3, imagePath:/images/card-QueenDiamonds.png},
    {id:4, imagePath:/images/card-AceSpades.png}
]

const cardBackImgPath ='/images/card-back-blue.png' 

function createCard(cardItem){
    //create div element that make up card
    const cardElem =createElement('div')
    const cardInnerElem =createElement('div')
    const cardFrontElem =createElement('div')
    const cardBackElem =createElement('div')

    //create Front and back Element for card
    const cardFrontImg=createElement('img')
    const cardBackImg=createElement('img')

    //add class and id to a Card Element
    addClassToElement(cardElem , 'card')
    addIdToElement(cardElem , cardItem.id)

    //add class to inner card element
    addClassToElement(cardInnerElem ,'card-inner')

    //add class to front card element
    addClassToElement(cardForntElem ,'card-fornt')

    //add class to Back card element
    addClassToElement(cardBackElem ,'card-back')

    //add Src attribute and appropiate value to img Element Back of card
    addSrcToImgageElem(cardBackElem , cardBackImgPath)

    //add Src attribute and appropiate value to img Element front of card
    addSrcToImgageElem(cardBackElem , cardItem.imagePath)

    //asign class to back Image element to back of card
    addClassToElement(cardBackElem ,'card-img')

    //asign class to back Image element to fornt of card
    addClassToElement(cardForntElem ,'card-img')

    //add front image element as a child element to a front card elment
    addChildElement(cardFrontElem ,cardFrontImg)

    //add back image element as a child element to a back card elment
    addChildElement(cardBackElem ,cardBackImg)

    //add front image element as a child element to a front card elment
    addChildElement(cardInnerElem , cardFrontElem)

    //add back image element as a child element to a back card elment
    addChildElement(cardInnerElem , cardBackElem)

    //add inner element as a child element to  card elment
    addChildElement(cardElem , cardInnerElem)




}
function createElement(elemType){
    return document.createElement('elemType')
}
function addClassToElement(elem , className){
    elem.classList.add(className)
}
function addIdToElement( elem, Id)
{
    elem.id = id
}
function addSrcToImgElement(elem, src){
    imgElem.src =src
}
function addChildElement(parentElem , childElem)
{
    parentElem.appendChild(childElem)
}