import React from 'react';
import './Technology.css';

function Technology({ data }) {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center">
      <div className="col-11 col-xl-12 backgroundImageTool d-flex align-items-end mt-5 mb-2">
        <div className="toolTitle py-4 ps-3 col-12">Tools and Techonology</div>
      </div>
      <div className="d-flex flex-wrap justify-content-center my-2">
        <div className="col-3 col-sm-2 col-md-1 techAndTools mx-1 rounded-4">{data[0].name}</div>
        <div className="col-5 col-sm-4 col-md-5 techAndTools mx-1 rounded-4">{data[1].name}</div>
        <div className="col-3 techAndTools mx-1 rounded-4">{data[2].name}</div>
        <div className="col-5 col-sm-2 techAndTools mx-1 rounded-4">{data[3].name}</div>

        {/* row2 */}

        <div className="col-3 col-sm-3 techAndTools me-2 rounded-4">{data[4].name}</div>
        <div className="col-3 col-sm-2 col-md-1 techAndTools mx-1 rounded-4">{data[5].name}</div>
        <div className="col-6 col-md-7 techAndTools ms-2 rounded-4">{data[6].name}</div>

        {/* row 3 */}

        <div className="col-3 techAndTools rounded-4 ms-1">{data[7].name}</div>
        <div className="col-2 col-sm-3 techAndTools mx-1 rounded-4">{data[8].name}</div>
        <div className="col-2 col-sm-1 techAndTools mx-1 rounded-4">{data[9].name}</div>
        <div className="col-2 techAndTools mx-1 rounded-4">{data[10].name}</div>
        <div className="col-4 col-sm-2 techAndTools rounded-4">{data[11].name}</div>

        {/* row 4 */}

        <div className="col-3 col-sm-2  col-md-1 techAndTools rounded-4 ms-1">{data[12].name}</div>
        <div className="col-2 col-md-1 techAndTools mx-1 rounded-4">{data[13].name}</div>
        <div className="col-3 col-sm-2 col-md-3 techAndTools mx-1 rounded-4">{data[14].name}</div>
        <div className="col-3 col-sm-2 col-md-3 techAndTools mx-1 rounded-4">{data[15].name}</div>
        <div className="col-3 col-sm-4 col-md-3 techAndTools mx-1 rounded-4">{data[16].name}</div>

        {/* row 5 */}

        <div className="col-3 col-sm-2 techAndTools rounded-4 ms-1">{data[17].name}</div>
        <div className="col-4 col-sm-3 techAndTools rounded-4 ms-1">{data[18].name}</div>
        <div className="col-3 col-sm-2 techAndTools rounded-4 ms-1">{data[19].name}</div>
      </div>
      <div className="col-12 my-4 swiperLogo d-flex flex-wrap justify-content-center">
        {data.map((data, i) => (
          <div className=" col-5 col-lg-3 col-xl-2  text-center my-2 mx-2 d-flex flex-column" key={i}>
            <img src={data.image} alt="image" className="img-fluid rounded-4" />
            <span className="text-center namaLogo">{data.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Technology;
