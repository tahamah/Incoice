//get id
function getId (id){
    return document.getElementById(id);
};
// buyer-details-input
getId('detail-submit-btn').addEventListener('click',function(){
    const buyerDetailsInput = getId("buyer-details-input").value;
   getId('buyer-info').innerText=buyerDetailsInput;
   getId("buyer-details-input").value = '';
});


//creat element
function newTag (tagName){
    return document.createElement(tagName);
}




//handel add button
getId("add-details-btn").addEventListener('click', function(){
    //cteating tag
    const tr= newTag('tr');
    const th= newTag('th');
    const td1= newTag('td');
    const td2= newTag('td');
    const td3= newTag('td');
    //add atribute
    td3.setAttribute('class','item-total');
    
    //value seating 
    const itemName = getId('item-name-input').value;
    if(itemName == ""){
    return;
    }
    else{
        th.innerText = getId('item-name-input').value;
    } 
    const itemPrice =getId('item-price-input').value;
    if(itemPrice == "" || itemPrice < 0){
        return;
        }
        else{
            td1.innerText = itemPrice;
        } 

    const itemQuantity =getId('item-quantity-input').value;
    if(itemQuantity == "" || itemQuantity < 0){
        return;
        }
        else{
            td2.innerText = itemQuantity;
        } 

    td3.innerText= parseFloat(getId('item-price-input').value)* parseInt(getId('item-quantity-input').value);
    
    //append child
    tr.appendChild(th);
    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    getId('info-table').appendChild(tr);

    //subtotal
    getId('sub-total').innerText = subTotalCal();
    getId('tax').innerText = subTotalCal()*.1;
    getId('grand-total').innerText =subTotalCal()+ subTotalCal()*.1;
    getId('grand-total-2').innerText =subTotalCal()+ subTotalCal()*.1;


    //input value emtey
   getId('item-name-input').value='';
   getId('item-price-input').value='';
   getId('item-quantity-input').value='';
   
   
});



function subTotalCal(){
 const cost = document.getElementsByClassName('item-total');

 let subTotal=0;  
 for (let i = 0; i < cost.length; i++) {
     const element = cost[i];
     const price = parseInt(element.innerText);
     subTotal= subTotal+price;
 }
 return subTotal;
}
