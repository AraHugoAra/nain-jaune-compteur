import { AiFillGithub } from "react-icons/ai"

function Footer() {

    return (
        <div className="container__footer">
            <a 
                className="container__footer--link" 
                target="_blank" 
                rel="noreferrer" 
                href="https://github.com/AraHugoAra?tab=repositories"
            > <AiFillGithub /><span className="container__footer--hidden">Check out the code. It's homemade!</span>
            </a>
        </div>
    )
}

export default Footer