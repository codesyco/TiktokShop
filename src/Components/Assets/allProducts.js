import p1_img from './product_1.png'
import p2_img from './product_2.png'
import p3_img from './product_3.png'
import p4_img from './product_4.png'
import p5_img from './product_5.png'
import p6_img from './product_6.png'
import p7_img from './product_7.png'
import p8_img from './product_8.png'
import p9_img from './product_9.png'
import p10_img from './product_10.png'



let allProduct = [
    {
        id:1,
        name: 'PopBabies Portable Blender',
        image: p1_img,
        img1: p10_img, //put in your own, this is a dummy image
        img2: p2_img, //put in your own, this is a dummy image
        img3: p3_img, //put in your own, this is a dummy image
        img4: p7_img, //put in your own, this is a dummy image
        newPrice:29.99,
        oldPrice:36.99,
        desc: "PopBabies Portable Blender, Smoothie Blender for Shakes and Smoothies with USB Rechargeable, Wireless Blender on The go Princess Pink"
    },
    {
        id:2,
        name: 'Jillmo Danish Dough Whisk',
        image: p2_img,
        img1: p10_img, //put in your own, this is a dummy image
        img2: p2_img, //put in your own, this is a dummy image
        img3: p3_img, //put in your own, this is a dummy image
        img4: p7_img, //put in your own, this is a dummy image
        newPrice:14.99,
        oldPrice:19.99,
        desc: "Jillmo Danish Dough Whisk, 12inch Stainless Steel Whisk is made of stiff food grade 304 stainless steel wire head and smooth stainless steel handle, welded together and rust-proof. It’s perfect for mixing heavy dough or combining ingredients prior to kneading"
    },
    {
        id:3,
        name: 'Starfrit Rotato Express 2.0',
        image: p3_img,
        img1: p10_img, //put in your own, this is a dummy image
        img2: p2_img, //put in your own, this is a dummy image
        img3: p3_img, //put in your own, this is a dummy image
        img4: p7_img, //put in your own, this is a dummy image
        newPrice:31.99,
        oldPrice:39.99,
        desc: "Starfrit Rotato Express 2.0 + 6 Replacement Blades | Updated Model - Electric Peeler (Black)"
    },
    {
        id:4,
        name: 'Zevro Indispensable Dry Food Dispenser,',
        image: p4_img,
        img1: p10_img, //put in your own, this is a dummy image
        img2: p2_img, //put in your own, this is a dummy image
        img3: p3_img, //put in your own, this is a dummy image
        img4: p7_img, //put in your own, this is a dummy image
        newPrice:16.99,
        oldPrice:23.99,
        desc: "Zevro /GAT101C Indispensable Dry Food Dispenser, Single Control, White/Chrome (KCH-06118)"
    },
    {
        id:5,
        name: 'BESTINNKITS Smart Coffee Mug',
        image: p5_img,
        img1: p10_img, //put in your own, this is a dummy image
        img2: p2_img, //put in your own, this is a dummy image
        img3: p3_img, //put in your own, this is a dummy image
        img4: p7_img, //put in your own, this is a dummy image
        newPrice:29.99,
        oldPrice:36.99,
        desc: "Easy to use 19-Watt mug warmer for use with Coffee, tea, milk, hot cocoa or your candle wax, built-in gravity induction switch with indicator light, No need to turn it on/off manually, Warm your Beverage at a desirable temperature (131℉/55℃)."
    },
    {
        id:6,
        name: 'The Home Edit Pantry Canisters',
        image: p6_img,
        img1: p10_img, //put in your own, this is a dummy image
        img2: p2_img, //put in your own, this is a dummy image
        img3: p3_img, //put in your own, this is a dummy image
        img4: p7_img, //put in your own, this is a dummy image
        newPrice:18.99,
        oldPrice:24.99,
        desc:"From The Home Edit by iDesign, these sleek pantry canisters can be the secret to effortless organization. Perfectly modular & stackable to make the most of space on a cabinet and pantry shelf, they're completely clear so contents are always visible. Lids feature a silicone gasket for an air-tight seal to help preserve freshness. Each canister is also extremely durable, with a clean look that's perfect for clutter-free kitchen or countertop storage."

    },
    {
        id:7,
        name: 'Artland Spout',
        image: p7_img,
        img1: p10_img, //put in your own, this is a dummy image
        img2: p2_img, //put in your own, this is a dummy image
        img3: p3_img, //put in your own, this is a dummy image
        img4: p7_img, //put in your own, this is a dummy image
        newPrice:14.99,
        oldPrice:21.99,
        desc:"Artland Spout, 11.05, Clear"
    },
    {
        id:8,
        name: 'Ebelskiver Pan',
        image: p8_img,
        img1: p10_img, //put in your own, this is a dummy image
        img2: p2_img, //put in your own, this is a dummy image
        img3: p3_img, //put in your own, this is a dummy image
        img4: p7_img, //put in your own, this is a dummy image
        newPrice:25.99,
        oldPrice:29.99,
        desc:"Norpro Nonstick Stuffed Pancake Pan, Munk/Aebleskiver/Ebelskiver 16.5″ x 9″ x 1.25″ Black"
    },
    {
        id:9,
        name: 'Modern Spice Labels',
        image: p9_img,
        img1: p10_img, //put in your own, this is a dummy image
        img2: p2_img, //put in your own, this is a dummy image
        img3: p3_img, //put in your own, this is a dummy image
        img4: p7_img, //put in your own, this is a dummy image
        newPrice:6.99,
        oldPrice:10.99,
        desc: "A stylish addition to any pantry, these self-adhesive sticker labels come ready to apply to the jars of your choosing. Standard sets of 20 or 80 common spice labels are available and ready to ship. Personalized labels can also be created to fit your specific needs."
    },
    {
        id:10,
        name: 'DASH Mini Maker',
        image: p10_img,
        img1: p10_img, //put in your own, this is a dummy image
        img2: p2_img, //put in your own, this is a dummy image
        img3: p3_img, //put in your own, this is a dummy image
        img4: p7_img, //put in your own, this is a dummy image
        newPrice:8.99,
        oldPrice:13.99,
        desc: "DASH Mini Maker for Individual Waffles, Hash Browns, Keto Chaffles with Easy to Clean, Non-Stick Surfaces, 4 Inch, Aqua"
    },
]
export default allProduct;