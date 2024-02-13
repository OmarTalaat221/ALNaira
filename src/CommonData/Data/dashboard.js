// Import Images

import avatar4 from "../../assets/images/users/avatar-4.jpg";
import avatar5 from "../../assets/images/users/avatar-5.jpg";
import avatar6 from "../../assets/images/users/avatar-6.jpg";
import avatar7 from "../../assets/images/users/avatar-7.jpg";
import avatar8 from "../../assets/images/users/avatar-8.jpg";
import avatar2 from "../../assets/images/users/avatar-2.jpg";
import avatar1 from "../../assets/images/users/avatar-1.jpg";

// Import Flag Images

import usFlag from "../../assets/images/flags/us.jpg";
import germanyFlag from "../../assets/images/flags/germany.jpg";
import italyFlag from "../../assets/images/flags/italy.jpg";
import spainFlag from "../../assets/images/flags/spain.jpg";


// Welcome Board

const WelcomeBoardData = [
  { id: 1, icon: "bx bx-grid-alt" },
  { id: 2, icon: "bx bx-tachometer" },
  { id: 3, icon: "bx bx-store" },
  { id: 4, icon: "bx bx-cube" },
  { id: 5, icon: "bx bx-cylinder" },
  { id: 6, icon: "bx bx-command" },
  { id: 7, icon: "bx bx-hourglass" },
  { id: 8, icon: "bx bx-pie-chart-alt" },
  { id: 9, icon: "bx bx-coffee" },
  { id: 10, icon: "bx bx-polygon" },
]


// Order Activity

const OrderActivityData = [
  {
    id: 1,
    title: "Your Manager Posted",
    label: "James Raphael",
    time: "1 hour ago",
  },
  {
    id: 2,
    title: "You have 5 pending order.",
    label: "Delivered",
    time: "6 hour ago",
  },
  {
    id: 3,
    title: "New Order Received",
    label: "Pick Up",
    time: "1 day ago",
  },
  {
    id: 4,
    title: "Your Manager Posted",
    label: "In Transit",
    time: "Yesterday",
  },
  {
    id: 5,
    title: "You have 1 pending order.",
    label: "Dispatched",
    time: "2 hour ago",
  },
  {
    id: 6,
    title: "New Order Received",
    label: "Order Received",
    time: "Today",
  },
];

// Top User

const TopUserData = [
  {
    id: 1,
    img: avatar4,
    name: "Glenn Holden",
    location: "Nevada",
    icon: "trending-up",
    iconColor: "success",
    income: "250.00",
    badgeColor: "danger",
    badgeLabel: "Cancel",
  },
  {
    id: 2,
    img: avatar5,
    name: "Lolita Hamill",
    location: "Texas",
    icon: "trending-down",
    iconColor: "danger",
    income: "110.00",
    badgeColor: "success",
    badgeLabel: "Success",
  },
  {
    id: 3,
    img: avatar6,
    name: "Robert Mercer",
    location: "California",
    icon: "trending-up",
    iconColor: "success",
    income: "420.00",
    badgeColor: "info",
    badgeLabel: "Active",
  },
  {
    id: 4,
    img: avatar7,
    name: "Marie Kim",
    location: "Montana",
    icon: "trending-down",
    iconColor: "danger",
    income: "120.00",
    badgeColor: "warning",
    badgeLabel: "Pending",
  },
  {
    id: 5,
    img: avatar8,
    name: "Sonya Henshaw",
    location: "Colorado",
    icon: "trending-up",
    iconColor: "success",
    income: "112.00",
    badgeColor: "info",
    badgeLabel: "Active",
  },
  {
    id: 6,
    img: avatar2,
    name: "Marie Kim",
    location: "Australia",
    icon: "trending-down",
    iconColor: "danger",
    income: "120.00",
    badgeColor: "success",
    badgeLabel: "Success",
  },
  {
    id: 7,
    img: avatar1,
    name: "Sonya Henshaw",
    location: "India",
    icon: "trending-up",
    iconColor: "success",
    income: "112.00",
    badgeColor: "danger",
    badgeLabel: "Cancel",
  },
];

// Top Countries

const TopCountriesData = [
  {
    id: 1,
    flag: usFlag,
    countryname: "US",
    number: 26568.84,
    icon: "bx bx-trending-up text-success",
    percentage: 40,
  },
  {
    id: 2,
    flag: germanyFlag,
    countryname: "German",
    number: 36485.52,
    icon: "bx bx-trending-up text-success",
    percentage: 50,
  },
  {
    id: 3,
    flag: italyFlag,
    countryname: "Italy",
    number: 17568.84,
    icon: "bx bx-trending-down text-danger",
    percentage: 20,
  },
  {
    id: 4,
    flag: spainFlag,
    countryname: "Spain",
    number: 75521.28,
    icon: "bx bx-trending-up text-success",
    percentage: 70,
  },
];

// Manage Orders

const ManageOrdersData = [
  {
    id: 1,
    product: "Iphone 12 Max Pro",
    variant: "Gray",
    variantColor: "secondary",
    type: "Electronic",
    stock: 1564,
    price: 1200,
    sales: 900,
    color: "success",
    width: "75%",
  },
  {
    id: 2,
    product: "New Red and White jacket",
    variant: "Red",
    variantColor: "danger",
    type: "Fashion",
    stock: 568,
    price: 300,
    sales: 650,
    color: "success",
    width: "70%",
  },
  {
    id: 3,
    product: "Latest Series Watch OS 8",
    variant: "Dark",
    variantColor: "success",
    type: "Electronic",
    stock: 1232,
    price: 250,
    sales: 350,
    color: "primary",
    width: "75%",
  },
  {
    id: 4,
    product: "New Horror Book",
    variant: "Green",
    variantColor: "primary",
    type: "Book",
    stock: 1564,
    price: 1200,
    sales: 900,
    color: "success",
    width: "50%",
  },
  {
    id: 5,
    product: "Smart 4k Android TV",
    variant: "Gray",
    variantColor: "success",
    type: "Electronic",
    stock: 5632,
    price: 700,
    sales: 600,
    color: "pricing",
    width: "90%",
  },
];

export { OrderActivityData, TopUserData, TopCountriesData, ManageOrdersData, WelcomeBoardData };
