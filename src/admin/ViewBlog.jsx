import { useEffect, useState } from "react"
import $ from "jquery"
import "datatables.net-bs5"
import "datatables.net-bs5/css/dataTables.bootstrap5.min.css"
import { useEditor, EditorContent } from "@tiptap/react"
import StarterKit from "@tiptap/starter-kit"
// import * as bootstrap from "bootstrap"

export default function ViewBlog(){
    const [items, setitems]=useState([])
         useEffect(()=>{
        fetch("http://localhost:5000/api/getblog")
        .then(response=>response.json())
        .then(data=>setitems(data))
        .catch(err=>console.log(err))
    },[])


    useEffect(() => {
        
    
        if (items.length > 0) {
            $('#blogTable').DataTable({
                destroy:true,
                pageLength: 7,
                responsive: true
            })
        }
    }, [items])

    const handleDelete=async(blogid)=>{
        console.log(blogid)
        if(!window.confirm("Are you sure to delete?"))
            return
        try
        {
            const response=await fetch("http://localhost:5000/api/deleteblog/"+blogid,{
                method:"delete"
            })

            if(response.ok)
            {
                alert("Blog is Deleted")
                // setitems(items.filter(item => item._id !== blogid))
                window.location.reload()
                
            }
            else
            {
                alert('Error in deletion')
            }
        }

        catch(err)
        {
            alert("error")
            console.log(err)
        }
    }

// update
const [formdata, setformdata]=useState({
    title_en:"",
    title_hi:"",
    description_en:"",
    description_hi:"",
    photo:"",
    author:"admin",
    category:"",
    photopath:"",
    readtime:"",
    poston:""
  })

  const [editid, seteditId]=useState("")
 

  const handleChange=(e)=>{
    const {name, value}=e.target
    setformdata({
       ...formdata,
       [name]:value
    })
 }

  const openModal=(item)=>
  {
    setformdata({
        title_en: item.title_en,
        title_hi: item.title_hi,
        description_en: item.description_en,
        description_hi: item.description_hi,
        photo:item.photo,
        author:item.author,
        category:item.category,
        photopath:item.photopath,
        readtime:item.readtime,
        poston:item.poston,
    })
    seteditId(item._id)

    if(editorEn){
        editorEn.commands.setContent(item.description_en || "")
    }

    if(editorHi){
        editorHi.commands.setContent(item.description_hi || "")
    }

    // const modal= new bootstrap.Modal(document.getElementById("editModal"))
    // modal.show()
  }

  const handlephoto=async (e)=>{
    const file=e.target.files[0]
    console.log(file['name'])
    const data=new FormData()
    data.append("file", file)
    data.append("upload_preset" , "The Guardian Shield")
    data.append("cloud_name", "dtmqrye9g")

    try
    {
        const response= await fetch('https://api.cloudinary.com/v1_1/dtmqrye9g/image/upload' ,{
            method:"post",
            body:data
        })

        const result= await response.json()
        setformdata({
            ...formdata,
            photo:file['name'],
            photopath:result.url
        })  

    }
    catch(err)
    {
        alert(err)
        console.log(err)
    }

    }

      const handleSubmit=async (e)=>
      {
         e.preventDefault()
         console.log(formdata)
        
         try{

            const response=await fetch("http://localhost:5000/api/updateblog/"+editid,{
                headers:{'Content-Type' : 'application/json'},
                method:"PUT",
                body:JSON.stringify(formdata)
            })

            if(response.ok)
                {
                    alert('Blog Updated')
                    setitems(items.map(item=>
                        item._id === editid ? {...item, ...formdata} : item
                    ))

                    const modalEl = document.getElementById("editModal")
                    if (window.bootstrap && modalEl)
                         {
                            const modal = window.bootstrap.Modal.getInstance(modalEl)
                            if (modal)
                             {
                                modal.hide()
                             }
                        }
                }
                   else
                   {
                         alert('Error')
                   }
                }
                catch(error)
                {
                    console.log(error)
                    alert("error")
                }
                
             }

// translate
const [lang, setLang] = useState("en")

const editorEn = useEditor({
    extensions:[StarterKit],
    content:"",
    onUpdate:({editor})=>{
        setformdata(prev=>({
            ...prev,
            description_en: editor.getHTML()
        }))
    }
})

const editorHi = useEditor({
    extensions:[StarterKit],
    content:"",
    onUpdate:({editor})=>{
        setformdata(prev=>({
            ...prev,
            description_hi: editor.getHTML()
        }))
    }
})

    return(
        <>
           <h1>ViewBlog</h1>
           <div className="col">
              {/*  LANGUAGE BUTTONS */}
              <div style={{ marginBottom: "10px" }}>
                <button className="btn btn-primary me-2" onClick={() => setLang("en")}>English</button>
                <button className="btn btn-secondary" onClick={() => setLang("hi")}>Hindi</button>
            </div>
            <table  id="blogTable" className="table table-bordered">
                <thead>
                    <tr >
                        <th>Srno</th>
                        <th>Category</th>
                        <th>ReadTime</th>
                        <th>Title</th>
                        <th>Date</th>
                        <th>Author</th>
                        <th>Description</th> 
                        <th>Photo</th> 
                        <th>Action</th>    
                    </tr>
                </thead>
                <tbody>
                    {items.map((item, index)=>
                    <tr>
                        <td>{index+1}</td>
                        <td>{item.category}</td>
                        <td>{item.readtime}</td>
                        <td>{lang === "en" ? item.title_en : item.title_hi}</td>
                        <td> {new Date(item.poston).toLocaleString("en-IN")} </td>
                        <td> {item.author}</td>
                        <td>
                            {
                                (lang === "en"? item.description_en: item.description_hi
                                )
                                    ?.replace(/<[^>]+>/g, '').substring(0, 100)
                            }...
                        </td>
                        <td><img src={item.photopath} height={100} width={100} /></td>
                      
                       <td> 
                         <button className="btn btn-danger" onClick={()=>handleDelete(item._id)}><i class="bi bi-trash"></i></button>
                         <button className="btn btn-warning" data-bs-toggle="modal"
  data-bs-target="#editModal" onClick={()=>openModal(item)}><i class="bi bi-pencil-square"></i></button>
                       </td>


                    </tr>
                    )}
                </tbody>

            </table>

            {/* modal */}
          
           <div class="modal fade" id="editModal" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="staticBackdropLabel">Edit Blog</h5>
                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                <form onSubmit={handleSubmit}>

                    <div className="mb-3">
                        <label>Category</label>
                        <input type="text" className="form-control" required name="category" value={formdata.category} onChange={handleChange} />
                    </div>

                    <div className="mb-3">
                        <label>Title</label>
                        <input name="title_en" value={formdata.title_en} onChange={handleChange} placeholder="English Title" />
                        <input name="title_hi" value={formdata.title_hi} onChange={handleChange} placeholder="Hindi Title" />
                    </div>

                    <div className="mb-3">
                        <label>ReadTime</label>
                        <input type="text" className="form-control" required name="readtime" value={formdata.readtime} onChange={handleChange} />
                    </div>

                    <div className="mb-3">
                        <label>Author</label>
                        <input type="text" className="form-control"  required name="author" value={formdata.author} onChange={handleChange} />
                    </div>

                    <div className="mb-3">
                        <label>Description (English)</label>
                        <div style={{border:"1px solid #ccc", padding:"10px"}}>
                            <EditorContent editor={editorEn} />
                        </div>
                    </div>

                    <div className="mb-3">
                        <label>Description (Hindi)</label>
                        <div style={{border:"1px solid #ccc", padding:"10px"}}>
                            <EditorContent editor={editorHi} />
                        </div>
                    </div>

                    <div className="mb-3">
                        <label>Photo</label>
                        <input type="file" className="form-control"  name="photo"  onChange={handlephoto} />
                    </div>

                    <div className="mb-3">
                        <button className="btn btn-success">Update</button>
                    </div>    

                 </form>
                </div>
                <div class="modal-footer">
                  <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                </div>
              </div>
            </div>
           </div>
 
           {/* modal end */}
           
           
           </div>
        </>
    )
}