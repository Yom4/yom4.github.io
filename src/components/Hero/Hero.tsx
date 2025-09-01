import styles from "./HeroStyles.module.css"
import heroImg from "../../assets/hero-img.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon, faSun} from '@fortawesome/free-solid-svg-icons'
import { faGithub, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { useTheme } from "../../common/ThemeContext"


function Hero() {
    const {theme, toggleTheme} = useTheme()
    const themeIcon = theme === 'dark' ? faMoon: faSun
    const themeColour = theme === 'dark' ? 'white' : 'black'
  return (
    <section id="hero" className={styles.container}>
        <div className={styles.colourModeContainer}>
            <img className={styles.hero} src={heroImg} alt="Picture of Persona of Yoma" />
            <FontAwesomeIcon icon={themeIcon} onClick={toggleTheme} color={themeColour}/>
        </div>
        <div className={styles.info}>
            <h1>
                Liam Matteo Muller
            </h1>
            <h2>
                Software Developer
            </h2>
            <span>
                <a href="https://www.instagram.com/yomawankenobi/" target="_blank" >
                    <FontAwesomeIcon icon={faInstagram} color={themeColour}/>
                </a>
                <a href="https://www.linkedin.com/in/matt-a-muller/" target="_blank" >
                    <FontAwesomeIcon icon={faLinkedin} color={themeColour}/>
                </a>
                <a href="https://github.com/Yom4" target="_blank">
                <FontAwesomeIcon icon={faGithub} color={themeColour}/>
                </a>
            </span>
            <p>
                Developer and Artist with passion for creating meaningful things.
            </p>
            {/* <a href="" target="_blank" download>
                <button className="hover">CV</button>
            </a> */}
        </div>
    </section>
  )
}

export default Hero