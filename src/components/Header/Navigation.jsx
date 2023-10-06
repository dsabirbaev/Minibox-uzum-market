
const list = ["Elektronika", "Maishiy texnika", "Kiyim", "Poyabzallar", "Aksessuarlar", "Goʻzallik", "Salomatlik", "Uy-roʻzgʻor buyumlari", "Qurilish va taʼmirlash", "Avtotovarlar", "Bolalar tovarlari", "Yana"]

const Navigation = () => {
    return (
        <nav className="pb-[18px]">
            <ul className="flex items-cent justify-between cursor-pointer font-['RobotoRegular']">
                {
                    list.map((item, index) => {
                        return <li key={index} className="nav-item">{item}</li>   
                    })
                }
            </ul>
        </nav>
    
    );
};

export default Navigation;
