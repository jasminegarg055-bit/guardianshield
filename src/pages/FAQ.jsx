function FAQpart(Props)
{
    return(
        <>
                
                    <div className="accordion-item">
                        <h2 className="accordion-header">
                            <button className="accordion-button collapsed custom-btn" type="button" data-bs-toggle="collapse" data-bs-target={`#${Props.id}`}><span className="ps-5">{Props.question}</span></button>
                        </h2>
                        <div id={Props.id} className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                          <div className="accordion-body">
                                {Props.answer}
                          </div>
                        </div>
                    </div>
                
        </>
    )
}

export default function FAQ()
{
    return(
        <>
           <div className="faq-text text-center pt-5 pb-5 ">
                <h3 className="mt-1 ps-5">FAQ</h3>
                <h1>Frequently Asked Questions</h1>
                <h5 className="mt-3">Common questions and answers about our movement.</h5>
            </div>

            {/* FAQ start */}
            <div className="container mt-5">
               <div className="accordion" id="faqAccordion">

                <FAQpart 
                   question="Who are you? Who/Which is the NGO behind Safety for Women?"   
                   answer="We are a group of individuals working together to improve women’s safety and awareness. This platform is an independent initiative aimed at providing emergency support, safety resources, and guidance for women in need.Currently, we are not officially tied to any NGO or political organization. Our goal is to build a safe and supportive digital space where women can easily access help, information, and protection services."
                   id="faq1"
                />
                 <FAQpart 
                   question="What are you planning to do?"   
                   answer="We aim to create awareness about women’s safety, provide quick access to emergency help, and build a platform that connects users with useful resources and support systems. Our focus is on using technology to make safety more accessible and reliable."
                   id="faq2"
                />
                 <FAQpart 
                   question="Why Pan India?"   
                   answer="Women’s safety is not limited to one area or city; it is a concern across the entire country. Our goal is to provide support and awareness at a national level so that every woman, regardless of location, can access safety resources and help when needed."
                   id="faq3"
                />
                 <FAQpart 
                   question="Is Safety for Women only for safety and protection in personal life?"   
                   answer="No, our initiative goes beyond personal safety. We also focus on spreading awareness, promoting education, and encouraging societal change so that women feel safe in all aspects of life, including public spaces and workplaces."
                   id="faq4"
                />
                 <FAQpart 
                   question="Are you collecting any subscription or joining fees?"   
                   answer="No, we do not charge any subscription or joining fees. Our platform is designed to be accessible to everyone without any financial barrier."
                   id="faq5"
                />
                 <FAQpart 
                   question="What do you want me to do?"   
                   answer="You can support our initiative by spreading awareness, sharing information, and contributing your skills. Even small efforts like educating others or staying alert can help create a safer environment for women."
                   id="faq6"
                />
                <FAQpart 
                   question="Are you giving jobs?"   
                   answer="Currently, we are not offering jobs. This is an initiative focused on awareness and support. However, people can volunteer and contribute in different ways based on their skills.We do not promise or offer to promise any job."
                   id="faq7"
                />
                 <FAQpart 
                   question="Are you paying money for tasks?"   
                   answer="No, we do not provide payment for tasks. This platform is based on voluntary contribution and social responsibility, aimed at creating awareness and helping others."
                   id="faq8"
                />
                 <FAQpart 
                   question="Why should we join you?"   
                   answer="By joining us, you become part of a meaningful cause that aims to improve women’s safety. You can contribute to real change, spread awareness, and help build a supportive community.We would like you join us to bring about a change in mindsets and be the change we want to see in our lifetimes. Also, we don't want to be just complaining but do something about it."
                   id="faq9"
                />
                 <FAQpart 
                   question="What do you plan to achieve by starting this movement?"   
                   answer="Our goal is to create a safer society for women by increasing awareness, providing easy access to help, and encouraging people to take responsibility for safety in their surroundings.Bring about change, reduce the rape and abuse of women."
                   id="faq10"
                />
                 <FAQpart 
                   question="Is there a bank account we can contribute to?"   
                   answer="Yes, we accept donations to support our initiatives. Contributions help us improve resources, spread awareness, and expand our efforts toward women’s safety.Details for contributing are provided on our platform, and all donations are used responsibly for the cause."
                   id="faq11"
                />
                 <FAQpart 
                   question="Who can join the movement?"   
                   answer="Anyone who wants to make India a safer nation and also who is passionate about women’s safety can join. No special skills or experience are required—just a willingness to contribute and support the cause."
                   id="faq12"
                />
                 <FAQpart 
                   question="Are men/boys encouraged to join?"   
                   answer="Yes, men and boys are encouraged to join our initiative. We believe that women’s safety is a collective responsibility, and support from everyone is important to create a safer society."
                   id="faq13"
                />
                <FAQpart 
                   question="Are men/boys encouraged to join?"   
                   answer="Yes, men and boys are encouraged to join our initiative. We believe that women’s safety is a collective responsibility, and support from everyone is important to create a safer society."
                   id="faq14"
                />
                <FAQpart 
                   question="After joining what do you want us to do?"   
                   answer="First, Take the pledge and then work on the initiatives."
                   id="faq15"
                />
                <FAQpart 
                   question="Do you provide support for victims of violence or sexual harassment?"   
                   answer="We direct you to NGOs/people who will provide you the necessary help."
                   id="faq16"
                />
                 <FAQpart 
                   question="Are your services/support given to victims confidential?"   
                   answer="Yes, we respect user privacy and ensure that any information shared with us is handled with confidentiality and care."
                   id="faq17"
                />
                 <FAQpart 
                   question="What safety tips do you recommend for women? Is there any training?"   
                   answer="We recommend staying aware of surroundings, using emergency contacts, and learning basic self-defense techniques. We also aim to provide guidance and information about self-defense training programs."
                   id="faq18"
                />
              </div>
            </div>
        </>
    )
}