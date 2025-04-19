import { Outlet, useLocation } from "react-router-dom"
import Navigation from "../components/common/Navigation"
import Footer from "../components/common/Footer"
import SubNavigation from "../components/common/SubNavigation"
import { useEffect } from "react"

const MasterLayout = () => {
  const location = useLocation()

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, [location.pathname]);

  return (
    <>
      <main className="min-h-[calc(100vh-56px)]">
        <SubNavigation />
        <Navigation />
        <Outlet />
      </main>
      <Footer />
    </>
  )
}

export default MasterLayout
