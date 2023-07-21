

const Projects = (props)=>{
    const hero={
        marginTop:"-1em"
    }
    const heroh2={
        color:"rgb(235, 229, 229)"
    }
    return(
        <div className="project">
            <div>
                <nav className="projectNav"> 
                    <a className="projectA" href="https://github.com/bijaykadariya123/ProjectUnit1">National Holiday</a>
                    <a className="projectA" href="https://github.com/bijaykadariya123/Project2">CountryPedia</a>
                    <a className="projectA" href="https://webpage-nationalholidayfinder.onrender.com/">RHoliday</a>
                    <a className="projectA" href="https://project2-bijay.onrender.com/">RCountryPedia</a>
                </nav>
            </div>
            <div style={hero}>
                <h2 style={heroh2}>Project Apps</h2>
                <div className="projectImage">
                    <div>
                        <img className="imagesP" src="../../flowerbox.png" alt="img"/>
                        <p>flowerbox</p>
                    </div>
                    <div>
                        <img className="imagesP" src="../../holiday.png" alt="img"/>
                        <p>Holiday: Project2SNAP</p>
                    </div>
                    
                    <div>
                        <img className="imagesP" src="../../country.png" alt="img"/>
                        <p>CountryPedia: Project2SNAP</p>
                    </div>
                    <div>
                        <img className="imagesP" src="../../animal.png" alt="img"/>
                        <p>Animal</p>
                    </div>
                </div>
            </div>    

        
        </div>
    )
}

export default Projects;