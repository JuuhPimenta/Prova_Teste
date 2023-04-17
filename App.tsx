import React, {Dispatch, SetStateAction, useState} from 'react';
import {Page1} from "./src/screens/Page1";
import {Page2} from "./src/screens/Page2";
export interface IPage{
  setPageI: Dispatch<SetStateAction<number>>
}
export default function App() {
  const [page, setPage] = useState(1)
  switch (page) {

    case 1:
      return <Page1 setPageI={setPage}/>
    default:
      return <Page2 setPageI={setPage}/>
  }

  return (
    <>
      {page ==1 ? <Page1 setPageI={setPage} /> : <Page2 setPageI={setPage}/>}
    </>

  );
}

