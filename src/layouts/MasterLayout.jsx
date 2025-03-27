import { Outlet } from "react-router-dom"
import Navigation from "../components/common/Navigation"
import Footer from "../components/common/Footer"
import SubNavigation from "../components/common/SubNavigation"

const MasterLayout = () => {
  return (
    <>
       <main className="min-h-[calc(100vh-56px)]">
          <SubNavigation/>
          <Navigation/>
          <Outlet/>
       </main>
       <Footer/>
    </>
  )
}

export default MasterLayout