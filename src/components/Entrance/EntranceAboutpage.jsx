import React from 'react'
import './EntranceAboutpage.css'

import Button from '../Button/Button'
import { useLocation } from 'react-router-dom'

export default function EntranceAboutpage() {
    const location = useLocation()?.pathname;
    console.log(location)
    return (
        <>
        {location?.includes("/Aboutpage")
            ?
            <section>
            <div className="entrance-section__aboutpage">
                <div className="entrance-overlay__aboutpage"></div>
                <div className="container">
                    <div className="entrance-wrapper__aboutpage">
                        <h1>О КОМПАНИИ</h1>
                        <h5>Мы не просто создаём проекты, мы создаем новые возможности. Строя объекты государственного масштаба, мы строим будущее.</h5>
                        <div className="entrance-btn__aboutpage">
                            <a href="https://di.uz/%D0%BF%D1%80%D0%B5%D0%B7%D0%B5%D0%BD%D1%82%D0%B0%D1%86%D0%B8%D1%8F.pdf">
                                <Button variant="aboutpageEntrance" >
                                    Скачать презентацию
                                    <svg width="33" height="30" viewBox="0 0 33 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M20.0926 21.8891L17.9555 23.9446V14.7437C17.9555 14.311 17.7836 13.8961 17.4777 13.5901C17.1718 13.2842 16.7568 13.1123 16.3241 13.1123C15.8915 13.1123 15.4765 13.2842 15.1706 13.5901C14.8647 13.8961 14.6928 14.311 14.6928 14.7437V23.863L12.5883 21.7422C12.4362 21.5901 12.2556 21.4695 12.0569 21.3872C11.8582 21.3048 11.6451 21.2625 11.43 21.2625C11.2149 21.2625 11.0019 21.3048 10.8032 21.3872C10.6044 21.4695 10.4239 21.5901 10.2718 21.7422C10.1197 21.8944 9.999 22.0749 9.91668 22.2737C9.83436 22.4724 9.79199 22.6854 9.79199 22.9005C9.79199 23.1156 9.83436 23.3286 9.91668 23.5274C9.999 23.7261 10.1197 23.9067 10.2718 24.0588L15.1659 28.9529C15.3183 29.1041 15.4991 29.2237 15.6979 29.3049C15.8966 29.3861 16.1094 29.4272 16.3241 29.426C16.7442 29.4243 17.1474 29.2607 17.4498 28.9692L22.3439 24.2382C22.517 24.0954 22.6588 23.9184 22.7603 23.7183C22.8619 23.5181 22.9211 23.2992 22.9342 23.0751C22.9473 22.8511 22.914 22.6268 22.8365 22.4162C22.7589 22.2056 22.6387 22.0132 22.4834 21.8512C22.3281 21.6892 22.1411 21.5609 21.934 21.4745C21.7269 21.388 21.5042 21.3452 21.2798 21.3488C21.0554 21.3523 20.8341 21.4022 20.6298 21.4951C20.4256 21.5881 20.2427 21.7222 20.0926 21.8891Z" fill="white"></path>
                                        <path d="M25.5737 6.58678C24.9081 4.66348 23.6594 2.99551 22.0016 1.81496C20.3437 0.634414 18.3591 0 16.3239 0C14.2886 0 12.304 0.634414 10.6462 1.81496C8.98831 2.99551 7.73968 4.66348 7.07401 6.58678C5.60831 6.78309 4.22355 7.37416 3.06786 8.29677C1.91217 9.21937 1.02903 10.4388 0.512917 11.8246C-0.00319755 13.2104 -0.13287 14.7104 0.137769 16.1643C0.408409 17.6181 1.06918 18.971 2.0494 20.0782C2.1678 20.2868 2.33073 20.4667 2.52659 20.6051C2.72244 20.7435 2.9464 20.837 3.18253 20.879C3.41865 20.9209 3.66112 20.9104 3.89268 20.8479C4.12424 20.7855 4.33919 20.6728 4.52222 20.5178C4.70526 20.3629 4.85187 20.1695 4.95163 19.9514C5.05138 19.7333 5.10183 19.4959 5.09937 19.256C5.0969 19.0162 5.0416 18.7799 4.93739 18.5639C4.83318 18.3479 4.68263 18.1575 4.49645 18.0064C3.8653 17.3007 3.45235 16.4272 3.30765 15.4916C3.16295 14.556 3.29271 13.5985 3.68121 12.7352C4.06971 11.8719 4.70027 11.1398 5.49647 10.6276C6.29267 10.1154 7.22033 9.84511 8.16703 9.84952H8.33017C8.71182 9.85722 9.08409 9.73083 9.38217 9.49237C9.68025 9.2539 9.88527 8.91846 9.96154 8.54442C10.2611 7.06929 11.0614 5.74307 12.2268 4.79048C13.3923 3.83788 14.8513 3.3175 16.3565 3.3175C17.8617 3.3175 19.3207 3.83788 20.4862 4.79048C21.6516 5.74307 22.4519 7.06929 22.7515 8.54442C22.8277 8.91846 23.0328 9.2539 23.3308 9.49237C23.6289 9.73083 24.0012 9.85722 24.3828 9.84952H24.4807C25.4274 9.84511 26.3551 10.1154 27.1513 10.6276C27.9475 11.1398 28.578 11.8719 28.9665 12.7352C29.355 13.5985 29.4848 14.556 29.3401 15.4916C29.1954 16.4272 28.7825 17.3007 28.1513 18.0064C28.0076 18.1675 27.8973 18.3556 27.8268 18.5597C27.7564 18.7638 27.7271 18.9798 27.7408 19.1953C27.7544 19.4108 27.8107 19.6214 27.9064 19.815C28.0021 20.0085 28.1352 20.1812 28.2981 20.3229C28.5955 20.5852 28.9783 20.7302 29.3748 20.7308C29.6065 20.7305 29.8354 20.6808 30.0463 20.5852C30.2573 20.4896 30.4455 20.3501 30.5984 20.1761C31.6058 19.0707 32.2899 17.7097 32.5759 16.2418C32.862 14.7738 32.739 13.2555 32.2203 11.8528C31.7017 10.4501 30.8073 9.21693 29.6351 8.28819C28.4629 7.35946 27.0579 6.77087 25.5737 6.58678Z" fill="white"></path>
                                    </svg>
                                </Button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        :
        "kontakt page chiqadi"
    }
        </>
    )
}
