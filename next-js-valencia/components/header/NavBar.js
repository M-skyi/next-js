import{useRouter} from "next/router"
import Link from "next/link";
import styles from "../../styles/Header.module.css"



const navigation = [
    {id:1, title:"Главная", path: "/" },
    {id:2, title:"О проекте", path: "/about-project" }
]

const NavBar = () => {

const pathName = useRouter().asPath;

    const stylesLogo = (pathName === "/analytics" || pathName === "/about-project" ) ? styles.logoChanges : styles.logo;
    const stylesHover = (pathName === "/analytics") ? styles.analyticHover:null;
    const stylesLinkChanges = (pathName === "/about-project") ? styles.activeLinkAboutPr:null;
    const stylesActiveChanges = (pathName === "/about-project") ? styles.activeAbout:null;  
  
return(
    <div className = {`${styles.nav} container`}>

        <div className={styles.left}>
            <Link href="/"><a className={stylesLogo} >NewsAnalyzer</a></Link>
        </div>

        <div className={styles.right}>
            <nav className={styles.links}>
                {navigation.map(({id,title,path}) => (
                     <Link href={path} key = {id}>
                        <a className = {`${styles.link} ${stylesHover}
                         ${(pathName == path) ? styles.active: null}
                         ${pathName == path ? styles.activeLinkHome : null}
                         ${pathName == path ? stylesLinkChanges : null }
                         ${pathName == path ? stylesActiveChanges : null }
                         `} >{title}</a>
                     </Link>
                )) }
            </nav>
        </div>

    </div>
)

}
    
    
    




export default NavBar;