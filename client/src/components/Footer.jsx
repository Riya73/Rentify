import "../styles/Footer.scss"
import { LocationOn, LocalPhone, Email } from "@mui/icons-material"
const Footer = () => {
  return (
    <div className="footer">
      It's a never ending battle of finding a better home for yourself and family. But we here at Rentify try to reduce your problem by providing you with best homes for you ans your family.
      <div className="footer_left">
      <a href="/"><img src="/assets/logo.png" alt="logo" /></a>
      </div>

      <div className="footer_center">
        <h3>About</h3>
        <ul>
          <li>Services</li>
          <li>Pricing</li>
          <li>Contract</li>
          <li>Careers</li>
        </ul>
      </div>

      <div className="footer_center">
        <h3>Account</h3>
        <ul>
          <li>Profile</li>
          <li>Settings</li>
          <li>Billing</li>
          <li>Notification</li>
        </ul>
      </div>



      <div className="footer_right">
        <h3>Contact</h3>
        <div className="footer_right_info">
          <LocalPhone />
          <p>+91 12345 67890</p>
        </div>
        <div className="footer_right_info">
          <Email />
          <p>rentify@support.com</p>
        </div>
        <img src="/assets/payment.png" alt="payment" />
      </div>
    </div>
  )
}

export default Footer