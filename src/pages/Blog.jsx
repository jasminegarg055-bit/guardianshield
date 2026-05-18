import { useState, useEffect } from "react"
import { Link } from "react-router-dom"

export default function Blog()
{

    const [items, setitems]=useState([])
        useEffect(()=>{
        fetch("http://localhost:5000/api/getblog")
        .then(response=>response.json())
        .then(data=>setitems(data))
        .catch(err=>console.log(err))
        },[])

    // translate
    const [lang, setLang] = useState("en")    

    return(
        <> 
            <div className="blog-text text-center pt-5 pb-5 ">
                <h4 className="mt-1 ps-5">STORIES & INSIGHTS</h4>
                <h1>Our Blog</h1>
                <h6>Updates and insights on women's safety and empowerment.</h6>
               
            </div>


            {/* blogs */}
            <div className="container offset-1 mx-auto px-0 blog-container m-2">
           
                {items.map((item,index)=>
                  <div className="blog-card p-2 rounded my-4" key={index}>
                    <div className="row mt-2">

                      {index % 2===0 ?(
                        <>  
                      <div className="col-lg-6 p-4 blog-data">
                        <h6><button className="btn btn-warning btn-outline-primary rounded-3">{item.category}</button> {item.readtime} </h6>
                        <h4 className="mt-0"> {lang === "en" ? item.title_en : item.title_hi} </h4>
                        <h6 className="mt-3">{new Date(item.poston).toLocaleDateString("en-IN")}  <span className="ms-3">{item.author}</span> </h6>
                        <p className="ps-0 mx-0 mt-3">
                           {
                              (lang === "en"
                                ? item.description_en: item.description_hi
                              )
                                ?.replace(/<[^>]+>/g, '').substring(0, 200)
                           }
                          ...
                        </p>
                      
                        <div className="mt-4 ">
                           <Link to={`/blogdetails/${item._id}`}>➡️Read Full Story</Link>
                        </div>
                       </div>
                    
                    
                    <div className="col-lg-6 blog-img">
                      <img src={item.photopath} height="400px" width="100%"  />
                    </div>
                    </>
                      )
                      :(
                        <>
                            <div className="col-lg-6  blog-img">
                      <img src={item.photopath} height="400px" width="100%"  className="m-2"/>
                    </div>
                        
                   <br/>
                    <div className="col-lg-6 p-4 blog-data">
                        <h6><button className="btn btn-warning btn-outline-primary rounded-3">{item.category}</button> {item.readtime} </h6>
                        <h4 className="mt-0"> {lang === "en" ? item.title_en : item.title_hi} </h4>
                        <h6 className="mt-3 ms-0">{new Date(item.poston).toLocaleDateString("en-IN")}  <span className="ms-3">{item.author}</span> </h6>
                        <p className="ps-0 mx-0 mt-3">
                           {
                              (lang === "en"
                                ? item.description_en: item.description_hi
                              )
                                ?.replace(/<[^>]+>/g, '').substring(0, 200)
                           }
                          ...
                        </p>
                        <div className="mt-4">
                           <Link to={`/blogdetails/${item._id}`}>➡️Read Full Story</Link>
                        </div>
                       </div>

                        </>
                      )}
                    </div>
                    </div>
                )}
           </div>
        </>
    )
}