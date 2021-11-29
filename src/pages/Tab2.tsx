import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import Tool from '../components/Toolbar';
//import Location from '../components/Location';
import './Tab2.css';

const Tab2: React.FC = () => {
  return (
    <IonPage>
      <Tool name = "Historia"/>
      <IonContent fullscreen>
        <div className  = "im">
          <img src="https://scontent.fhex4-2.fna.fbcdn.net/v/t1.15752-9/260739991_1320875991705695_6223991595600895650_n.png?_nc_cat=111&ccb=1-5&_nc_sid=ae9488&_nc_ohc=FXo90fA4DNQAX_xOMJQ&tn=6yQkdtKp7fvkPiYC&_nc_ht=scontent.fhex4-2.fna&oh=9e026922b707e5e24c840936bd502700&oe=61C5E127"/>
        </div>
       {/* <Location name="Localizacion" /> */} 
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
