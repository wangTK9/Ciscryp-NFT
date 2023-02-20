// change text

var changeTitle = document.querySelector('#change__title')
var creatorBtn = document.querySelector('#click__creator')
var buyerBtn = document.querySelector('#click__buyer')



let creators = " Creators";
let buyers = "Buyers";

function changeTwoWord () {
   changeTitle.innerHTML =creators;
}

function changeTwoWords () {
   changeTitle.innerHTML = buyers;
}

// oder
var changeSort = document.querySelector('#changeSort')

let sort = "Sort oder";
let today = "Today";
let last_7 = "Last 7 days"
let last_30 = "Last 30 days"

function changeSorts1 () {
    changeSort.innerHTML = sort
}

function changeSorts2 () {
    changeSort.innerHTML = today
}

function changeSorts3 () {
    changeSort.innerHTML = last_7
}

function changeSorts4 () {
    changeSort.innerHTML = last_30
}

// change text 

var changeCollection = document.querySelector('#change__collection')
let hours_24 = "Last 24 hours";
let days_7 = "Last 7 days";
let days_30 = "Last 30 days"

function changeCollection1 () {
    changeCollection.innerHTML = hours_24;
}
function changeCollection2 () {
    changeCollection.innerHTML = days_7;
}
function changeCollection3 () {
    changeCollection.innerHTML = days_30;
}