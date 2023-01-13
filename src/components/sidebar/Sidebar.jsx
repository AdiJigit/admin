import './sidebar.css';
import { MdLineStyle } from 'react-icons/md';
import { MdTimeline } from 'react-icons/md';
import { FiTrendingUp } from 'react-icons/fi';
import { FiUsers } from 'react-icons/fi';
import { AiOutlineShop } from 'react-icons/ai';
import { BiDollar } from 'react-icons/bi';
import { AiOutlineBarChart } from 'react-icons/ai';
import { FiMail } from 'react-icons/fi';
import { VscFeedback } from 'react-icons/vsc';
import { FiMessageSquare } from 'react-icons/fi';
import { MdManageSearch } from 'react-icons/md';
import { MdOutlineReport } from 'react-icons/md';

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Dashboard</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem active">
              <MdLineStyle className='sidebarIcon' />
              Home
            </li>
            <li className="sidebarListItem">
              <MdTimeline className='sidebarIcon' />
              Analytics
            </li>
            <li className="sidebarListItem">
              <FiTrendingUp className='sidebarIcon' />
              Sales
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Quick Menu</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem active">
              <FiUsers className='sidebarIcon' />
              Users
            </li>
            <li className="sidebarListItem">
              <AiOutlineShop className='sidebarIcon' />
              Products
            </li>
            <li className="sidebarListItem">
              <BiDollar className='sidebarIcon' />
              Transactions
            </li>
            <li className="sidebarListItem">
              <AiOutlineBarChart className='sidebarIcon' />
              Reports
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Notifications</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem active">
              <FiMail className='sidebarIcon' />
              Mail
            </li>
            <li className="sidebarListItem">
              <VscFeedback className='sidebarIcon' />
              Feedback
            </li>
            <li className="sidebarListItem">
              <FiMessageSquare className='sidebarIcon' />
              Messages
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Staff</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem active">
              <MdManageSearch className='sidebarIcon' />
              Manage
            </li>
            <li className="sidebarListItem">
              <MdTimeline className='sidebarIcon' />
              Analytics
            </li>
            <li className="sidebarListItem">
              <MdOutlineReport className='sidebarIcon' />
              Reports
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
