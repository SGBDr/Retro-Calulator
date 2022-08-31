import logo from '../../assets/logo.png'
import './Banner.css'
import { useContext } from 'react'
import { ThemeContext } from '../../assets/context/themeProvider';

function Banner() {
    const title = 'Calculator'
    var {toggleTheme, theme} = useContext(ThemeContext)

    return (
        <div className='lmj-banner'>
            <div className='bb'>
                <span onClick={() => toggleTheme()}>
                    {
                        theme === 'dark' ? '🌙' : '☀️'
                    }
                </span>
            </div>
            <div className='block'>
                <img src={logo} alt='La maison jungle' className='lmj-logo' />
                <h3 className='lmj-title'>{title}</h3>
            </div>
        </div>
    )
}

export default Banner