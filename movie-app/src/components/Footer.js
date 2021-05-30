const Footer = () => {

    let currentDate = new Date().getFullYear()

    return ( 
        <div className="footer">
            <h4>&copy; {currentDate} JH</h4>
        </div>
     );
}
 
export default Footer;