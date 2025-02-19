import p_img1 from '../p_img1.png'
import p_img2_1 from '../p_img2_1.png'
import p_img2_2 from '../p_img2_2.png'
import p_img2_3 from '../p_img2_3.png'
import p_img2_4 from '../p_img2_4.png'
import p_img3 from '../p_img3.png'
import p_img4 from '../p_img4.png'
import p_img5 from '../p_img5.png'
import p_img6 from '../p_img6.png'
import p_img7 from '../p_img7.png'
import p_img8 from '../p_img8.png'
import p_img9 from '../p_img9.png'
import p_img10 from '../p_img10.png'
import p_img11 from '../p_img11.png'
import p_img12 from '../p_img12.png'
import p_img13 from '../p_img13.png'
import p_img14 from '../p_img14.png'
import p_img15 from '../p_img15.png'
import p_img16 from '../p_img16.png'
import p_img17 from '../p_img17.png'
import p_img18 from '../p_img18.png'
import p_img19 from '../p_img19.png'
import p_img20 from '../p_img20.png'
import p_img21 from '../p_img21.png'
import p_img22 from '../p_img22.png'
import p_img23 from '../p_img23.png'
import p_img24 from '../p_img24.png'
import p_img25 from '../p_img25.png'
import p_img26 from '../p_img26.png'
import p_img27 from '../p_img27.png'
import p_img28 from '../p_img28.png'
import p_img29 from '../p_img29.png'
import p_img30 from '../p_img30.png'
import p_img31 from '../p_img31.png'
import p_img32 from '../p_img32.png'
import p_img33 from '../p_img33.png'
import p_img34 from '../p_img34.png'
import p_img35 from '../p_img35.png'
import p_img36 from '../p_img36.png'
import p_img37 from '../p_img37.png'
import p_img38 from '../p_img38.png'
import p_img39 from '../p_img39.png'
import p_img40 from '../p_img40.png'
import p_img41 from '../p_img41.png'
import p_img42 from '../p_img42.png'
import p_img43 from '../p_img43.png'
import p_img44 from '../p_img44.png'
import p_img45 from '../p_img45.png'
import p_img46 from '../p_img46.png'
import p_img47 from '../p_img47.png'
import p_img48 from '../p_img48.png'
import p_img49 from '../p_img49.png'
import p_img50 from '../p_img50.png'
import p_img51 from '../p_img51.png'
import p_img52 from '../p_img52.png'


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
    optionsLabels: ["Niche", "Prestige", "Clean", "Other"],
    icons: {
        close: <RxCross2 className="w-full h-full object-cover object-center" />,
        search: <LuSearch className="w-full h-full object-cover object-center" />,
        filter: <RxMixerVertical  className="w-full h-full object-cover object-center" />,
    }

}


