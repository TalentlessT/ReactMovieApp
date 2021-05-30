const Footer = () => {

    let currentDate = new Date().getFullYear()

    return ( 
        <div className="footer">
            <h4>&copy; {currentDate}</h4>
        </div>
     );
}
 
export default Footer;