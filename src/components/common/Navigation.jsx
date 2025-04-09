import { useState } from 'react';
import { Drawer, Menu } from 'antd';
import { FiLayers } from 'react-icons/fi';
import { CiMenuBurger } from 'react-icons/ci';
import { MdOutlineClose, MdOutlineDashboardCustomize } from 'react-icons/md';
import { AiOutlineLogout } from 'react-icons/ai';
import { TbArrowsExchange, TbReportSearch } from 'react-icons/tb';
import { FaRegUser } from 'react-icons/fa';
import { GoTasklist } from 'react-icons/go';
import { Link } from 'react-router-dom';
import logoImage from '../../../src/assets/images/oasis2.png'

const Navigation = () => {
  const [drawerVisible, setDrawerVisible] = useState(false);
  const [openKeys, setOpenKeys] = useState([]);

  const showDrawer = () => setDrawerVisible(true);
  const closeDrawer = () => setDrawerVisible(false);

  const handleMenuClick = () => setDrawerVisible(false);
  const handleOpenChange = (keys) => {
    if (keys.length > 0) {
      const latestOpenKey = keys[keys.length - 1];
      setOpenKeys([latestOpenKey]);
    } else {
      setOpenKeys([]);
    }
  };

  const userMenu = [
    {
      label: "User",
      icon: <FaRegUser />,
      key: 'user',
      children: [
        { label: 'Change Password', key: 'changePassword', icon: <TbArrowsExchange /> },
        { label: 'Logout', key: 'logout', icon: <AiOutlineLogout /> },
      ],
    },
  ];

  const menuItems = [
    { label: <Link to={"/"}>HOME</Link>, key: 'home' },
    {
      label: 'ABOUT', key: 'about',
      children: [
        { label: <Link to={"/about-school"}>About School</Link>, key: 'aboutSchool'},
        { label: <Link to={"/director-message"}>Director's Message</Link>, key: 'directorsMessage'},
        { label: <Link to={"/achievements"}>Achievements</Link>, key: 'achievements' },
        { label: <Link to={"/news-media"}>News & Media</Link>, key: 'news_Media' },
        { label: <Link to={"/alumni"}>Alumni Registration</Link>, key: 'alumniRegistration'},
        { label: <Link to={"/careers"}>Careers</Link>, key: 'careers' },
        // { label: <Link to={"/downloads"}>Downloads</Link>, key: 'downloads' },
        {
          label: 'Downloads', key: 'downloads',
          children: [
            { label: 'Online Registration', key: 'onlineRegistration' },  // Admission Form under Downloads
          ]
        },
      ]
    },
    {
      label: 'ACADEMIC', key: 'Academic',
      children: [
        { label: 'Admissions', key: 'Addmissions', 
          children: [
            { label: 'Greetings from Mayur', key: 'greetingsFromMayur' },
            { label: 'Admission Procedure', key: 'admissionProcedure' },
            { label: 'Online Registration', key: 'onlineRegistration' },
          ]
        },
        { label: 'Fee Structure', key: 'feeStructure' },
        { label: 'Uniform', key: 'uniform' },
        { label: 'Affiliation', key: 'affiliation' },
        { label: 'School Rules', key: 'schoolRules' },
        { label: 'Sports / Activities', key: 'aportsActivities' },
      ]
    },
    {
      label: 'INFRASTRUCTURE', key: 'infrastructure',
      children: [
        // { label: <Link to={"/laboratories"}>Laboratories</Link>, key: 'laboratories' },
        { label: <Link to={"/digitalClassRooms"}>Digital Class Rooms </Link>, key: 'digitalClassRooms' },
        // { label: <Link to={"/library"}>Library </Link>, key: 'library' },
        { label: <Link to={"/transportation"}>Transportation </Link>, key: 'transportation' },
        { label: <Link to={"/facilities"}>Facilities </Link>, key: 'facilities' },
      ]
    },
    { label: <Link to={"/results"}>RESULTS</Link>, key: 'results' },
    { label: <Link to={"/events"}>EVENTS</Link>, key: 'events' }, 
    { label: <Link to={"/contact-us"}>CONTACT US</Link>, key: 'contactUs' }, 
  ];

  return (
    <>
      <nav className="border-gray-200 sticky top-0 z-50 Roboto-Bold">
        <div className="bg-[#00434c] py-5 ">
          <div className="flex items-center justify-between lg:justify-around text-xl lg:text-5xl">
            <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse w-20">
              {/* <h2 className='text-white '>Duds</h2> */}
              <img src={logoImage} alt="Oasis Logo"  className='ms-10'/>
              
            </a>

            <div className="flex items-center space-x-2 md:order-2">
              {/* <Menu
                mode="horizontal"
                theme="dark"
                onClick={handleMenuClick}
                items={userMenu}
                className="flex-wrap bg-[#494f5d] hover:text-white"
              /> */}
              <button
                onClick={showDrawer}
                type="button"
                className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm rounded-lg md:hidden me-10"
                aria-controls="navbar-user"
                aria-expanded={drawerVisible ? 'true' : 'false'}
              >
                {drawerVisible ? (
                  <MdOutlineClose className="text-[#c8cace] w-5 h-5" />
                ) : (
                  <CiMenuBurger className="text-[#c8cace] w-5 h-5" />
                )}
              </button>
            </div>
            <Menu
              mode="horizontal"
              theme="dark"
              onClick={handleMenuClick}
              items={menuItems}
              style={{ minWidth: 0, flex: "auto" }}
              className="md:!flex !hidden bg-[#494f5d] hover:text-white Roboto-Bold"
            />

          </div>
        </div>

        {/* Drawer for mobile menu */}
        <Drawer
          placement="left"
          onClose={closeDrawer}
          open={drawerVisible}
          width={250}
          classNames={{
            body: "bg-[#00434c]",
            header: "bg-[#00434c]",
          }}
          title={
            <div className="flex justify-end items-center">
              <img src={logoImage} alt="Logo" className="h-8" />
            </div>
          }
        >
          <Menu
            mode="inline"
            theme="dark"
            onClick={handleMenuClick}
            items={menuItems}
            openKeys={openKeys}
            onOpenChange={handleOpenChange}
          />
        </Drawer>
      </nav>
    </>
  );
};

export default Navigation;
