
// HERO SLIDE IMAGES
import slide1 from '../slide1.webp'
import slide2 from '../slide2.webp'
import slide3 from '../slide3.webp'

// HOME BRANDS IMAGES
import cartier from '../cartier.webp'
import jimmychoo from '../jimmychoo.webp'
import millerharis from '../millerharis.webp'
import miyake from '../miyake.webp'
import mkors from '../mkors.webp'
import molecules from '../molecules.webp'
import orangeparis from '../orangeparis.webp'

// HOME STEPS VIDEO
import stepsVideo from '../stepsVideo.mp4'

// HOME PRODUCTS IMAGES
import versace from '../versace.webp'
import narciso from '../narciso.webp'
import terre from '../terreHermes.webp'
import blue from '../blueVersace.webp'
import declaration from '../declaration.webp'
import noir from '../noir.webp'
import saab from '../saabEllie.webp'
import blossom from '../blossom.webp'
import homme from '../homme.webp'
import coach from '../coach.webp'
import elisir from '../elisir.webp'
import orangecrush from '../orangecrush.webp'
import oud3333 from '../oud3333.webp'
import cherrypunk from '../cherrypunk.webp'
import elisiroderose from '../elisiroderose.webp'
import cashflower from '../cashflower.webp'
import osmanthus from '../osmanthus.webp'
import escentric from '../escentric.webp'
import mountainpepper from '../mountainpepper.webp'
import n203 from '../n203.webp'
import n17rose from '../n17rose.webp'
import sandalwood from '../sandalwood.webp'
import laundryday from '../laundryday.webp'
import bergamotdedenim from '../bergamotdedenim.webp'
import allofme from '../allofme.webp'
import verbenacytrus from '../verbenacytrus.webp'
import ambreroomspray from '../ambreroomspray.webp'
import detoxroomspray from '../detoxroomspray.webp'
import sunsandroomspray from '../sunsandroomspray.webp'
import africanhoursroomspray from '../africanhoursroomspray.webp'
import bestsellerexpset from '../bestsellerexpset.webp'

import star from '../star.svg'

// SOCIAL IMAGES
import social1 from '../social1.webp'
import social2 from '../social2.webp'
import social3 from '../social3.webp'
import social4 from '../social4.webp'
import social5 from '../social5.webp'

// FOOTER IMAGES
import ideal from '../ideal.webp'
import mastercard from '../mastercard.svg'
import visa from '../visa.svg'
import paypal from '../paypal.svg'

// ICONS
import { TbMenu2 } from "react-icons/tb";
import { LuUserRound } from "react-icons/lu";
import { IoSearch } from "react-icons/io5";
import { LuSearch } from "react-icons/lu";
import { AiOutlineCalendar } from "react-icons/ai";
import { FaArrowLeftLong } from "react-icons/fa6";
import { TiDeleteOutline } from "react-icons/ti";
import { PiBagBold } from "react-icons/pi";
import { RxCross2 } from "react-icons/rx";
import { MdInfoOutline } from "react-icons/md";
import { FaInstagram } from "react-icons/fa";
import { FaSquareFacebook } from "react-icons/fa6";
import { AiFillTikTok } from "react-icons/ai";
import { RxMixerVertical } from "react-icons/rx";







// NAVBAR
export const NAVBAR_CONTENT = {
  menu: "Menu",
  logo: "parfumado",
  calendar: "My calendar",
  cart: "Cart",
  auth: "Sign in",
  icons: {
    menu: <TbMenu2 className="w-full h-full object-cover cursor-pointer" />,
    user: <LuUserRound className="w-full h-full object-cover cursor-pointer"/>,
    search: <IoSearch className="w-full h-full object-cover" />,
    cart: <PiBagBold   className="w-full h-full object-cover" />,
    calendar: <AiOutlineCalendar className="w-full h-full object-cover"/>,
  }
}

// FOOTER
export const FOOTER_CONTENT = {
    topLinks: ["Perfumes", "FAQs", "Delivery Information", "Inspiration", "Our story", "Careers"],
    socials: {
        title: "Follow us", 
        instagram: <FaInstagram className="w-full h-full object-cover text-gray-800" />, 
        facebook: <FaSquareFacebook className="w-full h-full object-cover text-gray-800" />, 
        tiktok: <AiFillTikTok className="w-full h-full object-cover text-gray-800" />, 
    },
    logo: "parfumado",
    paymentImages: [ideal, mastercard, visa, paypal],
    bottomLinks: ["Cookie preferences", "Cookie statement", "Terms & conditions", "Privacy policy"],
}

