import React from "react";
import Box from "@mui/material/Box";
import mylogo from "./pics/pics3.png";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import Groups2OutlinedIcon from "@mui/icons-material/Groups2Outlined";
import mylogo6 from "./pics/pics5.png";
import mylogo1 from "./pics/cmp1.png";
import mylogo2 from "./pics/cmp2.png";
import mylogo3 from "./pics/cmp3.png";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import nvi from "./pics/pic1.png";
function Screen12() {
  const navigate = useNavigate();

  const goToLeaveProp = () => {
    navigate("/screen10");
  };

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
          height: 607,
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
        <img
          style={{ marginLeft: 40, height: 40, width: 40 }}
          src={mylogo3}
          alt="Something is wrong"
        />
        <Button
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
          Attendance
        </Button>
      </Box>
      <Box
        sx={{ display: "flex", flexDirection: "row" }}
        style={{ marginLeft: 140, marginTop: -50, height: 600 }}
      >
        <table
          style={{
            marginLeft: 40,
            marginTop: 71.5,
            border: "1px solid black",
            borderRadius: 20,
            borderCollapse: "collapse",
            width: 1500,
          }}
          colSpan={5}
        >
          <tr style={{ backgroundColor: "black", color: "white" }} colSpan={5}>
            <th
              style={{
                border: "1px solid black",
                fontWeight: "bold",
                width: 160,
              }}
            >
              Leave Type
            </th>
            <th
              style={{
                border: "1px solid black",
                fontWeight: "bold",
                width: 260,
              }}
            >
              Date
            </th>
            <th style={{ border: "1px solid black", fontWeight: "bold" }}>
              No. of Days
            </th>
            <th style={{ border: "1px solid black", fontWeight: "bold" }}>
              Edit / Cancel
            </th>
            <th style={{ border: "1px solid black", fontWeight: "bold" }}>
              Approval
            </th>
          </tr>
          <tr>
            <td
              style={{
                border: "1px solid black",
                borderCollapse: "collapse",
                borderRadius: 5,
                fontWeight: "lighter",
                textAlign: "center",
              }}
            >
              <div style={{ marginTop: 40 }}>Sick Leave</div>
              <div style={{ marginTop: 30 }}>Sick Leave</div>
              <div style={{ marginTop: 30 }}>Sick Leave</div>
              <div style={{ marginTop: 30 }}>Sick Leave</div>
              <div style={{ marginTop: 30, marginBottom: 190 }}>Sick Leave</div>
            </td>
            <td
              style={{
                border: "1px solid black",
                borderCollapse: "collapse",
                borderRadius: 5,
                fontWeight: "lighter",
                textAlign: "center",
              }}
            >
              <div style={{ marginTop: 40 }}>4/12/2022 - 14/12/2022</div>
              <div style={{ marginTop: 30 }}>4/12/2022 - 14/12/2022</div>
              <div style={{ marginTop: 30 }}>4/12/2022 - 14/12/2022</div>
              <div style={{ marginTop: 30 }}>4/12/2022 - 14/12/2022</div>
              <div style={{ marginTop: 30, marginBottom: 190 }}>
                4/12/2022 - 14/12/2022
              </div>
            </td>
            <td
              style={{
                border: "1px solid black",
                borderCollapse: "collapse",
                borderRadius: 5,
                fontWeight: "lighter",
                textAlign: "center",
              }}
            >
              <div style={{ marginTop: 40 }}>10</div>
              <div style={{ marginTop: 30 }}>10</div>
              <div style={{ marginTop: 30 }}>10</div>
              <div style={{ marginTop: 30 }}>10</div>
              <div style={{ marginTop: 30, marginBottom: 190 }}>10</div>
            </td>
            <td
              style={{
                border: "1px solid black",
                borderCollapse: "collapse",
                borderRadius: 5,
                fontWeight: "lighter",
                width: 340,
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  marginTop: -190,
                }}
              >
                <Button
                  style={{
                    backgroundImage: `url(${mylogo6})`,
                    backgroundColor: "black",
                    height: 25,
                    width: 80,
                    marginLeft: 25,
                  }}
                  variant="contained"
                >
                  Edit
                </Button>
                <Button
                  style={{
                    backgroundColor: "white",
                    color: "black",
                    height: 25,
                    width: 180,
                    marginLeft: 24,
                  }}
                  variant="contained"
                >
                  Cancel Request
                </Button>
              </div>
            </td>
            <td>
              <p style={{ marginTop: -190, marginLeft: 70, color: "gray" }}>
                _________
              </p>
              <p style={{ marginTop: 30, marginLeft: 70, color: "green" }}>
                Approved
              </p>
              <p style={{ marginTop: 30, marginLeft: 70, color: "green" }}>
                Approved
              </p>
              <p style={{ marginTop: 30, marginLeft: 70, color: "red" }}>
                Declined
              </p>
            </td>
          </tr>
        </table>
      </Box>
    </>
  );
}

export default Screen12;
