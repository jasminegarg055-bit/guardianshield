import { useState, useEffect } from "react"
import { useParams, useLocation } from "react-router-dom"


export default function Blogdetails() {

    const { id } = useParams()
    const location = useLocation()

    // LANGUAGE
    const [lang, setLang] = useState(location.state?.lang || "en")

    const [item, setItem] = useState(null)

    useEffect(() => {
        fetch("http://localhost:5000/api/getblogbyid/" + id)
            .then(response => response.json())
            .then(data => setItem(data))
            .catch(err => console.log(err))
    }, [id])

    return (
        <>
            <div className="blogdetails-main-container">

                {/* Language Buttons */}
                <div className="blogdetails-language-box">
                    <button
                        className={`blogdetails-lang-btn ${lang === "en" ? "active-btn" : ""}`}
                        onClick={() => setLang("en")}
                    >
                        English
                    </button>

                    <button
                        className={`blogdetails-lang-btn ${lang === "hi" ? "active-btn" : ""}`}
                        onClick={() => setLang("hi")}
                    >
                        Hindi
                    </button>
                </div>

                {/* Blog Details */}
                {item &&
                    <div className="blogdetails-wrapper">

                        <div className="blogdetails-card">

                            <img
                                src={item.photopath}
                                alt="blog"
                                className="blogdetails-image"
                            />

                            <div className="blogdetails-card-body">

                                <p className="blogdetails-category">
                                    {item.category} • {item.readtime}
                                </p>

                                <h3 className="blogdetails-title">
                                    {lang === "en"
                                        ? item.title_en
                                        : item.title_hi}
                                </h3>

                                <p className="blogdetails-author">
                                    {item.poston} • {item.author}
                                </p>

                                <div
                                    className="blogdetails-description"
                                    dangerouslySetInnerHTML={{
                                        __html: lang === "en"
                                            ? item.description_en
                                            : item.description_hi
                                    }}
                                />

                            </div>

                        </div>

                    </div>
                }

            </div>
        </>
    )
}