import React from "react";

import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import FacebookIcon from "@mui/icons-material/Facebook";
import GoogleIcon from "@mui/icons-material/Google";
import InstagramIcon from '@mui/icons-material/Instagram';
import AppleIcon from '@mui/icons-material/Apple';
import WindowIcon from '@mui/icons-material/Window';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import RedditIcon from '@mui/icons-material/Reddit';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import SavingsIcon from '@mui/icons-material/Savings';
import PaymentsIcon from '@mui/icons-material/Payments';
import GitHubIcon from '@mui/icons-material/GitHub';
import ComputerIcon from '@mui/icons-material/Computer';
import SmartphoneIcon from '@mui/icons-material/Smartphone';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';

import { IconStyles } from "../../assests/styles";



export function IconProvider({icon}){
   
    switch(icon){
        case "facebook": return <FacebookIcon style={IconStyles}/>
        case "google": 
        case "gmail": return <GoogleIcon style={IconStyles}/>
        case "instagram": return <InstagramIcon style={IconStyles}/>
        case "apple": return <AppleIcon style={IconStyles}/>
        case "windows": return <WindowIcon style={IconStyles}/>
        case "twitter": return <TwitterIcon style={IconStyles}/>
        case "linkedin": return <LinkedInIcon style={IconStyles}/>
        case "whatsapp": return <WhatsAppIcon/>
        case "reddit": return <RedditIcon style={IconStyles}/>
        case "creditcard":
        case "debitcard":
        case "card":return <CreditCardIcon style={IconStyles}/>
        case "sbi":
        case "bank": return <SavingsIcon style={IconStyles}/>
        case "googlepay":
        case "paytm":
        case "phonepay":
        case "paypal": return <PaymentsIcon style={IconStyles}/>
        case "github": return <GitHubIcon style={IconStyles}/>
        case "pc": return <ComputerIcon style={IconStyles}/>
        case "phone": return <SmartphoneIcon style={IconStyles}/>
        case "gaming":
        case "game":
        case "epicgames":
        case "ubisoft":
        case "steam":
        case "gog":
        case "riot":
             return <SportsEsportsIcon style={IconStyles}/>
        default: return <AccountCircleIcon style={IconStyles}/>
    }
}