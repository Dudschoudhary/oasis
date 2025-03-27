import { useState } from 'react';
import { Drawer, Menu } from 'antd';
import { FiLayers } from 'react-icons/fi';
import { CiMenuBurger } from 'react-icons/ci';
import { MdOutlineClose, MdOutlineDashboardCustomize } from 'react-icons/md';
// import logo from "../../assets/images/logo.jpg";
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
  const handleOpenChange = (keys) => setOpenKeys(keys.length > 0 ? [keys[keys.length - 1]] : []);

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
      label: 'About', icon: <FiLayers />, key: 'about',
      children: [
        { label: <Link to={"/about-school"}>About School</Link>, key: 'aboutSchool' },
        { label: <Link to={"/directors-message"}>Director’s Message</Link>, key: 'directorsMessage' },
        { label: <Link to={"/achievements"}>Achievements</Link>, key: 'achievements' },
        { label: <Link to={"/special_achievements"}>Special Achievements</Link>, key: 'specialAchievements' },
        { label: <Link to={"/news_media"}>News & Media</Link>, key: 'news_Media' },
        { label: <Link to={"/alumni_registration"}>Alumni Registration</Link>, key: 'alumniRegistration'},
        { label: <Link to={"/careers"}>Careers</Link>, key: 'careers'},
        { label: <Link to={"/downloads"}>Downloads</Link>, key: 'downloads'},
        {label: <Link to={"/downloads"}>Downloads</Link>, key: 'downloads',
            children: [
              { label: <Link to={"/admission-form"}>Admission Form</Link>, key: 'admissionForm' }  // Admission Form under Downloads
            ]
        },
      ]
    },
    {
      label: 'Report', icon: <TbReportSearch />, key: 'reports',
      children: [
        { label: 'Task List Report', key: 'taskListReport' },
        { label: 'Opportunity Overview', key: 'opportunityOverview' },
        { label: 'Enquiry Overview', key: 'enquiryOverview' },
        { label: 'Opportunity Stages', key: 'opportunityStages' },
        { label: 'Enquiry Stages', key: 'enquiryStages' },
      ]
    },
    { label: <Link to={"/task-list"}>Task List</Link>, icon: <GoTasklist />, key: 'taskList' },
    {
      label: 'Master', icon: <FiLayers />, key: 'master',
      children: [
        { label: <Link to={"/master/client"}>Client</Link>, key: 'client' },
        { label: <Link to={"/master/offerStatus"}>Offer Status</Link>, key: 'offerStatus' },
        { label: <Link to={"/master/orderStatus"}>Order Status</Link>, key: 'orderStatus' },
        { label: <Link to={"/master/enduser"}>End User</Link>, key: 'enduser' },
        { label: <Link to={"/master/sector"}>Sector</Link>, key: 'sector' },
        { label: <Link to={"/master/expectedOrder"}>Expected Order</Link>, key: 'expectedOrder' },
        { label: <Link to={"/master/plant"}>Plant</Link>, key: 'plant' },
        { label: <Link to={"/master/enquiryTypes"}>Enquiry Type</Link>, key: 'enquiryTypes' },
        { label: <Link to={"/master/vendor"}>Vendor</Link>, key: 'vendor' },
        { label: <Link to={"/master/pricing"}>Pricing</Link>, key: 'pricing' },
        { label: <Link to={"/master/currency"}>Currency</Link>, key: 'currency' },
        { label: <Link to={"/master/equipmentWork"}>Equipment/Work</Link>, key: 'equipmentWork' },
        { label: <Link to={"/master/stage"}>Stage</Link>, key: 'stage' },
        { label: <Link to={"/master/category"}>Category</Link>, key: 'category' },
        { label: <Link to={"/master/substages"}>Substages</Link>, key: 'substages' }
      ]
    }
  ];

  return (
    <>
      <nav className="border-gray-200 sticky top-0 z-50">
        <div className="bg-[#494f5d]">
          <div className="flex items-center justify-between bg-none hover:normal-nums">
            <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
              {/* <img src={logo} className="h-8 m-2" alt="Logo" /> */}
            </a>

            <div className="flex items-center space-x-2 md:order-2">
              <Menu
                mode="horizontal"
                theme="dark"
                onClick={handleMenuClick}
                items={userMenu}
                className="flex-wrap bg-[#494f5d] hover:text-white"
              />
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
              className="hidden md:flex flex-wrap bg-[#494f5d] hover:text-white"
            />
          </div>
        </div>

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
              <img
                // src={logo}
                alt="Logo"
                className="h-8"
              />
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
