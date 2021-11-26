import React from 'react';
import './Footer.css';
const Footer = () => {
    return (
     <div className="my-3 footer">
            <div className="row">
             <div className="col-12 col-sm-6 col-md-4 col-lg-3 text-start">
                <h2 className="my-3">About Us</h2>
                 <li><b>* </b> Company profile </li>
                 <li><b>* </b> Mission, vision, and values</li>
                 <li><b>* </b> Board of directors</li>
                 <li><b>* </b> Message from Chairperson</li>
                 <li><b>* </b> Message from Managing Director</li>
                 <li><b>* </b> Message from DMD & CEO </li>
                 <li><b>* </b> Quality policy</li>
                 <li><b>* </b> Corporate social responsibility</li>
                 <li><b>* </b> Technology provider </li>
                 <li><b>* </b> Accreditations</li>
             </div>
             <div className="col-12 col-sm-6 col-md-4 col-lg-3 text-start">
            <h2 className="my-3"> Facility </h2>
            <li><b>* </b> Solid unit</li>
            <li><b>* </b> Sterile unit</li>
           <li><b>* </b> Oncology unit</li>
           <li><b>* </b> Hormone unit</li>
           <li><b>* </b> Virtual tours</li>
           <li><b>* </b> Photo gallery</li>
               
             </div>
             <div className="col-12 col-sm-6 col-md-4 col-lg-3 text-start">
            <h2 className="my-3">Products </h2>
            <li><b>* </b> Products by trade name </li>
            <li><b>* </b> Products by generic name </li>
            <li><b>* </b> Products by thereapeutic class </li>
            <li><b>* </b> Download all product list </li>
             </div>
             <div className="col-12 col-sm-6 col-md-4 col-lg-3 text-start">
           <h2 className="my-3">  Contact</h2>        
             <li><b>* </b> Contact us</li>
             <li><b>* </b> Career</li>
             <li><b>* </b> News</li>
             <li><b>* </b> Adverse Events and Product Quality Complaints </li>

             </div>
        </div>
       <div className="my-3 copyright"> <h2>© 2021. Healthcare Pharmaceuticals Limited. All rights reserved.</h2></div>
     </div>
    );
};

export default Footer;