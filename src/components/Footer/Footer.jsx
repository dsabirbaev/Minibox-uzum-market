
import apple from "../../assets/icons/apple.svg";
import googlePlay from "../../assets/icons/google-play.svg";
import {Instagram, Telegram, YouTube, Facebook} from "../FooterIcons";
const Footer = () => {
    return (
        <footer className="pt-[25px] pb-[20px]">
            <div className="container">
                <div className="flex flex-col">
                    <div className="flex justify-between mb-[78.5px]">
                        <ul className="flex flex-col">
                            <li className="text-[#141415] font-['RobotoMedium'] mb-[16px]">Biz haqimizda</li>
                            <li className="text-[#4D4E59] font-['RobotoRegular'] mb-[19px]"><a href="#">Topshirish punktlari</a></li>
                            <li className="text-[#4D4E59] font-['RobotoRegular'] mb-[19px]"><a href="#">Vakansiyalar</a></li>
                        </ul>
                        <ul className="flex flex-col">
                            <li className="text-[#141415] font-['RobotoMedium'] mb-[16px]">Foydalanuvchilarga</li>
                            <li className="text-[#4D4E59] font-['RobotoRegular'] mb-[19px]"><a href="#">Biz bilan bogʻlanish</a></li>
                            <li className="text-[#4D4E59] font-['RobotoRegular'] mb-[19px]"><a href="#">Savol-Javob</a></li>
                        </ul>
                        <ul className="flex flex-col">
                            <li className="text-[#141415] font-['RobotoMedium'] mb-[16px]">Tadbirkorlarga</li>
                            <li className="text-[#4D4E59] font-['RobotoRegular'] mb-[19px]"><a href="#">Uzumda soting</a></li>
                            <li className="text-[#4D4E59] font-['RobotoRegular'] mb-[19px]"><a href="#">Sotuvchi kabinetiga kirish</a></li>
                        </ul>
                        <div className="flex flex-col">
                            <p className="text-[#141415] font-['RobotoMedium'] mb-[16px]">Ilovani yuklab olish</p>
                            <div className="flex mb-[45.5px] gap-x-[23.56px]">
                                <div className="flex items-center gap-x-1">
                                    <img src={apple} alt="apple" />
                                    <span className="text-[#1F1F26] font-['InterMedium'] text-[12.8px]">AppStore</span>
                                </div>
                                <div className="flex items-center gap-x-1">
                                    <img src={googlePlay} alt="apple" />
                                    <span className="text-[#1F1F26] font-['InterMedium'] text-[12.8px]">Google Play</span>
                                </div>
                            </div>
                            <p className="text-[#141415] font-['RobotoMedium'] mb-[16px]">Uzum ijtimoiy tarmoqlarda</p>
                            <ul className="flex items-center gap-x-[12px]">
                                <li><a href="#"><Instagram /></a></li>
                                <li><a href="#"><Telegram /></a></li>
                                <li><a href="#"><YouTube /></a></li>
                                <li><a href="#"><Facebook /></a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="flex items-center justify-between pt-[16px] border-t-2">
                        <div className="flex items-center gap-x-[16px] text-[#1F1F26] font-['RobotoMedium']">
                            <span>Maxfiylik kelishuvi</span>
                            <span>Foydalanuvchi kelishuvi</span>
                        </div>
                        <p className="text-['#4D4E59'] text-[11px] font-['RobotoRegular']">«2023© XK MCHJ «UZUM MARKET». STIR 309376127. Barcha huquqlar himoyalangan»</p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;