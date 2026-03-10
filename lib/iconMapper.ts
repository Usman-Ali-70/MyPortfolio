import {
    RiYoutubeLine,
    RiInstagramLine,
    RiFacebookLine,
    RiGithubLine,
    RiLinkedinLine,
    RiTwitterXLine,
    RiTwitterLine,
    RiDribbbleLine,
    RiBehanceLine,
    RiPinterestLine,
    RiWhatsappLine,
    RiTelegramLine,
    RiMailLine
} from "react-icons/ri";
import {
    RxCrop,
    RxPencil2,
    RxDesktop,
    RxReader,
    RxRocket,
    RxDashboard,
} from "react-icons/rx";
import { IconType } from "react-icons";

export const getIcon = (iconName?: string): IconType => {
    switch (iconName) {
        case 'RiYoutubeLine': return RiYoutubeLine;
        case 'RiInstagramLine': return RiInstagramLine;
        case 'RiFacebookLine': return RiFacebookLine;
        case 'RiGithubLine': return RiGithubLine;
        case 'RiLinkedinLine': return RiLinkedinLine;
        case 'RiTwitterXLine': return RiTwitterXLine;
        case 'RiTwitterLine': return RiTwitterLine;
        case 'RiDribbbleLine': return RiDribbbleLine;
        case 'RiBehanceLine': return RiBehanceLine;
        case 'RiPinterestLine': return RiPinterestLine;
        case 'RiWhatsappLine': return RiWhatsappLine;
        case 'RiTelegramLine': return RiTelegramLine;
        case 'RiMailLine': return RiMailLine;
        case 'RxCrop': return RxCrop;
        case 'RxPencil2': return RxPencil2;
        case 'RxDesktop': return RxDesktop;
        case 'RxReader': return RxReader;
        case 'RxRocket': return RxRocket;
        case 'RxDashboard': return RxDashboard;
        default: return RiGithubLine; // Default icon
    }
}
