import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
// import face1 from '../assets/face1.png';
import { FaStar, FaRegStar } from "react-icons/fa";
import { motion } from "framer-motion";
import face1 from "../assets/face1.png";

const testimonials = [
  {
    name: "Rohit Sharma",
    role: "Startup Founder",
    rating: 5,
    review:
      "XpertSwap ne meri legal aur advisory needs ka solution ek hi jagah pe diya. Bahut hi smooth experience tha!",
    image: face1
  },
  {
    name: "Ankita Mehra",
    role: "Tech Entrepreneur",
    rating: 4,
    review:
      "Mentor booking system aur startup guides ne meri journey easy bana di. Thoda aur personalized hota toh 5 stars de deti.",
      image: face1
  },
  {
    name: "Aman Tiwari",
    role: "Founder, LegalEase",
    rating: 5,
    review:
      "Unhone mujhe proper license & document planning diya — bina kisi headache ke. Highly recommended! XpertSwap.",
      image: face1
  },
  {
    name: "Neha Gupta",
    role: "Legal Consultant",
    rating: 4,
    review:
      "Client dashboard and AI legal bot se kaam bahut easy ho gaya. Great initiative! I Loved this platform XpertSwap.",
      image: face1
  },
  {
    name: "Kunal Verma",
    role: "Startup Enthusiast",
    rating: 5,
    review:
      "Jo bhi naya startup start karna chahta hai, unke liye perfect jagah hai XpertSwap.I Loved this platform XpertSwap.",
      image: face1
  },
  {
    name: "Meera Joshi",
    role: "Freelance Developer",
    rating: 4,
    review:
      "Legal docs aur mentor guidance dono ek hi platform par milna rare hota hai. Kudos to the team!I Loved this platform XpertSwap.",
      image: face1
  },
  {
    name: "Yash Malhotra",
    role: "UI/UX Designer",
    rating: 5,
    review:
      "Design aur functionality ka combo is platform pe kamaal ka hai. Interface bhi user-friendly hai!I Loved this platform XpertSwap.",
      image: face1
  },
  {
    name: "Shruti Agarwal",
    role: "Startup Coach",
    rating: 5,
    review:
      "Startups ke liye roadmap banana pehle kabhi itna easy nahi tha. XpertSwap ne kaafi madad ki! I Loved this platform XpertSwap.",
      image: face1
  },
  {
    name: "Nikhil Saxena",
    role: "Business Strategist",
    rating: 4,
    review:
      "Legal docs aur mentor booking process dono hi streamline hai. Bas thoda zyada AI input hota toh better hota.",
      image: face1
  },
  {
    name: "Pooja Bansal",
    role: "Women Entrepreneur",
    rating: 5,
    review:
      "Female founders ke liye mentorship aur legal support ikathe milna rare hota hai — this platform! I Loved this platform XpertSwap.",
      image: face1
  }
];

const TestimonialSection = () => {
  return (
    <motion.section
      className="mx-auto container w-full bg-gradient-to-r from-indigo-50 to-blue-50 py-12 px-4 md:px-20 rounded-md shadow-lg"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <h2 className="text-3xl md:text-4xl font-bold font-robotoMono mb-10 text-left text-black">
        What Our Users Say
      </h2>

      <Swiper
        modules={[Autoplay]}
        spaceBetween={20}
        breakpoints={{
          640: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        loop={true}
      >
        {testimonials.map((testimonial, idx) => (
          <SwiperSlide key={idx}>
            <motion.div
              className="w-full max-w-sm mx-auto bg-white rounded-3xl shadow-xl overflow-hidden"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              {/* <div className="bg-blue-600 p-6 flex flex-col items-center rounded-b-none rounded-t-3xl">
           
              </div> */}

              <div className="bg-white px-6 pt-4 pb-6 text-center rounded-t-none rounded-b-3xl">

                <p className="text-black font-inter text-base text-left mb-4"><svg xmlns="http://www.w3.org/2000/svg" width="22" height="18" viewBox="0 0 22 18" fill="none">
                  <path d="M20.1932 0L22 1.67702C20.8427 2.74534 19.898 3.7764 19.1659 4.77019C18.4573 5.73913 18.0086 6.47205 17.8196 6.96894C17.6307 7.46584 17.4536 8.06211 17.2882 8.75776L17.43 8.98137C19.0123 8.98137 20.1696 9.34161 20.9018 10.0621C21.6339 10.7826 22 11.9006 22 13.4162C22 14.5839 21.5985 15.6398 20.7955 16.5839C20.0161 17.528 19.036 18 17.8551 18C16.5089 18 15.387 17.6025 14.4895 16.8075C13.5921 16.0124 13.1433 14.7329 13.1433 12.9689C13.1433 10.6335 13.8282 8.2236 15.1981 5.73913C16.5915 3.22981 18.2566 1.31677 20.1932 0ZM7.04992 0L8.85668 1.67702C7.69941 2.74534 6.7665 3.76398 6.05797 4.73292C5.34944 5.70186 4.88889 6.44721 4.67633 6.96894C4.48739 7.49068 4.31025 8.08696 4.14493 8.75776L4.28663 8.98137C5.86903 8.98137 7.0263 9.34161 7.75845 10.0621C8.49061 10.7826 8.85668 11.9006 8.85668 13.4162C8.85668 14.5839 8.45518 15.6398 7.65217 16.5839C6.87279 17.528 5.89265 18 4.71175 18C3.36554 18 2.24369 17.6025 1.34622 16.8075C0.448739 16.0124 0 14.7329 0 12.9689C0 10.6335 0.684917 8.2236 2.05475 5.73913C3.4482 3.22981 5.11326 1.31677 7.04992 0Z" fill="#1D4ED8" />
                </svg>{testimonial.review}</p>
                <div className="flex justify-between items-center">
                  <div>
                    <img
                      src={testimonial.image}
                      alt=""
                      className="w-14 h-14 rounded-full border-2 border-blue-500 object-cover mb-1"
                    />
                    <h3 className="text-xl font-bold text-gray-800">{testimonial.name}</h3>
                    <p className="text-sm text-black mb-3">{testimonial.role}</p>
                  </div>
                  <div className="flex justify-center mb-3 text-yellow-500">
                    {[...Array(5)].map((_, i) =>
                      i < testimonial.rating ? (
                        <FaStar key={i} />
                      ) : (
                        <FaRegStar key={i} />
                      )
                    )}
                  </div>
                </div>
                {/* <button className="bg-blue-600 text-white px-4 py-2 rounded-xl text-sm hover:bg-blue-700 transition">
                  View More
                </button> */}
              </div>
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>
    </motion.section>
  );
};

export default TestimonialSection;