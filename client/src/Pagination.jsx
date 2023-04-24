import { useEffect, useState } from 'react'
import Results from './Results'
const Pagination = (props) => {
    const [page, setPage] = useState(1)
    const [showBtn, setShowBtn] = useState('none')
    const [showPagination, setShowPagination] = useState('block')


    useEffect(() => {
        if(props.query!==null ){
            setShowBtn('block')
            setShowPagination('block')
        }
        if(props.query==='4'){
            setShowPagination('none')
        }
        console.log(props);
        console.log(showPagination);
        
        setPage(1)
    }, [props.query])
    useEffect(() => {
        if(page<1){
            setPage(1)
        }
    }, [page])
   


    const handlePrev = (e) => {
        e.preventDefault()
        setPage(page - 1)
    }

    const handleNext = (e) => {
        e.preventDefault()
        setPage(page + 1)
    }



  return (
    <div>
    <div style={{display: showBtn}}>
        <div className="d-flex justify-content-between mx-5 mb-2 pe-3 ps-4">
        <p className='text-primary mt-2 ms-2 te h1'>#Results</p>
        <div style={{display: showPagination}}>
        <div className="d-flex align-items-center" >
        <button className='btn bg-white mx-4 ' onClick={handlePrev}>&lt;</button>
        <p className='text-white mt-2'>{page}</p>
        <button className='btn bg-white mx-4' onClick={handleNext}>&gt;</button>
        </div>
        </div>
        </div>

    </div>
    <Results query={props.query} page={page} />

    </div>
  )
}

export default Pagination