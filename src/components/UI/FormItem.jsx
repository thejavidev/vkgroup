import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
} from '@chakra-ui/react'

export const FormItem = ({ item }) => {
    switch (item.type) {
        case 'text':
            return (
                <>
                    <FormLabel  >{item.label}</FormLabel>
                    <FormControl
                        type="text"
                        id={item.label}
                    />
                </>
            )
            break;
        case 'password':
            return (
                <>
                    <FormLabel  >{item.label}</FormLabel>
                    <FormControl
                        type="password"
                        id='inputPasword5'
                    />
                </>
            )
            break;
    }
    return(
        <></>
    )
}
