import React , { useState }from 'react'

const Cal = () => {
  // const [num1,setNum1]=useState("")
   const [num1,setNum1]=useState({data:""})
   const [num2,setNum2]=useState("")
   const Add=()=>{
    const sum=num1+num2
    setNum1(sum)
   }

  return (
    <>
      <div className='container'>
        <div className='row'>
          <div className="col-12">
            <h1 className="display-5 fw-bolder text-center text-secondary">CALCULATOR </h1>
            <hr />

          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-md-4">
            {/* card */}
            <div className="card mb-3 pt-3 shadow  " >

              <div className="card-body">
                <input type="number" className="form-control form-control-lg mb-4 text-center bg-light fs-4 text-secondary shadow"  value={num1} onClick={(e)=>setNum1({num1, data:e.target.value})} />
                <input type="number" className="form-control form-control-lg mb-4 text-center bg-light fs-4 text-secondary shadow"   value={num2} onChange={(e)=>setNum2(e.target.value)}  />
                <div className="row">
                  <div className="col-3">
                    <button className="btn btn-light text-secondary shadow p-4 fs-4" onChange={Add}>+</button>
                  </div>
                  <div className="col-3">
                    <button className="btn btn-light text-secondary shadow p-4 fs-4"> -</button>
                  </div>
                  <div className="col-3">
                    <button className="btn btn-light text-secondary shadow p-4 fs-4" > x</button>
                  </div>
                  <div className="col-3">
                    <button className="btn btn-light text-secondary shadow px-4 fs-4 py-4 " > /</button>
                  </div>

                </div>
                <input type="number" className="form-control form-control-lg mb-4 text-center fs-4 text-secondary shadow my-4"  value={Add} />
              </div>
              </div>
            </div>
          </div>
        </div>
      </>
      )
}

      export default Cal
