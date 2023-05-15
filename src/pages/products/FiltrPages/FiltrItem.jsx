import React from 'react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router';

const FiltrItem = ({text}) => {
    const [t] = useTranslation("translation");
    return (
        <>
            <div className="w-full-h-full block pt-[8px] pb-[8px] pl-[20px] pr-[20px] text-[20px]  hover:text-[#000]">
                {text}
            </div>
        </>
    )
}

export default FiltrItem
