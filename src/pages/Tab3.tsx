import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonInfiniteScrollContent } from '@ionic/react';
import ExploreContaineryt from '../components/ExploreContaineryt';
import ExploreContainerfb from '../components/ExploreContainerfb';
import './Tab3.css';

const Tab3: React.FC = () => {
  return (
    <IonPage>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 3</IonTitle>
          </IonToolbar>
        </IonHeader>
        <div className="contenido">
        <ExploreContaineryt/>
        <ExploreContainerfb/>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Tab3;
