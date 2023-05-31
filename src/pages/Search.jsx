import React, { useState } from 'react';
import { Input } from '@chakra-ui/react';
import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';
import { getMultiLang as ml } from '../components/MultiLang';

const Search = ({ products }) => {
    // const subCategories1 = products?.[1]?.sub_categories_1;
    // const urlname = 'xidmetler/';
    // const url = urlname + products?.[1]?.slug_az;

    // const [text, setText] = useState('')

    // const filtered = subCategories1?.filter((item) => {
    //     return Object.keys(item).some((key) =>
    //         item[key]?.toString()?.toLowerCase()?.includes(text?.toLowerCase())
    //     )
    // })

    return (
        <>
            {/* <Container >
                <div className="mt-[100px]"></div>
                <Input placeholder='axtar' value={text} onChange={(e) => setText(e.target.value)} className='w-full border-2 p-3' />
                {
                    filtered && filtered?.slice(0, 1).map((cur, index) => (
                        <Link key={index} to={`/${url}/${cur?.slug_az}`}>
                            <div className="flex flex-col text-[20px] capitalize mt-[10px] mb-3">
                                {ml(cur?.name_az, cur?.name_ru, cur?.name_en)}
                            </div>
                        </Link>
                    ))
                }
            </Container>

            <div className={`search absolute right-[-100%] z-20 top-28 p-2 bg-[--bgf] w-[400px] inputDiv transitions`} >
                <div className="ml-2 mr-2">
                    <Input type="text" className=' w-full  outline-none p-2 bg-[--bgd] text-[--text]' value={text} onChange={(e) => setText(e.target.value)} placeholder={t("search")} />
                </div>
                <div className="text ml-3 mt-2 mr-2">
                    {
                        filtered && filtered?.slice(0, 1)?.map((cur, index) => (
                            <div key={index} onClick={() => {
                                navigate(`/${url}/${cur?.slug_az}`)
                                document?.querySelector('.inputDiv')?.classList?.toggle('openSearch');
                            }}>
                                <div className="flex flex-col " >
                                    <Text className='text-[20px] capitalize  cursor-pointer transitions text-[#fff] hover:text-blue-700 hover:underline'>
                                        {ml(cur?.name_az, cur?.name_ru, cur?.name_en)}
                                    </Text>
                                </div>
                            </div>
                        ))
                    }

                </div>
            </div> */}
        </>
    )
}

export default Search
