import React from 'react';
import "react-step-progress-bar/styles.css";
import { ProgressBar, Step } from "react-step-progress-bar";


const MultiStepProgressBar = (props) => {
    return (
        <>
            <ProgressBar
                percent={((props.step - 1) * 100) / 3}
                filledBackground="linear-gradient(to right, #fefb72, #f0bb31)"
            >
                <Step transition="">
                    {({ accomplished, index }) => (
                        <div className='absolute left-0 w-[150px]'>
                            <div className={`step  ${accomplished ? "completed" : ""}`}>

                            </div>
                            <div className={` w-full absolute left-[0] top-0 pl-[30px] text-[18px] font-[600] ${props.step > 1 ? "text-[#ff0000] " : "text-[#000]"} `}>Bolmeni secin</div>
                        </div>
                    )}
                </Step>
                <Step transition="">
                    {({ accomplished, index }) => (
                        <>
                            <div className='absolute left-0 w-[250px]'>
                                <div className={`step ${accomplished ? "completed" : ""}`}>
                                    2
                                </div>
                                <div className={` w-full absolute left-[0] top-0 pl-[30px] text-[18px] font-[600] ${props.step > 2 ? "text-[#ff0000] " : "text-[#000]"} `}>XİDMƏT NÖVÜNÜ SEÇİN</div>
                            </div>
                        </>

                    )}
                </Step>
                <Step transition="">
                    {({ accomplished, index }) => (
                        <div className='absolute left-0 w-[250px]'>
                            <div className={`step ${accomplished ? "completed" : ""}`}>
                                3
                            </div>
                            <div className={` w-full absolute left-[0] top-0 pl-[30px] text-[18px] font-[600] ${props.step > 3 ? "text-[#ff0000] " : "text-[#000]"} `}>RƏY BİLDİRİN</div>
                        </div>
                    )}
                </Step>
                <Step transition="">
                    {({ accomplished, index }) => (
                        <div className={`step ${accomplished ? "completed" : ""}`}>
                            4
                        </div>
                    )}
                </Step>
            </ProgressBar>

        </>
    )
}

export default MultiStepProgressBar
