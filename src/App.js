import React, { useEffect, useState } from "react";
import axios from "axios";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { MapContainer, TileLayer, useMap, Popup, Marker } from "react-leaflet";

const App = () => {
  const [ip, setIp] = useState("8.8.8.8");

  const [result, setResult] = useState(null);

  const findIp = async () => {
    const res = await fetch(
      `https://geo.ipify.org/api/v2/country,city?apiKey=at_D2pCes2PoBBZgaRp8j2skWe941tLW&ipAddress=${ip}`
    );
    const data = await res.json();
    setResult(data);
  };

  console.log(result);

  useEffect(() => {
    findIp();
  }, []);

  return (
    <div className="h-screen  w-full mainBg relative">
      <div className="w-full   h-[35%] flex justify-center ">
        <div className=" w-[300px] md:w-[400px]  flex flex-col items-center  gap-5 absolute  mt-[50px] ">
          <h1 className="text-2xl  text-white tracking-widest font-semibold">
            IP Address Tracker{" "}
          </h1>
          <div className=" w-full h-[40px] flex card">
            <input
              type="text"
              placeholder="Enter Ip Address "
              className=" border-none w-full outline-none h-full px-4 font-semibold rounded-l-xl "
              onChange={(e) => {
                setIp(e.target.value);
              }}
            />
            <button
              className=" bg-black px-4 rounded-r-xl"
              onClick={() => findIp()}
            >
              {" "}
              <ArrowForwardIosIcon className="text-white" />
            </button>
          </div>

          <div className=" w-full  h-[300px] rounded-xl card p-5   ">
            <table className="w-full  table  ">
              <tr>
                <td className="">IP ADDRESS</td>
                <td>{result?.ip}</td>
              </tr>
              <tr>
                <td> LOCATION</td>
                <td>
                  {result?.location.city},{result?.location.region}
                </td>
              </tr>
              <tr>
                <td> TIMEZONE</td>
                <td>{result?.location.timezone}</td>
              </tr>
              <tr>
                <td> ISP</td>
                <td>{result?.isp}</td>
              </tr>
              <tr>
                <td> Routes</td>
                <td>{result?.as.route}</td>
              </tr>
            </table>
            <div className=" flex justify-end absolute w-full bottom-0 pr-8">
              <p className="text-sm text-gray-500">
                {" "}
                Made By{" "}
                <span className="text-blue-500">
                  <a href="https://github.com/MrSagarRB/"> Sagar</a>{" "}
                </span>{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className=" ">
        {/* <MapContainer
          center={center}
          zoom={10}
          style={{ width: "500px", height: "500px" }}
        ></MapContainer>
        <TileLayer
        url="https://api.maptiler.com/maps/basic/256/{z}/{x}/{y}.png?key=rXyXp6MSukqllgyBR1pW"
       
       ></TileLayer> */}
      </div>
    </div>
  );
};

export default App;
