import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonInfiniteScrollContent } from '@ionic/react';
import ExploreContaineryt from '../components/ExploreContaineryt';
import ExploreContainerfb from '../components/ExploreContainerfb';
import Tool from '../components/Toolbar';
import './Tab3.css';

const Tab3: React.FC = () => {
  return (
    <IonPage>
      <Tool name = ""/>
      <IonContent fullscreen>
        <div className="contenido">
        <ExploreContaineryt/>
        <ExploreContainerfb/>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Tab3;
