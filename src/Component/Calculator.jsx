import { useState } from "react"


function Calculator() {

  const [val,setVal]=useState("")

  const Clear=()=>{
    try {
       setVal(val.slice(0,-1))
    } catch (error) {
      setVal("")
      
    }
  }
  const Add=()=>{
    try {
      setVal(eval(val))
      
    } catch (error) {
      setVal("error")
      
      
    }
  }
  const sub=()=>{
    try {
      setVal(eval(val))
    } catch (error) {
      
    }
  }
  const div=()=>{
    try {
      setVal(eval(val))
    } catch (error) {
      
    }
  }
  return (

    <>
   
       <div className="container my-2">
        <div className="row">
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
                <input type="number" className="form-control form-control-lg mb-4 text-center bg-light fs-4 text-secondary shadow" value={val} onChange={(e)=>setVal(val + e.target.value)} />
                <div className="row">
                  <div className="col-3">
                    <button className="btn btn-light text-secondary shadow p-4 fs-4" value="1" onClick={(e)=>setVal(val+e.target.value)}> 1</button>
                  </div>
                  <div className="col-3">
                    <button className="btn btn-light text-secondary shadow p-4 fs-4" value="2" onClick={(e)=>setVal(val+e.target.value)}> 2</button>
                  </div>
                  <div className="col-3">
                    <button className="btn btn-light text-secondary shadow p-4 fs-4" value="3" onClick={(e)=>setVal(val+e.target.value)}> 3</button>
                  </div>
                  <div className="col-3">
                    <button className="btn btn-light text-secondary shadow px-4 fs-4 py-4 " value="c" onClick={Clear}> c</button>
                  </div>

                </div>
                <div className="row mt-2">
                  <div className="col-3">
                    <button className="btn btn-light text-secondary shadow p-4 fs-4" value="4" onClick={(e)=>setVal(val+e.target.value)}> 4</button>
                  </div>
                  <div className="col-3">
                    <button className="btn btn-light text-secondary shadow p-4 fs-4" value="5" onClick={(e)=>setVal(val+e.target.value)}> 5</button>
                  </div>
                  <div className="col-3">
                    <button className="btn btn-light text-secondary shadow p-4 fs-4" value="6" onClick={(e)=>setVal(val+e.target.value)}> 6</button>
                  </div>
                  <div className="col-3">
                    <button className="btn btn-light text-secondary shadow p-3 fs-1 py-3" value="+" onClick={Add}>+</button>
                  </div>

                </div>
                <div className="row mt-2">
                  <div className="col-3">
                    <button className="btn btn-light text-secondary shadow p-4 fs-4" value="7" onClick={(e)=>setVal(val+e.target.value)}> 7</button>
                  </div>
                  <div className="col-3">
                    <button className="btn btn-light text-secondary shadow p-4 fs-4" value="8" onClick={(e)=>setVal(val+e.target.value)}> 8</button>
                  </div>
                  <div className="col-3">
                    <button className="btn btn-light text-secondary shadow p-4 fs-4" value="9" onClick={(e)=>setVal(val+e.target.value)}> 9</button>
                  </div>
                  <div className="col-3">
                    <button className="btn btn-light text-secondary shadow p-4 fs-4" value="-" onClick={sub}> -</button>
                  </div>

                </div>
                <div className="row mt-2">
                  <div className="col-3">
                    <button className="btn btn-light text-secondary shadow p-4 fs-4" value="." onClick={(e)=>setVal(val+e.target.value)}> .</button>
                  </div>
                  <div className="col-3">
                    <button className="btn btn-light text-secondary shadow p-4 fs-4" value="0" onClick={(e)=>setVal(val+e.target.value)}> 0</button>
                  </div>
                  <div className="col-3">
                    <button className="btn btn-light text-secondary shadow p-4 fs-4" value="=" onClick={(e)=>setVal(val+e.target.value)}> =</button>
                  </div>
                  <div className="col-3">
                    <button className="btn btn-light text-secondary shadow p-4 fs-4" value="/" onChange={div}> /</button>
                  </div>

                </div>



              </div>
            </div> 
          </div>
        </div>

      </div> 


    </>

  )
}

export default Calculator

