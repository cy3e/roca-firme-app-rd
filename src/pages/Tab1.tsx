import { IonButton, IonContent, IonHeader, IonImg, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import Tool from '../components/Toolbar';
import ExploreContainer from '../components/ExploreContainer';
import './Tab1.css';

const Tab1: React.FC = () => {
  return (
    <IonPage>
        <IonToolbar>
          <Tool name = "Roca Firme"/>
        </IonToolbar>
      <IonContent fullscreen>
        <div className  = "img">
          <img src="https://scontent.fhex4-2.fna.fbcdn.net/v/t1.15752-9/260669052_197768389215074_6875169155440593991_n.png?_nc_cat=110&ccb=1-5&_nc_sid=ae9488&_nc_ohc=MT6yQPzCUe8AX-zU58P&tn=6yQkdtKp7fvkPiYC&_nc_ht=scontent.fhex4-2.fna&oh=817a70e00cb4c0df729eda453294b4d8&oe=61C49720"/>
        </div>
        <ExploreContainer name="Tab 1 page" />
      </IonContent>
    </IonPage>
  );
};
export default Tab1;
