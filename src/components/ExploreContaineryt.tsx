import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar,IonAlert,IonCard } from '@ionic/react';
import './SL.css';

interface ContainerProps {
  name?: string;
  //nombre_del_servicio: String;

}

//

const ExploreContainer2: React.FC<ContainerProps> = ({ name }) => {
  return (
    <div className="yt">
        <iframe width="300" height="315" src="https://www.youtube.com/embed/2YNh2kjO8rk" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        </div>
  );
};

export default ExploreContainer2;
