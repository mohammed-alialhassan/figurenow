import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from 'next/router';

export default function Recipes() {

  const router = useRouter();
  const searchTarget = router.query.data;

  const handleClick = (url) => {
    window.open(url);
  };

  const files = [
    {
      title: "Savory Chicken Soup",
      size: "https://www.ambitiouskitchen.com/the-best-chicken-soup-recipe/",
      source:
        "https://www.ambitiouskitchen.com/wp-content/uploads/2018/02/chickensoup-2-1064x1064.jpg",
    },
    {
      title: "Chicken Pesto Pasta",
      size: "https://www.budgetbytes.com/one-pot-creamy-pesto-chicken-pasta/",
      source:
        "https://images.unsplash.com/photo-1605883701011-a02b2dc27f63?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    },
    {
      title: "Juicy Oven Roasted Chicken",
      size: "https://www.allrecipes.com/recipe/83557/juicy-roasted-chicken/",
      source:
        "https://images.unsplash.com/photo-1501200291289-c5a76c232e5f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    },
    {
      title: "Healthy Slow Cooker Chicken Tikka Masala",
      size: "https://www.ambitiouskitchen.com/healthy-slow-cooker-chicken-tikka-masala/",
      source:
        "https://www.ambitiouskitchen.com/wp-content/uploads/2019/12/Healthy-Slow-Cooker-Chicken-Tikka-Masala-4-1064x1064.jpg",
    },
    {
      title: "Spicy Thai Chicken Noddle Stir Fry",
      size: "https://www.ambitiouskitchen.com/spicy-thai-peanut-chicken-sweet-potato-noodle-stir-fry/",
      source:
        "https://www.ambitiouskitchen.com/wp-content/uploads/2018/08/noodles2-6-1064x1064.jpg",
    },
    {
      title: "Greek Chicken Kabobs",
      size: "https://www.ambitiouskitchen.com/greek-chicken-kabobs/",
      source:
        "https://www.ambitiouskitchen.com/wp-content/uploads/2019/08/Greek-Chicken-Kabobs-4-1064x1064.jpg",
    },
    {
      title: "Best Grilled Sesame Chicken",
      size: "https://www.ambitiouskitchen.com/grilled-sesame-chicken/",
      source:
        "https://www.ambitiouskitchen.com/wp-content/uploads/2022/08/Grilled-Sesame-Chicken-6-1064x1064.jpg",
    },
    {
      title: "Jerk Chicken & Carribean Rice",
      size: "https://www.ambitiouskitchen.com/jerk-chicken-with-caribbean-rice-mango-salsa/",
      source:
        "https://www.ambitiouskitchen.com/wp-content/uploads/2017/05/jerkchickendrumsticks-1064x1064.jpg",
    },
  ];

  const seafoods = [
    {
      title:"Honey Garlic Salmon",
      link:"https://www.ambitiouskitchen.com/lemon-garlic-salmon/",
      source:
      "https://www.ambitiouskitchen.com/wp-content/uploads/2021/01/Lemon-Garlic-Salmon-6-1064x1064.jpg"
    },
    {
      title:"Shrimp & Rice Skillet",
      link:"https://www.ambitiouskitchen.com/shrimp-brochette-skillet/",
      source:
      "https://www.ambitiouskitchen.com/wp-content/uploads/2022/02/Shrimp-Brochette-Skillet-6-1064x1064.jpg"
    },
    {
      title:"Baked Fish Sticks",
      link:"https://www.ambitiouskitchen.com/homemade-baked-fish-sticks/",
      source:
      "https://www.ambitiouskitchen.com/wp-content/uploads/2021/08/Homemade-Crispy-Baked-Fish-Sticks-6-1064x1064.jpg"
    },
    {
      title:"Salmon Taco Bowls",
      link:"https://www.ambitiouskitchen.com/salmon-taco-bowls/",
      source:
      "https://www.ambitiouskitchen.com/wp-content/uploads/2019/12/Damn-Good-Salmon-Taco-Bowls-4-1064x1064.jpg"
    },
    {
      title:"Honey Mustard Apple Tuna Salad",
      link:"https://www.ambitiouskitchen.com/honey-mustard-apple-tuna-salad/",
      source:
      "https://www.ambitiouskitchen.com/wp-content/uploads/2018/10/tunasalad-2-1064x1064.jpg"
    },
    {
      title:"Grilled Fish Tacos",
      link:"https://www.ambitiouskitchen.com/gabys-grilled-fish-tacos-with-pineapple-mango-salsa/",
      source:
      "https://www.ambitiouskitchen.com/wp-content/uploads/2018/07/fishtacos-3-1-1064x1064.jpg"
    },
    {
      title: "Spicy Tuna Wrap",
      link:"https://www.ambitiouskitchen.com/farmers-market-spicy-tuna-wraps-homemade-greek-yogurt-ranch/",
      source:
      "https://www.ambitiouskitchen.com/wp-content/uploads/2017/06/genovatunawrap-4-1064x1064.jpg"
    },
    {
      title:"Browned Cod & Pineapple Quinoa",
      link:"https://www.ambitiouskitchen.com/brown-sugar-honey-marinated-salmon-with-caramelized-pineapple-quinoa/",
      source:
      "https://www.ambitiouskitchen.com/wp-content/uploads/2013/05/19-IMG_6279-e1548448782527-750x750.jpg"
    }
  ]

  const meats = [
    {
      title: "Slow Cooked Beef Stew",
      link: "https://www.ambitiouskitchen.com/moms-slow-cooker-beef-stew/",
      source:
      "https://www.ambitiouskitchen.com/wp-content/uploads/2019/11/Slow-Cooker-Beef-Stew-6-1064x1064.jpg"
    },
    {
      title: "Cheesy Spinach Beef Pasta",
      link:"https://www.ambitiouskitchen.com/spinach-beef-pasta/",
      source:
      "https://www.ambitiouskitchen.com/wp-content/uploads/2021/03/One-Pot-Cheesy-Mushroom-Spinach-Beef-Pasta-5-1064x1064.jpg"
    },
    {
      title:"Indian-Inspired Shepherd's Pie",
      link:"https://www.ambitiouskitchen.com/indian-inspired-shepherds-pie/",
      source:
      "https://www.ambitiouskitchen.com/wp-content/uploads/2020/10/Indian-Inspired-Shepherds-Pie-5-1064x1064.jpg"
    },
    {
      title:"Healthy Taco Chilli",
      link:"https://www.ambitiouskitchen.com/seriously-the-best-healthy-turkey-chili/",
      source:
      "https://www.ambitiouskitchen.com/wp-content/uploads/2015/10/IMG_6075-Edit-e1549919193723-750x750.jpg"
    },
    {
      title:"Burger Pitas with Avocado Feta",
      link:"https://www.ambitiouskitchen.com/turkey-burger-pitas-with-avocado-feta/",
      source:
      "https://www.ambitiouskitchen.com/wp-content/uploads/2012/01/IMG_1837-e1544642110338-750x750.jpg"
    },
    {
      title:"Baked Meatballs with Rigatoni",
      link:"https://www.ambitiouskitchen.com/baked-turkey-parmesan-meatballs-with-rigatoni-and-chunky-tomato-basil-sauce/",
      source:
      "https://www.ambitiouskitchen.com/wp-content/uploads/2015/03/IMG_7939-750x750.jpg"
    },
    {
      title:"Zestful Picadillo",
      link:"https://www.ambitiouskitchen.com/turkey-picadillo/",
      source:
      "https://www.ambitiouskitchen.com/wp-content/uploads/2021/04/Turkey-Picadillo-5-1064x1064.jpg"
    },
    {
      title: "Lean & Healthy Lasagna",
      link:"https://www.ambitiouskitchen.com/the-best-healthy-turkey-lasagna-youll-ever-eat/",
      source: "https://www.ambitiouskitchen.com/wp-content/uploads/2021/12/Turkey-Lasagna-7-1064x1064.jpg"
    }
  ]

  const vegetarianRecipes = [
    {
      title:"Squash & Bean Enchilada Skillet",
      link:"https://www.ambitiouskitchen.com/butternut-squash-and-black-bean-enchilada-skillet/",
      source:
      "https://www.ambitiouskitchen.com/wp-content/uploads/2013/01/AK-Butternut-Squash-Enchilada-Skillet-594x594.jpg"
    },
    {
      title:"Cauliflower Tots",
      link:"https://www.ambitiouskitchen.com/cauliflower-tots/",
      source:
      "https://www.ambitiouskitchen.com/wp-content/uploads/2020/04/Cauliflower-Tots-5-594x594.jpg"
    },
    {
      title:"Vegetarian Stuffed Sweet Potatoes",
      link:"https://www.ambitiouskitchen.com/vegetarian-black-bean-chili-stuffed-sweet-potatoes/",
      source:
      "https://www.ambitiouskitchen.com/wp-content/uploads/2015/01/IMG_6925-594x594.jpg"
    },
    {
      title:"Chickpea Pasta Salad",
      link:"https://www.ambitiouskitchen.com/mediterranean-avocado-chickpea-pasta-salad/",
      source:
      "https://www.ambitiouskitchen.com/wp-content/uploads/2017/08/Mediterranean-Chickpea-Pasta-Salad-2-sq-1024x1024.jpg"
    },
    {
      title:"Healthy Green Bean Casserole",
      link:"https://www.ambitiouskitchen.com/best-homemade-healthy-green-bean-casserole/",
      source:
      "https://www.ambitiouskitchen.com/wp-content/uploads/2018/11/Best-Homemade-Healthy-Green-Bean-Casserole-4-1-594x594.jpg"
    },
    {
      title:"Pan Roasted Vegetables",
      link:"https://www.ambitiouskitchen.com/balsamic-herb-sheet-pan-roasted-vegetables/",
      source:
      "https://www.ambitiouskitchen.com/wp-content/uploads/2019/11/balsamicroastedveggies-7-594x594.jpg"
    },
    {
      title:"Greek Salad Pinwheels",
      link:"https://www.ambitiouskitchen.com/greek-salad-pinwheels/",
      source:
      "https://www.ambitiouskitchen.com/wp-content/uploads/2020/03/Greek-Salad-Pinwheels-5-594x594.jpg"
    },
    {
      title:"Ricotta & Pear Crostini",
      link:"https://www.ambitiouskitchen.com/ricotta-pear-crostini/",
      source:
      "https://www.ambitiouskitchen.com/wp-content/uploads/2021/11/Ricotta-Pear-Crostini-with-Salty-Pumpkin-Seed-Pistachio-Crunch-4-594x594.jpg"
    }
  ]

  return (
    <>
      <Navbar />
      <div
        className="overflow-hidden bg-gray-800 min-h-screen"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='260' height='260' viewBox='0 0 260 260'%3E%3Cg fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.23'%3E%3Cpath d='M24.37 16c.2.65.39 1.32.54 2H21.17l1.17 2.34.45.9-.24.11V28a5 5 0 0 1-2.23 8.94l-.02.06a8 8 0 0 1-7.75 6h-20a8 8 0 0 1-7.74-6l-.02-.06A5 5 0 0 1-17.45 28v-6.76l-.79-1.58-.44-.9.9-.44.63-.32H-20a23.01 23.01 0 0 1 44.37-2zm-36.82 2a1 1 0 0 0-.44.1l-3.1 1.56.89 1.79 1.31-.66a3 3 0 0 1 2.69 0l2.2 1.1a1 1 0 0 0 .9 0l2.21-1.1a3 3 0 0 1 2.69 0l2.2 1.1a1 1 0 0 0 .9 0l2.21-1.1a3 3 0 0 1 2.69 0l2.2 1.1a1 1 0 0 0 .86.02l2.88-1.27a3 3 0 0 1 2.43 0l2.88 1.27a1 1 0 0 0 .85-.02l3.1-1.55-.89-1.79-1.42.71a3 3 0 0 1-2.56.06l-2.77-1.23a1 1 0 0 0-.4-.09h-.01a1 1 0 0 0-.4.09l-2.78 1.23a3 3 0 0 1-2.56-.06l-2.3-1.15a1 1 0 0 0-.45-.11h-.01a1 1 0 0 0-.44.1L.9 19.22a3 3 0 0 1-2.69 0l-2.2-1.1a1 1 0 0 0-.45-.11h-.01a1 1 0 0 0-.44.1l-2.21 1.11a3 3 0 0 1-2.69 0l-2.2-1.1a1 1 0 0 0-.45-.11h-.01zm0-2h-4.9a21.01 21.01 0 0 1 39.61 0h-2.09l-.06-.13-.26.13h-32.31zm30.35 7.68l1.36-.68h1.3v2h-36v-1.15l.34-.17 1.36-.68h2.59l1.36.68a3 3 0 0 0 2.69 0l1.36-.68h2.59l1.36.68a3 3 0 0 0 2.69 0L2.26 23h2.59l1.36.68a3 3 0 0 0 2.56.06l1.67-.74h3.23l1.67.74a3 3 0 0 0 2.56-.06zM-13.82 27l16.37 4.91L18.93 27h-32.75zm-.63 2h.34l16.66 5 16.67-5h.33a3 3 0 1 1 0 6h-34a3 3 0 1 1 0-6zm1.35 8a6 6 0 0 0 5.65 4h20a6 6 0 0 0 5.66-4H-13.1z'/%3E%3Cpath id='path6_fill-copy' d='M284.37 16c.2.65.39 1.32.54 2H281.17l1.17 2.34.45.9-.24.11V28a5 5 0 0 1-2.23 8.94l-.02.06a8 8 0 0 1-7.75 6h-20a8 8 0 0 1-7.74-6l-.02-.06a5 5 0 0 1-2.24-8.94v-6.76l-.79-1.58-.44-.9.9-.44.63-.32H240a23.01 23.01 0 0 1 44.37-2zm-36.82 2a1 1 0 0 0-.44.1l-3.1 1.56.89 1.79 1.31-.66a3 3 0 0 1 2.69 0l2.2 1.1a1 1 0 0 0 .9 0l2.21-1.1a3 3 0 0 1 2.69 0l2.2 1.1a1 1 0 0 0 .9 0l2.21-1.1a3 3 0 0 1 2.69 0l2.2 1.1a1 1 0 0 0 .86.02l2.88-1.27a3 3 0 0 1 2.43 0l2.88 1.27a1 1 0 0 0 .85-.02l3.1-1.55-.89-1.79-1.42.71a3 3 0 0 1-2.56.06l-2.77-1.23a1 1 0 0 0-.4-.09h-.01a1 1 0 0 0-.4.09l-2.78 1.23a3 3 0 0 1-2.56-.06l-2.3-1.15a1 1 0 0 0-.45-.11h-.01a1 1 0 0 0-.44.1l-2.21 1.11a3 3 0 0 1-2.69 0l-2.2-1.1a1 1 0 0 0-.45-.11h-.01a1 1 0 0 0-.44.1l-2.21 1.11a3 3 0 0 1-2.69 0l-2.2-1.1a1 1 0 0 0-.45-.11h-.01zm0-2h-4.9a21.01 21.01 0 0 1 39.61 0h-2.09l-.06-.13-.26.13h-32.31zm30.35 7.68l1.36-.68h1.3v2h-36v-1.15l.34-.17 1.36-.68h2.59l1.36.68a3 3 0 0 0 2.69 0l1.36-.68h2.59l1.36.68a3 3 0 0 0 2.69 0l1.36-.68h2.59l1.36.68a3 3 0 0 0 2.56.06l1.67-.74h3.23l1.67.74a3 3 0 0 0 2.56-.06zM246.18 27l16.37 4.91L278.93 27h-32.75zm-.63 2h.34l16.66 5 16.67-5h.33a3 3 0 1 1 0 6h-34a3 3 0 1 1 0-6zm1.35 8a6 6 0 0 0 5.65 4h20a6 6 0 0 0 5.66-4H246.9z'/%3E%3Cpath d='M159.5 21.02A9 9 0 0 0 151 15h-42a9 9 0 0 0-8.5 6.02 6 6 0 0 0 .02 11.96A8.99 8.99 0 0 0 109 45h42a9 9 0 0 0 8.48-12.02 6 6 0 0 0 .02-11.96zM151 17h-42a7 7 0 0 0-6.33 4h54.66a7 7 0 0 0-6.33-4zm-9.34 26a8.98 8.98 0 0 0 3.34-7h-2a7 7 0 0 1-7 7h-4.34a8.98 8.98 0 0 0 3.34-7h-2a7 7 0 0 1-7 7h-4.34a8.98 8.98 0 0 0 3.34-7h-2a7 7 0 0 1-7 7h-7a7 7 0 1 1 0-14h42a7 7 0 1 1 0 14h-9.34zM109 27a9 9 0 0 0-7.48 4H101a4 4 0 1 1 0-8h58a4 4 0 0 1 0 8h-.52a9 9 0 0 0-7.48-4h-42z'/%3E%3Cpath d='M39 115a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm6-8a6 6 0 1 1-12 0 6 6 0 0 1 12 0zm-3-29v-2h8v-6H40a4 4 0 0 0-4 4v10H22l-1.33 4-.67 2h2.19L26 130h26l3.81-40H58l-.67-2L56 84H42v-6zm-4-4v10h2V74h8v-2h-8a2 2 0 0 0-2 2zm2 12h14.56l.67 2H22.77l.67-2H40zm13.8 4H24.2l3.62 38h22.36l3.62-38z'/%3E%3Cpath d='M129 92h-6v4h-6v4h-6v14h-3l.24 2 3.76 32h36l3.76-32 .24-2h-3v-14h-6v-4h-6v-4h-8zm18 22v-12h-4v4h3v8h1zm-3 0v-6h-4v6h4zm-6 6v-16h-4v19.17c1.6-.7 2.97-1.8 4-3.17zm-6 3.8V100h-4v23.8a10.04 10.04 0 0 0 4 0zm-6-.63V104h-4v16a10.04 10.04 0 0 0 4 3.17zm-6-9.17v-6h-4v6h4zm-6 0v-8h3v-4h-4v12h1zm27-12v-4h-4v4h3v4h1v-4zm-6 0v-8h-4v4h3v4h1zm-6-4v-4h-4v8h1v-4h3zm-6 4v-4h-4v8h1v-4h3zm7 24a12 12 0 0 0 11.83-10h7.92l-3.53 30h-32.44l-3.53-30h7.92A12 12 0 0 0 130 126z'/%3E%3Cpath d='M212 86v2h-4v-2h4zm4 0h-2v2h2v-2zm-20 0v.1a5 5 0 0 0-.56 9.65l.06.25 1.12 4.48a2 2 0 0 0 1.94 1.52h.01l7.02 24.55a2 2 0 0 0 1.92 1.45h4.98a2 2 0 0 0 1.92-1.45l7.02-24.55a2 2 0 0 0 1.95-1.52L224.5 96l.06-.25a5 5 0 0 0-.56-9.65V86a14 14 0 0 0-28 0zm4 0h6v2h-9a3 3 0 1 0 0 6H223a3 3 0 1 0 0-6H220v-2h2a12 12 0 1 0-24 0h2zm-1.44 14l-1-4h24.88l-1 4h-22.88zm8.95 26l-6.86-24h18.7l-6.86 24h-4.98zM150 242a22 22 0 1 0 0-44 22 22 0 0 0 0 44zm24-22a24 24 0 1 1-48 0 24 24 0 0 1 48 0zm-28.38 17.73l2.04-.87a6 6 0 0 1 4.68 0l2.04.87a2 2 0 0 0 2.5-.82l1.14-1.9a6 6 0 0 1 3.79-2.75l2.15-.5a2 2 0 0 0 1.54-2.12l-.19-2.2a6 6 0 0 1 1.45-4.46l1.45-1.67a2 2 0 0 0 0-2.62l-1.45-1.67a6 6 0 0 1-1.45-4.46l.2-2.2a2 2 0 0 0-1.55-2.13l-2.15-.5a6 6 0 0 1-3.8-2.75l-1.13-1.9a2 2 0 0 0-2.5-.8l-2.04.86a6 6 0 0 1-4.68 0l-2.04-.87a2 2 0 0 0-2.5.82l-1.14 1.9a6 6 0 0 1-3.79 2.75l-2.15.5a2 2 0 0 0-1.54 2.12l.19 2.2a6 6 0 0 1-1.45 4.46l-1.45 1.67a2 2 0 0 0 0 2.62l1.45 1.67a6 6 0 0 1 1.45 4.46l-.2 2.2a2 2 0 0 0 1.55 2.13l2.15.5a6 6 0 0 1 3.8 2.75l1.13 1.9a2 2 0 0 0 2.5.8zm2.82.97a4 4 0 0 1 3.12 0l2.04.87a4 4 0 0 0 4.99-1.62l1.14-1.9a4 4 0 0 1 2.53-1.84l2.15-.5a4 4 0 0 0 3.09-4.24l-.2-2.2a4 4 0 0 1 .97-2.98l1.45-1.67a4 4 0 0 0 0-5.24l-1.45-1.67a4 4 0 0 1-.97-2.97l.2-2.2a4 4 0 0 0-3.09-4.25l-2.15-.5a4 4 0 0 1-2.53-1.84l-1.14-1.9a4 4 0 0 0-5-1.62l-2.03.87a4 4 0 0 1-3.12 0l-2.04-.87a4 4 0 0 0-4.99 1.62l-1.14 1.9a4 4 0 0 1-2.53 1.84l-2.15.5a4 4 0 0 0-3.09 4.24l.2 2.2a4 4 0 0 1-.97 2.98l-1.45 1.67a4 4 0 0 0 0 5.24l1.45 1.67a4 4 0 0 1 .97 2.97l-.2 2.2a4 4 0 0 0 3.09 4.25l2.15.5a4 4 0 0 1 2.53 1.84l1.14 1.9a4 4 0 0 0 5 1.62l2.03-.87zM152 207a1 1 0 1 1 2 0 1 1 0 0 1-2 0zm6 2a1 1 0 1 1 2 0 1 1 0 0 1-2 0zm-11 1a1 1 0 1 1 2 0 1 1 0 0 1-2 0zm-6 0a1 1 0 1 1 2 0 1 1 0 0 1-2 0zm3-5a1 1 0 1 1 2 0 1 1 0 0 1-2 0zm-8 8a1 1 0 1 1 2 0 1 1 0 0 1-2 0zm3 6a1 1 0 1 1 2 0 1 1 0 0 1-2 0zm0 6a1 1 0 1 1 2 0 1 1 0 0 1-2 0zm4 7a1 1 0 1 1 2 0 1 1 0 0 1-2 0zm5-2a1 1 0 1 1 2 0 1 1 0 0 1-2 0zm5 4a1 1 0 1 1 2 0 1 1 0 0 1-2 0zm4-6a1 1 0 1 1 2 0 1 1 0 0 1-2 0zm6-4a1 1 0 1 1 2 0 1 1 0 0 1-2 0zm-4-3a1 1 0 1 1 2 0 1 1 0 0 1-2 0zm4-3a1 1 0 1 1 2 0 1 1 0 0 1-2 0zm-5-4a1 1 0 1 1 2 0 1 1 0 0 1-2 0zm-24 6a1 1 0 1 1 2 0 1 1 0 0 1-2 0zm16 5a5 5 0 1 0 0-10 5 5 0 0 0 0 10zm7-5a7 7 0 1 1-14 0 7 7 0 0 1 14 0zm86-29a1 1 0 0 0 0 2h2a1 1 0 0 0 0-2h-2zm19 9a1 1 0 0 1 1-1h2a1 1 0 0 1 0 2h-2a1 1 0 0 1-1-1zm-14 5a1 1 0 0 0 0 2h2a1 1 0 0 0 0-2h-2zm-25 1a1 1 0 0 0 0 2h2a1 1 0 0 0 0-2h-2zm5 4a1 1 0 0 0 0 2h2a1 1 0 0 0 0-2h-2zm9 0a1 1 0 0 1 1-1h2a1 1 0 0 1 0 2h-2a1 1 0 0 1-1-1zm15 1a1 1 0 0 1 1-1h2a1 1 0 0 1 0 2h-2a1 1 0 0 1-1-1zm12-2a1 1 0 0 0 0 2h2a1 1 0 0 0 0-2h-2zm-11-14a1 1 0 0 1 1-1h2a1 1 0 0 1 0 2h-2a1 1 0 0 1-1-1zm-19 0a1 1 0 0 0 0 2h2a1 1 0 0 0 0-2h-2zm6 5a1 1 0 0 1 1-1h2a1 1 0 0 1 0 2h-2a1 1 0 0 1-1-1zm-25 15c0-.47.01-.94.03-1.4a5 5 0 0 1-1.7-8 3.99 3.99 0 0 1 1.88-5.18 5 5 0 0 1 3.4-6.22 3 3 0 0 1 1.46-1.05 5 5 0 0 1 7.76-3.27A30.86 30.86 0 0 1 246 184c6.79 0 13.06 2.18 18.17 5.88a5 5 0 0 1 7.76 3.27 3 3 0 0 1 1.47 1.05 5 5 0 0 1 3.4 6.22 4 4 0 0 1 1.87 5.18 4.98 4.98 0 0 1-1.7 8c.02.46.03.93.03 1.4v1h-62v-1zm.83-7.17a30.9 30.9 0 0 0-.62 3.57 3 3 0 0 1-.61-4.2c.37.28.78.49 1.23.63zm1.49-4.61c-.36.87-.68 1.76-.96 2.68a2 2 0 0 1-.21-3.71c.33.4.73.75 1.17 1.03zm2.32-4.54c-.54.86-1.03 1.76-1.49 2.68a3 3 0 0 1-.07-4.67 3 3 0 0 0 1.56 1.99zm1.14-1.7c.35-.5.72-.98 1.1-1.46a1 1 0 1 0-1.1 1.45zm5.34-5.77c-1.03.86-2 1.79-2.9 2.77a3 3 0 0 0-1.11-.77 3 3 0 0 1 4-2zm42.66 2.77c-.9-.98-1.87-1.9-2.9-2.77a3 3 0 0 1 4.01 2 3 3 0 0 0-1.1.77zm1.34 1.54c.38.48.75.96 1.1 1.45a1 1 0 1 0-1.1-1.45zm3.73 5.84c-.46-.92-.95-1.82-1.5-2.68a3 3 0 0 0 1.57-1.99 3 3 0 0 1-.07 4.67zm1.8 4.53c-.29-.9-.6-1.8-.97-2.67.44-.28.84-.63 1.17-1.03a2 2 0 0 1-.2 3.7zm1.14 5.51c-.14-1.21-.35-2.4-.62-3.57.45-.14.86-.35 1.23-.63a2.99 2.99 0 0 1-.6 4.2zM275 214a29 29 0 0 0-57.97 0h57.96zM72.33 198.12c-.21-.32-.34-.7-.34-1.12v-12h-2v12a4.01 4.01 0 0 0 7.09 2.54c.57-.69.91-1.57.91-2.54v-12h-2v12a1.99 1.99 0 0 1-2 2 2 2 0 0 1-1.66-.88zM75 176c.38 0 .74-.04 1.1-.12a4 4 0 0 0 6.19 2.4A13.94 13.94 0 0 1 84 185v24a6 6 0 0 1-6 6h-3v9a5 5 0 1 1-10 0v-9h-3a6 6 0 0 1-6-6v-24a14 14 0 0 1 14-14 5 5 0 0 0 5 5zm-17 15v12a1.99 1.99 0 0 0 1.22 1.84 2 2 0 0 0 2.44-.72c.21-.32.34-.7.34-1.12v-12h2v12a3.98 3.98 0 0 1-5.35 3.77 3.98 3.98 0 0 1-.65-.3V209a4 4 0 0 0 4 4h16a4 4 0 0 0 4-4v-24c.01-1.53-.23-2.88-.72-4.17-.43.1-.87.16-1.28.17a6 6 0 0 1-5.2-3 7 7 0 0 1-6.47-4.88A12 12 0 0 0 58 185v6zm9 24v9a3 3 0 1 0 6 0v-9h-6z'/%3E%3Cpath d='M-17 191a1 1 0 0 0 0 2h2a1 1 0 0 0 0-2h-2zm19 9a1 1 0 0 1 1-1h2a1 1 0 0 1 0 2H3a1 1 0 0 1-1-1zm-14 5a1 1 0 0 0 0 2h2a1 1 0 0 0 0-2h-2zm-25 1a1 1 0 0 0 0 2h2a1 1 0 0 0 0-2h-2zm5 4a1 1 0 0 0 0 2h2a1 1 0 0 0 0-2h-2zm9 0a1 1 0 0 1 1-1h2a1 1 0 0 1 0 2h-2a1 1 0 0 1-1-1zm15 1a1 1 0 0 1 1-1h2a1 1 0 0 1 0 2h-2a1 1 0 0 1-1-1zm12-2a1 1 0 0 0 0 2h2a1 1 0 0 0 0-2H4zm-11-14a1 1 0 0 1 1-1h2a1 1 0 0 1 0 2h-2a1 1 0 0 1-1-1zm-19 0a1 1 0 0 0 0 2h2a1 1 0 0 0 0-2h-2zm6 5a1 1 0 0 1 1-1h2a1 1 0 0 1 0 2h-2a1 1 0 0 1-1-1zm-25 15c0-.47.01-.94.03-1.4a5 5 0 0 1-1.7-8 3.99 3.99 0 0 1 1.88-5.18 5 5 0 0 1 3.4-6.22 3 3 0 0 1 1.46-1.05 5 5 0 0 1 7.76-3.27A30.86 30.86 0 0 1-14 184c6.79 0 13.06 2.18 18.17 5.88a5 5 0 0 1 7.76 3.27 3 3 0 0 1 1.47 1.05 5 5 0 0 1 3.4 6.22 4 4 0 0 1 1.87 5.18 4.98 4.98 0 0 1-1.7 8c.02.46.03.93.03 1.4v1h-62v-1zm.83-7.17a30.9 30.9 0 0 0-.62 3.57 3 3 0 0 1-.61-4.2c.37.28.78.49 1.23.63zm1.49-4.61c-.36.87-.68 1.76-.96 2.68a2 2 0 0 1-.21-3.71c.33.4.73.75 1.17 1.03zm2.32-4.54c-.54.86-1.03 1.76-1.49 2.68a3 3 0 0 1-.07-4.67 3 3 0 0 0 1.56 1.99zm1.14-1.7c.35-.5.72-.98 1.1-1.46a1 1 0 1 0-1.1 1.45zm5.34-5.77c-1.03.86-2 1.79-2.9 2.77a3 3 0 0 0-1.11-.77 3 3 0 0 1 4-2zm42.66 2.77c-.9-.98-1.87-1.9-2.9-2.77a3 3 0 0 1 4.01 2 3 3 0 0 0-1.1.77zm1.34 1.54c.38.48.75.96 1.1 1.45a1 1 0 1 0-1.1-1.45zm3.73 5.84c-.46-.92-.95-1.82-1.5-2.68a3 3 0 0 0 1.57-1.99 3 3 0 0 1-.07 4.67zm1.8 4.53c-.29-.9-.6-1.8-.97-2.67.44-.28.84-.63 1.17-1.03a2 2 0 0 1-.2 3.7zm1.14 5.51c-.14-1.21-.35-2.4-.62-3.57.45-.14.86-.35 1.23-.63a2.99 2.99 0 0 1-.6 4.2zM15 214a29 29 0 0 0-57.97 0h57.96z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      >
        {searchTarget === "Chicken"? (
          <><h1 className="pt-6 lg:pt-12 text-center text-4xl xl:text-5xl text-white font-semibold"> Chicken</h1><div className="flex max-w-7xl mx-auto justify-center my-8 overflow-hidden">
            <ul
              role="list"
              className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8 overflow-x-auto"
            >
              {files.map((file) => (
                <li
                  key={file.source}
                  className="relative lg:mx-auto"
                  onClick={() => handleClick(file.size)}
                >
                  <div className="group h-72 aspect-w-10 aspect-h-7 block w-full overflow-hidden rounded-lg bg-gray-100 focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 focus-within:ring-offset-gray-100 max-h-52 md:max-h-80">
                    <Image
                      src={file.source}
                      alt=""
                      className=" object-cover group-hover:opacity-75"
                      width={320}
                      height={320} />
                    <button
                      type="button"
                      className="absolute inset-0 focus:outline-none"
                    >
                      <span className="sr-only">
                        View details for {file.title}
                      </span>
                    </button>
                  </div>
                  <p className=" mt-2 block truncate text-xs sm:text-sm text-center font-medium text-gray-50">
                    {file.title}
                  </p>
                  <a
                    href={file.size}
                    className="z-0 block text-xs sm:text-sm font-medium truncate md:whitespace-normal text-center text-gray-400"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    {file.size}{" "}
                  </a>
                </li>
              ))}
            </ul>
          </div></>
        ) : searchTarget === "Seafood"? (
          <><h1 className="pt-6 lg:pt-12 text-center text-4xl xl:text-5xl text-white font-semibold"> Seafood</h1><div className="flex max-w-7xl mx-auto justify-center my-8 overflow-hidden">
              <ul
                role="list"
                className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8 overflow-x-auto"
              >
                {seafoods.map((seafood) => (
                  <li
                    key={seafood.source}
                    className="relative lg:mx-auto"
                    onClick={() => handleClick(seafood.link)}
                  >
                    <div className="group h-72 aspect-w-10 aspect-h-7 block w-full overflow-hidden rounded-lg bg-gray-100 focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 focus-within:ring-offset-gray-100 max-h-52 md:max-h-80">
                      <Image
                        src={seafood.source}
                        alt=""
                        className=" object-cover group-hover:opacity-75"
                        width={320}
                        height={320} />
                      <button
                        type="button"
                        className="absolute inset-0 focus:outline-none"
                      >
                        <span className="sr-only">
                          View details for {seafood.title}
                        </span>
                      </button>
                    </div>
                    <p className=" mt-2 block truncate text-xs sm:text-sm text-center font-medium text-gray-50">
                      {seafood.title}
                    </p>
                    <a
                      href={seafood.link}
                      className="z-0 block text-xs sm:text-sm font-medium truncate md:whitespace-normal text-center text-gray-400"
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      {seafood.link}{" "}
                    </a>
                  </li>
                ))}
              </ul>
            </div></>
        ) : searchTarget === "Meat"? (
          <><h1 className="pt-6 lg:pt-12 text-center text-4xl xl:text-5xl text-white font-semibold"> Meat </h1><div className="flex max-w-7xl mx-auto justify-center my-8 overflow-hidden">
                <ul
                  role="list"
                  className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8 overflow-x-auto"
                >
                  {meats.map((meat) => (
                    <li
                      key={meat.source}
                      className="relative lg:mx-auto"
                      onClick={() => handleClick(meat.link)}
                    >
                      <div className="group h-72 aspect-w-10 aspect-h-7 block w-full overflow-hidden rounded-lg bg-gray-100 focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 focus-within:ring-offset-gray-100 max-h-52 md:max-h-80">
                        <Image
                          src={meat.source}
                          alt=""
                          className=" object-cover group-hover:opacity-75"
                          width={320}
                          height={320} />
                        <button
                          type="button"
                          className="absolute inset-0 focus:outline-none"
                        >
                          <span className="sr-only">
                            View details for {meat.title}
                          </span>
                        </button>
                      </div>
                      <p className=" mt-2 block truncate text-xs sm:text-sm text-center font-medium text-gray-50">
                        {meat.title}
                      </p>
                      <a
                        href={meat.link}
                        className="z-0 block text-xs sm:text-sm font-medium truncate md:whitespace-normal text-center text-gray-400"
                        target="_blank"
                        rel="noreferrer noopener"
                      >
                        {meat.link}{" "}
                      </a>
                    </li>
                  ))}
                </ul>
              </div></>
        ) : searchTarget === "Vegetarian"? (
          <><h1 className="pt-6 lg:pt-12 text-center text-4xl xl:text-5xl text-white font-semibold"> Vegetarian</h1><div className="flex max-w-7xl mx-auto justify-center my-8 pb-4 overflow-hidden">
                  <ul
                    role="list"
                    className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8 overflow-x-auto"
                  >
                    {vegetarianRecipes.map((vegetarian) => (
                      <li
                        key={vegetarian.source}
                        className="relative lg:mx-auto"
                        onClick={() => handleClick(vegetarian.link)}
                      >
                        <div className="group h-72 aspect-w-10 aspect-h-7 block w-full overflow-hidden rounded-lg bg-gray-100 focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 focus-within:ring-offset-gray-100 max-h-52 md:max-h-80">
                          <Image
                            src={vegetarian.source}
                            alt=""
                            className=" object-cover group-hover:opacity-75"
                            width={320}
                            height={320} />
                          <button
                            type="button"
                            className="absolute inset-0 focus:outline-none"
                          >
                            <span className="sr-only">
                              View details for {vegetarian.title}
                            </span>
                          </button>
                        </div>
                        <p className=" mt-2 block truncate text-xs sm:text-sm text-center font-medium text-gray-50">
                          {vegetarian.title}
                        </p>
                        <a
                          href={vegetarian.link}
                          className="z-0 block text-xs sm:text-sm font-medium truncate md:whitespace-normal text-center text-gray-400"
                          target="_blank"
                          rel="noreferrer noopener"
                        >
                          {vegetarian.link}{" "}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div></>
        ) : (
        <><h1 className="pt-6 lg:pt-12 text-center text-4xl xl:text-5xl text-white font-semibold"> Chicken</h1><div className="flex max-w-7xl mx-auto justify-center my-8 overflow-hidden">
                    <ul
                      role="list"
                      className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8 overflow-x-auto"
                    >
                      {files.map((file) => (
                        <li
                          key={file.source}
                          className="relative lg:mx-auto"
                          onClick={() => handleClick(file.size)}
                        >
                          <div className="group h-72 aspect-w-10 aspect-h-7 block w-full overflow-hidden rounded-lg bg-gray-100 focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 focus-within:ring-offset-gray-100 max-h-52 md:max-h-80">
                            <Image
                              src={file.source}
                              alt=""
                              className=" object-cover group-hover:opacity-75"
                              width={320}
                              height={320} />
                            <button
                              type="button"
                              className="absolute inset-0 focus:outline-none"
                            >
                              <span className="sr-only">
                                View details for {file.title}
                              </span>
                            </button>
                          </div>
                          <p className=" mt-2 block truncate text-xs sm:text-sm text-center font-medium text-gray-50">
                            {file.title}
                          </p>
                          <a
                            href={file.size}
                            className="z-0 block text-xs sm:text-sm font-medium truncate md:whitespace-normal text-center text-gray-400"
                            target="_blank"
                            rel="noreferrer noopener"
                          >
                            {file.size}{" "}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div><h1 className="pt-6 lg:pt-12 text-center text-4xl xl:text-5xl text-white font-semibold"> Seafood</h1><div className="flex max-w-7xl mx-auto justify-center my-8 overflow-hidden">
                      <ul
                        role="list"
                        className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8 overflow-x-auto"
                      >
                        {seafoods.map((seafood) => (
                          <li
                            key={seafood.source}
                            className="relative lg:mx-auto"
                            onClick={() => handleClick(seafood.link)}
                          >
                            <div className="group h-72 aspect-w-10 aspect-h-7 block w-full overflow-hidden rounded-lg bg-gray-100 focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 focus-within:ring-offset-gray-100 max-h-52 md:max-h-80">
                              <Image
                                src={seafood.source}
                                alt=""
                                className=" object-cover group-hover:opacity-75"
                                width={320}
                                height={320} />
                              <button
                                type="button"
                                className="absolute inset-0 focus:outline-none"
                              >
                                <span className="sr-only">
                                  View details for {seafood.title}
                                </span>
                              </button>
                            </div>
                            <p className=" mt-2 block truncate text-xs sm:text-sm text-center font-medium text-gray-50">
                              {seafood.title}
                            </p>
                            <a
                              href={seafood.link}
                              className="z-0 block text-xs sm:text-sm font-medium truncate md:whitespace-normal text-center text-gray-400"
                              target="_blank"
                              rel="noreferrer noopener"
                            >
                              {seafood.link}{" "}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div><h1 className="pt-6 lg:pt-12 text-center text-4xl xl:text-5xl text-white font-semibold"> Meat </h1><div className="flex max-w-7xl mx-auto justify-center my-8 overflow-hidden">
                      <ul
                        role="list"
                        className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8 overflow-x-auto"
                      >
                        {meats.map((meat) => (
                          <li
                            key={meat.source}
                            className="relative lg:mx-auto"
                            onClick={() => handleClick(meat.link)}
                          >
                            <div className="group h-72 aspect-w-10 aspect-h-7 block w-full overflow-hidden rounded-lg bg-gray-100 focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 focus-within:ring-offset-gray-100 max-h-52 md:max-h-80">
                              <Image
                                src={meat.source}
                                alt=""
                                className=" object-cover group-hover:opacity-75"
                                width={320}
                                height={320} />
                              <button
                                type="button"
                                className="absolute inset-0 focus:outline-none"
                              >
                                <span className="sr-only">
                                  View details for {meat.title}
                                </span>
                              </button>
                            </div>
                            <p className=" mt-2 block truncate text-xs sm:text-sm text-center font-medium text-gray-50">
                              {meat.title}
                            </p>
                            <a
                              href={meat.link}
                              className="z-0 block text-xs sm:text-sm font-medium truncate md:whitespace-normal text-center text-gray-400"
                              target="_blank"
                              rel="noreferrer noopener"
                            >
                              {meat.link}{" "}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div><h1 className="pt-6 lg:pt-12 text-center text-4xl xl:text-5xl text-white font-semibold"> Vegetarian</h1><div className="flex max-w-7xl mx-auto justify-center my-8 pb-4 overflow-hidden">
                      <ul
                        role="list"
                        className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8 overflow-x-auto"
                      >
                        {vegetarianRecipes.map((vegetarian) => (
                          <li
                            key={vegetarian.source}
                            className="relative lg:mx-auto"
                            onClick={() => handleClick(vegetarian.link)}
                          >
                            <div className="group h-72 aspect-w-10 aspect-h-7 block w-full overflow-hidden rounded-lg bg-gray-100 focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 focus-within:ring-offset-gray-100 max-h-52 md:max-h-80">
                              <Image
                                src={vegetarian.source}
                                alt=""
                                className=" object-cover group-hover:opacity-75"
                                width={320}
                                height={320} />
                              <button
                                type="button"
                                className="absolute inset-0 focus:outline-none"
                              >
                                <span className="sr-only">
                                  View details for {vegetarian.title}
                                </span>
                              </button>
                            </div>
                            <p className=" mt-2 block truncate text-xs sm:text-sm text-center font-medium text-gray-50">
                              {vegetarian.title}
                            </p>
                            <a
                              href={vegetarian.link}
                              className="z-0 block text-xs sm:text-sm font-medium truncate md:whitespace-normal text-center text-gray-400"
                              target="_blank"
                              rel="noreferrer noopener"
                            >
                              {vegetarian.link}{" "}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div></>)}
      </div>
      <Footer />
    </>
  );
}
