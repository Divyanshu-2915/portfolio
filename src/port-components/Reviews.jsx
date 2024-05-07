import React from 'react'
import Marquee from 'react-fast-marquee'

const ReviewPage = () => {
  const reviews = [
    {
        "image": `../images/reviews/work-sangam.png`,
        "review": "From concept to execution,Divyanshu exceeded all expectations. His brilliant strategies and flawless execution propelled our success beyond imagination. With his unwavering dedication and unparalleled expertise, he has earned our utmost trust and admiration.",
        "name": "Dr. Shweta Bohra",
        "designation": "Chairperson Fine Arts Club, Sangam University"
    },
    {
        "image": `../images/reviews/work-trifusion.png`,
        "review": "Choosing him was the best decision we made for our business. His creative genius and unwavering dedication transformed our vision into reality. With Divyanshu, excellence isn't just a goal – it's a guarantee.",
        "name": "Hardik Singhal",
        "designation": "Managing Director, The TriFusion"
    },
    {
        "image": `../images/reviews/work-raindrops.png`,
        "review": "Working with Divyanshu has been a revelation. Their blend of creativity and precision delivered results beyond our wildest dreams. He didn't just meet our needs; he anticipated them with finesse. it's the constellations of innovation we navigate together, charting new paths in the cosmos of success.",
        "name": "Sachin Sharma",
        "designation": "Owner, Raindrop Resturant"
    },
    {
        "image": `../images/reviews/work-ratanshree.png`,
        "review": "Fantastic work! The new website is sleek, responsive, and user-friendly. The developer was attentive to our needs and delivered a high-quality result.",
        "name": "Rahul Joshi ",
        "designation": "Owner, Ratanshree Naturals"
    },
    {
        "image": `../images/reviews/work-skits.png`,
        "review": "An amazing experience from start to finish! The web design process was smooth, and the end result exceeded my expectations. Highly recommended!",
        "name": "Emily Davis",
        "designation": "Owner, S-Kits"
    },
    {
        "image": `../images/reviews/work-hashtrust.png`,
        "review": "His performance exceeded our expectations and he was able to complete the project on time. We found him sincere, hardworking and dedicated towards his work.",
        "name": "Charig Maliwal",
        "designation": "Managing Director, Hashtrust Technologies"
    }
]
  
  return (
    <>
      <section>
          <div className="h-max w-full flex flex-col gap-16 justify-center items-center py-16 text-[#2B283E]">
                      <div className="font-basicSix px-8 text-center w-full">
              <div className="flex flex-col gap-2">
                <h1 className='text-[6vh] xm:text-[7vh]'>-Clients Testimonials</h1>
                <div className="flex flex-col lg:flex-row gap-0 lg:gap-2 leading-tight lg:leading-normal text-[9vh] xm:text-[10vh] justify-center">
                  <h1>Testimonials that </h1>
                  <h1 className="text-[#47A992]">Speaks to My Results</h1>
                </div>
              </div>
            </div>
            <div className='w-full h-max p-8'>
            <Marquee className='flex flex-row gap-8' pauseOnHover autoFill='false'>
            {reviews.map((d) => {
              return(
                <>
                <div className='h-max flex flex-col xl:flex-row gap-4 bg-[#D6D9EF] rounded-3xl text-[#2B283E] p-4 mx-32 max-w-1/2 justify-center items-center'>
                  <img src={d.image} alt="" className='w-44 h-56 rounded-full bg-[#F3F3FA] '/>
                  <div className='flex flex-col gap-2 font-basicFour text-wrap w-96 h-72 justify-center text-center xl:text-start'>
                  <p className='text-xl'>{d.review}</p>
                  <h1 className='text-2xl'>{d.name}</h1>
                  <p className='text-lg'>{d.designation}</p>
                  </div>
                </div>
                </>
              )
            })}
            </Marquee>
            </div>
          </div>
        </section>
    </>
  )
}

export default ReviewPage