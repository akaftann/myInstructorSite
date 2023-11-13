import { quotes } from "../assets";
import {metroIcon} from "../constants";

const FeedbackCard = ({ formattedContent, name, title, img }) => (
  <div className="flex justify-between flex-col items-center px-20 py-12 rounded-[20px]  max-w-[770px] md:mr-10 sm:mr-5 mr-0 my-5 feedback-card">

    <div>
      {formattedContent.map((item, index) => {
          // Розділіть рядок на частини, використовуючи роздільний пробіл
          const parts = item.split(/\s+/);
          
          return (
            <p key={index} className="font-poppins font-normal text-[18px] leading-[32.4px] text-white my-1">
              {parts.map((part, partIndex) => (
                // Перевірте, чи частина є ключем у об'єкті іконок метро
                metroIcon[part] ? (
                  <span key={partIndex} className="mr-1">
                    <img src={metroIcon[part]} alt={part} className="inline-block h-5 w-5" />
                  </span>
                ) : (
                  <span key={partIndex}>{part} {' '}</span>
                )
              ))}
            </p>
          );
        })}
    </div>


    <div className="flex flex-row">
      <img src={img} alt={name} className="max-w-[374px] max-h-[313px]" />
    </div>
    
    
  </div>
);


export default FeedbackCard;