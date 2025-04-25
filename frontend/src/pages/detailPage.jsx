import { useParams } from 'react-router-dom';
import api from '../services/api';

const DetailPage = () => {
  const { id } = useParams();
  const [tenis, setTenis] = useState(null);

  useEffect(() => {
    api.getTenisById(id).then(setTenis);
  }, [id]);

  return (
    <div className="detail-container">
      {tenis && (
        <div className="detail-card">
          <h2>{tenis.nome}</h2>
          <p>Marca: {tenis.marca}</p>
          <p>Tamanho: {tenis.tamanho}</p>
          <p>Cor: {tenis.cor}</p>
          <p>Preço: R$ {tenis.preco.toFixed(2)}</p>
        </div>
      )}
    </div>
  );
};