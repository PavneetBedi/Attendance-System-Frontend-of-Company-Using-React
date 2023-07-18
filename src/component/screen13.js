import React from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import mylogo from "./pics/pics3.png";
import mylogo1 from "./pics/cmp1.png";
import mylogo2 from "./pics/cmp2.png";
import mylogo3 from "./p2.png";
import mylogo4 from "./p3.png";
import mylogo5 from "./pics/arrowR.png";
import Select from "@mui/material/Select";
import FormControl from "@mui/material/FormControl";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import Groups2OutlinedIcon from "@mui/icons-material/Groups2Outlined";
import { useNavigate } from "react-router-dom";
import nvi from "./pics/pic1.png";
import MenuItem from "@mui/material/MenuItem";
function Screen13() {
  const navigate = useNavigate();

  const goToMeet = () => {
    navigate(-1);
  };
  const goToLeaveProp = () => {
    navigate("/screen10");
  };
  const goToLeavePrope = () => {
    navigate("/screen12");
  };
  const goToLeavePropep = () => {
    navigate("/screen14");
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
          height: 624,
          marginTop: -15,
        }}
      >
        <Button
          style={{
            backgroundColor: "white",
            color: "black",
            height: 25,
            width: 150,
            marginTop: 10,
          }}
          variant="contained"
        >
          <HomeOutlinedIcon style={{ marginLeft: -32 }} />
          Home
        </Button>
        <Button
          onClick={goToMeet}
          style={{
            backgroundColor: "black",
            color: "white",
            height: 25,
            width: 150,
            marginTop: 20,
          }}
          variant="contained"
        >
          <Groups2OutlinedIcon
            style={{ marginLeft: 2, padding: 2, marginBottom: -1 }}
          />
          Meetings
        </Button>
      </div>
      <Box
        sx={{ display: "flex", flexDirection: "row" }}
        style={{ marginLeft: 200, marginTop: -582 }}
      >
        <img
          style={{ height: 40, width: 40 }}
          src={mylogo1}
          alt="Something is wrong"
        />
        <Button
          onClick={goToLeaveProp}
          style={{
            marginLeft: 0,
            height: 40,
            width: 200,
            backgroundImage: `url(${mylogo})`,
            color: "black",
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
        </Button>
        <img
          style={{ marginLeft: 40, height: 40, width: 40 }}
          src={mylogo2}
          alt="Something is wrong"
        />
        <Button
          onClick={goToLeavePrope}
          style={{
            marginLeft: 0,
            height: 40,
            width: 200,
            backgroundImage: `url(${mylogo})`,
            color: "black",
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
        </Button>
      </Box>
      <Box
        sx={{ display: "flex", flexDirection: "row", backgroundColor: "white" }}
        style={{ marginLeft: 680, marginTop: -53 }}
      >
        <img
          style={{
            width: 20,
            height: 20,
            marginLeft: 220,
            backgroundColor: "white",
          }}
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
          onClick={goToLeavePropep}
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
    </>
  );
}

export default Screen13;
