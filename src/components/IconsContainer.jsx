// react-icons/fa
import { 
     FaRunning, FaWalking, FaDumbbell, 
    FaBook, FaFilm, FaSpa, FaHandHoldingHeart, FaPrayingHands, 
    FaAssistiveListeningSystems, FaHandHoldingUsd, FaUserFriends, FaUser, 
    FaPeopleCarry,  FaRegClock, FaBullseye, FaSmile, FaBookOpen, 
    FaHandSparkles, FaRegTired , FaHeart, FaQuestion , FaChess ,FaBiking , FaGuitar , FaPaintBrush
    ,FaTired ,FaFrown ,FaGrinStars ,FaGrinBeam ,FaMeh 
  } from "react-icons/fa";
  
  // react-icons/md
  import { 
    MdDeliveryDining, MdNightlight, 
    MdOutlineSportsBasketball, MdMovie, 
    MdFamilyRestroom,  MdEmojiPeople, MdOutlineTrackChanges, MdChecklist, 
    MdCelebration ,
    MdFaceRetouchingNatural  
  } from "react-icons/md";
  
  // react-icons/gi
  import { 
    GiNightSleep, GiAlarmClock, GiFrenchFries, GiHotMeal, GiCakeSlice, GiSodaCan, 
    GiFruitBowl, GiWaterBottle, GiConsoleController, 
    GiMeditation,
     GiScissors, GiThreeLeaves , GiIsland, GiHotSurface, GiVolcano, 
     GiHeavyRain ,GiLotus , GiHelp
  } from "react-icons/gi";
  
  // react-icons/tb
  import { TbCloudStorm, TbBalloon, TbMountain , TbMeatOff } from "react-icons/tb";
  
 

export const CoverEmojis = [
    {icon: <FaGrinStars/>,name:'rad'},
    {icon: <FaGrinBeam  />,name:'good'},
    {icon: <FaMeh />,name:'meh'},
    {icon: <FaFrown />,name:'bad'},
    {icon: <FaTired />,name:'awful'}
]

export const iconCategory = [
    {
        category:"Activity",
        emojis:[
            {icon: <FaBiking/>, name:"Biking"},
            {icon: <FaGuitar/>, name:"Guitar"},
            {icon: <FaPaintBrush/>, name:"Paint"},
            {icon: <FaRunning/>, name:"Running"},
            {icon: <FaChess />, name:" Chess "},
            {icon: <FaWalking/>, name:"Walking"}
        ]

    },{
        category:"Better Me",
        emojis:[
            {icon:<GiMeditation/>,name:"Medation"},
            {icon:<FaHandHoldingHeart/>,name:"Helping"},
            {icon:<FaHandHoldingUsd/>,name:"Donate"},
            {icon:<FaAssistiveListeningSystems/>,name:"Listen"},
            {icon:<FaPrayingHands/>,name:"Gratitude"},
            {icon:<FaPrayingHands/>,name:"Gratitude"}
            
        ]
    },{
        category:"Sleep",
        emojis:[
            {icon:<GiNightSleep /> ,name:"Good Sleep" },
            {icon:<FaRegTired/>,name:"Bad Sleep"},
            {icon:<MdNightlight/>,name:"Mid Sleep"},
            {icon:<GiAlarmClock/>,name:"Sleep Early"},
            {icon:<GiAlarmClock/>,name:"Sleep Late"},

        ]
    },{
        category:"Health",
        emojis:[
            {icon:<FaDumbbell/>,name:"Exercise"},
            {icon:<GiFruitBowl/>,name:"Healthy"},
            {icon:<GiWaterBottle/>,name:"Water"},
            {icon:<FaWalking/>,name:"Walk"},
            {icon:<MdOutlineSportsBasketball/>,name:"Sport"},
            {icon:<MdOutlineSportsBasketball/>,name:"Sport"},

        ]
    },{
        category:"Hobbies",
        emojis:[
            {icon:<MdMovie/>,name:"Movies"},
            {icon:<FaBook/>,name:"Read"},
            {icon:<GiConsoleController/>,name:"Gaming"},
            {icon:<FaSpa/>,name:"Relax"},
            {icon:<FaFilm/>,name:"Anme"},
            {icon:<FaFilm/>,name:"Anme"},

        ]
    },{
        category:"Food",
        emojis:[
            {icon:<GiFrenchFries/>,name:"Fast Food"},
            {icon:<GiHotMeal/>,name:"Home"},
            {icon:<MdDeliveryDining/>,name:"Delivery"},
            {icon:<TbMeatOff/>,name:"NoMeat"},
            {icon:<GiCakeSlice/>,name:"Sweets"},
            {icon:<GiSodaCan/>,name:"Soda"}
        ]
    },{
        category:"Social",
        emojis:[
            {icon:<MdFamilyRestroom/>, name:"Family"},
            {icon:<FaUserFriends/>,name:"Friends"},
            {icon:<FaUser/>,name:"Me"},
            {icon:<MdEmojiPeople/>,name:"Party"},
            {icon:<FaPeopleCarry/>,name:"Teamwork"},
            {icon:<FaPeopleCarry/>,name:"Teamwork"},

        ]
    },{
        category:"Productivity",
        emojis:[
            {icon:<FaRegClock/>,name:"Start Early"},
            {icon:<MdChecklist/>,name:"Make List"},
            {icon:<FaBullseye/>,name:"Focus"},
            {icon:<FaSmile/>,name:"Satisfied"},
            {icon:<FaBookOpen/>,name:"Progress"},
            {icon:<MdOutlineTrackChanges/>,name:"Growth"}
        ]
    },{
        category:"Beauty",
        emojis:[
            {icon:<GiScissors/>,name:"Haircut"},
            {icon:<GiThreeLeaves/>,name:"Wellness"},
            {icon:<FaHandSparkles/>,name:"Manicure"},
            {icon:<MdFaceRetouchingNatural/>,name:"Skin Care"},
            {icon:<MdFaceRetouchingNatural/>,name:"Skin Care"},
            {icon:<MdFaceRetouchingNatural/>,name:"Skin"},

        ]
    },{
        category:"Emotion",
        emojis:[
            {icon:<TbBalloon  />,name:"Happy"},
            {icon:<MdCelebration />,name:"Excited"},
            {icon:<FaHeart />,name:"Grateful"},
            {icon:<GiIsland />,name:"Relaxed"},
            {icon:<GiLotus/>,name:"Content"},
            {icon:<GiHotSurface />,name:"Tired"},
            
            
        ]
    },{
        category:"Bad Emotion",
        emojis:[
            {icon:<FaQuestion />,name:"Unsure"},
            {icon:<TbMountain />,name:"Bored"},
            {icon:<TbCloudStorm />,name:"Anxious"},
            {icon:<GiVolcano />,name:"Angry"},
            {icon:<GiHeavyRain />,name:"Stresed"},
            {icon:<GiThreeLeaves/>,name:"Sad"},
        ]
    }
    
    
]
