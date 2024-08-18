import React, { ReactNode } from 'react';
import SectionCenter from './SectionCenter';

interface IProps {
    title: string;
    titleStyles?: string;
}

const HeaderTitle: React.FC<IProps> = ({ title, titleStyles }) => {
    return (
        <SectionCenter className="h-full text-white ">
            <div className="h-full flex items-end pb-[90px]">
                <div className="flex items-center">
                    <span
                        className={`text-6xl  font-semibold leading-[5.4rem] max-w-[279rem] max-xl:text-4xl
                            max-lg:text-2xl ${titleStyles}`}
                    >
                        {title}
                    </span>
                    <div className="w-[89px] h-[1.5px] mt-3 ml-6  bg-white"></div>
                </div>
            </div>
        </SectionCenter>
    );
};

export default HeaderTitle;
