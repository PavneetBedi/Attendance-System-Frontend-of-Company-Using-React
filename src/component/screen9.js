import React from "react";
import Box from "@mui/material/Box";
import mylogo from "./pics/pics3.png";
import mylogo1 from "./pics/cmp1.png";
import mylogo2 from "./pics/cmp2.png";
import mylogo3 from "./pics/cmp3.png";
import mylogo4 from "./pics/arrow.jpg";
import mylogo5 from "./pics/arrow1.jpg";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Button from "@mui/material/Button";
import mylogo6 from "./pics/pics5.png";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import Groups2OutlinedIcon from "@mui/icons-material/Groups2Outlined";
import TextField from "@mui/material/TextField";
import { useNavigate } from "react-router-dom";
import nvi from "./pics/pic1.png";
const Screen9 = () => {
  const navigate = useNavigate();

  const goToLeaveReq = () => {
    navigate("/screen10");
  };

  const goToHome = () => {
    navigate("/screen13");
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
          onClick={goToHome}
          style={{
            backgroundImage: `url(${mylogo6})`,
            backgroundColor: "black",
            height: 25,
            width: 150,
            marginTop: 15,
            cursor: "pointer",
          }}
          variant="contained"
        >
          <HomeOutlinedIcon style={{ marginLeft: -32 }} />
          Home
        </Button>
        <Button
          style={{
            marginLeft: -6,
            marginTop: 16,
            cursor: "pointer",
            color: "black",
            height: 25,
            width: 150,
          }}
        >
          <Groups2OutlinedIcon
            style={{ marginLeft: 13, padding: 2, marginBottom: -1 }}
          />
          Meetings
        </Button>
      </div>
      <Box
        sx={{ display: "flex", flexDirection: "row" }}
        style={{ marginLeft: 200, marginTop: -592 }}
      >
        <img
          style={{ height: 40, width: 40 }}
          src={mylogo1}
          alt="Something is wrong"
        />
        <Button
          onClick={goToLeaveReq}
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
      <FormGroup style={{ alignItems: "flex-end", marginTop: -23 }}>
        <FormControlLabel
          control={<Checkbox defaultChecked />}
          label="Approve All"
        />
      </FormGroup>
      <Box sx={{ flexDirection: "column", marginLeft: 23, marginTop: 3 }}>
        {" "}
        <div
          style={{
            border: "1px solid gray",
            borderRadius: 15,
            width: 1113,
            height: 300,
            marginTop: -12,
          }}
        >
          <div
            style={{
              border: "1px solid gray",
              borderRadius: 15,
              marginLeft: 5,
              marginRight: -5,
              width: 1100,
              height: 63,
              marginTop: 8,
            }}
          >
            <Box sx={{ display: "flex", flexDirection: "row" }}>
              <p
                style={{
                  marginLeft: 27,
                  fontWeight: "bold",
                  fontSize: 20,
                  marginTop: 20,
                }}
              >
                Atul Verma
              </p>
              <p
                style={{
                  marginLeft: 80,
                  fontWeight: "bold",
                  fontSize: 13,
                  marginTop: 24,
                }}
              >
                {" "}
                Reason
              </p>
              <p
                style={{
                  marginLeft: 5,
                  fontWeight: "lighter",
                  fontSize: 11,
                  marginTop: 26,
                }}
              >
                Sick Leave{" "}
              </p>
              <p
                style={{
                  marginLeft: 160,
                  fontWeight: "bold",
                  fontSize: 13,
                  marginTop: 24,
                }}
              >
                Date
              </p>
              <p
                style={{
                  marginLeft: 5,
                  fontWeight: "lighter",
                  fontSize: 11,
                  marginTop: 26,
                }}
              >
                13 Feb 2022 - 16 Feb 2022{" "}
              </p>
              <Button
                style={{
                  marginLeft: 270,
                  fontWeight: "lighter",
                  fontSize: 11,
                  marginTop: 20,
                  height: 25,
                  color: "green",
                }}
                variant="outlined"
              >
                Approved
              </Button>
              <Button
                style={{
                  marginLeft: 5,
                  fontWeight: "lighter",
                  fontSize: 11,
                  marginTop: 20,
                  height: 25,
                }}
                variant="outlined"
                disabled
              >
                Declined
              </Button>
              <img
                style={{ marginLeft: 6, height: 10, width: 10, marginTop: 25 }}
                src={mylogo5}
                alt="Something is wrong"
              />
            </Box>
          </div>
          <Box sx={{ display: "flex", flexDirection: "row" }}>
            <p
              style={{
                marginLeft: 28,
                fontWeight: "bold",
                fontSize: 13,
                marginTop: 20,
              }}
            >
              Position
            </p>
            <p
              style={{
                marginLeft: 330,
                fontWeight: "bold",
                fontSize: 13,
                marginTop: 20,
              }}
            >
              Approver
            </p>
          </Box>

          <TextField
            id="outlined-basic"
            placeholder="Web Designer"
            variant="outlined"
            style={{ marginLeft: 28, width: "27%" }}
            inputProps={{
              style: {
                height: "16px",
              },
            }}
          />
          <TextField
            id="outlined-basic"
            placeholder="Manager"
            variant="outlined"
            style={{ marginLeft: 75, width: "27%" }}
            inputProps={{
              style: {
                height: "16px",
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
              No. of Days
            </p>
            <p
              style={{
                marginLeft: 300,
                fontWeight: "bold",
                fontSize: 13,
                marginTop: 20,
              }}
            >
              Address
            </p>
          </Box>

          <TextField
            id="outlined-basic"
            placeholder="2"
            variant="outlined"
            style={{ marginLeft: 28, width: "27%" }}
            inputProps={{
              style: {
                height: "16px",
              },
            }}
          />
          <TextField
            id="outlined-basic"
            placeholder="Home Address"
            variant="outlined"
            style={{ marginLeft: 75, width: "27%" }}
            inputProps={{
              style: {
                height: "16px",
              },
            }}
          />
        </div>
      </Box>

      <Box sx={{ flexDirection: "column", marginLeft: 23, marginTop: 5 }}>
        <div
          style={{
            border: "1px solid gray",
            borderRadius: 15,
            marginLeft: 5,
            marginRight: -5,
            width: 1110,
            height: 63,
            marginTop: 8,
          }}
        >
          <Box sx={{ display: "flex", flexDirection: "row" }}>
            <p
              style={{
                marginLeft: 27,
                fontWeight: "bold",
                fontSize: 20,
                marginTop: 20,
              }}
            >
              Atul Verma
            </p>
            <p
              style={{
                marginLeft: 80,
                fontWeight: "bold",
                fontSize: 13,
                marginTop: 24,
              }}
            >
              {" "}
              Reason
            </p>
            <p
              style={{
                marginLeft: 5,
                fontWeight: "lighter",
                fontSize: 11,
                marginTop: 26,
              }}
            >
              Sick Leave{" "}
            </p>
            <p
              style={{
                marginLeft: 160,
                fontWeight: "bold",
                fontSize: 13,
                marginTop: 24,
              }}
            >
              Date
            </p>
            <p
              style={{
                marginLeft: 5,
                fontWeight: "lighter",
                fontSize: 11,
                marginTop: 26,
              }}
            >
              13 Feb 2022 - 16 Feb 2022{" "}
            </p>
            <Button
              style={{
                marginLeft: 270,
                fontWeight: "lighter",
                fontSize: 11,
                marginTop: 20,
                height: 25,
                color: "green",
              }}
              variant="outlined"
            >
              Approved
            </Button>
            <Button
              style={{
                marginLeft: 5,
                fontWeight: "lighter",
                fontSize: 11,
                marginTop: 20,
                height: 25,
              }}
              variant="outlined"
              disabled
            >
              Declined
            </Button>
            <img
              style={{ marginLeft: 6, height: 15, width: 15, marginTop: 25 }}
              src={mylogo4}
              alt="Something is wrong"
            />
          </Box>
        </div>
        <div
          style={{
            border: "1px solid gray",
            borderRadius: 15,
            marginLeft: 5,
            marginRight: -5,
            width: 1110,
            height: 63,
            marginTop: 8,
          }}
        >
          <Box sx={{ display: "flex", flexDirection: "row" }}>
            <p
              style={{
                marginLeft: 27,
                fontWeight: "bold",
                fontSize: 20,
                marginTop: 20,
              }}
            >
              Atul Verma
            </p>
            <p
              style={{
                marginLeft: 80,
                fontWeight: "bold",
                fontSize: 13,
                marginTop: 24,
              }}
            >
              {" "}
              Reason
            </p>
            <p
              style={{
                marginLeft: 5,
                fontWeight: "lighter",
                fontSize: 11,
                marginTop: 26,
              }}
            >
              Sick Leave{" "}
            </p>
            <p
              style={{
                marginLeft: 160,
                fontWeight: "bold",
                fontSize: 13,
                marginTop: 24,
              }}
            >
              Date
            </p>
            <p
              style={{
                marginLeft: 5,
                fontWeight: "lighter",
                fontSize: 11,
                marginTop: 26,
              }}
            >
              13 Feb 2022 - 16 Feb 2022{" "}
            </p>
            <Button
              style={{
                marginLeft: 270,
                fontWeight: "lighter",
                fontSize: 11,
                marginTop: 20,
                height: 25,
              }}
              variant="outlined"
              disabled
            >
              Approved
            </Button>
            <Button
              style={{
                marginLeft: 5,
                fontWeight: "lighter",
                fontSize: 11,
                marginTop: 20,
                height: 25,
                color: "red",
              }}
              variant="outlined"
            >
              Declined
            </Button>
            <img
              style={{ marginLeft: 6, height: 15, width: 15, marginTop: 25 }}
              src={mylogo4}
              alt="Something is wrong"
            />
          </Box>
        </div>
      </Box>
    </>
  );
};
export default Screen9;
