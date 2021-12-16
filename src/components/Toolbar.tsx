import { IonButton,IonImg, IonTitle, IonToolbar } from '@ionic/react';
import './Toolbar.css';

interface ContainerProps {
  name: string;
}

const Tool: React.FC<ContainerProps> = ({ name }) => {
  return (
    <IonTitle>
      <IonButton className = "button">
        <p>
          {name}
        </p>
      </IonButton>
      
      </IonTitle>
  );
};

export default Tool;