// MODALS
export const SEARCH_MODAL = {
  placeholder: "Find your perfume",
  closeModal: "Close",
  icons: {
    search: <IoSearch className="w-full h-full object-cover text-gray-600" />,
    arrow: <FaArrowLeftLong  className="w-full h-full object-cover" />,
    delete: <TiDeleteOutline   className="w-full h-full object-cover" />,
  }
}

export const SIDEBAR_MENU = {
    createAccount: "Create account",
    quiz: "Scent quiz",
    allperfumes: "All perfumes",
    collections: "Discover collections",
    travelcases: "Travelcases",
    blogs: "Blogs",
    story: "Our story",
    careers: "Careers",
    icons: {
      close: <RxCross2 className="w-full h-full object-cover" />,
    }
}

// HOME PAGE
export const HOME_HERO = {
    title: "Become a perfume expert in just a few months",
    description: "Choose a new fragrance every month and build your own perfume collection",
    buttonText: "Discover all +550 prefumes",
    images: [slide1, slide2, slide3],
}
export const HOME_BRANDS = {
    images: [cartier, jimmychoo, millerharis, miyake, mkors, molecules, orangeparis,],
}
export const HOME_STEPS = {
    steps: [
        {
            number: "N°1",
            title: "Start your perfume journey",
            description: "Start your personal perfume journey with the ultimate membership to discover perfumes. Choose from over 550 premium perfumes every month. Discover new personal favorites and wear a perfume that suits you every day.",
        },
        {
            number: "N°2",
            title: "Handy 8ml travel size",
            description: "Your perfume will be delivered to your home for free in a handy 8ml travel size. This way you can experience your perfume for 30 days with 4 sprays per day. Ideal for #onthego.",
        },
        {
            number: "N°3",
            title: "Flexible membership",
            description: "Because we understand that your need for perfume differs every month, the subscription is 100% flexible. You can therefore very easily pause or cancel.",
        },
    ],
    video: stepsVideo,
}
export const HOME_PRODUCTS = {
    sectionTitle: "It's time to choose",
    tabsLabels: ["Premium","Niche", "Clean"],
    icons: {
        info: <MdInfoOutline className="w-full h-full object-cover text-gray-600 text-bold" />,
      },
    productCards: [
        {
            id: "aaaaq",
            image: [versace],
            title: "Bright Crystal",
            brand: "Versace",
            star: [star],

        },
        {
            id: "aaaaw",
            image: [narciso],
            title: "For Her Eau de Parfum",
            brand: "Narciso Rodriguez",
            star: [star],

        },
        {
            id: "aaaae",
            image: [terre],
            title: "Terre d'Hermès Eau de Parfum",
            brand: "Hermès",
            star: [star],

        },
        {
            id: "aaaar",
            image: [blue],
            title: "Dylan Blue",
            brand: "Versace",
            star: [star],

        },
        {
            id: "aaaat",
            image: [declaration],
            title: "Déclaration EdT",
            brand: "Cartier",
            star: [star],

        },
        {
            id: "aaaay",
            image: [noir],
            title: "Bleu Noir For Him",
            brand: "Narciso Rodriguez",
            star: [star],

        },
        {
            id: "aaaau",
            image: [saab],
            title: "Elie Saab Le Parfum",
            brand: "Elie Saab",
            star: [star],

        },
        {
            id: "aaaai",
            image: [blossom],
            title: "Blossom",
            brand: "Jimmy Choo",
            star: [star],

        },
        {
            id: "aaaao",
            image: [homme],
            title: "L'Eau d'Issey Pour Homme",
            brand: "Issey Miyake",
            star: [star],

        },
        {
            id: "aaaap",
            image: [coach],
            title: "Coach Floral",
            brand: "Coach",
            star: [star],

        },
        
    ],
    productCards2: [
        {
            id: "aaaae",
            image: [terre],
            title: "Terre d'Hermès Eau de Parfum",
            brand: "Hermès",
            star: [star],
            
        },
        {
            id: "aaaaw",
            image: [narciso],
            title: "For Her Eau de Parfum",
            brand: "Narciso Rodriguez",
            star: [star],
            
        },
        {
            id: "aaaar",
            image: [blue],
            title: "Dylan Blue",
            brand: "Versace",
            star: [star],
            
        },
        {
            id: "aaaat",
            image: [declaration],
            title: "Déclaration EdT",
            brand: "Cartier",
            star: [star],
            
        },
        {
            id: "aaaaq",
            image: [versace],
            title: "Bright Crystal",
            brand: "Versace",
            star: [star],

        },
        {
            id: "aaaay",
            image: [noir],
            title: "Bleu Noir For Him",
            brand: "Narciso Rodriguez",
            star: [star],

        },
        {
            id: "aaaao",
            image: [homme],
            title: "L'Eau d'Issey Pour Homme",
            brand: "Issey Miyake",
            star: [star],

        },
        {
            id: "aaaau",
            image: [saab],
            title: "Elie Saab Le Parfum",
            brand: "Elie Saab",
            star: [star],

        },
        {
            id: "aaaap",
            image: [coach],
            title: "Coach Floral",
            brand: "Coach",
            star: [star],

        },
        {
            id: "aaaai",
            image: [blossom],
            title: "Blossom",
            brand: "Jimmy Choo",
            star: [star],

        },
        
    ],
    productCards3: [
        {
            id: "aaaap",
            image: [coach],
            title: "Coach Floral",
            brand: "Coach",
            star: [star],

        },
        {
            id: "aaaaw",
            image: [narciso],
            title: "For Her Eau de Parfum",
            brand: "Narciso Rodriguez",
            star: [star],
            
        },
        {
            id: "aaaao",
            image: [homme],
            title: "L'Eau d'Issey Pour Homme",
            brand: "Issey Miyake",
            star: [star],
            
        },
        {
            id: "aaaau",
            image: [saab],
            title: "Elie Saab Le Parfum",
            brand: "Elie Saab",
            star: [star],
            
        },
        {
            id: "aaaar",
            image: [blue],
            title: "Dylan Blue",
            brand: "Versace",
            star: [star],
            
        },
        {
            id: "aaaat",
            image: [declaration],
            title: "Déclaration EdT",
            brand: "Cartier",
            star: [star],
            
        },
        {
            id: "aaaay",
            image: [noir],
            title: "Bleu Noir For Him",
            brand: "Narciso Rodriguez",
            star: [star],
            
        },
        {
            id: "aaaaq",
            image: [versace],
            title: "Bright Crystal",
            brand: "Versace",
            star: [star],
            
        },
        {
            id: "aaaai",
            image: [blossom],
            title: "Blossom",
            brand: "Jimmy Choo",
            star: [star],
            
        },
        {
            id: "aaaae",
            image: [terre],
            title: "Terre d'Hermès Eau de Parfum",
            brand: "Hermès",
            star: [star],
            
        },
        
    ],
}
export const HOME_SOCIAL = {
    title: "#parfumado",
    socialPosts: [
        {
            image: social1,
            href: "#"
        },
        {
            image: social2,
            href: "#"
        },
        {
            image: social3,
            href: "#"
        },
        {
            image: social4,
            href: "#"
        },
        {
            image: social5,
            href: "#"
        },
    ],
}

