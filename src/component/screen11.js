import React from "react";
import Box from "@mui/material/Box";
import mylogo from "./pics/pics3.png";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import Groups2OutlinedIcon from "@mui/icons-material/Groups2Outlined";
import mylogo6 from "./pics/pics5.png";
import mylogo1 from "./pics/cmp1.png";
import mylogo2 from "./pics/cmp2.png";
import mylogo3 from "./pics/cmp3.png";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import nvi from "./pics/pic1.png";

const Screen11 = () => {
  return (
    <>
      <nav>
        <img
          style={{ height: 40, width: 1320 }}
          src={nvi}
          alt="Something is wrong"
        />
      </nav>
      <div
        style={{
          border: "1px solid black",
          width: 150,
          height: 583,
          marginTop: -12,
        }}
      >
        <Button
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
        style={{ marginLeft: 200, marginTop: -572 }}
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
        <img
          style={{ marginLeft: 40, height: 40, width: 40 }}
          src={mylogo3}
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
          Attendance
        </p>
      </Box>
      <Box
        sx={{ display: "flex", flexDirection: "row" }}
        style={{ marginLeft: 730, marginTop: -80 }}
      >
        <table
          style={{
            marginLeft: 280,
            marginTop: 25,
            border: "1px solid black",
            borderRadius: 20,
            borderCollapse: "collapse",
            width: 280,
          }}
        >
          <tr>
            <th
              style={{
                backgroundColor: "black",
                color: "white",
                borderRadius: 5,
              }}
              colSpan={3}
            >
              Current Leaves
            </th>
          </tr>
          <tr>
            <th
              style={{
                border: "1px solid black",
                borderRadius: 5,
                fontWeight: "bold",
              }}
            >
              Types of Leaves
            </th>
            <th
              style={{
                border: "1px solid black",
                borderRadius: 5,
                fontWeight: "bold",
              }}
            >
              Total
            </th>
            <th
              style={{
                border: "1px solid black",
                borderRadius: 5,
                fontWeight: "bold",
              }}
            >
              Available
            </th>
          </tr>
          <tr>
            <td
              style={{
                border: "1px solid black",
                borderCollapse: "collapse",
                borderRadius: 5,
                fontWeight: "lighter",
              }}
            >
              <div>Casual Leave</div>
              <div style={{ marginTop: 1 }}>Personal Leave</div>
              <div style={{ marginTop: 1 }}>Long Service Leave</div>
              <div style={{ marginTop: 1 }}>Compensatory Leave</div>
              <div style={{ marginTop: 1 }}>Floating Holiday</div>
            </td>
            <td
              style={{
                border: "1px solid black",
                borderCollapse: "collapse",
                borderRadius: 5,
                fontWeight: "lighter",
              }}
            ></td>
            <td
              style={{
                border: "1px solid black",
                borderCollapse: "collapse",
                borderRadius: 5,
                fontWeight: "lighter",
              }}
            ></td>
          </tr>
        </table>
      </Box>
      <Box
        sx={{ display: "flex", flexDirection: "row" }}
        style={{ marginLeft: 705, marginTop: 15 }}
      >
        <table
          style={{
            marginLeft: 305,
            marginTop: 0,
            border: "1px solid black",
            borderRadius: 20,
            borderCollapse: "collapse",
            width: 280,
          }}
        >
          <tr>
            <th
              style={{
                backgroundColor: "black",
                color: "white",
                borderRadius: 5,
                height: 25,
              }}
              colSpan={3}
            >
              Current Leaves
            </th>
          </tr>
          <tr style={{ height: 350 }}>
            <th style={{ borderRadius: 5, fontWeight: "bold" }}></th>
            <th style={{ borderRadius: 5, fontWeight: "bold" }}></th>
            <th style={{ borderRadius: 5, fontWeight: "bold" }}></th>
          </tr>
          <tr>
            <th style={{ borderRadius: 5, fontWeight: "bold" }}></th>
            <th style={{ borderRadius: 5, fontWeight: "bold" }}></th>
            <th style={{ borderRadius: 5, fontWeight: "bold" }}></th>
          </tr>
          <tr>
            <th style={{ borderRadius: 5, fontWeight: "bold" }}></th>
            <th style={{ borderRadius: 5, fontWeight: "bold" }}></th>
            <th style={{ borderRadius: 5, fontWeight: "bold" }}></th>
          </tr>
          <tr>
            <th style={{ borderRadius: 5, fontWeight: "bold" }}></th>
            <th style={{ borderRadius: 5, fontWeight: "bold" }}></th>
            <th style={{ borderRadius: 5, fontWeight: "bold" }}></th>
          </tr>
        </table>
      </Box>

      <Box sx={{ flexDirection: "column", marginLeft: 23, marginTop: -63 }}>
        <Box sx={{ display: "flex", flexDirection: "row" }}>
          <p
            style={{
              marginLeft: 28,
              fontWeight: "bold",
              fontSize: 13,
              marginTop: 20,
            }}
          >
            Employee ID
          </p>
          <p
            style={{
              marginLeft: 350,
              fontWeight: "bold",
              fontSize: 13,
              marginTop: 20,
            }}
          >
            Common Address
          </p>
        </Box>
        <TextField
          id="outlined-basic"
          placeholder="eg 09JG65"
          variant="outlined"
          style={{ marginLeft: 13, width: "32%", fontSize: 10 }}
          inputProps={{
            style: {
              height: "10px",
            },
          }}
        />
        <TextField
          id="outlined-basic"
          placeholder="eg Home Address"
          variant="outlined"
          style={{ marginLeft: 55, width: "32%", fontSize: 10 }}
          inputProps={{
            style: {
              height: "10px",
            },
          }}
        />
        <Box sx={{ display: "flex", flexDirection: "row" }}>
          <p
            style={{
              marginLeft: 28,
              fontWeight: "bold",
              fontSize: 13,
              marginTop: 20,
            }}
          >
            Employee Name
          </p>
          <p
            style={{
              marginLeft: 330,
              fontWeight: "bold",
              fontSize: 13,
              marginTop: 20,
            }}
          >
            Approvers
          </p>
        </Box>
        <TextField
          id="outlined-basic"
          placeholder="eg Atul Verma"
          variant="outlined"
          style={{ marginLeft: 13, width: "32%", fontSize: 10 }}
          inputProps={{
            style: {
              height: "10px",
            },
          }}
        />
        <FormControl style={{ marginLeft: 40 }}>
          <Select
            style={{ marginLeft: 15, width: 360, height: 42 }}
            labelId="demo-simple-select-label"
            id="demo-simple-select"
          >
            <MenuItem style={{ fontSize: "10px" }} value={"Sick Leave"}>
              Manager
            </MenuItem>
            <MenuItem style={{ fontSize: "10px" }} value={"Casual Leave"}>
              HR
            </MenuItem>
          </Select>
        </FormControl>
        <Box sx={{ display: "flex", flexDirection: "row", marginTop: 8 }}>
          <p
            style={{
              marginLeft: 28,
              fontWeight: "bold",
              fontSize: 13,
              marginTop: -35,
            }}
          >
            Leave Type
          </p>
          <p
            style={{
              marginLeft: 360,
              fontWeight: "bold",
              fontSize: 13,
              marginTop: 0,
            }}
          >
            From
          </p>
          <p
            style={{
              marginLeft: 150,
              fontWeight: "bold",
              fontSize: 13,
              marginTop: 0,
            }}
          >
            Till
          </p>
        </Box>
        <FormControl>
          <Select
            style={{
              marginLeft: 15,
              width: 360,
              height: 40,
              marginTop: -45,
              fontSize: 15,
            }}
            labelId="demo-simple-select-label"
            id="demo-simple-select"
          >
            <MenuItem style={{ fontSize: "10px" }} value={"Sick Leave"}>
              Casual Leave
            </MenuItem>
            <MenuItem style={{ fontSize: "10px" }} value={"Casual Leave"}>
              Personal Leave
            </MenuItem>
            <MenuItem style={{ fontSize: "10px" }} value={"Paid Leave"}>
              Long Service Leave
            </MenuItem>
            <MenuItem style={{ fontSize: "10px" }} value={"Paid Leave"}>
              Compensatory Leave
            </MenuItem>
            <MenuItem style={{ fontSize: "10px" }} value={"Paid Leave"}>
              Floating Holiday
            </MenuItem>
          </Select>
        </FormControl>

        <TextField
          id="date"
          type="date"
          size="small"
          defaultValue="2023-02-15"
          sx={{ width: 150, marginLeft: 9 }}
          style={{ height: 0 }}
          InputLabelProps={{
            shrink: true,
          }}
        />
        <TextField
          id="date"
          type="date"
          size="small"
          defaultValue="2023-02-15"
          sx={{ width: 150, marginLeft: 5 }}
          InputLabelProps={{
            shrink: true,
          }}
        />
        <p
          style={{
            fontWeight: "bold",
            marginLeft: 453,
            fontSize: 13,
            marginTop: 6,
          }}
        >
          No. of Days
        </p>
        <TextField
          id="outlined-basic"
          placeholder="eg 10"
          variant="outlined"
          style={{ marginLeft: 450, width: "30.2%", marginTop: -5 }}
          inputProps={{
            style: {
              height: "10px",
            },
          }}
        />
        <p
          style={{
            fontWeight: "bold",
            marginLeft: 28,
            fontSize: 13,
            marginTop: 29,
          }}
        >
          Reason
        </p>
        <TextField
          id="outlined-basic"
          placeholder="eg Visiting Home"
          variant="outlined"
          style={{ marginLeft: 20, width: "62%", marginTop: -5 }}
          inputProps={{
            style: {
              height: "15px",
            },
          }}
        />
      </Box>
      <Button
        style={{
          AlignItems: "center",
          marginLeft: 550,
          height: 30,
          marginTop: 8,
          backgroundImage: `url(${mylogo6})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundColor: "black",
          borderRadius: 15,
        }}
        variant="contained"
      >
        Submit
      </Button>
    </>
  );
};

export default Screen11;
