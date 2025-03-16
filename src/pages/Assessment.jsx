import React from 'react'
import Qna from '../components/Qna'
import Footer2 from '../components/Footer2'
import Result from '../components/Result'

const Assessment = () => {
  return (
    <div>
        {true? <Result/>:<Qna/>}
        <Footer2/>
    </div>
  )
}

export default Assessment