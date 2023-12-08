import { useParams } from 'react-router-dom';


const ActivateUser = () => {
     // Access the parameters from the URL
  const { paramName } = useParams();

  return (
    <div>
      
      {alert("sabbir")}
    </div>
  );
};

export default ActivateUser;