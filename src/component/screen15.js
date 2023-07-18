import React from "react";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import Groups2OutlinedIcon from "@mui/icons-material/Groups2Outlined";
import mylogo6 from "./pics/pics5.png";
import Box from "@mui/material/Box";
import mylogo from "./pics/pics3.png";
import mylogo1 from "./pics/cmp1.png";
import mylogo2 from "./pics/cmp2.png";
import mylogo3 from "./p2.png";
import mylogo4 from "./p3.png";
import mylogo5 from "./pics/arrowD.png";
import mylogo8 from "./p4.png";
import mylogo9 from "./p5.png";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import nvi from "./pics/pic1.png";
function Screen15() {
  const navigate = useNavigate();
  const goToHome = () => {
    navigate("/screen13");
  };
  return (
    <>
      <div
        style={{
          backgroundImage: `url(${nvi})`,
          color: "white",
          marginTop: 0,
          height: 45,
          display: "flex",
          flexDirection: "row",
        }}
      >
        <p style={{ marginLeft: 1040, marginTop: 13, fontSize: 12 }}>Day</p>

        <FormControl style={{ marginLeft: -8, marginTop: 11 }}>
          <Select
            style={{
              marginLeft: 15,
              width: 100,
              height: 22,
              backgroundColor: "white",
              fontSize: 12,
            }}
            labelId="demo-simple-select-label"
            id="demo-simple-select"
          >
            <MenuItem style={{ fontSize: "10px" }} value={"Sick Leave"}>
              Monday
            </MenuItem>
            <MenuItem style={{ fontSize: "10px" }} value={"Casual Leave"}>
              Tuesday
            </MenuItem>
            <MenuItem style={{ fontSize: "10px" }} value={"Casual Leave"}>
              Wednesday
            </MenuItem>
            <MenuItem style={{ fontSize: "10px" }} value={"Casual Leave"}>
              Thursday
            </MenuItem>
            <MenuItem style={{ fontSize: "10px" }} value={"Casual Leave"}>
              Friday
            </MenuItem>
            <MenuItem style={{ fontSize: "10px" }} value={"Casual Leave"}>
              Saturday
            </MenuItem>
            <MenuItem style={{ fontSize: "10px" }} value={"Casual Leave"}>
              Sunday
            </MenuItem>
          </Select>
        </FormControl>
      </div>
      <p
        style={{
          marginLeft: 1172,
          marginTop: -31,
          fontSize: 12,
          color: "white",
        }}
      >
        Date
      </p>
      <FormControl style={{ marginLeft: 1185, marginTop: -31.5 }}>
        <Select
          style={{
            marginLeft: 15,
            width: 100,
            height: 22,
            backgroundColor: "white",
            fontSize: 12,
          }}
          labelId="demo-simple-select-label"
          id="demo-simple-select"
        >
          <MenuItem style={{ fontSize: "10px" }} value={"Sick Leave"}>
            09/11/22
          </MenuItem>
          <MenuItem style={{ fontSize: "10px" }} value={"Casual Leave"}>
            10/11/22
          </MenuItem>
          <MenuItem style={{ fontSize: "10px" }} value={"Casual Leave"}>
            11/11/22
          </MenuItem>
          <MenuItem style={{ fontSize: "10px" }} value={"Casual Leave"}>
            12/11/22
          </MenuItem>
          <MenuItem style={{ fontSize: "10px" }} value={"Casual Leave"}>
            13/11/22
          </MenuItem>
          <MenuItem style={{ fontSize: "10px" }} value={"Casual Leave"}>
            14/11/22
          </MenuItem>
          <MenuItem style={{ fontSize: "10px" }} value={"Casual Leave"}>
            15/11/22
          </MenuItem>
        </Select>
      </FormControl>
      <div
        style={{
          border: "1px solid black",
          width: 150,
          height: 653,
          marginTop: -22,
        }}
      >
        <Button
          onClick={goToHome}
          style={{
            backgroundImage: `url(${mylogo6})`,
            backgroundColor: "black",
            height: 25,
            width: 150,
            marginTop: 15,
          }}
          variant="contained"
        >
          <HomeOutlinedIcon style={{ marginLeft: -32 }} />
          Home
        </Button>
        <p style={{ marginLeft: 6, padding: 1 }}>
          {" "}
          <Groups2OutlinedIcon
            style={{ marginLeft: 13, padding: 2, marginBottom: -9 }}
          />
          Meetings
        </p>
      </div>
      <Box
        sx={{ display: "flex", flexDirection: "row" }}
        style={{ marginLeft: 200, marginTop: -642 }}
      >
        <img
          style={{ height: 40, width: 40 }}
          src={mylogo1}
          alt="Something is wrong"
        />
        <p
          style={{
            marginLeft: 0,
            height: 20,
            width: 150,
            backgroundImage: `url(${mylogo})`,
            padding: 10,
            justifyContent: "center",
            TextAlign: "center",
            fontWeight: "bold",
            marginTop: 0,
            borderTopRightRadius: 20,
            borderBottomRightRadius: 20,
            backgroundRepeat: "no-repeat",
          }}
        >
          Leave Request
        </p>
        <img
          style={{ marginLeft: 40, height: 40, width: 40 }}
          src={mylogo2}
          alt="Something is wrong"
        />
        <p
          style={{
            marginLeft: 0,
            height: 20,
            width: 150,
            backgroundImage: `url(${mylogo})`,
            padding: 10,
            justifyContent: "center",
            TextAlign: "center",
            fontWeight: "bold",
            marginTop: 0,
            borderTopRightRadius: 20,
            borderBottomRightRadius: 20,
            backgroundRepeat: "no-repeat",
          }}
        >
          Leave Approval
        </p>
      </Box>
      <Box
        sx={{ display: "flex", flexDirection: "row" }}
        style={{ marginLeft: 680, marginTop: -53 }}
      >
        <img
          style={{ width: 20, height: 20, marginLeft: 220 }}
          src={mylogo3}
          alt="Something is wrong"
        />
        <p style={{ marginTop: 0, fontSize: 12 }}>Check-In Time </p>
        <FormControl style={{ marginLeft: -10 }}>
          <Select
            style={{
              marginLeft: 15,
              width: 80,
              height: 17,
              backgroundColor: "white",
              fontSize: 9,
            }}
            labelId="demo-simple-select-label"
            id="demo-simple-select"
          >
            <MenuItem style={{ fontSize: "10px" }} value={"9:00 am"}>
              9:00 am
            </MenuItem>
            <MenuItem style={{ fontSize: "10px" }} value={"10:00 am"}>
              10:00 am
            </MenuItem>
            <MenuItem style={{ fontSize: "10px" }} value={"11:00 am"}>
              11:00 am
            </MenuItem>
            <MenuItem style={{ fontSize: "10px" }} value={"12:00 pm"}>
              12:00 pm
            </MenuItem>
            <MenuItem style={{ fontSize: "10px" }} value={"1:00 pm"}>
              1:00 pm
            </MenuItem>
            <MenuItem style={{ fontSize: "10px" }} value={"2:00 pm"}>
              2:00 pm
            </MenuItem>
            <MenuItem style={{ fontSize: "10px" }} value={"3:00 pm"}>
              3:00 pm
            </MenuItem>
          </Select>
        </FormControl>
        <img
          style={{ width: 20, height: 20, marginLeft: 10 }}
          src={mylogo4}
          alt="Something is wrong"
        />
        <p style={{ marginTop: 0, fontSize: 12 }}>Check-Out Time </p>
        <FormControl style={{ marginLeft: -10 }}>
          <Select
            style={{
              marginLeft: 15,
              width: 80,
              height: 17,
              backgroundColor: "white",
              fontSize: 9,
            }}
            labelId="demo-simple-select-label"
            id="demo-simple-select"
          >
            <MenuItem style={{ fontSize: "10px" }} value={"9:00 am"}>
              9:00 am
            </MenuItem>
            <MenuItem style={{ fontSize: "10px" }} value={"10:00 am"}>
              10:00 am
            </MenuItem>
            <MenuItem style={{ fontSize: "10px" }} value={"11:00 am"}>
              11:00 am
            </MenuItem>
            <MenuItem style={{ fontSize: "10px" }} value={"12:00 pm"}>
              12:00 pm
            </MenuItem>
            <MenuItem style={{ fontSize: "10px" }} value={"1:00 pm"}>
              1:00 pm
            </MenuItem>
            <MenuItem style={{ fontSize: "10px" }} value={"2:00 pm"}>
              2:00 pm
            </MenuItem>
            <MenuItem style={{ fontSize: "10px" }} value={"3:00 pm"}>
              3:00 pm
            </MenuItem>
          </Select>
        </FormControl>
      </Box>
      <Box sx={{ display: "flex", flexDirection: "row" }}>
        <Button
          style={{
            width: 150,
            height: 20,
            marginLeft: 1130,
            fontSize: 10,
            color: "black",
          }}
          variant="text"
        >
          Previous Attendance
        </Button>
        <img
          style={{ height: 10, width: 10, marginLeft: -10, marginTop: 4 }}
          src={mylogo5}
          alt="Something is wrong"
        />
      </Box>
      <table
        style={{
          marginLeft: 900,
          marginTop: 12,
          border: "1px solid black",
          borderRadius: 20,
          borderCollapse: "collapse",
          width: 400,
        }}
      >
        <tr>
          <th
            style={{ backgroundColor: "black", color: "white" }}
            align="left"
            colSpan={3}
          >
            December 2022
            <FormControl style={{ marginLeft: -8, marginTop: 2 }}>
              <Select
                style={{
                  marginLeft: 135,
                  width: 140,
                  height: 18,
                  backgroundColor: "white",
                  fontSize: 10,
                }}
                labelId="demo-simple-select-label"
                id="demo-simple-select"
              >
                <MenuItem
                  style={{ fontSize: "10px" }}
                  value={"Monthly attendance"}
                >
                  Monthly attendance
                </MenuItem>
                <MenuItem style={{ fontSize: "10px" }} value={"Monday"}>
                  Monday
                </MenuItem>
                <MenuItem style={{ fontSize: "10px" }} value={"Tuesday"}>
                  Tuesday
                </MenuItem>
                <MenuItem style={{ fontSize: "10px" }} value={"Wednesday"}>
                  Wednesday
                </MenuItem>
                <MenuItem style={{ fontSize: "10px" }} value={"Thursday"}>
                  Thursday
                </MenuItem>
                <MenuItem style={{ fontSize: "10px" }} value={"Friday"}>
                  Friday
                </MenuItem>
                <MenuItem style={{ fontSize: "10px" }} value={"Saturday"}>
                  Saturday
                </MenuItem>
                <MenuItem style={{ fontSize: "10px" }} value={"Sunday"}>
                  Sunday
                </MenuItem>
              </Select>
            </FormControl>
          </th>
        </tr>
        <tr>
          <th style={{ border: "1px solid black", borderRadius: 5 }}>Date</th>
          <th style={{ border: "1px solid black", borderRadius: 5 }}>
            Check-in
          </th>
          <th style={{ border: "1px solid black", borderRadius: 5 }}>
            Check-out
          </th>
        </tr>
        <tr style={{ marginBottom: 2 }}>
          <td
            style={{
              border: "1px solid black",
              borderCollapse: "collapse",
              borderRadius: 5,
              fontWeight: "lighter",
              marginBottom: -55,
            }}
          >
            <div style={{ marginTop: -60, marginLeft: 10 }}>1 Dec 2022</div>
            <div style={{ marginTop: 5, marginLeft: 10 }}>2 Dec 2022</div>
            <div style={{ marginTop: 5, marginLeft: 10 }}>3 Dec 2022</div>
            <div style={{ marginTop: 5, marginLeft: 10 }}>4 Dec 2022</div>
            <div style={{ marginTop: 5, marginLeft: 10 }}>5 Dec 2022</div>
            <div style={{ marginTop: 5, marginLeft: 10 }}>6 Dec 2022</div>
            <div style={{ marginTop: 5, marginLeft: 10 }}>7 Dec 2022</div>
            <div style={{ marginTop: 5, marginLeft: 10 }}>8 Dec 2022</div>
            <div style={{ marginTop: 5, marginLeft: 10 }}>9 Dec 2022</div>
            <div style={{ marginTop: 5, marginLeft: 10, marginBottom: 20 }}>
              10 Dec 2022
            </div>
          </td>
          <td
            style={{
              border: "1px solid black",
              borderCollapse: "collapse",
              borderRadius: 5,
              fontWeight: "lighter",
            }}
          >
            <div style={{ marginTop: -60, marginLeft: 50 }}>9:00 am</div>
            <div style={{ marginTop: 5, marginLeft: 50 }}>9:00 am</div>
            <div style={{ marginTop: 5, marginLeft: 50 }}>9:00 am</div>
            <div style={{ marginTop: 5, marginLeft: 50 }}>9:00 am</div>
            <div style={{ marginTop: 5, marginLeft: 50, color: "red" }}>
              on Leave
            </div>
            <div style={{ marginTop: 5, marginLeft: 50 }}>9:00 am</div>
            <div style={{ marginTop: 5, marginLeft: 50 }}>9:00 am</div>
            <div style={{ marginTop: 5, marginLeft: 50 }}>9:00 am</div>
            <div style={{ marginTop: 5, marginLeft: 50 }}>9:00 am</div>
            <div
              style={{
                marginTop: 5,
                marginLeft: 50,
                marginBottom: 20,
                color: "red",
              }}
            >
              on Leave
            </div>
          </td>
          <td
            style={{
              border: "1px solid black",
              borderCollapse: "collapse",
              borderRadius: 5,
              fontWeight: "lighter",
            }}
          >
            <div style={{ marginTop: 5, marginLeft: 50 }}>7:00 pm</div>
            <div style={{ marginTop: 5, marginLeft: 50 }}>7:00 pm</div>
            <div style={{ marginTop: 5, marginLeft: 50 }}>7:00 pm</div>
            <div style={{ marginTop: 5, marginLeft: 50 }}>7:00 pm</div>
            <div style={{ marginTop: 5, marginLeft: 50, color: "red" }}>
              on Leave
            </div>
            <div style={{ marginTop: 5, marginLeft: 50 }}>7:00 pm</div>
            <div style={{ marginTop: 5, marginLeft: 50 }}>7:00 pm</div>
            <div style={{ marginTop: 5, marginLeft: 50 }}>7:00 pm</div>
            <div style={{ marginTop: 5, marginLeft: 50 }}>7:00 pm</div>
            <div style={{ marginTop: 5, marginLeft: 50, color: "red" }}>
              on Leave
            </div>
            <img
              style={{ width: 15, height: 15, marginTop: 70, marginLeft: 90 }}
              src={mylogo9}
              alt="Something is wrong"
            />
            <img
              style={{ width: 15, height: 15, marginTop: 70, marginLeft: 20 }}
              src={mylogo8}
              alt="Something is wrong"
            />
          </td>
        </tr>
      </table>
    </>
  );
}

export default Screen15;