// PRODUCTS PAGE
export const PRODUCTS_CONTENT ={
    title: "All products",
    optionsLabels: ["Niche", "Premium", "Clean", "Other"],
    icons: {
        close: <RxCross2 className="w-full h-full object-cover object-center" />,
        search: <LuSearch className="w-full h-full object-cover object-center" />,
        filter: <RxMixerVertical  className="w-full h-full object-cover object-center" />,
    }

}


export const PRODUCTS = [

    // PREMIUM
    {
        _id: "aaaaq",
        image: [versace],
        title: "Bright Crystal",
        brand: "Versace",
        star: [star],
        category: "Premium",

    },
    {
        _id: "aaaaw",
        image: [narciso],
        title: "For Her Eau de Parfum",
        brand: "Narciso Rodriguez",
        star: [star],
        category: "Premium",

    },
    {
        _id: "aaaae",
        image: [terre],
        title: "Terre d'Hermès Eau de Parfum",
        brand: "Hermès",
        star: [star],
        category: "Premium",

    },
    {
        _id: "aaaar",
        image: [blue],
        title: "Dylan Blue",
        brand: "Versace",
        star: [star],
        category: "Premium",

    },
    {
        _id: "aaaat",
        image: [declaration],
        title: "Déclaration EdT",
        brand: "Cartier",
        star: [star],
        category: "Premium",

    },
    {
        _id: "aaaay",
        image: [noir],
        title: "Bleu Noir For Him",
        brand: "Narciso Rodriguez",
        star: [star],
        category: "Premium",

    },
    {
        _id: "aaaau",
        image: [saab],
        title: "Elie Saab Le Parfum",
        brand: "Elie Saab",
        star: [star],
        category: "Premium",

    },
    {
        _id: "aaaai",
        image: [blossom],
        title: "Blossom",
        brand: "Jimmy Choo",
        star: [star],
        category: "Premium",

    },
    {
        _id: "aaaao",
        image: [homme],
        title: "L'Eau d'Issey Pour Homme",
        brand: "Issey Miyake",
        star: [star],
        category: "Premium",

    },
    {
        _id: "aaaap",
        image: [coach],
        title: "Coach Floral",
        brand: "Coach",
        star: [star],
        category: "Premium",

    },

    // NICHE
    {
        _id: "aaaaa",
        image: [elisir],
        title: "Érose",
        brand: "Élisire",
        star: [star],
        category: "Niche",
    },
    {
        _id: "aaaas",
        image: [orangecrush],
        title: "Orange Crush",
        brand: "Fugazzi",
        star: [star],
        category: "Niche",
    },
    {
        _id: "aaaad",
        image: [oud3333],
        title: "OUD 3333",
        brand: "Acqua Alpes",
        star: [star],
        category: "Niche",
    },
    {
        _id: "aaaaf",
        image: [cherrypunk],
        title: "Cherry Punk",
        brand: "Room 1015",
        star: [star],
        category: "Niche",
    },
    {
        _id: "aaaag",
        image: [elisiroderose],
        title: "Oderose",
        brand: "Élisire",
        star: [star],
        category: "Niche",
    },
    {
        _id: "aaaah",
        image: [cashflower],
        title: "Cash Flower",
        brand: "Fugazzi",
        star: [star],
        category: "Niche",
    },
    {
        _id: "aaaaj",
        image: [osmanthus],
        title: "Jasmine / Osmanthus",
        brand: "EPC",
        star: [star],
        category: "Niche",
    },

    // CLEAN
    {
        _id: "aaaak",
        image: [escentric],
        title: "Escentric 01",
        brand: "Escentric Molecules",
        star: [star],
        category: "Clean",

    },
    {
        _id: "aaaal",
        image: [mountainpepper],
        title: "Mountain Pepper",
        brand: "Korres",
        star: [star],
        category: "Clean",
    },
    {
        _id: "aaaaz",
        image: [n203],
        title: "203",
        brand: "Bon Parfumeur",
        star: [star],
        category: "Clean",
    },
    {
        _id: "aaaax",
        image: [n17rose],
        title: "No.17 Rose Fumée",
        brand: "Marie-Stella-Maris",
        star: [star],
        category: "Clean",
    },
    {
        _id: "aaaac",
        image: [sandalwood],
        title: "Sandalwood / Musk",
        brand: "EPC",
        star: [star],
        category: "Clean",
    },
    {
        _id: "aaaav",
        image: [laundryday],
        title: "Laundry Day",
        brand: "Abel",
        star: [star],
        category: "Clean",
    },
    {
        _id: "aaaab",
        image: [bergamotdedenim],
        title: "Néroli & Bergamote de Denim",
        brand: "pH fragrances",
        star: [star],
        category: "Clean",
    },
    {
        _id: "aaaan",
        image: [allofme],
        title: "All of Me",
        brand: "Narciso Rodriguez",
        star: [star],
        category: "Clean",
    },
    {
        _id: "aaaam",
        image: [verbenacytrus],
        title: "Verbena Citrus",
        brand: "L'Occitane en Provence",
        star: [star],
        category: "Clean",
    },

    // OTHER
    {
        _id: "aaaqa",
        image: [ambreroomspray],
        title: "St. Ambre Roomspray",
        brand: "Parfumado",
        star: [star],
        category: "Other"
    },
    {
        _id: "aaawa",
        image: [detoxroomspray],
        title: "Green Detox Roomspray",
        brand: "Parfumado",
        star: [star],
        category: "Other"
    },
    {
        _id: "aaaea",
        image: [sunsandroomspray],
        title: "Sun Sand Blvrd Roomspray",
        brand: "Parfumado",
        star: [star],
        category: "Other"
    },
    {
        _id: "aaaea",
        image: [africanhoursroomspray],
        title: "African Hours Roomspray",
        brand: "Parfumado",
        star: [star],
        category: "Other"
    },
    {
        _id: "aaara",
        image: [bestsellerexpset],
        title: "Bestsellers Exploration Set",
        brand: "Parfumado",
        star: [star],
        category: "Other"
    },
    {
        _id: "aaata",
        image: [bestsellerexpset],
        title: "Woody Exploration Set",
        brand: "Parfumado",
        star: [star],
        category: "Other"
    },
    {
        _id: "aaaya",
        image: [bestsellerexpset],
        title: "Fresh Exploration Set",
        brand: "Parfumado",
        star: [star],
        category: "Other"
    },
    {
        _id: "aaaua",
        image: [bestsellerexpset],
        title: "Floral Exploration Set",
        brand: "Parfumado",
        star: [star],
        category: "Other"
    },
    {
        _id: "aaaia",
        image: [bestsellerexpset],
        title: "Amber Exploration Set",
        brand: "Parfumado",
        star: [star],
        category: "Other"
    },
]