document.getElementById('spoon-set').addEventListener('click',function(){
    const SpoonPrice = getProductPriceByID('spoon-price')
   
})
document.getElementById('Accessories-set').addEventListener('click',function(){
    const AccessoriesPrice = getProductPriceByID('Accessories-price')
    
})
document.getElementById('homeCooker').addEventListener('click',function(){
    const HomeCookerPrice = getProductPriceByID('homeCooker-price');
})
document.getElementById('CapsSet').addEventListener('click',function(){
    const AccessoriesPrice = getProductPriceByID('cap-price')
})
document.getElementById('trouser-set').addEventListener('click',function(){
    const HomeCookerPrice = getProductPriceByID('trouser-price');
})
document.getElementById('Boot-set').addEventListener('click',function(){
    const AccessoriesPrice = getProductPriceByID('boot-price')
})


function getProductPriceByID(productID){
    const getProductID = document.getElementById(productID);
    const productPriceString = getProductID.innerText
    const productPrice = parseFloat(productPriceString)
    return productPrice
}
let total = 0
function handleClick(target){
   const totalproductName= document.getElementById('totalProductName')
    const ProductName = target.parentNode.childNodes[3].childNodes[1].innerText

    const totalproductPrice = document.getElementById('TotalPrice')
    const ProductPrice = target.parentNode.childNodes[3].childNodes[3].childNodes[1].innerText

    const li = document.createElement('li')
    const li2 =document.createElement('li')

    li.innerText = ProductName
    li2.innerText = ProductPrice
    console.log(ProductName);
    console.log(ProductPrice);
    totalproductName.appendChild(li)
    totalproductPrice.appendChild(li2)
    total = parseFloat(total) + parseFloat(ProductPrice)
    console.log(total);
    document.getElementById('TotalPrice').innerText = total

    if(total>0){
        const enablePurchaseBtn = document.getElementById('purchase-btn').disabled = false
        
        if(total>=200){
            const enableApplyBtn = document.getElementById('apply-btn').disabled =false
            document.getElementById('apply-btn').addEventListener('click',function(){
                const string1 = 'SELL200' 
                const inputStringValue= document.getElementById('inputString')
                const inputString = inputStringValue.value
                if(string1===inputString){
                    const discountPrice = (total*20)/100
                    console.log(discountPrice);
                    const finalDiscountPrince = document.getElementById('discount-price').innerText = discountPrice
                    const finalPrice = total - discountPrice //final price with discount
                    console.log("Final Total: ",finalPrice)
                    const grandTotalWithDiscount = finalPrice;
                    document.getElementById('grand-Total').innerText = grandTotalWithDiscount;
                }
                else{
                    alert("Wrong Coupon")
                }
                
            })
        }
    }
   
}

 