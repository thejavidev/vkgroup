// import { Stepper } from '@chakra-ui/react';
// import React, { useCallback, useState } from 'react'
// import { Button, Form } from 'react-bootstrap';
// const stepPages = [];

// const Comments = ({ }) => {
//     const [step, setStep] = useState(0);
//     const [formState, setFormState] = useState({});
//     const [steps, setSteps] = useState([
//         {
//             label: "Account Details",
//             isValid: undefined,
//         },
//         {
//             label: "Personal Details",
//             isValid: undefined,
//         },
//         {
//             label: "Payment Details",
//             isValid: undefined,
//         },
//     ]);
//     const lastStepIndex = steps.length - 1;
//     const isLastStep = lastStepIndex === step;
//     const onStepSubmit = useCallback(
//         (event) => {
//             const { isValid, values } = event;
//             const currentSteps = steps.map((currentStep, index) => ({
//                 ...currentStep,
//                 isValid: index === step ? isValid : currentStep.isValid,
//             }));
//             setSteps(currentSteps);
//             if (!isValid) {
//                 return;
//             }
//             setStep(() => Math.min(step + 1, lastStepIndex));
//             setFormState(values);
//             if (isLastStep) {
//                 alert(JSON.stringify(values));
//             }
//         },
//         [steps, isLastStep, step, lastStepIndex]
//     );
//     const onPrevClick = useCallback(
//         (event) => {
//             event.preventDefault();
//             setStep(() => Math.max(step - 1, 0));
//         },
//         [step, setStep]
//     );
//     return (
//         <>
//             <div
//                 style={{
//                     display: "flex",
//                     flexDirection: "column",
//                     justifyContent: "center",
//                 }}
//             >
//                 <Stepper value={step} items={steps} />
//                 <form
//                     initialValues={formState}
//                     onSubmitClick={onStepSubmit}
//                     render={(formRenderProps) => (
//                         <div
//                             style={{
//                                 alignSelf: "center",
//                             }}
//                         >
//                             <div
//                                 style={{
//                                     width: 480,
//                                 }}
//                             >
//                                 {stepPages[step]}
//                                 <span
//                                     style={{
//                                         marginTop: "40px",
//                                     }}
//                                     className={"k-form-separator"}
//                                 />
//                                 <div
//                                     style={{
//                                         justifyContent: "space-between",
//                                         alignContent: "center",
//                                     }}
//                                     className={
//                                         "k-form-buttons k-button k-button-md k-rounded-md k-button-solid k-button-solid-bases-end"
//                                     }
//                                 >
//                                     <span
//                                         style={{
//                                             alignSelf: "center",
//                                         }}
//                                     >
//                                         Step {step + 1} of 3
//                                     </span>
//                                     <div>
//                                         {step !== 0 ? (
//                                             <Button
//                                                 style={{
//                                                     marginRight: "16px",
//                                                 }}
//                                                 onClick={onPrevClick}
//                                             >
//                                                 Previous
//                                             </Button>
//                                         ) : undefined}
//                                         <Button
//                                             themeColor={"primary"}
//                                             disabled={!formRenderProps.allowSubmit}
//                                             onClick={formRenderProps.onSubmit}
//                                         >
//                                             {isLastStep ? "Submit" : "Next"}
//                                         </Button>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     )}
//                 />
//             </div>
//         </>
//     )
// }

// export default Comments
