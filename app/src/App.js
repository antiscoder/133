// App.js

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LoginSignup } from './Components/LoginSignup/LoginSignup';
import Home from './Components/Home/Home';
import Account from './Components/Account/Account';
import JoinQueue from './Components/JoinQueue/JoinQueue';
import WaitTimeNorth from './Components/WaitTimeNorth/WaitTimeNorth';
import WaitTimeWest from './Components/WaitTimeWest/WaitTimeWest';
import WaitTimeSouth from './Components/WaitTimeSouth/WaitTimeSouth';
import RemainingTime from './Components/RemainingTime/RemainingTime';
import ParkingGuideNorth from './Components/ParkingGuideNorth/ParkingGuideNorth';
import ParkingGuideSouth from './Components/ParkingGuideSouth/ParkingGuideSouth';
import ParkingGuideWest from './Components/ParkingGuideWest/ParkingGuideWest';
import ParkingDuration from './Components/ParkingDuration/ParkingDuration';
import ParkingDurationNorth from './Components/ParkingDurationNorth/ParkingDurationNorth';
import ParkingDurationWest from './Components/ParkingDurationWest/ParkingDurationWest';
import ParkingDurationSouth from './Components/ParkingDurationSouth/ParkingDurationSouth';
import { createUsersTable } from './sqldb';

createUsersTable();

export let north_queue = [];

export let west_queue = [44, 55, 33];

export let south_queue = [44, 55, 33];

export function addUserToQueue(queueName, userID) {
  queueName.push(userID);
}

export let currentUser = {
  email: '',
  set setEmail(newEmail){
    this.email = newEmail;
  },
  get getEmail(){
    return this.email;
  }
};

export let currentStructure = {
  name: '',
  set setName(newName){
    this.name = newName;
  },
  get getName(){
    return this.name;
  }
};

export let north_parking = {
  originalParkingSpots: [0, 0, 1, 0, 0, 0, 1, 0], // Initial/original state
  parkingSpots: [0, 0, 1, 0, 0, 0, 1, 0], // Current state

  toggleSpotOccupied: function(id) {
    this.parkingSpots[id] === 0 ? this.parkingSpots[id] = 1 : this.parkingSpots[id] = 0;
  },

  // Function to update the current state of parking spots
  updateParkingSpots: function(newParkingSpots) {
    this.parkingSpots = newParkingSpots;
  },

  // Function to revert to the original state of parking spots
  restoreOriginalState: function() {
    this.parkingSpots = [...this.originalParkingSpots];
  },

  get getParkingSpots() {
    return this.parkingSpots;
  }
};

export let south_parking = {
  originalParkingSpots: [1, 0, 1, 0, 0, 0, 0, 0],
  parkingSpots : [1, 0, 1, 0, 0, 0, 0, 0],
  toggleSpotOccupied: function(id) {
    this.parkingSpots[id] === 0 ? this.parkingSpots[id] = 1 : this.parkingSpots[id] = 0;
  },

  // Function to update the current state of parking spots
  updateParkingSpots: function(newParkingSpots) {
    this.parkingSpots = newParkingSpots;
  },

  // Function to revert to the original state of parking spots
  restoreOriginalState: function() {
    this.parkingSpots = [...this.originalParkingSpots];
  },

  get getParkingSpots() {
    return this.parkingSpots;
  }
};

export let west_parking = {
  originalParkingSpots: [0, 1, 1, 0, 0, 0, 0, 0],
  parkingSpots : [0, 1, 1, 0, 0, 0, 0, 0],
  toggleSpotOccupied: function(id) {
    this.parkingSpots[id] === 0 ? this.parkingSpots[id] = 1 : this.parkingSpots[id] = 0;
  },

  // Function to update the current state of parking spots
  updateParkingSpots: function(newParkingSpots) {
    this.parkingSpots = newParkingSpots;
  },

  // Function to revert to the original state of parking spots
  restoreOriginalState: function() {
    this.parkingSpots = [...this.originalParkingSpots];
  },

  get getParkingSpots() {
    return this.parkingSpots;
  }
};

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Default route */}
        <Route path="/" element={<LoginSignup />} />

        {/* Home route */}
        <Route path="/home" element={<Home />} />

        {/* Login route */}
        <Route path="/login" element={<LoginSignup />} />

        {/* Account route */}
        <Route path="/account" element={<Account />} />

        {/* Join Queue route */}
        <Route path="/joinqueue" element={<JoinQueue />} />

        {/* Nested route for Wait Time North (relative path) */}
        <Route path="/joinqueue/waittimenorth" element={<WaitTimeNorth />} />

        {/* Nested route for Wait Time West (relative path) */}
        <Route path="/joinqueue/waittimewest" element={<WaitTimeWest />} />

        {/* Nested route for Wait Time South (relative path) */}
        <Route path="/joinqueue/waittimesouth" element={<WaitTimeSouth />} />

        {/* This route may need to be updated based on the final route */}
        <Route path="/remainingtime/:selectedDuration" element={<RemainingTime />} />

        {/* This route may need to be updated based on the final route */}
        <Route path="/parkingguidenorth" element={<ParkingGuideNorth />} />
        <Route path="/parkingguidewest" element={<ParkingGuideWest />} />
        <Route path="/parkingguidesouth" element={<ParkingGuideSouth />} />

        {/* This route may need to be updated based on the final route */}
        <Route path="/parkingduration" element={<ParkingDuration />} />

        {/* This route may need to be updated based on the final route */}
        <Route path="/parkingdurationnorth" element={<ParkingDurationNorth />} />

        {/* This route may need to be updated based on the final route */}
        <Route path="/parkingdurationwest" element={<ParkingDurationWest />} />

        {/* This route may need to be updated based on the final route */}
        <Route path="/parkingdurationsouth" element={<ParkingDurationSouth />} />
      </Routes>
    </Router>
  );
};
export default App;
