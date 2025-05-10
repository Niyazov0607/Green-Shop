import { NavLink } from "react-router";
import { CartIcon, LogoIcon, SearchIcon } from "../../assets/icons";
import { IoMdLogIn } from "react-icons/io";

const HeaderTop = () => {
    return (
        <div className="containers ">
            <div className="flex mt-[26px] pb-[17px] items-center justify-between">
                <div className="">
                    <NavLink to="/">
                        {" "}
                        <LogoIcon />
                    </NavLink>
                </div>
                <div className="flex items-center gap-[50px]">
                    <NavLink to="/">
                        <span className="font-[600] cursor-pointer">Home</span>
                    </NavLink>
                    <NavLink to="/blog">
                        <span className="font-[600] cursor-pointer">Blog</span>
                    </NavLink>
                </div>
                <div className="flex items-center gap-[30px] cursor-pointer">
                    <SearchIcon />
                    <CartIcon />
                    <div className="flex items-center bg-[#46A358] text-white py-[8px] px-[16px] rounded-[6px] gap-[4px] cursor-pointer hover:opacity-90">
                        <IoMdLogIn size={20} />
                        <span className="">Login</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeaderTop;
