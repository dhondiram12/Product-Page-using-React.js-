const Hero =() =>{
    return(

        <main className="hero container">
            
            <div className="hero-content">
                <h3>Latest collection of Sparx running shoes & Sparx sports shoes at great offers & discounts</h3>
                <p>"Ignite your journey with Sparx – where innovation meets performance."</p>
                <p>"Empower your every move with Sparx – where quality fuels ambition."</p> 

             <div className="hero-btn">
                <button>shop now</button>

                <button className="btn-2">shop More </button>
             </div>
             <div className="shop">
              <p>Available on</p>
              <div className="brand-icons">
              <img src="/images/amazon.png"   className="amazon"/>
              <img src="/images/flipcard.png"  className="flip"/>
              </div>
             </div>
            </div>
            <div className="hero-image">
                 
                  
                <img src="/images/product.png" alt="Product image" />
            </div>
        </main>
    );
}

export default Hero;

