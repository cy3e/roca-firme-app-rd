import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab1.css';

const Tab1: React.FC = () => {
  return (
    <IonPage>
      <IonContent fullscreen>
        <div className ="content">
            <div className="imgback">
              <img src="https://scontent.fhex4-2.fna.fbcdn.net/v/t1.6435-9/61539381_803001863417277_2820942461407330304_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=e3f864&_nc_ohc=28QefR_NwzkAX-hF0J7&_nc_ht=scontent.fhex4-2.fna&oh=227ec47e4f3b268bc207554c3326c099&oe=615E185B" width="320"/>
              <div className = "info">
              <strong>muy buenas este es una prueba</strong>
              <strong>muy buenas este es una prueba</strong>
              <strong>muy buenas este es una prueba</strong>
              <strong>muy buenas este es una prueba</strong>
              <strong>muy buenas este es una prueba</strong>
              <strong>muy buenas este es una prueba</strong>
              <strong>muy buenas este es una prueba</strong>
              <strong>muy buenas este es una prueba</strong>
              <strong>muy buenas este es una prueba</strong>
              <strong>muy buenas este es una prueba</strong>
              <strong>muy buenas este es una prueba</strong>
              <strong>muy buenas este es una prueba</strong>
              <strong>muy buenas este es una prueba</strong>
              <strong>muy buenas este es una prueba</strong>
              <strong>muy buenas este es una prueba</strong>
              <strong>muy buenas este es una prueba</strong>
              <strong>muy buenas este es una prueba</strong>
              <strong>muy buenas este es una prueba</strong>
              <strong>muy buenas este es una prueba</strong>
              <strong>muy buenas este es una prueba</strong>
              <strong>muy buenas este es una prueba</strong>
              <strong>muy buenas este es una prueba</strong>
              <strong>muy buenas este es una prueba</strong>
              <strong>muy buenas este es una prueba</strong>
              <strong>muy buenas este es una prueba</strong>
              <strong>muy buenas este es una prueba</strong>
              <strong>muy buenas este es una prueba</strong>
              <strong>muy buenas este es una prueba</strong>
              <strong>muy buenas este es una prueba</strong>
              <strong>muy buenas este es una prueba</strong>
              </div>
            </div>
        </div>

        <ExploreContainer name="Tab 1 page" />
      </IonContent>
    </IonPage>
  );
};
export default Tab1;
