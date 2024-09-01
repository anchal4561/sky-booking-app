
const Pagination = ({ handleOnClick, page, total, pageSize }: any) => {

    const NoOfpages = Math.ceil(total / pageSize);

    const pageArray =new Array(NoOfpages>=10? 10: NoOfpages).fill(((page-4)<1) ? 1: page+5>
    NoOfpages?((NoOfpages-9)<1?1 :(NoOfpages-9)):(page-4)).map((el,i)=>{

        return el+i;
    })
    return (
        <div>
            <ul className="flex justify-item-center">
                <p className="m-2">{page} of {NoOfpages}</p>
                <li>
                    <button className="text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                        disabled={page == 1} onClick={() => handleOnClick(page - 1)}>Prev</button>
                </li>

                {pageArray.map((el)=>
                    <li><button  onClick={()=>handleOnClick(el)}
                     className={`text-white ${el==page?"bg-red-700 outline-none ring-2 ring-red-300":"bg-blue-700"} font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2`}>
                        
                        {el}</button></li>
                )}
                <li>
                    <button className="text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                        disabled={page == NoOfpages} onClick={() => handleOnClick(page + 1)}>Next</button>

                </li>

            </ul>

        </div>
    )
}

export default Pagination