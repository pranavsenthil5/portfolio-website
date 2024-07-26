'use client'
import React from "react";
import profilePic from "../assets/profile.jpg"; // Add your profile picture in the assets folder

export default function App() {
  return (
    <>
      <div className="bg-gray-100 min-h-screen p-6">
        <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-md">
          <div className="text-center">
            <img
              src="https://avatars.githubusercontent.com/pranavsenthil5"
              alt="Profile"
              className="w-32 h-32 rounded-full mx-auto mb-4"
            />
            <h1 className="text-4xl font-bold mb-2">Pranav Vedasendur Senthilvel</h1>
            <p className="text-gray-700 mb-4">Welcome to my portfolio website! I'm Pranav, a passionate developer.</p>
            <div className="flex justify-center space-x-4 mb-8">
              <a
                href="https://github.com/pranavsenthil5"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
              >
                GitHub
              </a>
              <a
                href="https://linkedin.com/in/pranavvs"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
              >
                LinkedIn
              </a>
              <a
                href="https://devpost.com/pranavsenthil5"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
              >
                Devpost
              </a>
            </div>
            <button
              onClick={() => window.open("mailto:pranavsenthil5@gmail.com")}
              className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition duration-300"
            >
              Email Me
            </button>
          </div>
          <div className="mt-10">
            <h2 className="text-2xl font-semibold mb-4">Resume</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-bold">Skills</h3>
                <p className="text-gray-700">Python, C++, Arduino, JavaScript, React, NEXT.js, Linux, Cloud, Data Structures, Algorithms, IoT, Robotics, Agile, ML, SWE</p>
              </div>
              <div>
                <h3 className="text-xl font-bold">Work Experience</h3>
                <p className="text-gray-700"><strong>Head Teaching Fellow, CMSC 201 – Computer Science I, UMBC</strong> (Dec 2023 – Present)</p>
                <ul className="list-disc list-inside text-gray-700">
                  <li>Designed clear and comprehensive rubrics for assignments and created Makefiles to test them, allowing graders to assess student work fairly and efficiently</li>
                  <li>Developed a course website using NEXT.js and Auth0 to allow authorized students to view course material and assignments</li>
                  <li>Initiated the development of a terminal UI system, aiming to establish a centralized and user-friendly platform for evaluating tasks and improving the overall grading process</li>
                </ul>
                <p className="text-gray-700"><strong>Undergraduate Researcher, Michigan State University</strong> (May 2023 – Present)</p>
                <ul className="list-disc list-inside text-gray-700">
                  <li>Interfaced with various sensors, including ones by METER Group, and created new UI widgets and libraries on IoT platforms such as Ubidots and Particle to enhance user experience and code efficiency</li>
                  <li>Installed sensors and data loggers on farms across Michigan, equipping researchers to collect data for their experiments</li>
                  <li>Integrated LoRa technology with existing data loggers to create sensor networks for farms, resulting in enhanced coverage and reduced operational costs (prototype)</li>
                  <li>Implemented a navigation stack using ROS for an autonomous rover, and presented it at MSU’s Mid-SURE event</li>
                </ul>
                <p className="text-gray-700"><strong>Teaching Fellow, CMSC 201 – Computer Science I, UMBC</strong> (Aug 2023 – Nov 2023)</p>
                <ul className="list-disc list-inside text-gray-700">
                  <li>Presented and conducted weekly lab sessions to facilitate effective learning of python fundamentals</li>
                  <li>Provided support by hosting office hours every week, offering personalized assistance to students</li>
                  <li>Graded homework, projects, and exams on a regular basis using Makefiles</li>
                </ul>
                <p className="text-gray-700"><strong>Coverage Test Intern, SBP Consulting LLC, Laurel, MD</strong> (Aug 2022 – Aug 2022)</p>
                <ul className="list-disc list-inside text-gray-700">
                  <li>Coordinated with 911 dispatch center at the Sheriff’s office in Shenandoah County to measure radio coverage of a new Motorola radio system</li>
                  <li>Used in-house and Motorola’s proprietary software Voyager to perform BER and DAQ tests across the county using portable radios, measuring the performance the system</li>
                  <li>Developed a PyQt application to automate the process of editing XML files with geo-data that stored the test results</li>
                </ul>
                <p className="text-gray-700"><strong>Data Science Intern, Mu Sigma, India</strong> (Apr 2019 – May 2019)</p>
                <ul className="list-disc list-inside text-gray-700">
                  <li>Analyzed and cleaned raw ATM transaction data for a ‘mock’ client (bank) and performed EDA and hypothesis testing to perform data-driven decisions</li>
                  <li>Used trend prediction models to optimize ATM cash refill schedules and closely collaborated with the client and presented findings to leaders at Mu Sigma</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-bold">Projects</h3>
                <p className="text-gray-700"><strong>Drift – A social media platform (CMSC 447 – Software Engineering)</strong> (Sep 2023 – Dec 2023)</p>
                <ul className="list-disc list-inside text-gray-700">
                  <li>Developed a platform with a team of 6 for travelers to share experiences, connect with fellow travelers, and plan for upcoming journeys</li>
                  <li>Used Next.js as the react framework, Supabase for authentication, PostgreSQL (Neon) for database, and Python for API</li>
                </ul>
                <p className="text-gray-700"><strong>Medical form Question-Answering (CMSC 468 – Machine learning)</strong> (Oct 2023 – Dec 2023)</p>
                <ul className="list-disc list-inside text-gray-700">
                  <li>Finetuned T5 (small) and BERT (distilled) to classify medical form questions and hosted it on Hugging Face</li>
                  <li>Built a react app and used the Hugging Face API to make an interactive demo where users can input data, and retrieve the correct information by asking questions</li>
                </ul>
                <p className="text-gray-700"><strong>Sophér – Medical Form Auto-filler (Hackathon – HopHacks 2023)</strong></p>
                <ul className="list-disc list-inside text-gray-700">
                  <li>Designed and built an application using NEXT.js and Capacitor, allowing users to scan medical forms and automatically populate answer fields with known user information</li>
                  <li>Utilized Google's Document AI for OCR and OpenAI’s GPT3 for answering questions</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-bold">Education</h3>
                <p className="text-gray-700"><strong>B.S. Computer Science, University of Maryland Baltimore County</strong> (Expected Graduation: Dec 2024)</p>
                <ul className="list-disc list-inside text-gray-700">
                  <li>President’s List, Dean’s List</li>
                  <li>GPA: 3.885</li>
                </ul>
                <p className="text-gray-700"><strong>High School Diploma, Isha Home School, India</strong> (Graduation: May 2020)</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
