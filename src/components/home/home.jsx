import {
  Avatar,
  Button,
  ButtonGroup,
  Container,
  IconButton,
  TextField,
  Box,
} from "@mui/material";
import React from "react";
import "../styleAll.scss";
import Slider from "@mui/material/Slider";
import { Link } from "react-router-dom";
import logo from "../imgs/logojon.svg";
import { Stack } from "@mui/system";
import KeyboardDoubleArrowLeft from "@mui/icons-material/KeyboardDoubleArrowLeft";
import KeyboardDoubleArrowRight from "@mui/icons-material/KeyboardDoubleArrowRight";
import Pause from "@mui/icons-material/Pause";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import KeyboardArrowDown from "@mui/icons-material/KeyboardArrowDown";
import PlayArrow from "@mui/icons-material/PlayArrow";
import { Add, Delete, Edit, Search } from "@mui/icons-material";
import memoryImg from "../imgs/memory.jpg";
import like from "../imgs/like.svg";
import dontLike from "../imgs/don'tLike.svg";

export const Home = () => {
  const duration = 200;
  const [position, setPosition] = React.useState(2);
  const [pausa, setPausa] = React.useState(true);
  const musicPlay = React.useRef(null);

  function formatDuration(value) {
    const minute = Math.floor(value / 60);
    const secondLeft = value - minute * 60;
    return `${minute}:${secondLeft < 10 ? `0${secondLeft}` : secondLeft}`;
  }

  const TinyText = styled(Typography)({
    fontSize: "0.75rem",
    fontWeight: 500,
    letterSpacing: 0.2,
  });

  const textLength = (text, count = 15) => {
    if (text.length > count) {
      let str = "";
      for (let i = 0; i < text.length - 3; i++) {
        str += text[i];
      }
      return str + "...";
    } else {
      return text;
    }
  };

  function play() {
    setPausa(!pausa);        
    // if (musicPlay.current) {
    //   if (pausa) {
    //     musicPlay.current.play();
    //     setInterval(() => {
    //       console.log(position , musicPlay.current.currentTime * (100 / musicPlay.current.duration));
    //       if (position > musicPlay.current.currentTime + 1) {
    //         musicPlay.current.currentTime = position;
    //       }
    //       let seekPosition = Math.round(
    //         musicPlay.current.currentTime * (100 / musicPlay.current.duration)
    //       );
    //       setPosition(seekPosition);
    //     }, 1000);
    //   } else {
    //     musicPlay.current.pause();
    //   }
    // }
  }

  return (
    <div className="home">
      <Container
        style={{
          padding: "0",
          display: "flex",
          justifyContent: "space-between",
        }}
        maxWidth="1300px"
      >
        <div className="homeLeft">
          <div>
            <Link to="/">
              <img src={logo} alt="site logo" />
            </Link>
            <Button
              style={{
                borderRadius: "25px",
                width: "230px",
                marginTop: "47px",
                marginBottom: "70px",
              }}
              variant="outlined"
            >
              CREATE THEME
            </Button>
            <Stack alignItems="flexStart" direction="column">
              <button className="likedMemories">Liked memorise</button>
              <button className="dontLikedMemories">Disliked memorise</button>
            </Stack>
          </div>

          <Stack
            style={{ backgroundColor: "#000", position: "relative" }}
            direction="row"
          >
            <Stack
              style={{
                position: "absolute",
                color: "#12A7FB",
                boxShadow:
                  " 0 0 4px #12A7FB, 0 0 4px #12A7FB, 0 0 4px rgba(0, 0, 0, 0.25)",
                backgroundColor: "#000",
                borderTopLeftRadius: "400px",
                padding: "10px",
                borderTopRightRadius: "400px",
                width: "120px",
                height: "45px",
                top: "-35%",
              }}
            >
              <KeyboardArrowDown
                fontSize="large"
                style={{ marginTop: "-10px", marginLeft: "43px" }}
              />
            </Stack>
            <ButtonGroup
              style={{
                alignItems: "center",
                marginTop: "-35px",
                marginBottom: "20px",
              }}
              size="large"
              aria-label="large button group"
            >
              <Button
                onClick={() => [
                  position > 4 ? setPosition(position - 5) : setPosition(0),
                ]}
                style={{
                  width: "80px",
                  borderTopLeftRadius: "20px",
                  borderBottomLeftRadius: "20px",
                  backgroundColor: "#000",
                  boxShadow:
                    " 0 0 4px #12A7FB, 0 0 4px #12A7FB, 0 0 4px rgba(0, 0, 0, 0.25)",
                  height: "41px",
                  marginRight: "-5px",
                }}
                key="one"
              >
                {" "}
                <KeyboardDoubleArrowLeft />
              </Button>

              <Button
                onClick={() => play()}
                style={{
                  backgroundColor: "#000",
                  boxShadow:
                    " 0 0 4px #12A7FB, 0 0 4px #12A7FB, 0 0 4px rgba(0, 0, 0, 0.25)",
                  borderRadius: "50%",
                  width: "91px",
                  height: "91px",
                  zIndex: "2",
                }}
                key="two"
              >
                {pausa ? (
                  <PlayArrow fontSize="large" />
                ) : (
                  <Pause fontSize="large" />
                )}{" "}
              </Button>

              <Button
                onClick={() => [
                  position < 191 ? setPosition(position + 5) : setPosition(0),
                ]}
                style={{
                  width: "80px",
                  borderTopRightRadius: "20px",
                  borderBottomRightRadius: "20px",
                  backgroundColor: "#000",
                  boxShadow:
                    " 0 0 4px #12A7FB, 0 0 4px #12A7FB, 0 0 4px rgba(0, 0, 0, 0.25)",
                  height: "41px",
                  marginLeft: "-5px",
                }}
                key="three"
              >
                {" "}
                <KeyboardDoubleArrowRight />
              </Button>
            </ButtonGroup>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                mt: -2,
                width: "100%",
              }}
            >
              <TinyText style={{ color: "#fff" }}>
                {formatDuration(position)}
              </TinyText>
              <TinyText style={{ color: "#fff" }}>
                -{formatDuration(duration - position)}
              </TinyText>
            </Box>
            <Slider
              aria-label="time-indicator"
              size="small"
              value={position}
              min={0}
              step={1}
              max={duration}
              onChange={(_, value) => setPosition(value)}
            />
          </Stack>
        </div>
        <Stack direction="column" width="100%">
          <Stack
            padding="14px 50px"
            alignItems="center"
            direction="row"
            backgroundColor="rgba(48, 33, 33, 0.9)"
          >
            <TextField
              style={{ width: "415px" }}
              id="search"
              label="Write theme"
              variant="standard"
            />{" "}
            <Search style={{ marginLeft: "-30px" }} />
            <Button
              style={{
                borderRadius: "25px",
                width: "160px",
                marginLeft: "auto",
                height: "50px",
              }}
              variant="outlined"
            >
              LOGOUT
            </Button>
          </Stack>
          <Stack
            height="490px"
            overflow="hidden scroll"
            style={{ overflowY: "scroll" }}
            justifyContent="space-beetwen"
            flexWrap="wrap"
            direction="row"
            padding="20px"
            gap="20px"
          >
            <Stack
              direction="row"
              backgroundColor="rgba(54, 46, 46, 0.8)"
              borderRadius="30px"
              width="466px"
              overflow="hidden"
              padding="12px 0 9px 31px"
              position="relative"
            >
              <Stack>
                <IconButton>
                  <Avatar
                    style={{ height: "93px", width: "93px" }}
                    alt="memory"
                    src={memoryImg}
                  />
                </IconButton>
                <Stack direction="row">
                  <IconButton style={{ borderRadius: "0px" }}>
                    {" "}
                    <Avatar
                      style={{
                        objectFit: "none",
                        borderRadius: "0px",
                        width: "46px",
                      }}
                      alt="memory"
                      src={like}
                    />
                  </IconButton>
                  <IconButton style={{ borderRadius: "0px" }}>
                    {" "}
                    <Avatar
                      style={{
                        objectFit: "none",
                        borderRadius: "0px",
                        width: "46px",
                      }}
                      alt="memory"
                      src={dontLike}
                    />
                  </IconButton>
                </Stack>
              </Stack>
              <Stack direction="column" padding="10px 30px 0 10px">
                <Typography
                  style={{
                    fontWeight: "600",
                    fontSize: "23px",
                    lineHeight: "28px",
                    color: "#FFFFFF",
                  }}
                  variant="h3"
                  gutterBottom
                >
                  {textLength("Yoshligimga qaytgim keladi")}
                </Typography>
                <Typography
                  style={{
                    fontWeight: "600",
                    fontSize: "15px",
                    lineHeight: "18px",
                    color: "#A7A7A7",
                    marginTop: "6px",
                  }}
                  variant="body2"
                  gutterBottom
                >
                  {textLength(
                    "Urush boshlanadi. Charliz qurolli kuchlar majmuasiga xizmatga ketadi. Lekin jangda ishtirok...",
                    60
                  )}
                </Typography>
                <Typography
                  style={{
                    fontWeight: "600",
                    fontSize: "15px",
                    lineHeight: "18px",
                    color: "#A7A7A7",
                    marginTop: "auto",
                    marginLeft: "auto",
                    marginRight: "30px",
                  }}
                  variant="body2"
                  gutterBottom
                >
                  "2023/01/30"
                </Typography>
              </Stack>
              <Stack>
                <div className="memoryEdit">
                  <Avatar
                    style={{
                      backgroundColor: "transparent",
                      border: "2px solid #fff",
                      cursor: "pointer",
                    }}
                    variant="circular"
                  >
                    <Delete />
                  </Avatar>
                  <Avatar
                    style={{
                      backgroundColor: "transparent",
                      border: "2px solid #fff",
                      cursor: "pointer",
                    }}
                    variant="circular"
                  >
                    <Edit />
                  </Avatar>
                  <Avatar
                    style={{
                      backgroundColor: "transparent",
                      border: "2px solid #fff",
                      cursor: "pointer",
                    }}
                    variant="circular"
                  >
                    <Add />
                  </Avatar>
                </div>
              </Stack>
            </Stack>
            <Stack
              direction="row"
              backgroundColor="rgba(54, 46, 46, 0.8)"
              borderRadius="30px"
              width="466px"
              overflow="hidden"
              padding="12px 0 9px 31px"
              position="relative"
            >
              <Stack>
                <IconButton>
                  <Avatar
                    style={{ height: "93px", width: "93px" }}
                    alt="memory"
                    src={memoryImg}
                  />
                </IconButton>
                <Stack direction="row">
                  <IconButton style={{ borderRadius: "0px" }}>
                    {" "}
                    <Avatar
                      style={{
                        objectFit: "none",
                        borderRadius: "0px",
                        width: "46px",
                      }}
                      alt="memory"
                      src={like}
                    />
                  </IconButton>
                  <IconButton style={{ borderRadius: "0px" }}>
                    {" "}
                    <Avatar
                      style={{
                        objectFit: "none",
                        borderRadius: "0px",
                        width: "46px",
                      }}
                      alt="memory"
                      src={dontLike}
                    />
                  </IconButton>
                </Stack>
              </Stack>
              <Stack direction="row" flexWrap="wrap" padding="10px 10px 0 10px">
                <Typography
                  style={{
                    fontWeight: "600",
                    fontSize: "23px",
                    lineHeight: "28px",
                    color: "#FFFFFF",
                  }}
                  variant="h3"
                  gutterBottom
                >
                  {textLength("Yoshligimga qaytgim keladi")}
                </Typography>
                <Typography
                  style={{
                    fontWeight: "600",
                    fontSize: "15px",
                    lineHeight: "18px",
                    color: "#A7A7A7",
                    marginTop: "6px",
                  }}
                  variant="body2"
                  gutterBottom
                >
                  {textLength(
                    "Urush boshlanadi. Charliz qurolli kuchlar majmuasiga xizmatga ketadi. Lekin jangda ishtirok...",
                    60
                  )}
                </Typography>
                <Typography
                  style={{
                    fontWeight: "600",
                    fontSize: "15px",
                    lineHeight: "18px",
                    color: "#A7A7A7",
                    marginTop: "auto",
                    marginLeft: "auto",
                    marginRight: "30px",
                  }}
                  variant="body2"
                  gutterBottom
                >
                  "2023/01/30"
                </Typography>
              </Stack>
              <Stack>
                <div className="memoryEdit">
                  <Avatar
                    style={{
                      backgroundColor: "transparent",
                      border: "2px solid #fff",
                      cursor: "pointer",
                    }}
                    variant="circular"
                  >
                    <Delete />
                  </Avatar>
                  <Avatar
                    style={{
                      backgroundColor: "transparent",
                      border: "2px solid #fff",
                      cursor: "pointer",
                    }}
                    variant="circular"
                  >
                    <Edit />
                  </Avatar>
                  <Avatar
                    style={{
                      backgroundColor: "transparent",
                      border: "2px solid #fff",
                      cursor: "pointer",
                    }}
                    variant="circular"
                  >
                    <Add />
                  </Avatar>
                </div>
              </Stack>
            </Stack>
            <Stack
              direction="row"
              backgroundColor="rgba(54, 46, 46, 0.8)"
              borderRadius="30px"
              width="466px"
              overflow="hidden"
              padding="12px 0 9px 31px"
              position="relative"
            >
              <Stack>
                <IconButton>
                  <Avatar
                    style={{ height: "93px", width: "93px" }}
                    alt="memory"
                    src={memoryImg}
                  />
                </IconButton>
                <Stack direction="row">
                  <IconButton style={{ borderRadius: "0px" }}>
                    {" "}
                    <Avatar
                      style={{
                        objectFit: "none",
                        borderRadius: "0px",
                        width: "46px",
                      }}
                      alt="memory"
                      src={like}
                    />
                  </IconButton>
                  <IconButton style={{ borderRadius: "0px" }}>
                    {" "}
                    <Avatar
                      style={{
                        objectFit: "none",
                        borderRadius: "0px",
                        width: "46px",
                      }}
                      alt="memory"
                      src={dontLike}
                    />
                  </IconButton>
                </Stack>
              </Stack>
              <Stack direction="column" padding="10px 30px 0 10px">
                <Typography
                  style={{
                    fontWeight: "600",
                    fontSize: "23px",
                    lineHeight: "28px",
                    color: "#FFFFFF",
                  }}
                  variant="h3"
                  gutterBottom
                >
                  {textLength("Yoshligimga qaytgim keladi")}
                </Typography>
                <Typography
                  style={{
                    fontWeight: "600",
                    fontSize: "15px",
                    lineHeight: "18px",
                    color: "#A7A7A7",
                    marginTop: "6px",
                  }}
                  variant="body2"
                  gutterBottom
                >
                  {textLength(
                    "Urush boshlanadi. Charliz qurolli kuchlar majmuasiga xizmatga ketadi. Lekin jangda ishtirok...",
                    60
                  )}
                </Typography>
                <Typography
                  style={{
                    fontWeight: "600",
                    fontSize: "15px",
                    lineHeight: "18px",
                    color: "#A7A7A7",
                    marginTop: "auto",
                    marginLeft: "auto",
                    marginRight: "30px",
                  }}
                  variant="body2"
                  gutterBottom
                >
                  "2023/01/30"
                </Typography>
              </Stack>
              <Stack>
                <div className="memoryEdit">
                  <Avatar
                    style={{
                      backgroundColor: "transparent",
                      border: "2px solid #fff",
                      cursor: "pointer",
                    }}
                    variant="circular"
                  >
                    <Delete />
                  </Avatar>
                  <Avatar
                    style={{
                      backgroundColor: "transparent",
                      border: "2px solid #fff",
                      cursor: "pointer",
                    }}
                    variant="circular"
                  >
                    <Edit />
                  </Avatar>
                  <Avatar
                    style={{
                      backgroundColor: "transparent",
                      border: "2px solid #fff",
                      cursor: "pointer",
                    }}
                    variant="circular"
                  >
                    <Add />
                  </Avatar>
                </div>
              </Stack>
            </Stack>
            <Stack
              direction="row"
              backgroundColor="rgba(54, 46, 46, 0.8)"
              borderRadius="30px"
              width="466px"
              overflow="hidden"
              padding="12px 0 9px 31px"
              position="relative"
            >
              <Stack>
                <IconButton>
                  <Avatar
                    style={{ height: "93px", width: "93px" }}
                    alt="memory"
                    src={memoryImg}
                  />
                </IconButton>
                <Stack direction="row">
                  <IconButton style={{ borderRadius: "0px" }}>
                    {" "}
                    <Avatar
                      style={{
                        objectFit: "none",
                        borderRadius: "0px",
                        width: "46px",
                      }}
                      alt="memory"
                      src={like}
                    />
                  </IconButton>
                  <IconButton style={{ borderRadius: "0px" }}>
                    {" "}
                    <Avatar
                      style={{
                        objectFit: "none",
                        borderRadius: "0px",
                        width: "46px",
                      }}
                      alt="memory"
                      src={dontLike}
                    />
                  </IconButton>
                </Stack>
              </Stack>
              <Stack direction="column" padding="10px 30px 0 10px">
                <Typography
                  style={{
                    fontWeight: "600",
                    fontSize: "23px",
                    lineHeight: "28px",
                    color: "#FFFFFF",
                  }}
                  variant="h3"
                  gutterBottom
                >
                  {textLength("Yoshligimga qaytgim keladi")}
                </Typography>
                <Typography
                  style={{
                    fontWeight: "600",
                    fontSize: "15px",
                    lineHeight: "18px",
                    color: "#A7A7A7",
                    marginTop: "6px",
                  }}
                  variant="body2"
                  gutterBottom
                >
                  {textLength(
                    "Urush boshlanadi. Charliz qurolli kuchlar majmuasiga xizmatga ketadi. Lekin jangda ishtirok...",
                    60
                  )}
                </Typography>
                <Typography
                  style={{
                    fontWeight: "600",
                    fontSize: "15px",
                    lineHeight: "18px",
                    color: "#A7A7A7",
                    marginTop: "auto",
                    marginLeft: "auto",
                    marginRight: "30px",
                  }}
                  variant="body2"
                  gutterBottom
                >
                  "2023/01/30"
                </Typography>
              </Stack>
              <Stack>
                <div className="memoryEdit">
                  <Avatar
                    style={{
                      backgroundColor: "transparent",
                      border: "2px solid #fff",
                      cursor: "pointer",
                    }}
                    variant="circular"
                  >
                    <Delete />
                  </Avatar>
                  <Avatar
                    style={{
                      backgroundColor: "transparent",
                      border: "2px solid #fff",
                      cursor: "pointer",
                    }}
                    variant="circular"
                  >
                    <Edit />
                  </Avatar>
                  <Avatar
                    style={{
                      backgroundColor: "transparent",
                      border: "2px solid #fff",
                      cursor: "pointer",
                    }}
                    variant="circular"
                  >
                    <Add />
                  </Avatar>
                </div>
              </Stack>
            </Stack>
            <Stack
              direction="row"
              backgroundColor="rgba(54, 46, 46, 0.8)"
              borderRadius="30px"
              width="466px"
              overflow="hidden"
              padding="12px 0 9px 31px"
              position="relative"
            >
              <Stack>
                <IconButton>
                  <Avatar
                    style={{ height: "93px", width: "93px" }}
                    alt="memory"
                    src={memoryImg}
                  />
                </IconButton>
                <Stack direction="row">
                  <IconButton style={{ borderRadius: "0px" }}>
                    {" "}
                    <Avatar
                      style={{
                        objectFit: "none",
                        borderRadius: "0px",
                        width: "46px",
                      }}
                      alt="memory"
                      src={like}
                    />
                  </IconButton>
                  <IconButton style={{ borderRadius: "0px" }}>
                    {" "}
                    <Avatar
                      style={{
                        objectFit: "none",
                        borderRadius: "0px",
                        width: "46px",
                      }}
                      alt="memory"
                      src={dontLike}
                    />
                  </IconButton>
                </Stack>
              </Stack>
              <Stack direction="column" padding="10px 30px 0 10px">
                <Typography
                  style={{
                    fontWeight: "600",
                    fontSize: "23px",
                    lineHeight: "28px",
                    color: "#FFFFFF",
                  }}
                  variant="h3"
                  gutterBottom
                >
                  {textLength("Yoshligimga qaytgim keladi")}
                </Typography>
                <Typography
                  style={{
                    fontWeight: "600",
                    fontSize: "15px",
                    lineHeight: "18px",
                    color: "#A7A7A7",
                    marginTop: "6px",
                  }}
                  variant="body2"
                  gutterBottom
                >
                  {textLength(
                    "Urush boshlanadi. Charliz qurolli kuchlar majmuasiga xizmatga ketadi. Lekin jangda ishtirok...",
                    60
                  )}
                </Typography>
                <Typography
                  style={{
                    fontWeight: "600",
                    fontSize: "15px",
                    lineHeight: "18px",
                    color: "#A7A7A7",
                    marginTop: "auto",
                    marginLeft: "auto",
                    marginRight: "30px",
                  }}
                  variant="body2"
                  gutterBottom
                >
                  "2023/01/30"
                </Typography>
              </Stack>
              <Stack>
                <div className="memoryEdit">
                  <Avatar
                    style={{
                      backgroundColor: "transparent",
                      border: "2px solid #fff",
                      cursor: "pointer",
                    }}
                    variant="circular"
                  >
                    <Delete />
                  </Avatar>
                  <Avatar
                    style={{
                      backgroundColor: "transparent",
                      border: "2px solid #fff",
                      cursor: "pointer",
                    }}
                    variant="circular"
                  >
                    <Edit />
                  </Avatar>
                  <Avatar
                    style={{
                      backgroundColor: "transparent",
                      border: "2px solid #fff",
                      cursor: "pointer",
                    }}
                    variant="circular"
                  >
                    <Add />
                  </Avatar>
                </div>
              </Stack>
            </Stack>
            <Stack
              direction="row"
              backgroundColor="rgba(54, 46, 46, 0.8)"
              borderRadius="30px"
              width="466px"
              overflow="hidden"
              padding="12px 0 9px 31px"
              position="relative"
            >
              <Stack>
                <IconButton>
                  <Avatar
                    style={{ height: "93px", width: "93px" }}
                    alt="memory"
                    src={memoryImg}
                  />
                </IconButton>
                <Stack direction="row">
                  <IconButton style={{ borderRadius: "0px" }}>
                    {" "}
                    <Avatar
                      style={{
                        objectFit: "none",
                        borderRadius: "0px",
                        width: "46px",
                      }}
                      alt="memory"
                      src={like}
                    />
                  </IconButton>
                  <IconButton style={{ borderRadius: "0px" }}>
                    {" "}
                    <Avatar
                      style={{
                        objectFit: "none",
                        borderRadius: "0px",
                        width: "46px",
                      }}
                      alt="memory"
                      src={dontLike}
                    />
                  </IconButton>
                </Stack>
              </Stack>
              <Stack direction="column" padding="10px 30px 0 10px">
                <Typography
                  style={{
                    fontWeight: "600",
                    fontSize: "23px",
                    lineHeight: "28px",
                    color: "#FFFFFF",
                  }}
                  variant="h3"
                  gutterBottom
                >
                  {textLength("Yoshligimga qaytgim keladi")}
                </Typography>
                <Typography
                  style={{
                    fontWeight: "600",
                    fontSize: "15px",
                    lineHeight: "18px",
                    color: "#A7A7A7",
                    marginTop: "6px",
                  }}
                  variant="body2"
                  gutterBottom
                >
                  {textLength(
                    "Urush boshlanadi. Charliz qurolli kuchlar majmuasiga xizmatga ketadi. Lekin jangda ishtirok...",
                    60
                  )}
                </Typography>
                <Typography
                  style={{
                    fontWeight: "600",
                    fontSize: "15px",
                    lineHeight: "18px",
                    color: "#A7A7A7",
                    marginTop: "auto",
                    marginLeft: "auto",
                    marginRight: "30px",
                  }}
                  variant="body2"
                  gutterBottom
                >
                  "2023/01/30"
                </Typography>
              </Stack>
              <Stack>
                <div className="memoryEdit">
                  <Avatar
                    style={{
                      backgroundColor: "transparent",
                      border: "2px solid #fff",
                      cursor: "pointer",
                    }}
                    variant="circular"
                  >
                    <Delete />
                  </Avatar>
                  <Avatar
                    style={{
                      backgroundColor: "transparent",
                      border: "2px solid #fff",
                      cursor: "pointer",
                    }}
                    variant="circular"
                  >
                    <Edit />
                  </Avatar>
                  <Avatar
                    style={{
                      backgroundColor: "transparent",
                      border: "2px solid #fff",
                      cursor: "pointer",
                    }}
                    variant="circular"
                  >
                    <Add />
                  </Avatar>
                </div>
              </Stack>
            </Stack>
          </Stack>
        </Stack>
      </Container>
    </div>
  );
};
