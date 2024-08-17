import Button from '@/components/atomic/button/Button';
import Header from '@/components/layout/header/Header';
import SectionCenter from '@/components/layout/sectionCenter/SectionCenter';
import TestimonialCard from '@/components/molecular/testimonialsCard/TestimonialCard';
import Image from 'next/image';

export default function Home() {
    function NewsletterInput() {
        return (
            <div className="flex flex-row justify-start items-start bg-transparent p-0 mt-[2rem]">
                <input
                    type="email"
                    placeholder="Enter your Email...."
                    className="w-[25rem] p-[1.2rem] rounded-tl-[0.4375rem] rounded-bl-[0.4375rem] font-light text-subtitleGray leading-[0.78125rem] text-[0.625rem] h-[50px]"
                />
                <button className="flex justify-center items-center px-[2rem] bg-titleBlack rounded-tr-[0.4375rem] rounded-br-[0.4375rem] text-white font-bold h-[50px] text-[0.8125rem]">
                    Submit
                </button>
            </div>
        );
    }

    return (
        <main className="">
            <Header backgroundImageType="home" type="lg" ClassName="text-white">
                <SectionCenter className="h-full">
                    <div className="flex items-start justify-center h-full flex-col">
                        <div className="text-6xl  font-semibold leading-[5.4rem] max-w-[279rem]">
                            Unlock Your Potential with Expert Guidance and Resources
                        </div>
                        <div className="pt-5">
                            <Button className="text-sm  w-40 h-14">Discover More</Button>
                        </div>
                    </div>
                </SectionCenter>
            </Header>

            {/* Newsletter Section */}
            <section className="w-full pt-[5.625rem] pb-[6.25rem] bg-gradient-primary-linear">
                <SectionCenter className="h-full">
                    <div className="flex justify-center items-start flex-col w-[100%]">
                        <div className="text-[3.5rem] font-italianno text-white leading-[4.25rem] font-normal">
                            Subscribe to Our Newsletter...
                        </div>
                        <div className="text-[1rem] font-lexend text-white leading-[1.625rem] font-light mt-[1.4375rem]">
                            Subscribe to our Gmail notifications for timely updates and important
                            announcements. <br />
                            Never miss out on valuable information and new resources!
                        </div>
                        {/* Newsletter Input Component */}
                        <NewsletterInput />
                    </div>
                </SectionCenter>
            </section>

            {/* Testimonials Section */}
            <section className="w-full py-[6.25rem]">
                <SectionCenter className="h-full">
                    <div className="flex justify-center items-center flex-col w-[100%]">
                        <div className="text-[2rem] font-italianno text-primary leading-10">
                            Testimonials
                        </div>
                        <div className="text-[2rem] font-bold text-titleBlack leading-10">
                            What Our Students Say
                        </div>
                        <div className="text-[1rem] font-light leading-6 text-subtitleGray text-center mt-[1rem]">
                            Hear from Our Satisfied Clients and Students. Real Stories of <br />
                            Success and Satisfaction.
                        </div>
                        <div className="flex justify-center gap-6 w-full pt-12">
                            {Array.from({ length: 3 }).map((_, index) => (
                                <TestimonialCard
                                    key={index}
                                    image="/img/team/David.png"
                                    location="France"
                                    name="Sarah M"
                                    text="Indiginite has been a game-changer for my exam preparation. 
                        The resources are top-notch, and the personalized support made all the difference. 
                        I highly recommend their services!"
                                />
                            ))}
                        </div>
                    </div>
                </SectionCenter>
            </section>
        </main>
    );
}
