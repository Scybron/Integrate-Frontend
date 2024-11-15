import Image from 'next/image';
import './serviceCard.css';
import { Fade, Slide } from 'react-awesome-reveal';

type Props = {
    image: string;
    title: string;
    description: string;
};

const ServiceCard = ({ image, title, description }: Props) => {
    return (
        <div className="bg-white grid grid-rows-[auto,1fr] items-center w-64 min-w-64 rounded-lg h-64 p-6 gap-6 _service-card-box-shadow snap-start">
            <Slide duration={1000} direction="down" triggerOnce className="h-14">
                <div className="flex justify-center h-12">
                    <Image src={image} alt="tutoring" className="me-4" width={50} height={50} />
                </div>
            </Slide>
            <Fade duration={2000} triggerOnce className="h-full">
                <div className="flex flex-col gap-2 ">
                    <h2 className="text-2xl font-bold text-titleBlack capitalize">{title}</h2>
                    <p className="text-base font-light text-textMuted">{description}</p>
                </div>
            </Fade>
        </div>
    );
};

export default ServiceCard;
