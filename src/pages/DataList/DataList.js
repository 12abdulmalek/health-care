import React from 'react';

const DataList = () => {
    return (
        <div className="mt-4">
            <div className="row g-3">
                <div className="col col-12 col-sm-12 col-md-6 col-lg-6">
                    <img className="img-fluid" src="https://s3-prod.modernhealthcare.com/s3fs-public/styles/width_765/public/data-center-icons_database.png" alt="" />
                </div>
                <div className="col col-12 col-sm-12 col-md-6 col-lg-6">
                  <h2>DATABASE</h2>
                  <p>Search and download financials, executive compensation data and more.</p>
                </div>
                <div className="col col-12 col-sm-12 col-md-6 col-lg-6">
                  <img src="https://s3-prod.modernhealthcare.com/s3fs-public/styles/width_765/public/data-center-icons_rankings.png" alt="" />
                </div>
                <div className="col col-12 col-sm-12 col-md-6 col-lg-6">
                      <h2>RANKINGS</h2>
                      <p>Annual lists of the largest, most, best and worst among the nation’s healthcare organizations.</p>
                </div>
                <div className="col col-12 col-sm-12 col-md-6 col-lg-6">
                   <img src="https://s3-prod.modernhealthcare.com/s3fs-public/styles/width_765/public/data-center-icons_survey.png" alt="" />
                </div>
                <div className="col col-12 col-sm-12 col-md-6 col-lg-6">
               <h2>SURVEY</h2>
               <p>Learn the details of our annual surveys and how to participate for consideration in our rankings.</p>
                </div> 
               
            </div>
        </div>
    );
};

export default DataList;