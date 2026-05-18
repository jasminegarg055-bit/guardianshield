import { useState } from "react"
import { useEditor, EditorContent } from "@tiptap/react"
import StarterKit from "@tiptap/starter-kit"

export default function AddBlog()
{

        const [formdata, setformdata]=useState({
            title_en: "",
            title_hi: "",
            description_en: "",
            description_hi: "",
            photo:"",
            author:"Admin",
            category:"",
            photopath:"",
            readtime:""
          
          })
    

        // 🔥 ENGLISH EDITOR
       const editorEn = useEditor({
        extensions: [StarterKit],
        content: "",
        onUpdate: ({ editor }) => {
            setformdata(prev => ({
                ...prev,
                description_en: editor.getHTML()
            }))
        }
    })

    // 🔥 HINDI EDITOR
    const editorHi = useEditor({
        extensions: [StarterKit],
        content: "",
        onUpdate: ({ editor }) => {
            setformdata(prev => ({
                ...prev,
                description_hi: editor.getHTML()
            }))
        }
    })
          
        const handleChange=(e)=>{
             const {name, value}=e.target
             setformdata({
                ...formdata,
                [name]:value
             })
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
    
                const response=await fetch("http://localhost:5000/api/insertblog",{
                    headers:{'Content-Type' : 'application/json'},
                    method:"POST",
                    body:JSON.stringify(formdata)
                })

                if(response.ok)
                    {
                        alert('Blog Added')
                        // window.location.reload()
                    }
                    else{
                        alert('Error')
                    }
                }
                    catch(error)
                    {
                        console.log(error)
                        alert("error")
                    }
                    
                 }
    return(
        <>
           <h1>Add Blog</h1>
           <div className="container px-5">
            <form onSubmit={handleSubmit}>

                <div className="mb-3">
                    <label>Category</label>
                      <input type="text" className="form-control" required name="category" value={formdata.category} onChange={handleChange} />
                </div>

                <div className="mb-3">
                    <label>Title</label>
                    <input className="form-control mb-2"
                        placeholder="Title (English)"
                        name="title_en"
                        value={formdata.title_en}
                        onChange={handleChange} />
                </div>
                <div className="mb-3">
                    <label>Title</label>
                    <input className="form-control mb-2"
                        placeholder="Title (Hindi)"
                        name="title_hi"
                        value={formdata.title_hi}
                        onChange={handleChange} />
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
                    <div style={{ border: "1px solid #ccc", padding: "10px" }}>
                        <EditorContent editor={editorEn} />
                    </div>
                </div>
                <div className="mb-3">
                <label className="mt-3">Description (Hindi)</label>
                    <div style={{ border: "1px solid #ccc", padding: "10px" }}>
                        <EditorContent editor={editorHi} />
                    </div>
                </div>

                <div className="mb-3">
                    <label>Photo</label>
                      <input type="file" className="form-control"  name="photo"  onChange={handlephoto} />
                </div>

                <div className="mb-3">
                    <button className="btn btn-success">Add</button>
                </div>    
    
            </form>
           </div>
        </>
    )
}