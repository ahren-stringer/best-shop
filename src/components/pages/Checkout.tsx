import InputMask from "react-input-mask"
import { withNaming } from '@bem-react/classname';
import { useForm, SubmitHandler, Controller } from 'react-hook-form';
import { Navigate, redirect, useNavigate } from "react-router-dom";
import { clearCart } from "../../features/products/cartSlice";
import { useDispatch } from "react-redux";

type Inputs = {
  phone: string,
  exampleRequired: string,
  email: string
}

function RequiredMessage (){
  return <span style={{color: 'red'}}>Обязательное поле</span>
}

function Checkout() {
const dispatch = useDispatch()

  // логика формы

  const navigate = useNavigate()

  const { register, handleSubmit, watch, control, formState: { errors } } = useForm<Inputs>()
  const onSubmit: SubmitHandler<Inputs> = (data) =>  {
    console.log(data)
    // return <Navigate to ="/thanks"/>
    navigate("/thanks")
    dispatch(clearCart())
  }

  console.log(watch('phone'))

  // Конец - логика формы

  return (
    <div className="">

      <section className="checkout-area ptb-100">
        <div className="container">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="row">
              <div className="col-lg-6 col-md-12">
                <div className="billing-details">
                  <h3 className="title">Данные для оплаты</h3>
                  <div className="row">
                    <div className="col-lg-12 col-md-6">
                      <div className="form-group">
                        <label>Имя <span className="required">*</span></label>
                        <input type="text" className="form-control" {...register('exampleRequired', 
                        { required: true }
                        )} />
                        {errors.exampleRequired && <RequiredMessage/>}
                      </div>
                    </div>
                    <div className="col-lg-12 col-md-6">
                      <div className="form-group">
                        <label>Адрес <span className="required">*</span></label>
                        <input type="text" className="form-control" {...register('exampleRequired', 
                        { required: true }
                        )} />
                        {errors.exampleRequired && <RequiredMessage/>}
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                      <div className="form-group">
                        <label>E-mail <span className="required">*</span></label>
                        <input type="email" className="form-control" {...register('email', { 
                          required: true,
                           pattern: /(?<=.)[^@\n](?=[^@\n]*?@)|(?:(?<=@.)|(?!^)\G(?=[^@\n]*$)).(?=.*\.)/ })} />
                        {errors.email && <RequiredMessage/>}
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                      <div className="form-group">
                        <label>Телефон <span className="required">*</span></label>
                        <InputMask type="tel" className="form-control" mask='+7 (999) 999-99-99' {...register('phone', { required: true, pattern: /(?:\+?)[78]+[0-9() -]{16,17}/ })} />
                        {errors.phone && <RequiredMessage/>}
                      </div>
                    </div>
                    <div className="col-lg-12 col-md-12">
                      <div className="form-group">
                        <label>Дополнительные сведения</label>
                        <textarea name="notes" id="notes"
                          cols={30} 
                          rows={5}
                           className="form-control"></textarea>
                      </div>
                    </div>
                  </div>
                  {/* <a href="#" className="default-btn mt-5">
                    Place Order
                  </a> */}
                  <input type="submit" value="Оформить Заказ" className="default-btn mt-5" style={{border: 'none'}}/>
                </div>
              </div>
            </div>
          </form>
        </div>
      </section>

{/* 
      <form onSubmit={handleSubmit(onSubmit)}>
        <input type="text" {...register('exampleRequired', { required: true })} />
        {errors.exampleRequired && <span>Обязательное поле</span>}

        <InputMask mask='+7 (999) 999-99-99' {...register('phone', { required: true, pattern: /(?:\+?)[78]+[0-9() -]{16,17}/ })} />
        {errors.phone && <div>Обязательное поле</div>}


        <input  {...register('email', { required: true, pattern: /(?<=.)[^@\n](?=[^@\n]*?@)|(?:(?<=@.)|(?!^)\G(?=[^@\n]*$)).(?=.*\.)/ })} />
        {errors.email && <span>Обязательное поле</span>}

        <input type="submit" />
      </form> */}

    </div>
  );
}

export default Checkout;
