import React from "react";
function ProfileCard(props){
    const{ productId, productPic, productName, Brand, productDescription, Price } = props;
    function handleClick(){
        const message = `Product ${productId} is ${productName} of brand ${Brand} has price is added to the cart. Please proceed proceed to pay !!!`
        alert(message);
    };
    return(
<>
<div className="card">
<img src={productPic} alt={productName} />
<div className="card-body">
<h4 className="card-subtitle">{Brand}</h4>
<h3 className="card-title">{productDescription}</h3> 
<p className="card-text">{Price}</p>
<button onClick={handleClick}>Add to Cart</button>
</div>
</div>
</>
    );
    }
    export default ProfileCard;