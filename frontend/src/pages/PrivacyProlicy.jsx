import React from 'react';
import Header from "../components/Header";
import Footer from "../components/Footer";
import { motion } from 'framer-motion';

const PrivacyPolicy = () => {
  return (
    <>
      <Header />
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className='p-2 sm:p-4 bg-white min-h-screen'>
        <div className="container  flex flex-col lg:flex-row justify-between items-center gap-6 lg:gap-0 mx-auto max-w-6xl">
          <div className="right w-full lg:max-w-2xl mx-auto lg:mx-0">
            <h1 className='text-2xl sm:text-3xl font-semibold font-robotoMono pb-2 sm:pb-3 text-center lg:text-left'>Privacy Policy</h1>
            <p className='text-sm sm:text-base pb-2 sm:pb-4 text-gray-400 font-inter text-center lg:text-left'>updated on 15-04-2025</p>
            <div className="shadow-xl rounded-xl mt-2 sm:mt-4 bg-blue-900">
              <div className='bg-white space-y-4 p-4 sm:p-5 sm:py-8 relative left-0 sm:left-2 rounded-xl'>
                <h1 className='text-xl sm:text-2xl font-semibold font-robotoMono text-center lg:text-left'>Introduction</h1>
                <p className='text-sm sm:text-base'>We at XpertSwap are committed to safeguarding the privacy of our website visitors and users; in this policy, we explain how we will treat your personal information.</p>
                <div className='bg-blue-100 rounded-xl border border-black'>
                  <div className='p-3 sm:p-4 font-bold text-center sm:text-left'>Important: <span className='font-normal'> By using our website and agreeing to this policy, you consent to our use of cookies in accordance with the terms of this policy.</span></div>
                </div>
              </div>
            </div>
          </div>
          <div className="left w-full lg:w-auto p-4 sm:p-6 text-[#0031BC] space-y-2 sm:space-y-3 shadow-xl rounded-xl bg-white order-first lg:order-none mb-4 lg:mb-0">
            <h1 className='text-xl sm:text-2xl text-black font-semibold text-center lg:text-left'>Table of Contents</h1>
            <div className="space-y-1 text-sm sm:text-base">
              <div>Introduction</div>
              <div>Collecting Personal Information</div>
              <div>Using Your Personal Information</div>
              <div>Disclosing Personal Information</div>
              <div>International Data Transfers</div>
              <div>Retaining Personal Information</div>
              <div>Security of Your Personal Information</div>
              <div>Payment Information</div>
              <div>Your Rights</div>
              <div>Third-Party Websites</div>
              <div>Cookies</div>
              <div>Updates to this Policy</div>
            </div>
          </div>
        </div>
        <div className="w-full max-w-6xl space-y-6 mx-auto flex flex-col gap-6 mt-2 sm:mt-6">
          <div className="shadow-xl w-full rounded-xl bg-blue-900 mx-auto">
            <div className='bg-white p-4 relative left-4 sm:p-14 py-6 sm:py-8 rounded-xl'>
              <h1 className='text-xl sm:text-3xl font-semibold font-robotoMono pb-2 sm:pb-3 text-left'>Collecting Personal Information</h1>
              <p className='text-sm sm:text-base'>We collect several types of information to provide and improve our services:</p>
              <ul className="list-disc pl-5 text-sm sm:text-base">
                <li>Information you provide during registration, such as your name, email address, mobile number, and skill interests.</li>
                <li>Information related to your use of the services offered by XpertSwap, including skill exchanges, bookings, session history, and payment transactions.</li>
                <li>Information you provide for subscribing to notifications or newsletters (including name and email).</li>
                <li>Communication details and content shared through messages, enquiry forms, feedback, or any form of interaction.</li>
                <li>Any other personal information you choose to share with us.</li>
              </ul>
              <div className='bg-blue-100 rounded-xl border border-black mt-4'>
                <div className='p-3 sm:p-4 font-bold text-center'>Important Notice: <span className='font-normal'> Before sharing any personal information of another person, you must obtain that person's consent for both the disclosure and the processing of their data according to this policy.</span></div>
              </div>
            </div>
          </div>
          <div className="shadow-xl w-full rounded-xl bg-blue-900 mx-auto">
            <div className='bg-white relative left-4 p-4 sm:p-14 py-6 sm:py-8 rounded-xl'>
              <h1 className='text-xl sm:text-3xl font-semibold font-robotoMono pb-2 sm:pb-3 text-left'>Using Your Personal Information</h1>
              <p className='text-sm sm:text-base'>We use your personal information for the following purposes:</p>
              <ul className="list-disc pl-5 text-sm sm:text-base">
                <li>Administer and operate the XpertSwap platform</li>
                <li>Enable your participation in skill exchanges and paid learning services</li>
                <li>Personalise the website for a better user experience</li>
                <li>Send you notifications, reminders, or other communications you've opted into</li>
                <li>Process payments and bookings securely</li>
                <li>Handle enquiries, complaints, or feedback</li>
                <li>Maintain the security of the platform and prevent fraud</li>
              </ul>
              <div className='bg-blue-100 rounded-xl border border-black mt-4'>
                <div className='p-3 sm:p-4 font-bold text-center'>Content Publication: <span className='font-normal'> If you submit content for publication (e.g., reviews, profiles), we will use and display that information under the license you grant us.</span></div>
              </div>
            </div>
          </div>
          <div className="shadow-xl w-full rounded-xl bg-blue-900 mx-auto">
            <div className='bg-white relative left-4 p-4 sm:p-14 py-6 sm:py-8 rounded-xl'>
              <h1 className='text-xl sm:text-3xl font-semibold font-robotoMono pb-2 sm:pb-3 text-left'>Disclosing Personal Information</h1>
              <p className='text-sm sm:text-base'>We may disclose your personal information to:</p>
              <ul className="list-disc pl-5 text-sm sm:text-base">
                <li>Our employees, partners, advisers, and agents where reasonably necessary for the purposes of this policy</li>
                <li>Legal authorities if required by law</li>
                <li>Enforce or defend our legal rights (including sharing info with fraud prevention agencies)</li>
                <li>Potential buyers or investors in case of a business sale or reorganisation</li>
                <li>Any person we believe may apply to a competent authority or court for disclosure, where such disclosure is likely to be ordered</li>
              </ul>
              <div className='bg-blue-100 rounded-xl border border-black mt-4'>
                <div className='p-3 sm:p-4 font-bold text-center'>Privacy Commitment: <span className='font-normal'>We will not share your personal information with third parties except as stated above or where you've given specific consent.</span></div>
              </div>
            </div>
          </div>
          <div className="shadow-xl w-full rounded-xl bg-blue-900 mx-auto">
            <div className='bg-white relative left-4 p-4 sm:p-14 py-6 sm:py-8 rounded-xl'>
              <h1 className='text-xl sm:text-3xl font-semibold font-robotoMono pb-2 sm:pb-3 text-left'>International Data Transfers</h1>
              <p className='text-sm sm:text-base pb-2 sm:pb-4'>Information we collect may be stored or processed in countries where we or our partners operate. By using our website, you agree to these international transfers of your data.</p>
              <div className='bg-blue-100 rounded-xl border border-black mt-4'>
                <div className='p-3 sm:p-4 font-bold text-center'>Global Access: <span className='font-normal'>Content or personal data published on the site may be accessible globally, and we cannot control how others use such information.</span></div>
              </div>
            </div>
          </div>
          <div className="shadow-xl w-full rounded-xl bg-blue-900 mx-auto">
            <div className='bg-white relative left-4 p-4 sm:p-14 py-6 sm:py-8 rounded-xl'>
              <h1 className='text-xl sm:text-3xl font-semibold font-robotoMono pb-2 sm:pb-3 text-left'>Retaining Personal Information</h1>
              <p className='text-sm sm:text-base'>We retain personal information only as long as necessary for the purposes outlined in this policy:</p>
              <ul className="list-disc pl-5 text-sm sm:text-base">
                <li>As required by law</li>
                <li>If relevant to ongoing or future legal proceedings</li>
                <li>Enforce or defend our legal rights (including sharing info with fraud prevention agencies)</li>
                <li>To protect, establish, or enforce our legal rights</li>
              </ul>
            </div>
          </div>
          <div className="shadow-xl w-full rounded-xl bg-blue-900 mx-auto">
            <div className='bg-white relative left-4 p-4 sm:p-14 py-6 sm:py-8 rounded-xl'>
              <h1 className='text-xl sm:text-3xl font-semibold font-robotoMono pb-2 sm:pb-3 text-left'>Security of Your Personal Information</h1>
              <p className='text-sm sm:text-base'>We take reasonable technical and organisational precautions to prevent the loss, misuse, or alteration of your personal data.</p>
              <p className='pb-2 sm:pb-4 text-sm sm:text-base'>Your data is stored on secure servers with appropriate password and firewall protection.</p>
              <div className='bg-blue-100 rounded-xl border border-black mt-4'>
                <div className='p-3 sm:p-4 font-bold text-center'>Security Disclaimer: <span className='font-normal'> However, internet-based data transmission is not fully secure, and we cannot guarantee the complete security of your information.</span></div>
              </div>
            </div>
          </div>
          <div className="shadow-xl w-full rounded-xl bg-blue-900 mx-auto">
            <div className='bg-white relative left-4 p-4 sm:p-14 py-6 sm:py-8 rounded-xl'>
              <h1 className='text-xl sm:text-3xl font-semibold font-robotoMono pb-2 sm:pb-3 text-left'>Payment Information</h1>
              <p className='pb-2 sm:pb-4 text-sm sm:text-base'>We do not store your credit or debit card information.</p>
              <div className='bg-blue-100 rounded-xl border border-black mt-4'>
                <div className='p-3 sm:p-4 font-bold text-center'>Secure Processing: <span className='font-normal'> All transactions are securely processed through trusted third-party payment gateways that comply with PCI-DSS and industry security standards.</span></div>
              </div>
            </div>
          </div>
          <div className="shadow-xl w-full rounded-xl bg-blue-900 mx-auto">
            <div className='bg-white relative left-4 p-4 sm:p-14 py-6 sm:py-8 rounded-xl'>
              <h1 className='text-xl sm:text-3xl font-semibold font-robotoMono pb-2 sm:pb-3 text-left'>Your Rights</h1>
              <p className='text-sm sm:text-base'>You have the right to:</p>
              <ul className="list-disc pl-5 text-sm sm:text-base">
                <li>Access, update, or delete your personal data</li>
              </ul>
              <div className='bg-blue-100 text-center rounded-xl border border-black mt-4'>
                <div className='p-3 sm:p-4 font-bold text-center'>
                  <p className='text-center'>To exercise these rights, please contact us at:</p>
                  <div className='text-blue-900 break-all'>xpertswap.official@gmail.com</div>
                </div>
              </div>
            </div>
          </div>
          <div className="shadow-xl w-full rounded-xl bg-blue-900 mx-auto">
            <div className='bg-white relative left-4 p-4 sm:p-14 py-6 sm:py-8 rounded-xl'>
              <h1 className='text-xl sm:text-3xl font-semibold font-robotoMono pb-2 sm:pb-3 text-left'>Third-Party Websites</h1>
              <p className='pb-2 sm:pb-4 text-sm sm:text-base'>Our platform may include links to external websites.</p>
              <div className='bg-blue-100 rounded-xl border border-black mt-4'>
                <div className='p-3 sm:p-4 font-bold text-center'>Disclaimer: <span className='font-normal'> We are not responsible for the privacy practices or content of any third-party sites.</span></div>
              </div>
            </div>
          </div>
          <div className="shadow-xl w-full rounded-xl bg-blue-900 mx-auto">
            <div className='bg-white relative left-4 p-4 sm:p-14 py-6 sm:py-8 rounded-xl'>
              <h1 className='text-xl sm:text-3xl font-semibold font-robotoMono pb-2 sm:pb-3 text-left'>Cookies</h1>
              <p className='text-sm sm:text-base'>We use cookies to enhance user experience, improve site functionality, and analyze user behavior.</p>
              <p className='pb-2 sm:pb-4 text-sm sm:text-base'>Cookies are small files stored on your device. By continuing to use XpertSwap, you consent to our use of cookies as described.</p>
              <div className='bg-blue-100 rounded-xl border border-black mt-4'>
                <div className='p-3 sm:p-4 font-bold text-center'>Policy Updates: <span className='font-normal'> This Privacy Policy may be updated without prior notice. We encourage you to periodically review this policy to stay informed about how we protect your information. When updated, the last updated date at the top will be changed accordingly.</span></div>
              </div>
            </div>
          </div>
          <div className="shadow-xl w-full rounded-xl bg-blue-900 mx-auto">
            <div className='bg-white relative left-4 p-4 sm:p-14 py-6 sm:py-8 rounded-xl'>
              <h1 className='text-xl sm:text-3xl font-semibold font-robotoMono pb-2 sm:pb-3 text-left'>Updates to this Policy</h1>
              <p className='pb-2 sm:pb-4 text-sm sm:text-base'>Our platform may include links to external websites.</p>
              <div className='bg-blue-100 rounded-xl border border-black mt-4'>
                <div className='p-3 sm:p-4 font-bold text-center'>Policy Updates: <span className='font-normal'> This Privacy Policy may be updated without prior notice. We encourage you to periodically review this policy to stay informed about how we protect your information. When updated, the last updated date at the top will be changed accordingly.</span></div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
      <Footer />
    </>
  );
};

export default PrivacyPolicy;