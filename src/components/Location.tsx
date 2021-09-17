import { IonCard, IonTitle } from '@ionic/react';
import './Location.css';

interface ContainerProps {
  name: string;
}

const Location: React.FC<ContainerProps> = ({ name }) => {
  return (
    <div className="content">
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d946.3439777219694!2d-68.96877307767228!3d18.421233681818855!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8eaf5558aab98203%3A0xfb42972e0b5f4133!2sIglesia%20Ministerio%20Cristiano%20Roca%20Firme!5e0!3m2!1ses!2sdo!4v1631049168997!5m2!1ses!2sdo" width="300" height="550" loading="lazy"></iframe>
      <IonTitle><strong>Les esperamos</strong> </IonTitle>
    </div>
  );
};

export default Location;
