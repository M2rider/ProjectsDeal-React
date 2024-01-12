import React from 'react'
import Features from './Features'
import { FaWhatsapp } from 'react-icons/fa'

function Content2() {
  return (
    <div>
        <div class="col2">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/YVbMIIdpvWQ?si=BQ748A9MJr8tUisX" 
            title="YouTube video player" frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            allowfullscreen></iframe>
            

            <div>
                <ul class="list-tick">
                    <li> ✔ Established 2001 </li> 
                    <li>✔ 24 Years of Successful Track Record </li> 
                    <li>✔ PhD Qualified Writers </li> 
                    <li>✔ Top Notch Quality </li> 
                    <li>✔ Enjoy Full Confidentiality </li> 
                    <li>✔ Plagiarism Free </li> 
                    <li>✔ Free Unlimited Revisions </li> 
                    <li>✔ Professional Project Management </li> 
                    <li>✔ 5 star Reviews on Google, SiteJabber, TrustPilot </li> 
                    <li>✔ 600+ Domain Experts </li> 
                    <li>✔ 46 Project Coordinators </li> 
                    <li>✔ Guaranteed Grades </li> 
                </ul>
            </div>
        </div>

        <h2 className='blue'>For Urgent Deadlines WhatsApp us</h2>
        <a href="https://wa.me/447447882377">
        <button className='whatsapp-button'>< FaWhatsapp /> Whatsapp +44 744788237</button>
        </a>

        <p>
            When it comes to hiring Best Dissertation Writing Service in London <i>trust</i> becomes one of the major concerns 
            for students. Students have many concerns regarding the methodology, deadlines, quality of work, pricing, 
            experience of the British writers, plagiarism, and revisions or amendments etc. We are so good that the results 
            of our works speak for themselves as more than 82% of our clients have bagged for themselves Merits and 
            Distinctions. Balancing your odd Job, other imp priorities and Score!
        </p>
        <p>
            A dissertation determines your overall grade and can either help your academic career or break it. It requires 
            investing time, energy, motivation and skills such as research skills in order to do a great job. However, to 
            ensure that your dissertation is not only accepted but also wins you a great grade and high regard, you must 
            present an original dissertation that fulfills the objectives it has indicated. It should be well-researched, 
            coherent and a demonstration of knowledge applied in solving a real life situation effectively.
        </p>

        <h2 className='blue'>What makes Projectsdeal UK #1 Dissertation Writing Service</h2>

        <div className = "features">
            <Features 
                img="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Font_Awesome_5_solid_thumbs-up.svg/480px-Font_Awesome_5_solid_thumbs-up.svg.png"
                title="Premium Quality"
                content="Projectsdeal is Gold Standard in Academic Research & Writing"
            />

            <Features 
                img="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Ionicons_ban.svg/640px-Ionicons_ban.svg.png"
                title="Plagiarism Free"
                content="Use Official License of Turnitin to Validate <6% plagiarism"
            />

            <Features 
                img="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/Octicons-clock.svg/640px-Octicons-clock.svg.png"
                title="Meeting Deadline"
                content="Projectsdeal team values on-time submission. We deliver before the deadline. Relax!"
            />

            <Features 
                img="https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Ei-lock.svg/640px-Ei-lock.svg.png"
                title="100% Privacy"
                content="Follow Strict Code of Confidentiality. We are known for HIGH Business Ethics."
            />
        
        </div>

        <div className='features'>

            <Features
                img="https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Circle-icons-money.svg/640px-Circle-icons-money.svg.png"
                title="Affordable Prices"
                content="Every year if more than 80% of your own class can afford it, you can surely! Your work be worth every pound spend."
            />

            <Features 
                img="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Font_Awesome_5_solid_phone.svg/640px-Font_Awesome_5_solid_phone.svg.png"
                title="Dedicated Team"
                content="Dedicated Personal Managers to ensure high level of service experience."
            />

            <Features 
                img="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Icons8_flat_image_file.svg/640px-Icons8_flat_image_file.svg.png"
                title="Free Revision"
                content="We understand that your supervisor is our client! We prioritize your success above all else, so feel free to request any number of modifications."
            />

            <Features 
                img="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Ei-refresh.svg/640px-Ei-refresh.svg.png"
                title="Payback Guarantee"
                content="Our Terms & Conditions are designed with Fair Usage and SOLID Guarantees to ensure success! Result is all that matters!"
            />
        </div>

    </div>
  )
}

export default Content2