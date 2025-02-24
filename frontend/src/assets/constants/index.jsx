
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

// PRODUCTS IMAGES
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

// FRAGNANCE FAMILY BANNERS
import exoticFamily from '../exoticFamily.webp'
import floralFamily from '../floralFamily.webp'
import freshFamily from '../freshFamily.webp'
import gourmandFamily from '../gourmandFamily.webp'
import woodyFamily from '../woodyFamily.webp'

// LOGIN PAGE BACKGROUNDS
import loginBackgroundLargeScreen from '../loginPageBg.webp'
import loginBackgroundSmallScreen from '../loginPageBgSm.webp'


// STAR
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
import { HiChevronDown } from "react-icons/hi";
import { LuPlus } from "react-icons/lu";









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
    topLinks: [
        {
            title: "Perfumes",
            link: "/products"
        },
        {
            title: "FAQs",
            link: "/"
        },
        {
            title: "Delivery Information", 
            link: "/"
        },
        {
            title: "Inspiration", 
            link: "/"
        },
        {
            title: "Our story", 
            link: "/"
        },
        {
            title: "Careers",
            link: "/"
        }
    ],
    socials: {
        title: "Follow us", 
        instagram: <FaInstagram className="w-full h-full object-cover text-gray-800" />, 
        facebook: <FaSquareFacebook className="w-full h-full object-cover text-gray-800" />, 
        tiktok: <AiFillTikTok className="w-full h-full object-cover text-gray-800" />, 
    },
    logo: "parfumado",
    paymentImages: [ideal, mastercard, visa, paypal],
    bottomLinks: [
        {
            title: "Cookie preferences",
            link: "/"
        },
        {
            title: "Cookie statement",
            link: "/"
        },
        {
            title: "Terms & conditions", 
            link: "/"
        },
        {
            title: "Privacy policy", 
            link: "/"
        },
    ],
}

