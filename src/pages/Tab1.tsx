import { IonButton, IonContent, IonHeader, IonImg, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import Tool from '../components/Toolbar';
import ExploreContainer from '../components/ExploreContainer';
import './Tab1.css';
import { NavigationRoute } from 'workbox-routing';
import { IonAlert } from '@ionic/react';

const Tab1: React.FC = () => {
  return (   
    <IonPage>
        <IonToolbar>
          <Tool 
          name = "Roca Firme"/>
        </IonToolbar>
      <IonContent 
      className = "fondo"
      fullscreen>
        <div 
          className  = "background">   
          <div
          className='logo'
          >
            <img 
            id='logo'
            src="https://scontent.xx.fbcdn.net/v/t1.15752-9/p206x206/240472593_2034103930126392_7351329938634769840_n.png?_nc_cat=106&ccb=1-5&_nc_sid=aee45a&_nc_ohc=QHlqT0lmgs4AX_26nZK&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AVINTwzGZSXCBT3meld4NDFxgipTwGJJEDRyhYcEfm0XdQ&oe=61DFA84C">
          </img>

          </div>

          <div
          className='texto'
          >
            <strong>
              Bienvenido a Rocafirme
            </strong>
            <p>Republica Dominicana</p>
            <a>unico requisito:</a><br />
            <a>Disposision para adorar a Dios</a>
          </div>

          <div 
          className = "image"> 
            <img
            /*onClick={instagram}*/
              id='instagram'
              src="https://th.bing.com/th/id/R.60278d0f3400636d229aebf1b026adb3?rik=5T8ls0ANZ65RBw&pid=ImgRaw&r=0">
            </img>
            <img 
           /* onClick={facebook}*/
              id='facebook'
              src="https://th.bing.com/th/id/R.531d8020eec497c76989552f1760d816?rik=UxHWB6Hq%2f1JnLw&pid=ImgRaw&r=0">
            </img>
            <img 
            /*onClick={youtube}*/
              id='youtube'
              src="https://th.bing.com/th/id/R.81cea6fc47a319de6ad49c00eda309e4?rik=n3DSWqmh0wO5KA&pid=ImgRaw&r=0">
            </img>
          </div>

        </div>
      </IonContent>
    </IonPage>
  );
};
export default Tab1;