export const PRODUCTS = [
    {
        _id: "aaaaq",
        image: [versace],
        title: "Bright Crystal",
        brand: "Versace",
        star: [star],

    },
    {
        _id: "aaaaw",
        image: [narciso],
        title: "For Her Eau de Parfum",
        brand: "Narciso Rodriguez",
        star: [star],

    },
    {
        _id: "aaaae",
        image: [terre],
        title: "Terre d'Hermès Eau de Parfum",
        brand: "Hermès",
        star: [star],

    },
    {
        _id: "aaaar",
        image: [blue],
        title: "Dylan Blue",
        brand: "Versace",
        star: [star],

    },
    {
        _id: "aaaat",
        image: [declaration],
        title: "Déclaration EdT",
        brand: "Cartier",
        star: [star],

    },
    {
        _id: "aaaay",
        image: [noir],
        title: "Bleu Noir For Him",
        brand: "Narciso Rodriguez",
        star: [star],

    },
    {
        _id: "aaaau",
        image: [saab],
        title: "Elie Saab Le Parfum",
        brand: "Elie Saab",
        star: [star],

    },
    {
        _id: "aaaai",
        image: [blossom],
        title: "Blossom",
        brand: "Jimmy Choo",
        star: [star],

    },
    {
        _id: "aaaao",
        image: [homme],
        title: "L'Eau d'Issey Pour Homme",
        brand: "Issey Miyake",
        star: [star],

    },
    {
        _id: "aaaap",
        image: [coach],
        title: "Coach Floral",
        brand: "Coach",
        star: [star],

    },
    {
        _id: "aaaaq",
        image: [versace],
        title: "Bright Crystal",
        brand: "Versace",
        star: [star],

    },
    {
        _id: "aaaaw",
        image: [narciso],
        title: "For Her Eau de Parfum",
        brand: "Narciso Rodriguez",
        star: [star],

    },
    {
        _id: "aaaae",
        image: [terre],
        title: "Terre d'Hermès Eau de Parfum",
        brand: "Hermès",
        star: [star],

    },
    {
        _id: "aaaar",
        image: [blue],
        title: "Dylan Blue",
        brand: "Versace",
        star: [star],

    },
    {
        _id: "aaaat",
        image: [declaration],
        title: "Déclaration EdT",
        brand: "Cartier",
        star: [star],

    },
    {
        _id: "aaaay",
        image: [noir],
        title: "Bleu Noir For Him",
        brand: "Narciso Rodriguez",
        star: [star],

    },
    {
        _id: "aaaau",
        image: [saab],
        title: "Elie Saab Le Parfum",
        brand: "Elie Saab",
        star: [star],

    },
    {
        _id: "aaaai",
        image: [blossom],
        title: "Blossom",
        brand: "Jimmy Choo",
        star: [star],

    },
    {
        _id: "aaaao",
        image: [homme],
        title: "L'Eau d'Issey Pour Homme",
        brand: "Issey Miyake",
        star: [star],

    },
    {
        _id: "aaaap",
        image: [coach],
        title: "Coach Floral",
        brand: "Coach",
        star: [star],

    },
    {
        _id: "aaaaq",
        image: [versace],
        title: "Bright Crystal",
        brand: "Versace",
        star: [star],

    },
    {
        _id: "aaaaw",
        image: [narciso],
        title: "For Her Eau de Parfum",
        brand: "Narciso Rodriguez",
        star: [star],

    },
    {
        _id: "aaaae",
        image: [terre],
        title: "Terre d'Hermès Eau de Parfum",
        brand: "Hermès",
        star: [star],

    },
    {
        _id: "aaaar",
        image: [blue],
        title: "Dylan Blue",
        brand: "Versace",
        star: [star],

    },
    {
        _id: "aaaat",
        image: [declaration],
        title: "Déclaration EdT",
        brand: "Cartier",
        star: [star],

    },
    {
        _id: "aaaay",
        image: [noir],
        title: "Bleu Noir For Him",
        brand: "Narciso Rodriguez",
        star: [star],

    },
    {
        _id: "aaaau",
        image: [saab],
        title: "Elie Saab Le Parfum",
        brand: "Elie Saab",
        star: [star],

    },
    {
        _id: "aaaai",
        image: [blossom],
        title: "Blossom",
        brand: "Jimmy Choo",
        star: [star],

    },
    {
        _id: "aaaao",
        image: [homme],
        title: "L'Eau d'Issey Pour Homme",
        brand: "Issey Miyake",
        star: [star],

    },
    {
        _id: "aaaap",
        image: [coach],
        title: "Coach Floral",
        brand: "Coach",
        star: [star],

    },
    {
        _id: "aaaaq",
        image: [versace],
        title: "Bright Crystal",
        brand: "Versace",
        star: [star],

    },
    {
        _id: "aaaaw",
        image: [narciso],
        title: "For Her Eau de Parfum",
        brand: "Narciso Rodriguez",
        star: [star],

    },
    {
        _id: "aaaae",
        image: [terre],
        title: "Terre d'Hermès Eau de Parfum",
        brand: "Hermès",
        star: [star],

    },
    {
        _id: "aaaar",
        image: [blue],
        title: "Dylan Blue",
        brand: "Versace",
        star: [star],

    },
    {
        _id: "aaaat",
        image: [declaration],
        title: "Déclaration EdT",
        brand: "Cartier",
        star: [star],

    },
    {
        _id: "aaaay",
        image: [noir],
        title: "Bleu Noir For Him",
        brand: "Narciso Rodriguez",
        star: [star],

    },
    {
        _id: "aaaau",
        image: [saab],
        title: "Elie Saab Le Parfum",
        brand: "Elie Saab",
        star: [star],

    },
    {
        _id: "aaaai",
        image: [blossom],
        title: "Blossom",
        brand: "Jimmy Choo",
        star: [star],

    },
    {
        _id: "aaaao",
        image: [homme],
        title: "L'Eau d'Issey Pour Homme",
        brand: "Issey Miyake",
        star: [star],

    },
    {
        _id: "aaaap",
        image: [coach],
        title: "Coach Floral",
        brand: "Coach",
        star: [star],

    },
    {
        _id: "aaaaq",
        image: [versace],
        title: "Bright Crystal",
        brand: "Versace",
        star: [star],

    },
    {
        _id: "aaaaw",
        image: [narciso],
        title: "For Her Eau de Parfum",
        brand: "Narciso Rodriguez",
        star: [star],

    },
    {
        _id: "aaaae",
        image: [terre],
        title: "Terre d'Hermès Eau de Parfum",
        brand: "Hermès",
        star: [star],

    },
    {
        _id: "aaaar",
        image: [blue],
        title: "Dylan Blue",
        brand: "Versace",
        star: [star],

    },
    {
        _id: "aaaat",
        image: [declaration],
        title: "Déclaration EdT",
        brand: "Cartier",
        star: [star],

    },
    {
        _id: "aaaay",
        image: [noir],
        title: "Bleu Noir For Him",
        brand: "Narciso Rodriguez",
        star: [star],

    },
    {
        _id: "aaaau",
        image: [saab],
        title: "Elie Saab Le Parfum",
        brand: "Elie Saab",
        star: [star],

    },
    {
        _id: "aaaai",
        image: [blossom],
        title: "Blossom",
        brand: "Jimmy Choo",
        star: [star],

    },
    {
        _id: "aaaao",
        image: [homme],
        title: "L'Eau d'Issey Pour Homme",
        brand: "Issey Miyake",
        star: [star],

    },
    {
        _id: "aaaap",
        image: [coach],
        title: "Coach Floral",
        brand: "Coach",
        star: [star],

    },
    {
        _id: "aaaaq",
        image: [versace],
        title: "Bright Crystal",
        brand: "Versace",
        star: [star],

    },
    {
        _id: "aaaaw",
        image: [narciso],
        title: "For Her Eau de Parfum",
        brand: "Narciso Rodriguez",
        star: [star],

    },
    {
        _id: "aaaae",
        image: [terre],
        title: "Terre d'Hermès Eau de Parfum",
        brand: "Hermès",
        star: [star],

    },
    {
        _id: "aaaar",
        image: [blue],
        title: "Dylan Blue",
        brand: "Versace",
        star: [star],

    },
    {
        _id: "aaaat",
        image: [declaration],
        title: "Déclaration EdT",
        brand: "Cartier",
        star: [star],

    },
    {
        _id: "aaaay",
        image: [noir],
        title: "Bleu Noir For Him",
        brand: "Narciso Rodriguez",
        star: [star],

    },
    {
        _id: "aaaau",
        image: [saab],
        title: "Elie Saab Le Parfum",
        brand: "Elie Saab",
        star: [star],

    },
    {
        _id: "aaaai",
        image: [blossom],
        title: "Blossom",
        brand: "Jimmy Choo",
        star: [star],

    },
    {
        _id: "aaaao",
        image: [homme],
        title: "L'Eau d'Issey Pour Homme",
        brand: "Issey Miyake",
        star: [star],

    },
    {
        _id: "aaaap",
        image: [coach],
        title: "Coach Floral",
        brand: "Coach",
        star: [star],

    },
]