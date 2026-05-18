import { useEffect, useState } from "react"
import $ from "jquery"
import "datatables.net-bs5"
import "datatables.net-bs5/css/dataTables.bootstrap5.min.css"

export default function SupportContact()
{
    const [items, setitems]=useState([])
    useEffect(()=>{
        fetch("http://localhost:5000/api/getsupport")
        .then(response=>response.json())
        .then(data=>setitems(data))
        .catch(err=>console.log(err))
    },[])


    useEffect(()=>{
        if(items.length>0)
        {
            
            $('#supportTable').DataTable({
                destroy:true,
                pageLength:7,
                responsive:true
            })
        }
    },[items])

    return(
        <>
           <h1>Contact Support Requests</h1>
           <div className="col">
            <table id="supportTable" className="table table-bordered">
                <thead>
                    <tr>
                        <th>SrNo.</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Description</th>
                        <th>IssueType</th>
                        <th>Date</th>
                    </tr>
                </thead>
                <tbody>
                    {items.map((item, index)=>
                    <tr>
                        <td>{index+1}</td>
                        <td>{item.name}</td>
                        <td>{item.email}</td>
                        <td>{item.phone}</td>
                        <td>{item.description}</td>
                        <td>{item.issuetype}</td>
                        <td>{new Date(item.createdAt).toLocaleString("en-IN")}</td>
                    </tr>
                    )}
                </tbody>

            </table>
           </div>
        </>
    )
}