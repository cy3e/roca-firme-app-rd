import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar,IonAlert,IonCard } from '@ionic/react';
import './SL.css';

interface ContainerProps {
  name?: string;
  //nombre_del_servicio: String;

}

//

const ExploreContainer2: React.FC<ContainerProps> = ({ name }) => {
  return (
      <div className="fb">
          <iframe src="https://www.facebook.com/plugins/video.php?height=315&href=https%3A%2F%2Fwww.facebook.com%2Fphancy3%2Fvideos%2F880774299478708%2F&show_text=true&width=560&t=0" width="300" height="430" scrolling="no" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share;allowFullScreen" allowFullScreen></iframe>
    </div>
  );
};

export default ExploreContainer2;
