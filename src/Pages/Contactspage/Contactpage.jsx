import React from 'react'
import './Contactpage.css'
import Header from '../../components/Header/Header'
import Button from '../../components/Button/Button'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import EntranceAboutpage from '../../components/Entrance/EntranceAboutpage'


export default function Contactpage() {
  const notify = () => toast();
  const sendMessage = (event) => {
    event.preventDefault();
    const token = "6807646236:AAGeUZUjG8k_owEhXgSmLi_yZDMzbLXw4cQ";
    const chatID = 806346535;
    const url = `https://api.telegram.org/bot${token}/sendMessage`;
    const name = document.getElementById("name").value;
    const number = document.getElementById("number").value;
    



    const messageContent = `Phone number: ${number}\nName: ${name}`
    axios({
      url: url,
      method: 'POST',
      data: {
        "chat_id": chatID,
        "text": messageContent,

      }
    }).then((res) => {
      document.getElementById("footerForm").reset();
      toast("Успешно отправлено")
    }).catch((error) => {
      console.log("Что то пошло не так!");
    })
  }
  return (
    <>
      <Header />
      {/* Entrance section */}
  <EntranceAboutpage />
      <div className="contactpage-footer__up">
        <div className="container">
          <div className="contactpage-footerup__wrapper">

            <div className="contactpage-footerup__left">

              <div className="contactpage-footer__contact">

                <span className="contactpage-footer__title">Как мы можем
                  помочь?</span>
                <span>
                  <br />  <br />Оставьте свои контакты, заполнив текущую форму, и мы свяжемся с вами в ближайшее время.</span>
              </div>
              <div className="contactpage-footer__info">
                <div className="contactpage-footer__adress">
                  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15.9993 1.99951C13.0829 2.00297 10.2871 3.16301 8.22491 5.22516C6.16276 7.28731 5.00273 10.0832 4.99927 12.9995C4.99927 22.4116 14.9993 29.521 15.425 29.8188C15.5934 29.9364 15.7939 29.9995 15.9993 29.9995C16.2047 29.9995 16.4051 29.9364 16.5735 29.8188C16.9993 29.521 26.9993 22.4116 26.9993 12.9995C26.9958 10.0832 25.8358 7.28731 23.7736 5.22516C21.7115 3.16301 18.9156 2.00297 15.9993 1.99951ZM16 8.99987C16.7911 8.99987 17.5645 9.23447 18.2223 9.674C18.8801 10.1135 19.3928 10.7382 19.6955 11.4691C19.9983 12.2 20.0775 13.0043 19.9231 13.7802C19.7688 14.5562 19.3878 15.2689 18.8284 15.8283C18.269 16.3877 17.5563 16.7687 16.7804 16.923C16.0044 17.0774 15.2002 16.9981 14.4693 16.6954C13.7384 16.3926 13.1136 15.88 12.6741 15.2222C12.2346 14.5644 12 13.791 12 12.9999C12 12.4746 12.1034 11.9544 12.3045 11.4691C12.5055 10.9838 12.8001 10.5429 13.1715 10.1714C13.543 9.79998 13.9839 9.50534 14.4692 9.30433C14.9546 9.10331 15.4747 8.99986 16 8.99987Z" fill="#FAB448"></path>
                  </svg>
                  <div className="contactpage-footer__adresstext">
                    <h3>Адрес</h3>
                    <h5>Узбекистан, Ташкент, Национальный парк Узбекистана имени Алишера Навои</h5>
                  </div>
                </div>
                <div className="contactpage-footer__phone">
                  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M27.7465 19.8033L21.8917 17.2942C21.586 17.1626 21.2523 17.1096 20.9209 17.1401C20.5895 17.1705 20.271 17.2834 19.9944 17.4685L16.864 19.5552C14.9508 18.6247 13.4023 17.083 12.4634 15.174L12.4636 15.1737L14.543 11.9965C14.724 11.7206 14.8338 11.4042 14.8626 11.0756C14.8914 10.7469 14.8383 10.4163 14.708 10.1132L12.1965 4.25342C12.0256 3.85566 11.7304 3.52398 11.3551 3.30803C10.9799 3.09209 10.5448 3.00351 10.115 3.05554C8.42607 3.27269 6.87398 4.09728 5.74865 5.37525C4.62331 6.65323 4.00173 8.29718 4 10C4 19.9253 12.0747 28 22 28C23.7028 27.9983 25.3468 27.3767 26.6248 26.2513C27.9028 25.126 28.7273 23.5738 28.9445 21.8849C28.9964 21.4551 28.9077 21.02 28.6917 20.6448C28.4758 20.2696 28.1442 19.9744 27.7465 19.8033Z" fill="#FAB448"></path>
                    <path d="M19.669 5.96598C21.1946 6.3762 22.5856 7.18012 23.7027 8.29722C24.8198 9.41431 25.6237 10.8053 26.0339 12.331C26.1029 12.5867 26.2704 12.8046 26.4998 12.9369C26.7292 13.0693 27.0018 13.1052 27.2576 13.0368C27.5135 12.9684 27.7318 12.8013 27.8646 12.5722C27.9974 12.3431 28.0339 12.0706 27.9661 11.8146C27.4646 9.94965 26.4818 8.24921 25.1163 6.88364C23.7507 5.51807 22.0503 4.53533 20.1853 4.03385C19.9293 3.96601 19.6568 4.00251 19.4277 4.13532C19.1986 4.26813 19.0315 4.48642 18.9631 4.74228C18.8947 4.99814 18.9306 5.27068 19.063 5.50009C19.1953 5.72951 19.4132 5.89706 19.6689 5.96598L19.669 5.96598Z" fill="#FAB448"></path>
                    <path d="M18.6336 9.83073C19.4811 10.0586 20.2538 10.5052 20.8744 11.1258C21.4949 11.7464 21.9415 12.5191 22.1694 13.3666C22.2384 13.6223 22.4059 13.8403 22.6353 13.9726C22.8647 14.1049 23.1373 14.1408 23.3931 14.0725C23.649 14.0041 23.8673 13.837 24.0001 13.6079C24.1329 13.3787 24.1694 13.1063 24.1016 12.8503C23.7824 11.6634 23.157 10.5812 22.288 9.71218C21.4189 8.84313 20.3368 8.21772 19.1499 7.8986C18.8939 7.83076 18.6214 7.86725 18.3923 8.00006C18.1632 8.13288 17.9961 8.35116 17.9277 8.60703C17.8593 8.86289 17.8952 9.13543 18.0276 9.36484C18.1599 9.59425 18.3778 9.7618 18.6335 9.83072L18.6336 9.83073Z" fill="#FAB448"></path>
                  </svg>
                  <div className="footer-phone__text">
                    <h3>Телефон</h3>
                    <h5>+998 71 288 88 88</h5>
                  </div>
                </div>
                <div className="contactpage-footer__timework">
                  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M29.4351 6.80753L25.1924 2.56485C25.0049 2.37732 24.7505 2.27197 24.4853 2.27197C24.2201 2.27198 23.9658 2.37734 23.7782 2.56488C23.5907 2.75242 23.4853 3.00678 23.4854 3.272C23.4854 3.53722 23.5907 3.79157 23.7783 3.9791L28.0209 8.22171C28.1137 8.31457 28.224 8.38823 28.3453 8.43849C28.4666 8.48875 28.5967 8.51462 28.728 8.51462C28.8593 8.51462 28.9893 8.48876 29.1107 8.43851C29.232 8.38826 29.3422 8.3146 29.4351 8.22174C29.528 8.12889 29.6016 8.01865 29.6519 7.89732C29.7021 7.776 29.728 7.64596 29.728 7.51464C29.728 7.38332 29.7021 7.25328 29.6519 7.13196C29.6016 7.01063 29.528 6.90039 29.4351 6.80753H29.4351Z" fill="#FAB448"></path>
                    <path d="M8.22171 2.56485C8.03417 2.37732 7.77983 2.27197 7.51462 2.27197C7.24941 2.27197 6.99506 2.37732 6.80753 2.56485L2.56485 6.80753C2.37732 6.99507 2.27197 7.24943 2.27197 7.51464C2.27198 7.77986 2.37734 8.03421 2.56488 8.22174C2.75242 8.40928 3.00678 8.51463 3.272 8.51462C3.53722 8.51461 3.79157 8.40925 3.9791 8.22171L8.22171 3.9791C8.40924 3.79155 8.51459 3.53719 8.51459 3.27197C8.51459 3.00676 8.40924 2.7524 8.22171 2.56485Z" fill="#FAB448"></path>
                    <path d="M27.9946 15.653C27.9921 15.5632 27.9889 15.4737 27.9844 15.3843C27.9842 15.3812 27.984 15.3782 27.9838 15.3751C27.8293 12.4126 26.5829 9.61236 24.4853 7.51471C22.3876 5.41706 19.5874 4.17071 16.6249 4.01617C16.6218 4.01599 16.6188 4.01575 16.6157 4.01562C16.5263 4.01111 16.4368 4.00793 16.347 4.00537C16.3336 4.00501 16.3202 4.00428 16.3068 4.00391C16.2047 4.00134 16.1025 4.00004 16 4C15.8975 4 15.7953 4.0013 15.6932 4.00391C15.6797 4.00427 15.6664 4.005 15.653 4.00537C15.5632 4.00793 15.4737 4.01111 15.3843 4.01562C15.3812 4.01575 15.3782 4.01599 15.3751 4.01617C12.4126 4.17073 9.61238 5.41709 7.51474 7.51474C5.41709 9.61238 4.17073 12.4126 4.01617 15.3751C4.01599 15.3782 4.01575 15.3812 4.01562 15.3843C4.01111 15.4737 4.00793 15.5632 4.00537 15.653C4.00501 15.6664 4.00428 15.6798 4.00391 15.6932C4.00134 15.7953 4.00004 15.8975 4 16C4 16.1025 4.0013 16.2047 4.00391 16.3068C4.00427 16.3203 4.005 16.3336 4.00537 16.347C4.00793 16.4368 4.01111 16.5263 4.01562 16.6157C4.01575 16.6188 4.01599 16.6218 4.01617 16.6249C4.1707 19.5874 5.41706 22.3876 7.51471 24.4853C9.61236 26.5829 12.4126 27.8293 15.3751 27.9838C15.3782 27.984 15.3812 27.9843 15.3843 27.9844C15.4737 27.9889 15.5632 27.9921 15.653 27.9946C15.6664 27.995 15.6798 27.9957 15.6932 27.9961C15.7953 27.9987 15.8975 28 16 28C16.1025 28 16.2047 27.9987 16.3068 27.9961C16.3203 27.9957 16.3336 27.995 16.347 27.9946C16.4368 27.9921 16.5263 27.9889 16.6157 27.9844C16.6188 27.9842 16.6218 27.984 16.6249 27.9838C19.5874 27.8293 22.3876 26.5829 24.4853 24.4853C26.5829 22.3876 27.8293 19.5874 27.9838 16.6249C27.984 16.6218 27.9843 16.6188 27.9844 16.6157C27.9889 16.5263 27.9921 16.4368 27.9946 16.347C27.995 16.3336 27.9957 16.3202 27.9961 16.3068C27.9987 16.2047 28 16.1025 28 16C28 15.8975 27.9987 15.7953 27.9961 15.6932C27.9957 15.6797 27.995 15.6664 27.9946 15.653ZM23 17H16C15.7348 17 15.4804 16.8946 15.2929 16.7071C15.1054 16.5196 15 16.2652 15 16V9C15 8.73478 15.1054 8.48043 15.2929 8.29289C15.4804 8.10536 15.7348 8 16 8C16.2652 8 16.5196 8.10536 16.7071 8.29289C16.8946 8.48043 17 8.73478 17 9V15H23C23.2652 15 23.5196 15.1054 23.7071 15.2929C23.8946 15.4804 24 15.7348 24 16C24 16.2652 23.8946 16.5196 23.7071 16.7071C23.5196 16.8946 23.2652 17 23 17Z" fill="#FAB448"></path>
                  </svg>
                  <div className="footer-timework__text">
                    <h3>Время работы</h3>
                    <h5>09:00 - 18:00 ПН-СБ</h5>
                  </div>
                </div>
              </div>


            </div>
            <div className="contactpage-footerup__right">

              <form id="contactpage-footerForm" onSubmit={sendMessage}>

                <div className="form-item">
                  <label htmlFor="">Имя</label>
                  <input style={{ width: '100%' }} id='name' type="text" placeholder='Как вас зовут?' required />
                </div>

                <div className="form-item">
                  <label htmlFor="">Номер телефона</label>
                  <input style={{ width: '100%' }} id='number' type="text" placeholder='+998' required />
                </div>

                <div className="form-item">
                  <label htmlFor="">Отдел</label>
                  <select style={{ width: '100%' }} className='select' name="" id="">
                    <option value=""></option>
                    <option value="">Отдел</option>
                    <option value="">Отдел продаж</option>
                    <option value="">Отдел кадров</option>
                    <option value="">Финансовый отдел</option>
                    <option value="">Бухгалтерия</option>
                    <option value="">Отдел закупов</option>
                    <option value="">Концелярия</option>
                  </select>

                </div>
                <div className="form-item">
                  <label htmlFor="question">Ваш вопрос</label>
                  <textarea
                    id="question"
                    name="question"
                    placeholder="Оставьте свой вопрос ..."
                    rows="5"
                    cols="50"
                    style={{ width: '100%', backgroundColor: '#f9f9f9', border: '1px solid #ddd', padding: '10px', borderRadius: '5px' }}
                  ></textarea>
                </div>


                <Button variant="footerForm" onClick={notify} >Обратная связь</Button>

              </form>

            </div>
          </div >
        </div >
      </div>
      {/* Location section */}
      <div className='contactpage-location' style={{ width: '100%', height: '450px', position: 'relative' }}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d529.5588417455398!2d69.28637138142311!3d41.3385021905838!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b4e3088e9bf%3A0xdd9a89a16d423604!2sIT%20Time%20Academy!5e0!3m2!1sru!2s!4v1718897104632!5m2!1sru!2s"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      {/* Footer down section */}
      <div className="contactpage-footer__down">
        <div className="container">
          <div className="contactpage-footer__wrapper">

            <p className="contactpage-footer__license">© 2022 Discover Invest. Все права защищены.</p>


            <div className="contactpage-footer__social">
              <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M19.2036 16.3438L19.7145 13.0158H16.521V10.8561C16.521 9.9458 16.9669 9.05791 18.3973 9.05791H19.849V6.2247C19.849 6.2247 18.5318 6 17.2721 6C14.6423 6 12.9234 7.59418 12.9234 10.4797V13.0164H10V16.3444H12.9234V24.39H16.521V16.3444L19.2036 16.3438Z" fill="#262524"></path>
              </svg>
              <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M24.3332 11.4376C24.3219 10.6645 24.1789 9.89745 23.9052 9.17434C23.4262 7.93954 22.4508 6.96313 21.216 6.48514C20.5021 6.21653 19.7473 6.07252 18.9833 6.05617C18.0008 6.01226 17.6893 6 15.1952 6C12.701 6 12.3814 6 11.406 6.05617C10.643 6.07252 9.88826 6.21653 9.17434 6.48514C7.93953 6.96313 6.96313 7.93954 6.48514 9.17434C6.21653 9.88826 6.07149 10.643 6.0572 11.406C6.01328 12.3895 6 12.701 6 15.1952C6 17.6893 6 18.008 6.0572 18.9844C6.07252 19.7483 6.21653 20.5021 6.48514 21.218C6.96415 22.4518 7.93953 23.4282 9.17536 23.9062C9.88622 24.184 10.641 24.3413 11.407 24.3658C12.3906 24.4097 12.7021 24.423 15.1962 24.423C17.6903 24.423 18.01 24.423 18.9854 24.3658C19.7483 24.3505 20.5031 24.2065 21.218 23.9379C22.4529 23.4589 23.4282 22.4825 23.9072 21.2487C24.1759 20.5337 24.3199 19.78 24.3352 19.015C24.3791 18.0325 24.3924 17.721 24.3924 15.2258C24.3903 12.7317 24.3903 12.4151 24.3332 11.4376ZM15.189 19.9117C12.5805 19.9117 10.4674 17.7986 10.4674 15.1901C10.4674 12.5815 12.5805 10.4684 15.189 10.4684C17.7955 10.4684 19.9107 12.5815 19.9107 15.1901C19.9107 17.7986 17.7955 19.9117 15.189 19.9117ZM20.0987 11.3947C19.4889 11.3947 18.9976 10.9025 18.9976 10.2937C18.9976 9.68501 19.4889 9.19273 20.0987 9.19273C20.7064 9.19273 21.1986 9.68501 21.1986 10.2937C21.1986 10.9025 20.7064 11.3947 20.0987 11.3947Z" fill="#262524"></path>
                <path d="M15.1882 18.2572C16.8821 18.2572 18.2553 16.8841 18.2553 15.1901C18.2553 13.4962 16.8821 12.123 15.1882 12.123C13.4943 12.123 12.1211 13.4962 12.1211 15.1901C12.1211 16.8841 13.4943 18.2572 15.1882 18.2572Z" fill="#262524"></path>
              </svg>
              <svg width="30" height="30d" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12.2764 23.3439L12.6182 18.1807L21.9926 9.73395C22.4076 9.35555 21.9071 9.17246 21.3578 9.50203L9.78633 16.8136L4.78177 15.2268C3.70763 14.9216 3.69542 14.177 5.0259 13.6399L24.5193 6.1209C25.4103 5.7181 26.2647 6.34061 25.923 7.70771L22.6029 23.3439C22.371 24.4547 21.6996 24.7232 20.7719 24.2105L15.7186 20.4754L13.2895 22.8312C13.0088 23.112 12.7769 23.3439 12.2764 23.3439Z" fill="#262524"></path>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
