import { useEffect, useState } from "react"
import $ from "jquery"
import "datatables.net-bs5"
import "datatables.net-bs5/css/dataTables.bootstrap5.min.css"

export default function VolunteerForm()
{
    const [items, setitems]=useState([])
    useEffect(()=>{
        fetch("http://localhost:5000/api/getvolunteer")
        .then(response=>response.json())
        .then(data=>setitems(data))
        .catch(err=>console.log(err))
    },[])


    useEffect(()=>{
        if(items.length>0)
        {
            $('#volunteerTable').DataTable({
                destroy:true,
                pageLength:7,
                responsive:true
            })
        }
    },[items])

    // View Full Details
    const [viewData, setViewData] = useState(null);

    const handleView = (item) =>
    {
        setSelectData(item);
    }

    return(
        <>
           <h1>View Volunteer List</h1>
           <div className="col">
            <table id="volunteerTable" className="table table-bordered">
                <thead>
                    <tr>
                        <th>Sr No.</th>
                        <th>FIRSTNAME</th>
                        <th>LASTNAME</th>
                        <th>ADDRESS</th>
                        <th>EMAIL</th>
                        <th>PHONE</th>
                        <th>DATE</th>
                        <th>ACTION</th>
                    </tr>
                </thead>
                <tbody>
                    {items.map((item, index)=>
                    <tr>
                        <td>{index+1}</td>
                        <td>{item.firstname}</td>
                        <td>{item.secname}</td>
                        <td>{item.address}</td>  
                        <td>{item.email}</td>
                        <td>{item.phone}</td>  
                        <td>{new Date(item.createdAt).toLocaleString("en-IN")}</td>
                        <td>
                            <button onClick={()=> setViewData(item)}>View Detail</button>
                        </td>
                    </tr>
                    )}
                </tbody>

            </table>

            {viewData && (
                <div className="modal fade show" style={{display: "block", backgroundColor: "rgba(0,0,0,0.5)"}}>
                        
                   <div className="modal-dialog">
                      <div className="modal-content">

                            <div className="modal-header">
                            <h5 className="modal-title">View Details</h5>
                            <button className="btn-close" onClick={() => setViewData(null)}></button>
                            </div>

                 <div className="modal-body p-5">

                    <div className="row mb-2">
                        <div className="col-5"><b>Name:</b></div>
                        <div className="col-7">{viewData.firstname} {viewData.secname}</div>
                    </div>

                    <div className="row mb-2">
                        <div className="col-5"><b>Gender:</b></div>
                        <div className="col-7">{viewData.gender}</div>
                    </div>

                    <div className="row mb-2">
                        <div className="col-5"><b>DOB:</b></div>
                        <div className="col-7">{new Date(viewData.dob).toLocaleDateString("en-IN")}
                            ({new Date().getFullYear()-new Date(viewData.dob).getFullYear()} yrs)
                        </div>
                    </div>

                    <div className="row mb-2">
                        <div className="col-5"><b>Address:</b></div>
                        <div className="col-7">{viewData.address}</div>
                    </div>

                    <div className="row mb-2">
                        <div className="col-5"><b>Country:</b></div>
                        <div className="col-7">{viewData.country}</div>
                    </div>

                    <div className="row mb-2">
                        <div className="col-5"><b>State:</b></div>
                        <div className="col-7">{viewData.state}</div>
                    </div>

                    <div className="row mb-2">
                        <div className="col-5"><b>City:</b></div>
                        <div className="col-7">{viewData.city}</div>
                    </div>

                    <div className="row mb-2">
                        <div className="col-5"><b>ZipCode:</b></div>
                        <div className="col-7">{viewData.zip}</div>
                    </div>

                    <div className="row mb-2">
                        <div className="col-5"><b>Email:</b></div>
                        <div className="col-7">{viewData.email}</div>
                    </div>

                    <div className="row mb-2">
                        <div className="col-5"><b>Phone:</b></div>
                        <div className="col-7">{viewData.phone}</div>
                    </div>

                    <div className="row mb-2">
                        <div className="col-5"><b>Availiability:</b></div>
                        <div className="col-7">{viewData.availiability}</div>
                    </div>

                    <div className="row mb-2">
                        <div className="col-5"><b>Skills:</b></div>
                        <div className="col-7">{viewData.skills}</div>
                    </div>

                    <div className="row mb-2">
                        <div className="col-5"><b>Experience:</b></div>
                        <div className="col-7">{viewData.experience}</div>
                    </div>

                    </div>

        <div className="modal-footer">
          <button className="btn btn-secondary" onClick={() => setViewData(null)}>
            Close
          </button>
        </div>

      </div>
    </div>

  </div>
)}
           </div>
        </>
    )
}