// PRODUCT CARD
export const PRODUCT_CARD = {
    icons: {
      add: <LuPlus className="w-full h-full object-cover" />,
    }
}
// RELATED PRODUCT
export const RELATED_PRODUCT = {
    title: "You may also like these similar choices",
    exploreButton: "Explore all",
    bannerTitle: "Fragnance family",
    icons: {
      add: <LuPlus className="w-full h-full object-cover" />,
    }
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

// LOGIN PAGE
export const LOGIN_CONTENT = {
    title: "Sign in",
    notYet: "Not signed up yet?",
    registerLink: "Create a free account",
    signInButton: "Sign in",
    forgot: "Forgot password?",
    backgroundLG: loginBackgroundLargeScreen,
    backgroundSM: loginBackgroundSmallScreen,
}

// REGISTER PAGE
export const REGISTER_CONTENT = {
    title: "Create a free account",
    haveAccount: "Do you already have an account?",
    registerLink: "Log in",
    terms: "By continuing, you agree to the Terms and Conditions of Parfumado.",
    signInButton: "Create your account",
    backgroundLG: loginBackgroundLargeScreen,
    backgroundSM: loginBackgroundSmallScreen,
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
            href: "https://www.instagram.com"
        },
        {
            image: social2,
            href: "https://www.instagram.com"
        },
        {
            image: social3,
            href: "https://www.instagram.com"
        },
        {
            image: social4,
            href: "https://www.instagram.com"
        },
        {
            image: social5,
            href: "https://www.instagram.com"
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

// SINGLE PRODUCT PAGE
export const PRODUCT_CONTENT ={

    titleDescr: "Product description",
    titleGender: "Gender",
    titleClass: "Class",
    titleNotes: "Fragnance notes",
    titleFamily: "Fragnance family",
    titleType: "Type",
    titleStyle: "Style",
    more: "Read more",
    addToCalendar: "Add to calendar",

    indicators: {
        trailTitle: "Trail of trace",
        presenceTitle: "Presence in hours",
        trailRange: ["Light", "Strong"],
        presenceRange: ["4 Hours", "12 Hours"],
    },
    icons: {
        chevron: <HiChevronDown className="w-full h-full object-cover object-center" />,
        star: star,
    }

}

// BRANDS
export const BRANDS = {
    title: "Brands",
    brands: [
        "A.N Other", "Ann Ringstrand", "Bentley", "Coach", "Dr Sebagh", "Eutopie", "Karl Lagerfeld", "Laura Biagiotti", "Memoize London", 
        "Moschino", "Parfumado x Fred van Leer", "Reminiscence", "Sentier", "The Perfumer's Story by Azzi", "Zadig & Voltaire", "Abel",
        "Abercrombie and Fitch", "Acqua Alpes", "AER", "Æther", "Affinessence", "Alex Simone", "Angel Schlesser", "Annick Goutal", "Ariana Grande", 
        "Armaf", "Atelier Materi", "Atelier Oblique", "Atelier Vesper", "AVANT", "Azzaro", "BALR", "biehl. parfumkunstwerke", "Billie Eilish", 
        "Blend Oud", "Bon Parfumeur", "Boucheron", "Carolina Herrera", "Cartier", "Chopard", "Clean", "Comptoir Sud Pacifique", "Contradictions in ILK", 
        "Costume National", "CRA-YON", "Czech & Speake", "D'Orsay", "Dali Haute Parfumerie", "Daniel Josier", "DKNY", "Dsquared", "Elementals", 
        "Elie Saab", "Élisire", "EMIL ÉLISE", "EPC", "Ermenegildo Zegna", "Escentric Molecules", "Etat Libre d'Orange", "Evody", "Extrait D'Atelier",
        "Floris London", "Fugazzi", "Gallivant", "Genyum", "HAYARI PARIS", "Hermès", "Histoires de Parfums", "Ilia", "Il Profvmo", "Ineke", "Issey Miyake", 
        "Jacques Zolty", "Jean Paul Gaultier", "Jean-Charles Brosseau", "Juicy Couture", "Jimmy Choo", "Kiton", "Korres", "L'Adoné", "L'Occitane en Provence", 
        "L'Artisan Parfumeur", "L'Orchestre Parfum", "Lacoste", "Lalique", "Lanvin", "Le Galion", "Les Bains Guerbois", "Lesquendieu", "Linari", "Lolita Lempicka",
        "M. Micallef", "MADE in PIGALLE", "Maya Njie", "Marie-Stella-Maris", "Michael Kors", "Miller et Bertaux", "Miller Harris", "Mirko Buffini", 
        "MISSONI", "Mmoire", "Molton Brown", "Moncler", "Mont Blanc", "NAÏF", "Narciso Rodriguez", "Neela Vermeire Créations", "Nina Ricci", 
        "Oilily", "Olfactive Studio", "Oscar de la Renta", "Paco Rabanne", "Parfumado", "Parfumado x Jade Anna", "Parfumado x Les Jumelles", "Parfums CIRO", 
        "Penhaligon's", "Pepe Jeans", "pH fragrances", "Philip B", "Philipp Plein", "Prescription", "Rituals", "Robert Piguet", "Roberto Cavalli", 
        "Rochas", "Room 1015", "ROOS & ROOS", "Roquebrun", "Salvatore Ferragamo", "Sarah Jessica Parker", "Serge Lutens", "SG79 | STHLM", "Shiseido", 
        "Sisley", "Sol de Janeiro", "State Of Mind - État d'esprit", "stellair.", "The BrowGal", "The Different Company", "Tiziana Terenzi", 
        "Tommy Hilfiger", "Trussardi", "Ulrich Lang New York", "Valentino", "Van Cleef & Arpels", "Van Gils", "Versace", "YVRA",
    ]
}

// GENDERS
export const GENDERS = {
    title: "Gender",
    genders: [
        "Female", "Male", "Unisex"
    ]
}

// CLASSES
export const CLASSES = {
    title: "Class",
    classes: [
        "Eau de Cologne", "Eau de Parfum", "Eau de Toilette", "Extrait de Parfum"
    ]
}

// NOTES
export const NOTES = {
    title: "Fragnance notes",
    notes: [
        "Amber", "Animal", "Aquatic", "Aromatic", "Almond", "Aldehydic", "Balsamic", "Cacao", "Caramel", "Cherry", "Cinnamon",
        "Citrus", "Coconut", "Coffee", "Dry woods", "Earthy", "Exotic notes", "Fig", "Floral exotic", "Floral notes", "Fresh exotic", 
        "Fresh notes", "Fruity", "Green", "Hazelnut", "Honey", "Jasmin", "Leather", "Maritime", "Milky", "Mossy woods", "Musk", "Oudh",
        "Ozonic", "Patchouli", "Powdery", "Roses", "Rum", "Sand", "Sandalwood", "Smoky", "Soft exotic", "Soft floral", "Sweet", "Tabacco",
        "Tropical", "Tuberose", "Vanilla", "Warm spicy", "White floral", "Woody exotic", "Woody notes", "Woody spicy", "Yellow floral",
    ]
}

// FAMILIES
export const FAMILIES = {
    title: "Fragnance family",
    families: [
        "Exotic", "Floral", "Fresh", "Gourmand", "Woody",
    ]
}

// STYLES
export const STYLES = {
    title: "Style",
    styles: [
        "Adventurous", "Classic", "Sexy", "Sporty", "Trendy",
    ]
}




// PRODUCTS INFO
export const PRODUCTS = [

    // PREMIUM
    {
        _id: "aaaaq",
        image: [versace],
        title: "Bright Crystal",
        brand: "Versace",
        star: [star],
        category: "Premium",
        class: "Eau de Toilette",
        gender: "Female",
        reviews: 20,
        notes: ["Soft floral", "Roses", "Fresh exotic", "Citrus", "Aquatic", "Woody notes", "Fresh notes"],
        family: "Floral",
        familyBanner: floralFamily,
        style: "Trendy",
        trail: 30,
        presence: 45,
        description: "Bright Crystal is a women's Eau de Toilette from Versace. Bright Crystal by Versace is a floral fruity perfume for women. It is a very popular classic from Versace."
    },
    {
        _id: "aaaaw",
        image: [narciso],
        title: "For Her Eau de Parfum",
        brand: "Narciso Rodriguez",
        star: [star],
        category: "Premium",
        class: "Eau de Parfum",
        gender: "Female",
        reviews: 14,
        notes: ["Sweet", "Roses", "Powdery", "Patchouli", "Musk", "Fruity", "Floral notes", "Amber", "Warm spicy", "Woody notes"],
        family: "Woody",
        familyBanner: woodyFamily,
        style: "Trendy",
        trail: 60,
        presence: 65,
        description: "For Her Eau de Parfum is a women's Eau de Parfum from Narciso Rodriguez. For Her Parfum is a mysterious and sensual perfume for women."
    },
    {
        _id: "aaaae",
        image: [terre],
        title: "Terre d'Hermès Eau de Parfum",
        brand: "Hermès",
        star: [star],
        category: "Premium",
        class: "Eau de Parfum",
        gender: "Male",
        reviews: 1,
        notes: ["Mossy woods", "Citrus", "Amber", "Earthy", "Woody notes"],
        family: "Woody",
        familyBanner: woodyFamily,
        style: "Sporty",
        trail: 20,
        presence: 50,
        description: "Terre d'Hermès is a symbolic tale about matter and its transformation. A novel that expresses the alchemical power of the elements. A water between heaven and earth. A journey that is permeated by power and poetry. Woodsy, vegetal, mineral. The perfume, an essential density showing the features of the mineral and woodsy facets."
    },
    {
        _id: "aaaar",
        image: [blue],
        title: "Dylan Blue",
        brand: "Versace",
        star: [star],
        category: "Premium",
        class: "Eau de Toilette",
        gender: "Male",
        reviews: 9,
        notes: ["Smoky", "Musk", "Fresh exotic", "Citrus", "Aromatic", "Aquatic", "Amber", "Warm spicy", "Woody notes"],
        family: "Fresh",
        familyBanner: freshFamily,
        style: "Trendy",
        trail: 60,
        presence: 65,
        description: "Dylan Blue is a men's Eau de Toilette from Versace. Dylan Blue by Versace, a modern, tough and intense men's perfume. Instinct and passion are linked to fit, love and desire."
    },
    {
        _id: "aaaat",
        image: [declaration],
        title: "Déclaration EdT",
        brand: "Cartier",
        star: [star],
        category: "Premium",
        class: "Eau de Toilette",
        gender: "Male",
        reviews: 1,
        notes: ["Fresh exotic", "Dry woods", "Aromatic"],
        family: "Woody",
        familyBanner: woodyFamily,
        style: "Classic",
        trail: 60,
        presence: 65,
        description: "Déclaration EdT is a men's Eau de Toilette from Cartier. The Cartier Déclaration Perfume EDT for men is an intensive yet emotional fragrance that inspires you to express everything that is really important."
    },
    {
        _id: "aaaay",
        image: [noir],
        title: "Bleu Noir For Him",
        brand: "Narciso Rodriguez",
        star: [star],
        category: "Premium",
        class: "Eau de Toilette",
        gender: "Male",
        reviews: 0,
        notes: ["Powdery", "Musk", "Fresh exotic", "Aromatic", "Earthy", "Warm spicy", "Woody notes"],
        family: "Woody",
        familyBanner: woodyFamily,
        style: "Classic",
        trail: 40,
        presence: 43,
        description: "Narciso Rodriguez Blue Noir Eau de Toilette is the perfect fragrance for the elegant and modern man. With its woody and spicy scent it is a perfect fit for fall, winter and spring. It contains spicy notes combined with elegant and addictive woody notes around a sensual heart of musk."
    },
    {
        _id: "aaaau",
        image: [saab],
        title: "Elie Saab Le Parfum",
        brand: "Elie Saab",
        star: [star],
        category: "Premium",
        class: "Eau de Parfum",
        gender: "Female",
        reviews: 15,
        notes: ["Sweet", "White floral", "Honey", "Citrus", "Floral exotic"],
        family: "Exotic",
        familyBanner: exoticFamily,
        style: "Trendy",
        trail: 65,
        presence: 70,
        description: "Elie Saab Le Parfum is a women's Eau de Parfum from Elie Saab. ELIE SAAB Le Parfum, composed through the nose of Francis Kurkdjan, is an ode to light and celebrates the splendor and radiance of radiant femininity with a woody, sunny and floral accord."
    },
    {
        _id: "aaaai",
        image: [blossom],
        title: "Blossom",
        brand: "Jimmy Choo",
        star: [star],
        category: "Premium",
        class: "Eau de Parfum",
        gender: "Female",
        reviews: 9,
        notes: ["Sweet", "Roses", "Fruity", "Citrus", "Floral notes", "Fresh notes"],
        family: "Floral",
        familyBanner: floralFamily,
        style: "Trendy",
        trail: 80,
        presence: 65,
        description: "Blossom is a women's Eau de Parfum from Jimmy Choo. The perfume opens with the delicate, fruity and sparkling main notes of red fruit, which are enhanced by the floral heart notes."
    },
    {
        _id: "aaaao",
        image: [homme],
        title: "L'Eau d'Issey Pour Homme",
        brand: "Issey Miyake",
        star: [star],
        category: "Premium",
        class: "Eau de Toilette",
        gender: "Male",
        reviews: 1,
        notes: ["Fresh exotic", "Citrus", "Aromatic"],
        family: "Fresh",
        familyBanner: freshFamily,
        style: "Classic",
        trail: 60,
        presence: 65,
        description: "L'Eau d'Issey Pour Homme is a men's Eau de Toilette from Issey Miyake. L'Eau d'Issey Pour Homme is a woody aquatic perfume for men. A timeless and very masculine perfume."
    },
    {
        _id: "aaaap",
        image: [coach],
        title: "Coach Floral",
        brand: "Coach",
        star: [star],
        category: "Premium",
        class: "Eau de Parfum",
        gender: "Female",
        reviews: 1,
        notes: ["Sweet", "White floral", "Fruity", "Floral notes"],
        family: "Fresh",
        familyBanner: freshFamily,
        style: "Trendy",
        trail: 80,
        presence: 65,
        description: "This feminine perfume from Coach opens with notes of citrus and sparkling pink pepper in combination with sweet pineapple. The heart consists of a floral bouqet, before it turns into a warm base of elegant and creamy wood, patchouli and musky notes."
    },

    // NICHE
    {
        _id: "aaaaa",
        image: [elisir],
        title: "Érose",
        brand: "Élisire",
        star: [star],
        category: "Niche",
        class: "Eau de Parfum",
        gender: "Unisex",
        reviews: 1,
        notes: ["Sweet", "White floral", "Tuberose", "Musk", "Green", "Yellow floral", "Animal", "Citrus", "Floral notes", "Balsamic", "Woody notes"],
        family: "Exotic",
        familyBanner: exoticFamily,
        style: "Classic",
        trail: 50,
        presence: 78,
        description: "Hedonic Flowers falling in love. Iridescent vibes. Enchanting Aphrodite in a halo of bright sensual scents. Violet Leaves, Orange Blossom, Jasmine from Grasse, Ylang Ylang. Diaphanous skin with radiant innerlight… Infinitely desirable. An Infusion of thousands of white-velvet petals of Tuberoses gorged with morning dew. Exquisite Inflorescences surrounded by second skin Musks mesmerize all senses. Élixir of carnal Absolutes in a pink gold jewel-bottle. Érose is an Extrait de Parfum, meaning it is really powerful, yet very qualitative."
    },
    {
        _id: "aaaas",
        image: [orangecrush],
        title: "Orange Crush",
        brand: "Fugazzi",
        star: [star],
        category: "Niche",
        class: "Eau de Parfum",
        gender: "Unisex",
        reviews: 10,
        notes: ["Sweet", "Musk", "Animal", "Citrus", "Amber", "Woody notes"],
        family: "Fresh",
        familyBanner: freshFamily,
        style: "Sexy",
        trail: 40,
        presence: 38,
        description: "More is less. Orchestrated around just three main ingredients. One: Iso e Super (with its ability to arouse the sensation of soft, transparent wood). Two: white amber (with its power to invoke a warm, comforting almost skin-like warmth). Three: orange (applied in an abundant way). The effect: a warm-fresh soothing fragrance that only will intensify while longer on your body. In other words: an orange made of velvet. To intensify the fresh fruity feeling, the orange is supported by bergamot, citrus and black currant. To deepen the soft, slightly sensual feel, Iso e Super is being pushed by oakmoss, ambrette and musk."
    },
    {
        _id: "aaaad",
        image: [oud3333],
        title: "OUD 3333",
        brand: "Acqua Alpes",
        star: [star],
        category: "Niche",
        class: "Eau de Parfum",
        gender: "Unisex",
        reviews: 1,
        notes: ["Leather", "Fresh exotic", "Citrus", "Woody notes"],
        family: "Woody",
        familyBanner: woodyFamily,
        style: "Adventurous",
        trail: 60,
        presence: 40,
        description: "A spicy and distinctive perfume that is the perfect blend of powerful notes of aged (agarwood), black pepper and leather and the subtle elegance of vetiver, all tempered with the floral aroma of bergamot. A scent of old (agarwood), black pepper, bergamot, mandarin, vetiver and leather. Like all fragrances from Acqua Alpes, this creation also carries the culmination of a Tyrolean summit in its name: 3333 corresponds to the summit of the Schaufelspitze."
    },
    {
        _id: "aaaaf",
        image: [cherrypunk],
        title: "Cherry Punk",
        brand: "Room 1015",
        star: [star],
        category: "Niche",
        class: "Eau de Parfum",
        gender: "Female",
        reviews: 17,
        notes: ["Sweet", "Vanilla", "Smoky", "Exotic notes", "Leather", "Cherry", "Fruity", "Animal", "Woody notes"],
        family: "Exotic",
        familyBanner: exoticFamily,
        style: "Sexy",
        trail: 60,
        presence: 65,
        description: "Cool kids with bleached hair swapping rare vinyl records. Distressed denim, hand-painted leather, latex, tartans, prints that would make your parents blush and lock you in the house for the whole summer… Did Punk invent fashion or fashion invented Punk? From underground clubs to the national TV, Punk always had its own style, its own press (fanzines), its own movies, its own poetry...So Room 1015 figured it should have its own fragrance. Loud like the rehearsal in the room without sound isolation. Powerful like youth riot but still sweet and romantic - the idealism of adolescence wrapped in a heavy leather jacket."
    },
    {
        _id: "aaaag",
        image: [elisiroderose],
        title: "Oderose",
        brand: "Élisire",
        star: [star],
        category: "Niche",
        class: "Eau de Parfum",
        gender: "Unisex",
        reviews: 1,
        notes: ["Sweet", "Roses", "Fruity", "Amber", "Woody notes"],
        family: "Floral",
        familyBanner: floralFamily,
        style: "Trendy",
        trail: 90,
        presence: 85,
        description: "Ode to Rose, the Power of Love. Dipped in Silver. Forever young. Raspberry, Tarocco Orange, Rose of May awaken the Senses. Cheerful and seductive. Damascena Rose, Geranium, Davana and Cumin. Tender yet wild. Precious Woods wrapped around the Flower’s heart. Sandalwood, Cashmeran, Frankincense. Metamorphosis. Adorn thorns. Perfume of reflection. Shimmering. Bewitching. Fascinating. Sexy Ambergris, Oak Moss and Musks amplify the reflects. An overdosed Eau de Rose in a bottle of Silver. Oderose is an Extrait de Parfum, meaning it is really powerful, yet very qualitative."
    },
    {
        _id: "aaaah",
        image: [cashflower],
        title: "Cash Flower",
        brand: "Fugazzi",
        star: [star],
        category: "Niche",
        class: "Eau de Parfum",
        gender: "Unisex",
        reviews: 1,
        notes: ["Roses", "Powdery", "Musk", "Fresh exotic", "Floral notes", "Amber", "Warm spicy", "Woody notes"],
        family: "Floral",
        familyBanner: floralFamily,
        style: "Classic",
        trail: 65,
        presence: 90,
        description: "The scent fuses the intoxicating aroma of Roses with a hint of spicy allure and depth from warm Pepper notes. This captivating perfume encapsulates the essence of success and allure embodied by this majestic flower. As the perfume graces your skin, it becomes even more indulgent and grandiose. Luxurious tints of Cashmere and Amber creates a velvety texture, enveloping you in a world of utmost opulence. Musk and Sandalwood add a touch of sensuality, intensifying the fragrance's allure and leaving an unforgettable impression."
    },
    {
        _id: "aaaaj",
        image: [osmanthus],
        title: "Jasmine / Osmanthus",
        brand: "EPC",
        star: [star],
        category: "Niche",
        class: "Eau de Parfum",
        gender: "Female",
        reviews: 1,
        notes: ["White floral", "Coconut", "Floral notes"],
        family: "Floral",
        familyBanner: floralFamily,
        style: "Classic",
        trail: 40,
        presence: 70,
        description: "A tribute to white flowers growing in hot desert sand. Featuring a minimalist blend of the perfume ingredients we love, Jasmine Osmanthus stars a bouquet of tropical flowers – Jasmine Sambac absolute, osmanthus absolute and frangipani. Together with the radiant and creamy scent of coconut, Jasmine Osmanthus is an evocation of sand coated skin warmed by the sun."
    },

    // CLEAN
    {
        _id: "aaaak",
        image: [escentric],
        title: "Escentric 01",
        brand: "Escentric Molecules",
        star: [star],
        category: "Clean",
        class: "Eau de Toilette",
        gender: "Unisex",
        reviews: 3,
        notes: ["Powdery", "Musk", "Citrus", "Aromatic", "Amber", "Woody notes"],
        family: "Woody",
        familyBanner: woodyFamily,
        style: "Trendy",
        trail: 55,
        presence: 90,
        description: "Escentric 01 is a unisex Eau de Toilette from Escentric Molecules. Escentric 01 was released in 2006 and focuses on one note, which is an aroma molecule made in a lab referred to as Iso Super E. The perfume starts with lime zest for the sourness, iris and pink pepper for the spicy fragrance."
    },
    {
        _id: "aaaal",
        image: [mountainpepper],
        title: "Mountain Pepper",
        brand: "Korres",
        star: [star],
        category: "Clean",
        class: "Eau de Toilette",
        gender: "Unisex",
        reviews: 0,
        notes: ["Musk", "Citrus", "Floral notes", "Aromatic"],
        family: "Fresh",
        familyBanner: freshFamily,
        style: "Adventurous",
        trail: 80,
        presence: 80,
        description: "Mountain pepper, a fresh smelling, rejuvenating essential oil deriving from the tree's fruits, a sweeter and finer take on the lemon scent, offers a sharp and uplifting accord. Bergamot; a fruit of contrasts, known as the prince of pears associated with long summer evening walks through Mediterranean groves even though it is a winter blossoming tree, bergamot with its bitter sweet notes, is crisp and spicy, warm and brisk. Coriander - the secret seed of immortality, happiness and love in ancient times, coriander has a woody aura. Appreciated by the Greeks as early as the second millennium BC, coriander, was cultivated for fragrance making."
    },
    {
        _id: "aaaaz",
        image: [n203],
        title: "203",
        brand: "Bon Parfumeur",
        star: [star],
        category: "Clean",
        class: "Eau de Parfum",
        gender: "Unisex",
        reviews: 3,
        notes: ["Sweet", "Fruity"],
        family: "Fresh",
        familyBanner: freshFamily,
        style: "Adventurous",
        trail: 30,
        presence: 33,
        description: "Sparkling, the citric top notes combine amazingly well with the fruitiness of the pear. Red fruit facets are also present. The meeting point between the two noble flowers, rose and jasmine, magnifies this blend. The middle note, warmed with a sunny mix and the caramelized fruits gives the fragrance its roundness and its “gourmet notes”. The base brings together the strong vanilla, musk and cedar notes."
    },
    {
        _id: "aaaax",
        image: [n17rose],
        title: "No.17 Rose Fumée",
        brand: "Marie-Stella-Maris",
        star: [star],
        category: "Clean",
        class: "Eau de Parfum",
        gender: "Unisex",
        reviews: 0,
        notes: ["Roses", "Patchouli", "Green", "Floral notes", "Earthy", "Woody notes"],
        family: "Floral",
        familyBanner: floralFamily,
        style: "Adventurous",
        trail: 70,
        presence: 90,
        description: "Like rain-kissed woods and earth, Rose Fumée awakens the senses and leads you into a world of renewed energy. Cypress excites the senses and unleashes an adventure through the embrace of nature, while Rose unfolds with its timeless elegance in the heart. Grounded by the richness of patchouli, this seductive journey is a contrast between the familiar and the unfamiliar - an invigorating tale in perfect harmony. Naturalness: 96%"
    },
    {
        _id: "aaaac",
        image: [sandalwood],
        title: "Sandalwood / Musk",
        brand: "EPC",
        star: [star],
        category: "Clean",
        class: "Eau de Parfum",
        gender: "Unisex",
        reviews: 1,
        notes: ["Musk", "Leather", "Woody notes"],
        family: "Woody",
        familyBanner: woodyFamily,
        style: "Trendy",
        trail: 30,
        presence: 30,
        description: "Creamy wood and hot stone wrapped in soft leather.Featuring a minimalist blend of some of the favourite ingredients, Sandalwood Musk stars smooth Indian sandalwood married with sparkling pink peppercorn, smoky vetiver, soft leather and mineral Ambroxan. This addictive soft leather fragrance comes to life on the skin, evoking the smell of the incandescent ashes of burning sandalwood."
    },
    {
        _id: "aaaav",
        image: [laundryday],
        title: "Laundry Day",
        brand: "Abel",
        star: [star],
        category: "Clean",
        class: "Eau de Parfum",
        gender: "Unisex",
        reviews: 0,
        notes: ["Green", "Fresh exotic", "Citrus"],
        family: "Fresh",
        familyBanner: freshFamily,
        style: "Classic",
        trail: 25,
        presence: 45,
        description: "A bright and sunny citrus fragrance, inspired by the vibrant energy of spring. The encyhanting time of year when windows are thrown open to welcome the outdoors, the air is filled with the scent of fresh grass, and laundry can once again be hung outside."
    },
    {
        _id: "aaaab",
        image: [bergamotdedenim],
        title: "Néroli & Bergamote de Denim",
        brand: "pH fragrances",
        star: [star],
        category: "Clean",
        class: "Eau de Parfum",
        gender: "Unisex",
        reviews: 1,
        notes: ["White floral", "Powdery", "Musk", "Citrus"],
        family: "Fresh",
        familyBanner: freshFamily,
        style: "Trendy",
        trail: 40,
        presence: 55,
        description: "Néroli & Bergamote de Denim is a fragrance with a luminous top opening on a zesty, sparkling and invigorating Citrus and Bergamot notes. The floral heart reveals a bouquet of Mimosa and Roses combined with an Ambery base note which gives a modern and colorful cologne character. Néroli & Bergamote de Denim is composed by some extracts of Orpur of Neroli, Bergamot and Mimosa. The Orpur are the highest quality of naturals ingredients from Givaudan."
    },
    {
        _id: "aaaan",
        image: [allofme],
        title: "All of Me",
        brand: "Narciso Rodriguez",
        star: [star],
        category: "Clean",
        class: "Eau de Parfum",
        gender: "Female",
        reviews: 0,
        notes: ["White floral", "Roses", "Musk"],
        family: "Floral",
        familyBanner: floralFamily,
        style: "Classic",
        trail: 60,
        presence: 60,
        description: "All of me is the new perfume from Narciso Rodriguez and is a bold and versatile, floral fragrance created for a new generation of women who want to express themselves confidently and embrace all that makes them unique. A floral perfume that adds a new twist to the iconic Narciso Rodriguez signature alongside a duet of rose and geranium and an accord of sophisticated, milky white musk."
    },
    {
        _id: "aaaam",
        image: [verbenacytrus],
        title: "Verbena Citrus",
        brand: "L'Occitane en Provence",
        star: [star],
        category: "Clean",
        class: "Eau de Toilette",
        gender: "Unisex",
        reviews: 0,
        notes: ["Roses", "Powdery", "Musk", "Fresh exotic", "Citrus", "Aromatic", "Amber", "Woody notes"],
        family: "Fresh",
        familyBanner: freshFamily,
        style: "Classic",
        trail: 55,
        presence: 55,
        description: "This Eau de Toilette contains all facets of freshness and is an ideal blend of lemon and lemony leaves, offering both a feeling of comfort and softness and a refreshing breath full of energy. Organic verbena from Provence, grapefruit and Mediterranean lemon come together in a fantastic citrus combination. The Verbena Citrus Eau de Toilette is a fragrance that embodies happiness. It eases the period of a long winter, immerses you in the cycles of spring and refreshes and soothes you during the warm summer afternoons.... Calm and serene, but also lively and stimulating, it is a timeless fragrance that will never get bored. Perfect for all seasons, for all ages, for men and women."
    },

    // OTHER
    {
        _id: "aaaqa",
        image: [ambreroomspray],
        title: "St. Ambre Roomspray",
        brand: "Parfumado",
        star: [star],
        category: "Other",
        class: "Eau de Parfum",
        gender: "Unisex",
        reviews: 0,
        notes: ["Vanilla", "Amber", "Warm spicy"],
        family: "Gourmand",
        familyBanner: gourmandFamily,
        style: "Classic",
        trail: 40,
        presence: 40,
        description: "St. Ambre Roomspray (30ml). Sweet, Amber & Warming St. Ambre is a refined amber fragrance spiced with notes of cinnamon and a hint of cacao and vanilla. This warm, deep and sweet scent exudes luxury. It takes you to an evening in a chic Parisian neighbourhood, looking out over the city and its warming golden lights. A sweet scent to get cosy with or for a romantic evening together. Fragrance pyramid: Top: Bergamot, Rose, Cardamom. Hart: Cinnamon, Rose, Balsamic Notes. Basis: Vanille, Amber, White musk"
        
    },
    {
        _id: "aaawa",
        image: [detoxroomspray],
        title: "Green Detox Roomspray",
        brand: "Parfumado",
        star: [star],
        category: "Other",
        class: "Eau de Parfum",
        gender: "Unisex",
        reviews: 1,
        notes: ["Green", "Sandalwood", "Citrus"],
        family: "Fresh",
        familyBanner: freshFamily,
        style: "Classic",
        trail: 40,
        presence: 40,
        description: "Green Detox is a sparkling sensation of white tea and citrus. Its crisp scent belongs to the Fresh fragrance family. Tones of bergamot and lemon, on a warm base of various woods take you into nature within the comfort of your home. Perfect to give your home a boost of fresh energy!"
    },
    {
        _id: "aaaea",
        image: [sunsandroomspray],
        title: "Sun Sand Blvrd Roomspray",
        brand: "Parfumado",
        star: [star],
        category: "Other",
        class: "Eau de Parfum",
        gender: "Unisex",
        reviews: 0,
        notes: ["Woody exotic", "Powdery", "Sandalwood"],
        family: "Woody",
        familyBanner: woodyFamily,
        style: "Classic",
        trail: 40,
        presence: 40,
        description: "Sun Sand Blvrd is a fresh, relaxing fragrance that belongs to the Woody fragrance family. Experience a warm, woody, sensual summer breeze as you walk along a sunny boulevard. Perfect for those who want to get away from the hustle and bustle, and relax."
    },
    {
        _id: "aaaea",
        image: [africanhoursroomspray],
        title: "African Hours Roomspray",
        brand: "Parfumado",
        star: [star],
        category: "Other",
        class: "Eau de Parfum",
        gender: "Unisex",
        reviews: 0,
        notes: ["Citrus", "Floral exotic", "Woody notes"],
        family: "Exotic",
        familyBanner: exoticFamily,
        style: "Classic",
        trail: 40,
        presence: 40,
        description: "African Hours is a soft, warm and fresh fragrance from the Exotic fragrance family. It takes you on a journey to a luxurious safari hotel in the middle of Africa. Fresh and floral notes remind you of the warm morning sun. Let yourself be embraced and dream away between clean, white sheets in an exotic oasis."
    },
    {
        _id: "aaara",
        image: [bestsellerexpset],
        title: "Bestsellers Exploration Set",
        brand: "Parfumado",
        star: [star],
        category: "Other",
        class: "Eau de Parfum",
        gender: "Male",
        reviews: 0,
        notes: ["Musk", "Citrus", "Aromatic", "Amber", "Woody notes", "Fresh notes"],
        family: "Woody",
        familyBanner: woodyFamily,
        style: "Trendy",
        trail: 40,
        presence: 40,
        description: "Exploration Set for him (4x 2ml). The ultimate selection of four iconic perfumes (2ml), each with a unique twist. Whether you're after something fresh, bold, or mysterious, this set has it all. It’s the perfect way to discover your next favorite perfume. And the best part? It fits right through your mailbox. This set includes: Fresh: Néroli & Bergamote de Denim - pH fragrances. Woody: Angel Dust - Fugazzi. Woody: Le Male - Jean Paul Gaultier. Woody: Dylan Blue - Versace."
    },
    {
        _id: "aaata",
        image: [bestsellerexpset],
        title: "Woody Exploration Set",
        brand: "Parfumado",
        star: [star],
        category: "Other",
        class: "Eau de Parfum",
        gender: "Female",
        reviews: 0,
        notes: ["Powdery", "Musk", "Leather", "Woody notes"],
        family: "Woody",
        familyBanner: woodyFamily,
        style: "Trendy",
        trail: 40,
        presence: 40,
        description: "Exploration Set for her. In this set, you’ll explore four woody fragrances (4x 2ml). Let yourself be surprised by the deep, earthy notes of cedarwood, sandalwood, and vetiver. Each perfume brings its own story to life. Ready to fill your calendar with a new favourite? This set includes: Skin + Wood - stellair. Cherry Punk - Room 1015. Narciso For Her EdT - Narciso Rodriguez. Molecule 01 - Escentric Molecules."
    },
    {
        _id: "aaaya",
        image: [bestsellerexpset],
        title: "Fresh Exploration Set",
        brand: "Parfumado",
        star: [star],
        category: "Other",
        class: "Eau de Parfum",
        gender: "Female",
        reviews: 0,
        notes: ["Musk", "Green", "Citrus", "Floral notes", "Aromatic", "Fresh notes"],
        family: "Fresh",
        familyBanner: freshFamily,
        style: "Trendy",
        trail: 40,
        presence: 40,
        description: "Exploration Set for her. This special set is designed to help you find new faves within the fresh fragrance family. Prepare to be delighted by four refreshing perfumes (4x 2ml), featuring notes of citrus, aquatic tones, or a fresh hint of flowers like roses. This set includes: Orange Crush - Fugazzi. L’eau d’Issey - Issey Miyaki. Eau Papaguenea - Élisire. White Lavender - L’Occitane en Provence."
    },
    {
        _id: "aaaua",
        image: [bestsellerexpset],
        title: "Floral Exploration Set",
        brand: "Parfumado",
        star: [star],
        category: "Other",
        class: "Eau de Parfum",
        gender: "Female",
        reviews: 0,
        notes: ["Sweet", "White floral", "Vanilla", "Tuberose", "Roses", "Floral notes", "Aquatic"],
        family: "Floral",
        familyBanner: floralFamily,
        style: "Trendy",
        trail: 40,
        presence: 40,
        description: "Exploration Set for her. Explore four floral perfumes (4x 2ml) in this curated set. Get swept away by delicate notes of rose, jasmine, and lily, with a fresh, floral burst. It’s only a matter of time before a new favourite finds its way into your perfume calendar. This set includes: Blossom - Jimmy Choo. Rose + Water - stellair. So Nude - Costume National. Ylang in Gold - M. Micallef."
    },
    {
        _id: "aaaia",
        image: [bestsellerexpset],
        title: "Amber Exploration Set",
        brand: "Parfumado",
        star: [star],
        category: "Other",
        class: "Eau de Parfum",
        gender: "Female",
        reviews: 0,
        notes: ["Sweet", "Vanilla", "Powdery", "Oudh", "Exotic notes", "Coconut", "Amber"],
        family: "Gourmand",
        familyBanner: gourmandFamily,
        style: "Trendy",
        trail: 40,
        presence: 40,
        description: "Exploration Set for her. Discover four exquisite perfumes (4x 2ml) from the gourmand and exotic fragrance family. Be surprised by the warm, inviting notes of vanilla, oud, and amber. Each perfume has a character all of its own. Which one will become your new go-to perfume? This set includes: Goudh - Fugazzi. Parisian Embrace - Sentier. White Castitas - Memoize London. Cloud - Ariana Grande."
    },
]