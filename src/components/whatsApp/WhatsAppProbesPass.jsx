import WhatsAppIcon from "./WhatsAppProbesAccept";
import "./WhatsAppCSS.css";
const WhatsAppComponent = () => {
  return (
    <div className="whatsapp-component">
      <WhatsAppIcon
        phoneNumber="+919350125817"
        message="Hi, I want to order Tiffin. Can you help me?"
      />
      {/* Other components or content */}
    </div>
  );
};

export default WhatsAppComponent;
