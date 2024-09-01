import Footer from "../Components/Footer";
import Header from "../Components/Header"
import Hero from "../Components/Hero";

interface Props{
    children: React.ReactNode;
}

const Layout=({children}:Props)=>{
    // const [page, setPage]=useState<Number>(1)
    // const handlePageClick=(pageNo:Number)=>{
    //     setPage(pageNo);
    // }
    return <div className="flex flex-col min-h-screen">

        <Header/>
        <Hero/>
       {/* <Pagination handleOnClick={handlePageClick} page={page} total={150} pageSize={12}/> */}
        <div className="container mx-auto py-10 flex-1">
            {children}
        </div>
        <Footer/>
    </div>
}

export default Layout;