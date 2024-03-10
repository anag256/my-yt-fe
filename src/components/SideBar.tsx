import { ReactElement } from "react";
import { AiOutlineLike } from "react-icons/ai";
import { FaHome } from "react-icons/fa";
import { IoIosPeople, IoIosVideocam } from "react-icons/io";
import { IoSettings } from "react-icons/io5";
import { MdHistory } from "react-icons/md";
import "../styles/SideBar.scss";
interface navItem {
  title: string;
  icon: ReactElement;
}
const navList: navItem[] = [
  {
    title: "Home",
    icon: <FaHome />,
  },
  {
    title: "Liked Videos",
    icon: <AiOutlineLike />,
  },
  {
    title: "History",
    icon: <MdHistory />,
  },
  {
    title: "My Content",
    icon: <IoIosVideocam />,
  },
  {
    title: "Subscribers",
    icon: <IoIosPeople />,
  },
  {
    title: "Settings",
    icon: <IoSettings />,
  },
];
const SideBar = () => {
  return (
    <aside className="sidelist">
      <ul>
        {navList.map((navItem: navItem, index: number) => {
          return (
            <li key={index}>
              <span>{navItem.icon}</span>
              <span>{navItem.title}</span>
            </li>
          );
        })}
      </ul>
    </aside>
  );
};

export default SideBar;
