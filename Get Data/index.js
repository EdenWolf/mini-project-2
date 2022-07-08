const { getRestaurantsData } = require("./getRestaurantsData");
const {
  findAndRemove10bisDuplicates,
  findDuplicates,
  handleCheckedDuplicates,
  removeDuplicates,
} = require("./restaurantsLocationFilter");
const fs = require("fs");
// Read from files
const duplicatesFile = fs.readFileSync("../JSON Files/duplicatesToRemove.json");
const duplicatesData = JSON.parse(duplicatesFile);
const legalDuplicatesFile = fs.readFileSync("../JSON Files/legalPairs.json");
const legalDuplicates = JSON.parse(legalDuplicatesFile);
const _10bisFile = fs.readFileSync(`../JSON Files/10bisRestaurantsData.json`);
const _10bisData = JSON.parse(_10bisFile);
const woltFile = fs.readFileSync(`../JSON Files/WoltRestaurantsData.json`);
const woltData = JSON.parse(woltFile);
const duplicatesToCheckFile = fs.readFileSync(`../JSON Files/duplicates.json`);
const duplicatesToCheck = JSON.parse(duplicatesToCheckFile);

// 1 - Get restaurants data
// getRestaurantsData("Wolt");
// getRestaurantsData("10bis");

// 2 - Filter restaurants

// 10bis duplicates
findAndRemove10bisDuplicates(_10bisData);
// Find duplicates between 10bis and wolt
findDuplicates(duplicatesData, legalDuplicates, _10bisData, woltData);
// Handle checked duplicates
handleCheckedDuplicates(duplicatesData, legalDuplicates, duplicatesToCheck);
// Remove duplicates from woltRestaurantsData
removeDuplicates(duplicatesData, _10bisData, woltData);
// // Find duplicates between 10bis and wolt - again to update the file
// findDuplicates(duplicatesData, legalDuplicates, _10bisData, woltData);

// 3 - Get menues
