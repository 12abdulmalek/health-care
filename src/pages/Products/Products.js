import React from 'react';

const Products = () => {
    return (
        <div>
               <div className="row g-3 my-5">
                   <div className="col-12 col-sm-12 col-md-6">         
                     <h3> Products By Trade Name </h3> <hr />
                     <h3> Products By Generic Name</h3> <hr />
                     <h3>Products By Thereapeutic Class </h3> <hr />
                     <h3> Download All Product List</h3> <hr />
                   </div>
                   <div className="col-12 col-sm-12 col-md-6 text-start">
                       <h3 className="text-center">Products</h3>  
                       <p>We manufacture and market a wide range of branded generic medicines covering almost all therapeutic classes such as antibiotics, anti-ulcerents, Cardiovascular, NSAIDs, anti-diabetics, antipsychotic, antiviral, vitamins and minerals etc. offering different dosage forms like Solid Tablets, Capsules, Small volume Parenteral (SVPs), Dry powder for Suspensions, Cream and Ointments, Metered-dose Inhalers (MDIs), Ophthalmic products, and Prefilled Syringe for Biogenerics etc.</p>
                                                                               
                        <p> HPL is now producing more than 210 branded products of 120 generics.</p>                 
                   </div>
               </div>
        </div>
    );
};

export default Products;