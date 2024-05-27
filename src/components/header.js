

function Header() {
    return(
        <>
        <a href="https://github.com/uttammm"><img src={process.env.PUBLIC_URL + "/github.svg"} className="github-icon"/></a>
            <a href="https://leetcode.com/u/uttamercer/"><img src={process.env.PUBLIC_URL + "/leetcode.svg"} className="leetcode-icon"/></a>
            <a href="https://www.linkedin.com/in/uttammm/"><img src={process.env.PUBLIC_URL + "/linkedin.png"} className="linkedin-icon"/></a>
            <a href="https://www.hackerrank.com/profile/uttammm"><img src={process.env.PUBLIC_URL + "/hackerrank.svg"} className="hackerrank-icon"/></a>
        </>
            
    );
}

export default Header;