import React from 'react';
import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
} from '@chakra-ui/react';
import { FormItem } from './FormItem';

const MultiStepPages = (props) => {
    return (
        <>
            <FormControl>
                {
                    props.list[props.step - 1].items?.map((item,i)=>(
                        <div  key={i}>
                            <FormItem item={item} />
                        </div>
                    ))
                }
            </FormControl>
        </>
    )
}

export default MultiStepPages
