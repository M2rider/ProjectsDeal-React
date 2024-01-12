import React from "react";

function Pricing() {
  return (
    <div className="pricing">
      <div className="pricing-images">
        <img src="https://projectsdeal.co.uk/images/coursework_writing_services.png"></img>
        <img
          src="https://projectsdeal.co.uk/images/Student3.png"
          className="pricing-student"
        ></img>
      </div>

      <div className="pricing-calculation">
        <div>
          <div className="pricing-calculation-heading">
            <img
              src="https://projectsdeal.co.uk/img/features/index2.png"
              alt="img"
            />
            <span id="Price_Calculator_New2_12may2016_lblheading" className="yellow , large ">
              Calculate Pricing
            </span>
          </div>
          <p className="white , pricing-subtitle">Just Select Correct Options and Calculate Best Price</p>
          <div>
            <div></div>

            <div id="Price_Calculator_New2_12may2016_UpdatePanel1">
              
                <div>
                  <select className="form-input"
                    name="Price_Calculator_New2_12may2016$ddlDegree"
                    id="Price_Calculator_New2_12may2016_ddlDegree"
                  >
                    <option value="-- Please Select Academic Level --" >
                      -- Please Select Academic Level --
                    </option>
                    <option value="Masters">Masters</option>
                    <option value="Undergraduate">Undergraduate</option>
                    <option value="PhD">PhD</option>
                  </select>
                  <span id="Price_Calculator_New2_12may2016_RFV_ddlDegree">
                    *
                  </span>
                </div>
              

                <div className="decrease-margin">
                  <select className="form-input"
                    name="Price_Calculator_New2_12may2016$ddlDomain"
                    id="Price_Calculator_New2_12may2016_ddlDomain"
                  >
                    <option value="-- Please Select Domain --">
                      -- Please Select Domain --
                    </option>
                    <option value="1">Accounting &amp; Finance</option>
                    <option value="49">Advertising/Public Relations</option>
                    <option value="51">Animal/Plant Biology</option>
                    <option value="52">Anthropology</option>
                    <option value="53">Archaeology</option>
                    <option value="54">Architecture</option>
                    <option value="55">Art</option>
                    <option value="186">BioInformatics</option>
                    <option value="56">Biology Studies</option>
                    <option value="57">Business</option>
                    <option value="189">Business Analytics</option>
                    <option value="58">Chemistry</option>
                    <option value="59">Children &amp; Young People</option>
                    <option value="3">Civil</option>
                    <option value="60">Civil Litigation Law</option>
                    <option value="61">Commercial Law</option>
                    <option value="62">Commercial Property Law</option>
                    <option value="63">Communications</option>
                    <option value="65">Comparative/Conflict of Laws</option>
                    <option value="66">Competition Law</option>
                    <option value="4">Computer Science</option>
                    <option value="69">Construction</option>
                    <option value="70">Construction Law</option>
                    <option value="71">Contract Law</option>
                    <option value="72">Counselling</option>
                    <option value="74">Criminal Law</option>
                    <option value="75">Criminal Litigation (Law)</option>
                    <option value="76">Criminology</option>
                    <option value="77">Cultural Studies</option>
                    <option value="78">Dentistry</option>
                    <option value="79">Design</option>
                    <option value="80">Drama</option>
                    <option value="5">Economics</option>
                    <option value="82">Economics (Social Sciences)</option>
                    <option value="83">Education</option>
                    <option value="84">Employment</option>
                    <option value="85">Employment Law</option>
                    <option value="86">Engineering</option>
                    <option value="87">English Language</option>
                    <option value="88">English Legal System (Law)</option>
                    <option value="89">English Literature</option>
                    <option value="90">Environment</option>
                    <option value="91">Environmental Sciences</option>
                    <option value="92">Environmental/Planning Law</option>
                    <option value="188">Entrepreneurship</option>
                    <option value="93">Equity &amp; Trusts Law</option>
                    <option value="94">Estate Management</option>
                    <option value="95">European (EU) Law</option>
                    <option value="96">European Studies</option>
                    <option value="97">Family Law</option>
                    <option value="98">Fashion</option>
                    <option value="99">Film Studies</option>
                    <option value="100">Finance</option>
                    <option value="101">Finance Law</option>
                    <option value="190">Financial Analysis</option>
                    <option value="102">Food and Nutrition</option>
                    <option value="103">Forensic Science</option>
                    <option value="104">French</option>
                    <option value="105">General Law</option>
                    <option value="106">Geography</option>
                    <option value="107">Geology</option>
                    <option value="108">German</option>
                    <option value="109">Health</option>
                    <option value="110">Health &amp; Social Care</option>
                    <option value="111">Health and Safety</option>
                    <option value="112">Health Psychology</option>
                    <option value="113">History</option>
                    <option value="6">Hospitality</option>
                    <option value="114">Housing</option>
                    <option value="7">HRM</option>
                    <option value="115">Human Resource Management</option>
                    <option value="116">Human Rights</option>
                    <option value="117">Human Rights Law</option>
                    <option value="118">Immigration/Refugee Law</option>
                    <option value="120">Information Systems</option>
                    <option value="121">Information Technology</option>
                    <option value="122">Intellectual Property Law</option>
                    <option value="8">International Business</option>
                    <option value="123">International Commercial Law</option>
                    <option value="124">International Criminal Law</option>
                    <option value="125">International Law</option>
                    <option value="127">International Relations</option>
                    <option value="128">International Studies</option>
                    <option value="129">Jurisprudence (Law)</option>
                    <option value="130">Land/property Law</option>
                    <option value="131">
                      Landlord &amp; Tenant/Housing Law
                    </option>
                    <option value="9">Law</option>
                    <option value="132">Law of Evidence</option>
                    <option value="134">Linguistics</option>
                    <option value="10">Literature</option>
                    <option value="11">Management</option>
                    <option value="136">Maritime Law</option>
                    <option value="12">Marketing</option>
                    <option value="138">Maths</option>
                    <option value="2">Mechanical</option>
                    <option value="139">Media</option>
                    <option value="13">Medical</option>
                    <option value="140">Medical Law</option>
                    <option value="141">Medicine</option>
                    <option value="142">Mental Health</option>
                    <option value="143">Mental Health Law</option>
                    <option value="144">Methodology</option>
                    <option value="145">Music</option>
                    <option value="146">Nursing</option>
                    <option value="147">Occupational Therapy</option>
                    <option value="148">Oil &amp; Gas Law</option>
                    <option value="149">Other</option>
                    <option value="16">Others</option>
                    <option value="150">Paramedic Studies</option>
                    <option value="151">Pharmacology</option>
                    <option value="152">Philosophy</option>
                    <option value="153">Photography</option>
                    <option value="154">Physical Education</option>
                    <option value="155">Physics</option>
                    <option value="156">Physiotherapy</option>
                    <option value="14">Politics</option>
                    <option value="158">Professional Conduct Law</option>
                    <option value="191">Project Management</option>
                    <option value="15">Psychology</option>
                    <option value="160">Psychotherapy</option>
                    <option value="161">Public Administration</option>
                    <option value="162">Public Law</option>
                    <option value="163">Quantity Surveying</option>
                    <option value="164">
                      Radiology &amp; Medical Technology
                    </option>
                    <option value="165">Real Estate</option>
                    <option value="166">Security &amp; Risk Management</option>
                    <option value="167">Social Policy</option>
                    <option value="168">Social Work</option>
                    <option value="169">Social Work Law</option>
                    <option value="170">Sociology</option>
                    <option value="171">Spanish</option>
                    <option value="172">Sports Law</option>
                    <option value="173">Sports Psychology</option>
                    <option value="174">Sports Science</option>
                    <option value="175">SPSS</option>
                    <option value="176">Statistics</option>
                    <option value="192">Strategy Management</option>
                    <option value="187">Supply Chain Management</option>
                    <option value="177">Tax Law</option>
                    <option value="178">Teacher Training / PGCE</option>
                    <option value="179">TESOL</option>
                    <option value="180">Theatre Studies</option>
                    <option value="181">Theology &amp; Religion</option>
                    <option value="182">Tort Law</option>
                    <option value="183">Tourism &amp; Hospitality</option>
                    <option value="184">Town &amp; Country Planning</option>
                    <option value="185">Translation</option>
                  </select>
                  <span id="Price_Calculator_New2_12may2016_RFV_ddlDomain">
                    *
                  </span>
                </div>
              

              <div className="decrease-margin">
                  <select className="form-input"
                    name="Price_Calculator_New2_12may2016$ddlDesiredService"
                    id="Price_Calculator_New2_12may2016_ddlDesiredService"
                  >
                    <option value="-- Please Select Desired Service --">
                      -- Please Select Desired Service --
                    </option>
                    <option value="2;1,3">Assignment</option>
                    <option value="3;1,3">Coursework</option>
                    <option value="4;1,3">Essay</option>
                    <option value="9;1,3">Dissertation</option>
                    <option value="16;1,3">High Index Journal</option>
                    <option value="1;1,3">PhD Admission Proposal</option>
                  </select>
                  <span id="Price_Calculator_New2_12may2016_RFV_ddlDesiredService">
                    *
                  </span>
              </div>

              <div id="Price_Calculator_New2_12may2016_tr_DDL_NoOfWordPages" className="decrease-margin">
                  <select className="form-input"
                    name="Price_Calculator_New2_12may2016$ddlWords"
                    id="Price_Calculator_New2_12may2016_ddlWords"
                  >
                    <option value="-- Select No. of Words/Pages --">
                      -- Select No. of Words/Pages --
                    </option>
                    <option value="1000">1000 words ~ 4 pages</option>
                    <option value="1500">1500 words ~ 6 pages</option>
                    <option value="2000">2000 words ~ 8 pages</option>
                    <option value="2500">2500 words ~ 10 pages</option>
                    <option value="3000">3000 words ~ 12 pages</option>
                    <option value="3500">3500 words ~ 14 pages</option>
                    <option value="4000">4000 words ~ 16 pages</option>
                    <option value="4500">4500 words ~ 18 pages</option>
                    <option value="5000">5000 words ~ 20 pages</option>
                    <option value="5500">5500 words ~ 22 pages</option>
                    <option value="6000">6000 words ~ 24 pages</option>
                    <option value="6500">6500 words ~ 26 pages</option>
                    <option value="7000">7000 words ~ 28 pages</option>
                    <option value="7500">7500 words ~ 30 pages</option>
                    <option value="8000">8000 words ~ 32 pages</option>
                    <option value="9000">9000 words ~ 36 pages</option>
                    <option value="10000">10000 words ~ 40 pages</option>
                    <option value="11000">11000 words ~ 44 pages</option>
                    <option value="12000">12000 words ~ 48 pages</option>
                    <option value="13000">13000 words ~ 52 pages</option>
                    <option value="14000">14000 words ~ 56 pages</option>
                    <option value="15000">15000 words ~ 60 pages</option>
                    <option value="16000">16000 words ~ 64 pages</option>
                    <option value="17000">17000 words ~ 68 pages</option>
                    <option value="18000">18000 words ~ 72 pages</option>
                    <option value="19000">19000 words ~ 76 pages</option>
                    <option value="20000">20000 words ~ 80 pages</option>
                    <option value="21000">21000 words ~ 84 pages</option>
                    <option value="22000">22000 words ~ 88 pages</option>
                    <option value="23000">23000 words ~ 92 pages</option>
                    <option value="24000">24000 words ~ 96 pages</option>
                    <option value="25000">25000 words ~ 100 pages</option>
                    <option value="26000">26000 words ~ 104 pages</option>
                    <option value="27000">27000 words ~ 108 pages</option>
                    <option value="28000">28000 words ~ 112 pages</option>
                    <option value="29000">29000 words ~ 116 pages</option>
                    <option value="30000">30000 words ~ 120 pages</option>
                  </select>
                  <span id="Price_Calculator_New2_12may2016_RFV_ddlWords">
                    *
                  </span>
              </div>

              <div id="Price_Calculator_New2_12may2016_tr_DDList_Tools" className="decrease-margin">
                  <select className="form-input"
                    name="Price_Calculator_New2_12may2016$ddlTool"
                    id="Price_Calculator_New2_12may2016_ddlTool"
                  >
                    <option value="-- Select Tool --">-- Select Tool --</option>
                    <option value="NA">None</option>
                    <option value="SPSS">SPSS</option>
                    <option value="STATA">STATA</option>
                    <option value="Eviews">Eviews</option>
                    <option value="Nvivo">Nvivo</option>
                    <option value="Xls Analysis">Xls Analysis</option>
                    <option value="R Programming">R Programming</option>
                    <option value="NA">None</option>
                  </select>
                  <span id="Price_Calculator_New2_12may2016_RFV_ddlTool">
                    *
                  </span>
              </div>
            </div>

            <div id="Price_Calculator_New2_12may2016_tr_EmailId" className="decrease-margin">
                <input className="form-input"
                  name="Price_Calculator_New2_12may2016$TextBox_EmailId"
                  type="text"
                  id="Price_Calculator_New2_12may2016_TextBox_EmailId"
                  title="Enter Email Id"
                  placeholder="Email id:"
                />
                <span id="Price_Calculator_New2_12may2016_RFV_TextBox_EmailId">
                  *
                </span>
            </div>
            <div id="Price_Calculator_New2_12may2016_tr_ContactNo" className="decrease-margin">
                <input className="form-input"
                  name="Price_Calculator_New2_12may2016$TextBox_ContactNo"
                  type="text"
                  maxlength="15"
                  id="Price_Calculator_New2_12may2016_TextBox_ContactNo"
                  title="Enter Contact No With Country Code"
                  placeholder="Valid mobile number:"
                  onblur="ValidateMobile()"
                />
                <span id="Price_Calculator_New2_12may2016_RFV_TextBox_ContactNo">
                  *
                </span>
            </div>
            <div className="decrease-margin">
                <input className="form-input"
                  name="Price_Calculator_New2_12may2016$TextBox_deadline"
                  type="text"
                  id="Price_Calculator_New2_12may2016_TextBox_deadline"
                  title="Just select the Deadline"
                  placeholder="Deadline : dd/mm/yy"
                />
                <span
                  id="Price_Calculator_New2_12may2016_RFV_TextBox_deadline"
                  for="TextBox_deadline"
                >
                  *
                </span>
            </div>
          </div >
          <div id="Price_Calculator_New2_12may2016_UpdatePanelMain" className="decrease-margin">
              <button className="calculate-button , white , bold"
                type="button"
                ValidationGroup="ordernow"
              >
                &nbsp;Click To Calculate &nbsp;&nbsp;
              </button>
            
          </div>
          <div className="decrease-margin" id="Price_Calculator_New2_12may2016_tr_HandUsUrWorries">
            <p className="decrease-margin , white , center">
                <b>Result is all that Matters!</b>
             
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pricing;
