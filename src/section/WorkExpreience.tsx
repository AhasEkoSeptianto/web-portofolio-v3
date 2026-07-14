import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineDot from "@mui/lab/TimelineDot";
import FastfoodIcon from "@mui/icons-material/Fastfood";
import LaptopMacIcon from "@mui/icons-material/LaptopMac";
import HotelIcon from "@mui/icons-material/Hotel";
import RepeatIcon from "@mui/icons-material/Repeat";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";
import SchoolIcon from "@mui/icons-material/School";
import { motion, scale, useMotionValue, useSpring } from "motion/react";

export default function WorkExperienceSection() {
  return (
    <section className="min-h-screen flex-col flex items-center p-6 space-y-20">
      <h1 className="font-bold text-2xl mt-20">Work Experience</h1>
      <Timeline position="alternate" className=" w-full">
        <TimelineItem>
          {/* <TimelineOppositeContent
            align="right"
            variant="body2"
            sx={{
              color: "text.secondary",
              m: "auto 0",
            }}
          >
            9:30 am
          </TimelineOppositeContent> */}
          <TimelineSeparator>
            <TimelineConnector />
            <TimelineDot color="primary">
              <LaptopMacIcon />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ py: "12px", px: 2 }}>
            <div className="flex items-center space-x-4">
              <h2 className="text-lg font-semibold">
                PT Media Pintarin Bersama
              </h2>
              <p className="text-md opacity-80"> Mei 2023 - Jul 2026</p>
            </div>
            <Typography className="opacity-80">Frontend Developer</Typography>

            <Box component="ul" sx={{ mt: 1 }}>
              <li>
                Build and maintenance frontend web application company for
                administration and users client
              </li>
              <li>
                Build and maintenance frontend mobile application company for
                users client
              </li>
            </Box>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          {/* <TimelineOppositeContent
            variant="body2"
            sx={{
              color: "text.secondary",
              m: "auto 0",
            }}
          >
            10:00 am
          </TimelineOppositeContent> */}
          <TimelineSeparator>
            <TimelineConnector />
            <TimelineDot color="primary">
              <LaptopMacIcon />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ py: "12px", px: 2 }}>
            <Typography variant="h6" component="span">
              <span className="text-base opacity-80 mr-4">
                {" "}
                Jun 2021 - Apr 2023
              </span>
              <span className="font-bold text-lg">PT Soegee futures</span>
            </Typography>
            <Typography className="opacity-80">Frontend Developer</Typography>
            <Box component="ul" sx={{ mt: 1 }}>
              <li>
                Build and maintenance frontend web application company for
                administration and users client
              </li>
              <li>
                Build and maintenance frontend mobile application company for
                users client
              </li>
            </Box>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineConnector />
            <TimelineDot color="primary" variant="outlined">
              <SchoolIcon />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ py: "12px", px: 2 }}>
            <div className="flex items-center space-x-4">
              <h2 className="text-lg font-semibold">
                Stikom Cipta Karya Informatika D
              </h2>
              <p className="text-md opacity-80"> Apr 2019 - Mei 2020</p>
            </div>
            <Typography className="opacity-80">Staff administrasi</Typography>

            <Box component="ul" sx={{ mt: 1 }}>
              <li>
                regulate the implementation of classes between lecturers and
                students
              </li>
              <li>
                Admin media social instagram and facebook and create desain to
                post
              </li>
            </Box>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineConnector />
            <TimelineDot color="primary" variant="outlined">
              <SchoolIcon />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ py: "12px", px: 2 }}>
            <Typography variant="h6" component="span">
              College
            </Typography>
            <Typography>
              exploring the world of the internet during college
            </Typography>
          </TimelineContent>
        </TimelineItem>
      </Timeline>
    </section>
  );
}
