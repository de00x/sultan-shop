import { ReactComponent as PaymentMC } from './img/paymentMasterCard.svg'
import { ReactComponent as WhatSuppLogo } from './img/whatSuppSVG.svg'
import { ReactComponent as DownloadSVG } from './img/downloadSVG.svg'
import { ReactComponent as PaymentVisa } from './img/paymentVisa.svg'
import { ReactComponent as SultanLogo } from './img/sultanLogo.svg'
import { ReactComponent as TelegrammLogo } from './img/tgSVG.svg'
import { FooterControllers } from './controllers'
import styles from './styles/Footer.module.scss'
import { FC } from 'react'

export const Footer: FC = (): JSX.Element => {
  /// controllers ///

  const { inputEmailRefBtn, inputEmailRef } = FooterControllers()

  /// controllers ///

  return (
    <div className={styles.wrapper}>
      <div className={styles.blockOneContainer}>
        <div className={styles.blockOneLogo}>
          <SultanLogo />
        </div>
        <div className={styles.blockOneTitle}>
          Компания «Султан» — снабжаем
          <br /> розничные магазины товарами
          <br /> {'"под ключ"'} в Кокчетаве и Акмолинской
          <br /> области
        </div>
        <div className={styles.subscribeToPromo}>
          Подпишись на скидки и акции
          <div className={styles.subscribeInputContainer}>
            <input placeholder="Введите ваш E-mail" type="email" ref={inputEmailRef} />
            <div className={styles.subscribeToBtn} onClick={inputEmailRefBtn}>
              {'>'}
            </div>
          </div>
        </div>
      </div>
      <div className={styles.blockTwoContainer}>
        <div>Меню сайта:</div>
        <div>О компании</div>
        <div>Доставка и оплата</div>
        <div>Возврат</div>
        <div>Контакты</div>
      </div>
      <div className={styles.blockThreeContainer}>
        <div>Категории:</div>
        <div>Бытовая химия</div>
        <div>Косметика и гигиена</div>
        <div>Товары для дома</div>
        <div>Товары для детей и мам</div>
        <div>Посуда</div>
      </div>
      <div className={styles.blockThourContainer}>
        <div>Скачать прайс-лист:</div>
        <button>
          Прайс-лист <DownloadSVG />
        </button>
        <div>Связь в мессенджерах:</div>
        <div className={styles.contactUS}>
          <WhatSuppLogo />
          <TelegrammLogo />
        </div>
      </div>
      <div className={styles.blockFiveContainer}>
        <div>Контакты:</div>
        <div>+7 (777) 490-00-91</div>
        <div>время работы: 9:00-20:00</div>
        <div>Заказать звонок</div>
        <div>opt.sultan@mail.ru</div>
        <div>На связи в любое время</div>
        <div className={styles.payment}>
          <PaymentVisa />
          <PaymentMC />
        </div>
      </div>
    </div>
  )
}
