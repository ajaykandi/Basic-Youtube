import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { getSearch } from "../features/videoSlice";
import logo from "./logo.png";

function Navbar() {
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();

  // dispatching searchParam
  const handleSubmit = (e) => {
    e.preventDefault();
    if (search.length > 2) {
      dispatch(getSearch(search));
    }
    setSearch("");
  };

  return (
    <div className="navbar">
      <div className="navbar_logo">
        <img src={logo} alt="" />
      </div>
      <div className="navebar_search">
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSubmit(e)}
        />
        <img
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAMAAAD04JH5AAAAZlBMVEX19fUAAAD4+Pj////7+/vv7+/y8vLb29vGxsbU1NRISEgWFha8vLxTU1O3t7cTExN6enplZWWrq6vm5ubMzMxxcXFOTk4mJiaRkZFgYGA/Pz86OjoMDAwgICCkpKSBgYEyMjKcnJw4eibTAAADJUlEQVR4nO1aa3PiMAxMJOUJSUMehEAL9P//yYMWPwLEph07uZvTfulM6/FupI1kOQ0CBoPBYDAYDAaD8Q8CgC4AWISbEIMkXZfrNIsQcWYRhE1ZfYQC75s6QZqRPkgHxf6N1baOZgoD0LoIn+FcB3NEAZvn9FfsW/RND3ScpL+i8vxKQNwZ+cOwaHymAYLp8AscEn8KALZW/jDsG29ZgPHzf1THNEmStj4dRr9/jzwpwJNOs0njrzJ8LcdBVo184EcAlRrHtgU91YDJRvvrzocNAEYM9xSAur7MgwLSopw+qzfYrOSC3L0ASBR/+3x7as5ySelcgRaAcqreUiZjcHZdk0HFt5reG2uVJcchwE/5bLFhGQ1iWedYAO3FzrUpuJpTAqfFABKRgb25zKEMgdscqCK0M7uL1mLhyakNcSf2TSyRjUSoBpf8AYo22FtXioZlydVPBbzdtt3YdlWxctqVUWbWZi2SpcCWrN8JsPY55cL/VkDpV0BlNaE8trs1oWi0uVWAOLf3bl9DOQ7YtpVSC1PT+jHUPGQ5aahuVDntBZCKfS2VSNWho9t+HPWvmVu61a0HdRN0pi6nUrV3fCYjmQNTo4dG9Izw0/WpNMrF1v30WQfUdOJ8QNTOm8NUdLXZzZioX0JNoMPTWwjQ+FceJmTNBWHRPD4gxdro9Onjqga18fOc3g2HQJk2u2+dVkHJEanZ71KQMiQRZiBsxvN57GVAx0wnCftjFuMVkNT3NzcHP3cUuL7j6Q/FMOz79/ABbo+kSkH5SDWBfHkFvnxwsHN/w5MPIDoZSDdasfDlA6A0n6A/l4DtyruCgGD9TEJ/jC/FCVPtnfDkxOv3imS3H7F/nNrbFwts/WchuCYCmnLXDcW2GLpT2YAsiwFlsyj4KsAX1jj+/qlhFh8YgembUuDNB0YFug+WUTCXDyZBrZaFg5+qbAb7YMZ6MK3gL/DBauEsjHzg+vr6NQWZ1hudXhq9CtIUpIv8o4Pmg2wRARcFwoVexqVXFNyy4ONT3mugpsvzzuM3bSsAo4iWMYCUsCg7g8FgMBgMBoPBYDAYDMaL+AMVwB3fZ/LVNAAAAABJRU5ErkJggg=="
          alt=""
          onClick={handleSubmit}
        />
      </div>
    </div>
  );
}

export default Navbar;
