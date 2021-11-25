import loading from '../../assets/img/loading.gif'
import './Loading.css'

const Loading = () => {
  return (
    <div className=" container  text-center mt-4">

      <div>
        <img src={loading} className="imagen" alt="cargando" />
      </div>
      <div>
        <p className="mr-4 text-pink font-weight-bold mt-3" role="status" aria-hidden="true">Cargando producto escogido...</p>

      </div>
    </div>
  );
};

export default Loading;