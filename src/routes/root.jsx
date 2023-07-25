import { Outlet } from "react-router-dom";
import Avatar from '@mui/material/Avatar';
import Divider from '@mui/material/Divider';
import avatarImg from '../static/images/myavatar.png'
import { motion } from "framer-motion"


function MenuItem(props) {
    const menuItem = props.name;

    return (
        <p className="menu-item" onClick={() => {
            document.getElementById(menuItem).scrollIntoView({
                behavior: "smooth",
                block: "start",
            });
        }}>{menuItem.length > 9 ?
            menuItem.substring(0, 9).toUpperCase() + `.`
            : menuItem.toUpperCase()}</p>
    );
}

export default function Root() {
    return (
        <>
            <motion.div
                animate={{ x: [-70, -10, -10, 0] }}
                transition={{ duration: 4, type: "spring", damping: 5 }}
                id="sidebar" >


                <Avatar id="avatar" alt="subhajit" src={avatarImg} sx={{ width: 100, height: 100 }} />

                <h4><em>Subhajit<br />Mallick</em></h4>
                <Divider />

                <nav>
                    <MenuItem name="home" />
                    <MenuItem name="qualification" />
                    <MenuItem name="skills" />
                    <MenuItem name="projects" />
                    <MenuItem name="contact" />
                </nav>

            </motion.div>

            <div id="sidebar-box">
                <Outlet />
            </div>
        </>
    );
}














{/* <NavLink
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "active" : ""
                            }
                            to={`/`}>HOME</NavLink> */}