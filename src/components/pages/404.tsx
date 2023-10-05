import { Link } from 'react-router-dom';

function ErrporPage() {

  return (
    <section className="error-area ptb-100">
    <div className="d-table">
        <div className="d-table-cell">
            <div className="container">
                <div className="error-content">

                    <h3>Ошибка 404</h3>
                    <p>Такой страницы нет</p>

                    <Link to="/" className="default-btn">
                        Вернуться в магазин
                    </Link>
                </div>
            </div>
        </div>
    </div>
</section>
  );
}

export default ErrporPage;
