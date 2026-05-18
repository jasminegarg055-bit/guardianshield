import { useEffect, useState } from "react"
import $ from "jquery"
import "datatables.net-bs5"
import "datatables.net-bs5/css/dataTables.bootstrap5.min.css"

export default function ViewUserLogin()
{
    const [items, setitems]=useState([])
    useEffect(()=>{
        fetch("http://localhost:5000/api/users")
        .then(response=>response.json())
        .then(data=>setitems(data.users))
        .catch(err=>console.log(err))
    },[])


    useEffect(()=>{
        if(items.length>0)
        {
            $('#viewusersTable').DataTable({
                destroy:true,
                pageLength:7,
                responsive:true
            })
        }
    },[items])

    return(
        <>
           <h1>View Users</h1>
           <div className="col">
            <table id="viewusersTable" className="table table-bordered">
                <thead>
                    <tr>
                        <th>SrNo.</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Date</th>
                    </tr>
                </thead>
                <tbody>
                    {items.map((item, index)=>
                    <tr>
                        <td>{index+1}</td>
                        <td>{item.username}</td>
                        <td>{item.email}</td>
                        <td>{new Date(item.createdAt).toLocaleString("en-IN")}</td>
                    </tr>
                    )}
                </tbody>

            </table>
           </div>
        </>
    )
}