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
    { label: <Link to={"/"}>Home</Link>, key: 'home' },
    {
      label: 'About', key: 'about',
      children: [
        { label: <Link to={"/about-school"}>About School</Link>, key: 'aboutSchool' },
        { label: <Link to={"/directors-message"}>Director’s Message</Link>, key: 'directorsMessage' },
        { label: <Link to={"/achievements"}>Achievements</Link>, key: 'achievements' },
        { label: <Link to={"/special_achievements"}>Special Achievements</Link>, key: 'specialAchievements' },
        { label: <Link to={"/news_media"}>News & Media</Link>, key: 'news_Media' },
        { label: <Link to={"/alumni_registration"}>Alumni Registration</Link>, key: 'alumniRegistration' },
        { label: <Link to={"/careers"}>Careers</Link>, key: 'careers' },
        // { label: <Link to={"/downloads"}>Downloads</Link>, key: 'downloads' },
        {
          label: <Link to={"/downloads"}>Downloads</Link>, key: 'downloads',
          children: [
            { label: <Link to={"/admission-form"}>Admission Form</Link>, key: 'admissionForm' }  // Admission Form under Downloads
          ]
        },
      ]
    },
    {
      label: 'Academic', key: 'Academic',
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
    { label: <Link to={"/task-list"}>Task List</Link>, key: 'taskList' },
    {
      label: 'Master', key: 'master',
      children: [
        { label: <Link to={"/master/client"}>Client</Link>, key: 'client' },
        { label: <Link to={"/master/offerStatus"}>Offer Status</Link>, key: 'offerStatus' },
      ]
    }
  ];

  return (
    <>
      <nav className="border-gray-200 sticky top-0 z-50">
        <div className="bg-[#00434c] py-5 ">
          <div className="flex items-center justify-around text-5xl">
            <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse w-20">
              <h2 className='text-white px-10'>Oasis</h2>
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
                className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm rounded-lg md:hidden"
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
              className="md:!flex !hidden bg-[#494f5d] hover:text-white text-5xl"
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
            body: "bg-[#001529]",
            header: "bg-[#001529]",
          }}
          title={
            <div className="flex justify-end items-center">
              <img alt="Logo" className="h-8" />
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
