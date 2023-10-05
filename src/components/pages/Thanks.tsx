import { Link } from 'react-router-dom';

function Thanks() {

  return (
    <section className="error-area ptb-100">
    <div className="d-table">
        <div className="d-table-cell">
            <div className="container">
                <div className="error-content">

                    <h3>Спасибо за покупку</h3>
                    <p>Товар доставят через 2 дня</p>

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

export default Thanks;
