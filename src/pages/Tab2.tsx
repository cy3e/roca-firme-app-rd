import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import Location from '../components/Location';
import './Tab2.css';

const Tab2: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Tab 2</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 2</IonTitle>
          </IonToolbar>
        </IonHeader>
        <Location name="Localizacion" />
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
