import React from 'react'
import { AiFillCaretDown, AiOutlineHome, AiOutlineUser, AiOutlineMoneyCollect, AiOutlineHistory } from 'react-icons/ai'
import { SidebarItem} from '../../models/sidebar/Sidebaritem'
import { FaCog, FaOpencart } from 'react-icons/fa';

export const SidebarData: SidebarItem[] = [
    {
        title: 'Dashboard',
        path: '/overview',
        icon: <AiOutlineHome />,
        // iconClosed: <AiFillCaretDown />,
        // subnav: [
        //     {
        //         title: "Dashboard",
        //         path: '/overview/users',
        //         icon: <AiOutlineUser />
        //     },
        //     {
        //         title: "Revenue",
        //         path: '/overview/revenue',
        //         icon: <AiOutlineMoneyCollect />
        //     }
        // ]
    },
    {
        title: 'Examinations',
        path: '/create-point',
        icon: <FaOpencart />,
        // iconClosed: <AiFillCaretDown />,
        // subnav: [
        //     {
        //         title: "Users",
        //         path: '/overview/users',
        //         icon: <AiOutlineUser />
        //     },
        //     {
        //         title: "Revenue",
        //         path: '/overview/revenue',
        //         icon: <AiOutlineMoneyCollect />
        //     }
        // ]

    },
    {
        title: 'Reports',
        path: '/history',
        icon: <AiOutlineHistory />,
        // iconClosed: <AiFillCaretDown />,
        
        // subnav: [
        //     {
        //         title: "Users",
        //         path: '/overview/users',
        //         icon: <AiOutlineUser />
        //     },
        //     {
        //         title: "Revenue",
        //         path: '/overview/revenue',
        //         icon: <AiOutlineMoneyCollect />
        //     }
        // ]

    },
    {
        title: 'Examination history',
        path: '/configurations',
        // iconClosed: <AiFillCaretDown />,

        icon: <FaCog />,
        // subnav: [
        //     {
        //         title: "Users",
        //         path: '/overview/users',
        //         icon: <AiOutlineUser />
        //     },
        //     {
        //         title: "Revenue",
        //         path: '/overview/revenue',
        //         icon: <AiOutlineMoneyCollect />
        //     }
        // ]

    }
]