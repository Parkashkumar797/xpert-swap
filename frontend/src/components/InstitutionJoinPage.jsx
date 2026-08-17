import React from 'react';
import Header from "../components/Header";
import Footer from '../components/Footer';
import {motion} from "framer-motion";

const CollaborationForm = () => {

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <>
    <Header />
    <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeIn}
    className="min-h-screen bg-gradient-to-br from-blue-500 to-gray-100 py-10 px-4 font-sans relative">
      <div className="absolute inset-0 bg-cover bg-center opacity-60 z-0" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1571260899304-425eee4c7efc?auto=format&fit=crop&w=1950&q=80')" }}></div>

      <div className="relative z-10 max-w-4xl mx-auto bg- bg-gray-200 pacity-70 p-8 rounded-xl shadow-lg">
        <h1 className="text-3xl font-bold text-center text-blue-600 mb-8">Collaboration Registration Form</h1>
        <form className="space-y-6">

          <section>
            <h3 className="text-xl font-semibold text-blue-600 mb-4">1. Institution Information</h3>
            <div className="space-y-4">
              <div>
                <label className="block font-medium">Institution Name</label>
                <select required className="w-full p-2 rounded border border-gray-300 shadow-inner cursor-pointer">
                  <option value="">Select Institution</option>
                  <optgroup label="Universities">
                  <option value="acsir">Veer Bahadur Singh Purvanchal University Jaunpur</option>
                  <option value="acsir">Academy of Scientific and Innovative Research (AcSIR) (various locations)</option>
                  <option value="aktu">Dr. A.P.J. Abdul Kalam Technical University (AKTU), Lucknow</option>
                  <option value="amity-lucknow">Amity University Lucknow Campus, Lucknow</option>
                  <option value="amity-noida">Amity University, Noida</option>
                  <option value="amu">Aligarh Muslim University (AMU), Aligarh</option>
                  <option value="bbau">Babasaheb Bhimrao Ambedkar University (BBAU), Lucknow</option>
                  <option value="bennett">Bennett University, Greater Noida</option>
                  <option value="biet-jhansi">Bundelkhand Institute Of Engineering and Technology (BIET), Jhansi</option>
                  <option value="biu">Bareilly International University (BIU)</option>
                  <option value="bhu">Banaras Hindu University (BHU), Varanasi</option>
                  <option value="bundelkhand-university">Bundelkhand University, Jhansi</option>
                  <option value="ccsu">Chaudhary Charan Singh University (CCSU), Meerut</option>
                  <option value="csjmu">Chhatrapati Shahu Ji Maharaj University (CSJMU), Kanpur</option>
                  <option value="dei">Dayalbagh Educational Institute (DEI), Agra</option>
                  <option value="dddu">Deen Dayal Upadhyay Gorakhpur University, Gorakhpur</option>
                  <option value="future-university">Future University</option>
                  <option value="galgotias">Galgotias University, Greater Noida</option>
                  <option value="gbu">Gautam Buddha University, Greater Noida</option>
                  <option value="gla">GLA University, Mathura</option>
                  <option value="glocal">Glocal University, Saharanpur</option>
                  <option value="hbtu">Harcourt Butler Technical University (HBTU), Kanpur</option>
                  <option value="iit-bhu">Indian Institute of Technology (BHU) Varanasi (IIT BHU)</option>
                  <option value="iit-kanpur">Indian Institute of Technology Kanpur (IIT Kanpur)</option>
                  <option value="iiit-allahabad">Indian Institute of Information Technology, Allahabad (IIIT Allahabad)</option>
                  <option value="integral-university">Integral University, Lucknow</option>
                  <option value="invertis">Invertis University</option>
                  <option value="iet-lucknow">Institute of Engineering and Technology (IET), Lucknow</option>
                  <option value="ivri">Indian Veterinary Research Institute (IVRI)</option>
                  <option value="jaipuria">Jaipuria Institute of Management, Lucknow</option>
                  <option value="jiit">JAYPEE INSTITUTE OF INFORMATION TECHNOLOGY, Noida</option>
                  <option value="kgmu">King George's Medical University (KGMU), Lucknow</option>
                  <option value="lucknow-university">University of Lucknow, Lucknow</option>
                  <option value="mgkv">Mahatma Gandhi Kashi Vidyapith (MGKV), Varanasi</option>
                  <option value="mmm-gorakhpur">MMM University of Technology, Gorakhpur</option>
                  <option value="mnnit">Motilal Nehru National Institute of Technology (MNNIT), Allahabad (Prayagraj)</option>
                  <option value="mit-meerut">Meerut Institute of Technology (MIT), Meerut</option>
                  <option value="niet">Noida Institute of Engineering and Technology (NIET), Greater Noida</option>
                  <option value="rajkiya-engineering">Rajkiya Engineering College (various locations)</option>
                  <option value="rgipt">Rajiv Gandhi Institute of Petroleum Technology (RGIPT), Raebareli</option>
                  <option value="rmlnlu">Dr. Ram Manohar Lohiya National Law University, Lucknow</option>
                  <option value="sanskriti">Sanskriti University, Mathura</option>
                  <option value="sgpgims">Sanjay Gandhi Postgraduate Institute of Medical Sciences (SGPGIMS), Lucknow</option>
                  <option value="sharda-university">Sharda University, Greater Noida</option>
                  <option value="shiv-nadar">Shiv Nadar Institution of Eminence, Greater Noida</option>
                  <option value="shuats">Sam Higginbottom University of Agriculture, Technology and Sciences (SHUATS), Prayagraj</option>
                  <option value="shobhit">Shobhit Institute of Engineering & Technology, Meerut</option>
                  <option value="vbspu">Veer Bahadur Singh Purvanchal University, Jaunpur</option>
                  </optgroup>
                  <optgroup label="Colleges and Institutes">
                  <option value="anubis-degree">Anubis Degree College</option>
                  <option value="bareilly-college">Bareilly College</option>
                  <option value="biu-humanities">BIU College of Humanities & Journalism</option>
                  <option value="biu-management">BIU College of Management</option>
                  <option value="biu-pharmacy">BIU College of Pharmacy</option>
                  <option value="future-group">Future Group of Institutions</option>
                  <option value="govt-girls-polytechnic">Government Girls Polytechnic</option>
                  <option value="ids">Institute of Dental Sciences (IDS)</option>
                  <option value="jyoti-college">Jyoti College of Management Science & Technology</option>
                  <option value="kcmt">Khandelwal College of Management Science & Technology (KCMT)</option>
                  <option value="lbsimt">Lal Bahadur Shastri Institute of Management and Technology (LBSIMT)</option>
                  <option value="paramedical-sciences">Faculty of Paramedical Sciences (BIU)</option>
                  <option value="rajshree-group">Rajshree Group of Institutions</option>
                  <option value="rani-avanti-bai">Rani Avanti Bai Lodhi Government Mahila Mahavidyalaya</option>
                  <option value="rohilkhand-ayurvedic">Rohilkhand Ayurvedic Medical College & Hospital</option>
                  <option value="rohilkhand-medical">Rohilkhand Medical College and Hospital</option>
                  <option value="rohilkhand-nursing">Rohilkhand College of Nursing</option>
                  <option value="srmscet">Shri Ram Murti Smarak College of Engineering & Technology (SRMSCET)</option>
                  </optgroup>
                </select>
              </div>

              <div>
                <label className="block font-medium">Department Name</label>
                <select required className="w-full p-2 rounded border border-gray-300 shadow-inner cursor-pointer">
                  <option value="">Select Department / Program</option>
                  <optgroup label="B.Tech Programs">
                    <option value="cse">Computer Science & Engineering</option>
                    <option value="ece">Electronics & Communication Engineering</option>
                    <option value="mech">Mechanical Engineering</option>
                    <option value="civil">Civil Engineering</option>
                    <option value="ee">Electrical Engineering</option>
                    <option value="biotech">Biotechnology</option>
                  </optgroup>
                  <optgroup label="B.Sc Programs">
                    <option value="physics">Physics</option>
                    <option value="chemistry">Chemistry</option>
                    <option value="mathematics">Mathematics</option>
                    <option value="agriculture">Agricultural Sciences</option>
                  </optgroup>
                  <optgroup label="Other Programs">
                    <option value="bca">Computer Applications (BCA)</option>
                    <option value="mba">Management Studies (MBA)</option>
                    <option value="law">Law</option>
                    <option value="medicine">Medicine</option>
                    <option value="pharmacy">Pharmacy</option>
                    <option value="architecture">Architecture</option>
                    <option value="arts">Arts & Humanities</option>
                    <option value="education">Education</option>
                  </optgroup>
                </select>
              </div>

              <div>
                <label className="block font-medium">Institution Address</label>
                <textarea required className="w-full p-2 rounded border border-gray-300 shadow-inner cursor-pointer"></textarea>
              </div>

              <div>
                <label className="block font-medium">City</label>
                <select required className="w-full p-2 rounded border border-gray-300 shadow-inner cursor-pointer">
                  <option value="">Select City</option>
                      <option value="agra">Agra</option>
                      <option value="aligarh">Aligarh</option>
                      <option value="allahabad">Allahabad (Prayagraj)</option>
                      <option value="ambedkar-nagar">Ambedkar Nagar</option>
                      <option value="amethi">Amethi</option>
                      <option value="amroha">Amroha</option>
                      <option value="auraiya">Auraiya</option>
                      <option value="azamgarh">Azamgarh</option>
                      <option value="baghpat">Baghpat</option>
                      <option value="bahraich">Bahraich</option>
                      <option value="ballia">Ballia</option>
                      <option value="balrampur">Balrampur</option>
                      <option value="banda">Banda</option>
                      <option value="barabanki">Barabanki</option>
                      <option value="bareilly">Bareilly</option>
                      <option value="basti">Basti</option>
                      <option value="bhadohi">Bhadohi</option>
                      <option value="bijnor">Bijnor</option>
                      <option value="budaun">Budaun</option>
                      <option value="bulandshahr">Bulandshahr</option>
                      <option value="chandauli">Chandauli</option>
                      <option value="chitrakoot">Chitrakoot</option>
                      <option value="deoria">Deoria</option>
                      <option value="etah">Etah</option>
                      <option value="etawah">Etawah</option>
                      <option value="faizabad">Faizabad (Ayodhya)</option>
                      <option value="farrukhabad">Farrukhabad</option>
                      <option value="fatehpur">Fatehpur</option>
                      <option value="firozabad">Firozabad</option>
                      <option value="gautam-buddha-nagar">Gautam Buddha Nagar (Noida)</option>
                      <option value="ghaziabad">Ghaziabad</option>
                      <option value="ghazipur">Ghazipur</option>
                      <option value="gonda">Gonda</option>
                      <option value="gorakhpur">Gorakhpur</option>
                      <option value="hamirpur">Hamirpur</option>
                      <option value="hapur">Hapur</option>
                      <option value="hardoi">Hardoi</option>
                      <option value="hathras">Hathras</option>
                      <option value="jalaun">Jalaun</option>
                      <option value="jaunpur">Jaunpur</option>
                      <option value="jhansi">Jhansi</option>
                      <option value="kannauj">Kannauj</option>
                      <option value="kanpur">Kanpur</option>
                      <option value="kasganj">Kasganj</option>
                      <option value="kaushambi">Kaushambi</option>
                      <option value="kushinagar">Kushinagar</option>
                      <option value="lakhimpur-kheri">Lakhimpur Kheri</option>
                      <option value="lalitpur">Lalitpur</option>
                      <option value="lucknow">Lucknow</option>
                      <option value="maharajganj">Maharajganj</option>
                      <option value="mahoba">Mahoba</option>
                      <option value="mainpuri">Mainpuri</option>
                      <option value="mathura">Mathura</option>
                      <option value="mau">Mau</option>
                      <option value="meerut">Meerut</option>
                      <option value="mirzapur">Mirzapur</option>
                      <option value="moradabad">Moradabad</option>
                      <option value="muzaffarnagar">Muzaffarnagar</option>
                      <option value="pilibhit">Pilibhit</option>
                      <option value="pratapgarh">Pratapgarh</option>
                      <option value="rae-bareli">Rae Bareli</option>
                      <option value="rampur">Rampur</option>
                      <option value="saharanpur">Saharanpur</option>
                      <option value="sambhal">Sambhal</option>
                      <option value="sant-kabir-nagar">Sant Kabir Nagar</option>
                      <option value="shahjahanpur">Shahjahanpur</option>
                      <option value="shamli">Shamli</option>
                      <option value="shravasti">Shravasti</option>
                      <option value="siddharthnagar">Siddharthnagar</option>
                      <option value="sitapur">Sitapur</option>
                      <option value="sonbhadra">Sonbhadra</option>
                      <option value="sultanpur">Sultanpur</option>
                      <option value="unnao">Unnao</option>
                      <option value="varanasi">Varanasi</option>
                  
                </select>
              </div>

              <div>
                <label className="block font-medium">State</label>
                <select required className="w-full p-2 rounded border border-gray-300 shadow-inner cursor-pointer">
                  <option value="">Select State</option>
                  <option value="andaman-nicobar">Andaman and Nicobar Islands</option>
                  <option value="andhra-pradesh">Andhra Pradesh</option>
                  <option value="arunachal-pradesh">Arunachal Pradesh</option>
                  <option value="assam">Assam</option>
                  <option value="bihar">Bihar</option>
                  <option value="chandigarh">Chandigarh</option>
                  <option value="chhattisgarh">Chhattisgarh</option>
                  <option value="dadra-nagar-haveli">Dadra and Nagar Haveli and Daman and Diu</option>
                  <option value="delhi">Delhi</option>
                  <option value="goa">Goa</option>
                  <option value="gujarat">Gujarat</option>
                  <option value="haryana">Haryana</option>
                  <option value="himachal-pradesh">Himachal Pradesh</option>
                  <option value="jammu-kashmir">Jammu and Kashmir</option>
                  <option value="jharkhand">Jharkhand</option>
                  <option value="karnataka">Karnataka</option>
                  <option value="kerala">Kerala</option>
                  <option value="ladakh">Ladakh</option>
                  <option value="lakshadweep">Lakshadweep</option>
                  <option value="madhya-pradesh">Madhya Pradesh</option>
                  <option value="maharashtra">Maharashtra</option>
                  <option value="manipur">Manipur</option>
                  <option value="meghalaya">Meghalaya</option>
                  <option value="mizoram">Mizoram</option>
                  <option value="nagaland">Nagaland</option>
                  <option value="odisha">Odisha</option>
                  <option value="puducherry">Puducherry</option>
                  <option value="punjab">Punjab</option>
                  <option value="rajasthan">Rajasthan</option>
                  <option value="sikkim">Sikkim</option>
                  <option value="tamil-nadu">Tamil Nadu</option>
                  <option value="telangana">Telangana</option>
                  <option value="tripura">Tripura</option>
                  <option value="uttar-pradesh">Uttar Pradesh</option>
                  <option value="uttarakhand">Uttarakhand</option>
                  <option value="west-bengal">West Bengal</option>
                </select>
              </div>

              <input type="text" placeholder="Pin Code" required className="w-full p-2 rounded border border-gray-300 shadow-inner" />
              <input type="url" placeholder="Website URL" required className="w-full p-2 rounded border border-gray-300 shadow-inner" />

              <div>
                <label className="block font-medium">Institution Affiliation</label>
                <select required className="w-full p-2 rounded border border-gray-300 shadow-inner cursor-pointer">
                <option value="">Select Affiliation</option>
                <option value="ugc">University Grants Commission (UGC)</option>
                <option value="aicte">All India Council for Technical Education (AICTE)</option>
                <option value="naac">National Assessment and Accreditation Council (NAAC)</option>
                <option value="nba">National Board of Accreditation (NBA)</option>
                <option value="icmr">Indian Council of Medical Research (ICMR)</option>
                <option value="csir">Council of Scientific and Industrial Research (CSIR)</option>
                <option value="ncte">National Council for Teacher Education (NCTE)</option>
                <option value="bar-council">Bar Council of India (BCI)</option>
                <option value="pci">Pharmacy Council of India (PCI)</option>
                <option value="dci">Dental Council of India (DCI)</option>
                <option value="mci">Medical Council of India (MCI)</option>
                <option value="inc">Indian Nursing Council (INC)</option>
                <option value="icai">Institute of Chartered Accountants of India (ICAI)</option>
                <option value="icsi">Institute of Company Secretaries of India (ICSI)</option>
                <option value="other">Other</option>
                </select>
              </div>

              <select required className="w-full p-2 rounded border border-gray-300 shadow-inner cursor-pointer">
                <option value="">Select Institution Type</option>
                <option value="University">University</option>
                <option value="College">College</option>
                <option value="Institute">Institute</option>
              </select>
            </div>
          </section>

          <section className='cursor-pointer'>
            <h3 className="text-xl font-semibold text-blue-600 mt-6 mb-4">2. Faculty Coordinator Information</h3>
            <div className="space-y-4">
              <input type="text" placeholder="Coordinator Name" required className="w-full p-2 rounded border border-gray-300 shadow-inner" />
              {/* <input type="text" placeholder="Designation" required className="w-full p-2 rounded border border-gray-300 shadow-inner" /> */}
              <input type="email" placeholder="Email Address" required className="w-full p-2 rounded border border-gray-300 shadow-inner" />
              <input type="tel" placeholder="Phone Number" required className="w-full p-2 rounded border border-gray-300 shadow-inner" />
              <input type="text" placeholder="Office Location" required className="w-full p-2 rounded border border-gray-300 shadow-inner" />
            </div>
          </section>

          <section className='cursor-pointer'>
            <h3 className="text-xl font-semibold text-blue-600 mt-6 mb-4">3. Documentation <span className="italic text-gray-500">(Optional)</span></h3>
            <input type="file" className="w-full p-2 rounded border border-gray-300" />
          </section>

          <section className='cursor-pointer'>
            <h3 className="text-xl font-semibold text-blue-600 mt-6 mb-4">4. Payment Particulars</h3>
            <div className="bg-gray-200 p-4 rounded-lg border border-gray-300 shadow-md">
              <p className="mb-2">One Time Collaboration Fees:</p>
              <ul className="space-y-1">
                <li><strong className="text-green-600">5000 INR</strong> - Regular Fee</li>
                <li><strong className="text-green-600">10000 INR</strong> - With <strong>50% Discount</strong> for Limited Time!</li>
              </ul>
              <p className="text-sm text-gray-600 mt-2">:- Payment link/details will be shared after submission.</p>
            </div>
          </section>

         <div className='text-center'>
         <button type="submit" className="bg-blue-600 hover:bg-blue-800 text-white px-6 py-3 rounded-lg font-medium shadow-md transition transform hover:-translate-y-1 cursor-pointer">
            Submit Registration
          </button>
         </div>

        </form>
      </div>
    </motion.div>
    <Footer />
    </>
  );
};

export default CollaborationForm;