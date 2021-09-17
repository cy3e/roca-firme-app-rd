import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import Location from '../components/Location';
import './Tab2.css';

const Tab2: React.FC = () => {
  return (
    <IonPage>
      <IonContent fullscreen>
        <div className="background">
        <Location name="Localizacion" />
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
