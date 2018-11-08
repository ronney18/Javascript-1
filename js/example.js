// ADD NEW ITEM TO END OF LIST
var el = document.getElementsByTagName('ul')[0];
var newItem1 = document.createElement('li');
var newText1 = document.createTextNode('kale');
newItem1.appendChild(newText1);
el.insertBefore(newItem1, el.firstChild);

// ADD NEW ITEM START OF LIST
var newItem2 = document.createElement('li');
var newText2 = document.createTextNode('cream');
newItem2.appendChild(newText2);
el.appendChild(newItem2);

// ADD A CLASS OF COOL TO ALL LIST ITEMS
var list = document.querySelectorAll('li');
var index;
for(index = 0; index < list.length; index++)
{
  list[index].className = 'cool';
}
// ADD NUMBER OF ITEMS IN THE LIST TO THE HEADING
var elHeader = document.querySelector('h2');
var textHeader = elHeader.firstChild.nodeValue;
var total = list.length;
var newHeader = textHeader + "<span>" + total + "</span>";
elHeader.innerHTML = newHeader;
