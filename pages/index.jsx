import styles from '@/styles/home.module.css'
import { useState } from 'react'
import {useTranslation} from 'react-i18next';

export default function Home() {
    const [connectState, setConnectState] = useState('连接')
    const { t } = useTranslation()

    const handleConnectClick = () => {
        location.href = 'https://frent-app.vercel.app'
    }
    return (
        <div className={styles.container}>
            {/* 1 */}
            <img className={styles.backImg} src="Image/back.png" alt="" />
            <img className={styles.backImg1} src="Image/phone.png" alt="" />
            {/* 2 */}
            <div className={styles.backCenterImge}>
                <div className={styles.a}>
                    <div className={styles.join}>{t('join')}</div>
                    <div className={styles.mmtitle}>Nexio</div>
                    <div className={styles.slogan}>{t('slogan1')}</div>
                    <div className={styles.slogan}>{t('slogan2')}</div>
                </div>
                <div className={styles.b} onClick={() => handleConnectClick()}>
                    <p style={{marginRight: '3px'}}>{t('lunchapp')}</p>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                    >
                        <path
                            d="M3.00406 3H8.23955L12.7826 9.61352L12.7838 9.61458L12.7853 9.61503L12.7868 9.61479L12.7881 9.61389L18.4765 3H20.0205C20.0205 3 20.0219 3.00238 20.0242 3.0027L20.0251 3.00529L13.4795 10.6158L13.4774 10.6211C13.4772 10.6231 13.4789 10.6266 13.4789 10.6266L20.5986 20.9907L20.5994 20.993L20.5988 20.9954L20.5971 20.9972L20.5948 20.9979H15.3684C15.3659 20.9979 15.3635 20.9973 15.3613 20.9962C15.3591 20.995 15.3572 20.9934 15.3558 20.9914L10.5632 14.0147C10.5612 14.0116 10.5589 14.0115 10.5566 14.0143L4.55299 20.9947L4.5499 20.9971L4.54611 20.9979H3.0027L3.00126 20.9975L3.00026 20.9964L3.00002 20.9949L3.00061 20.9936L9.8662 13.0114L9.86826 13.0062L9.86681 13.0009C7.57943 9.67119 5.29115 6.34008 3.00196 3.00762L3.0011 3.00357L3.00406 3ZM18.4687 19.8813L18.4709 19.8807L18.4724 19.879L18.4729 19.8769L18.4721 19.8748L7.49681 4.17172L7.49531 4.17037L7.49336 4.16988H5.1182L5.11605 4.17048L5.11453 4.1721L5.11405 4.17428L5.11475 4.17639L16.0901 19.8795L16.0916 19.8809L16.0935 19.8814L18.4687 19.8813Z"
                            fill="white"
                        ></path>
                    </svg>
                </div>
                <div className={styles.hrefs}>
                    <a href='https://x.com/Nexio' target='_blank'>
                        <img src='/Image/twitter.png' />
                    </a>
                    <a href='https://x.com/Nexio/status/1760011780863209510' target='_blank'>
                        <img src='/Image/cc.png' />
                    </a>
                    <img src='/Image/github.png' />
                    <img src='/Image/discord.png' />
                    <img src='/Image/tg.png' />
                </div>
            </div>

            {/* 3 */}
            <div className={styles.midCenter}>
                <img src="Image/midCenter.png" alt="" />
                <div className={styles.temp}></div>
                <div className={styles.section}>
                    {t('firstdesc')}
                    <div className="flex mt-3 ">
                        <div className="flex flex-1">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                style={{minWidth: '24px'}}
                                viewBox="0 0 24 24"
                                fill="none"
                            >
                                <path
                                    d="M12 2C6.486 2 2 6.486 2 12C2 17.514 6.486 22 12 22C17.514 22 22 17.514 22 12C22 6.486 17.514 2 12 2ZM10.001 16.413L6.99545 13.4139C6.6047 13.024 6.60391 12.3912 6.99369 12.0003C7.38371 11.6092 8.01701 11.6085 8.40793 11.9987L9.999 13.587L14.586 9C14.9765 8.60953 15.6095 8.60953 16 9C16.3905 9.39047 16.3905 10.0235 16 10.414L10.001 16.413Z"
                                    fill="#A7C204"
                                ></path>
                            </svg>
                            <div className={styles.listItem}>{t('rfair')}</div>
                        </div>
                        <div className="flex flex-1">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                style={{minWidth: '24px'}}
                                viewBox="0 0 24 24"
                                fill="none"
                            >
                                <path
                                    d="M12 2C6.486 2 2 6.486 2 12C2 17.514 6.486 22 12 22C17.514 22 22 17.514 22 12C22 6.486 17.514 2 12 2ZM10.001 16.413L6.99545 13.4139C6.6047 13.024 6.60391 12.3912 6.99369 12.0003C7.38371 11.6092 8.01701 11.6085 8.40793 11.9987L9.999 13.587L14.586 9C14.9765 8.60953 15.6095 8.60953 16 9C16.3905 9.39047 16.3905 10.0235 16 10.414L10.001 16.413Z"
                                    fill="#A7C204"
                                ></path>
                            </svg>
                            <div className={styles.listItem}>{t('zzfl')}</div>
                        </div>
                    </div>
                    <div className="flex mt-6 max-[1200px]:mt-0">
                        <div className="flex flex-1">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                style={{minWidth: '24px'}}
                                viewBox="0 0 24 24"
                                fill="none"
                            >
                                <path
                                    d="M12 2C6.486 2 2 6.486 2 12C2 17.514 6.486 22 12 22C17.514 22 22 17.514 22 12C22 6.486 17.514 2 12 2ZM10.001 16.413L6.99545 13.4139C6.6047 13.024 6.60391 12.3912 6.99369 12.0003C7.38371 11.6092 8.01701 11.6085 8.40793 11.9987L9.999 13.587L14.586 9C14.9765 8.60953 15.6095 8.60953 16 9C16.3905 9.39047 16.3905 10.0235 16 10.414L10.001 16.413Z"
                                    fill="#A7C204"
                                ></path>
                            </svg>
                            <div className={styles.listItem}>{t('cdaq')}</div>
                        </div>
                        <div className="flex flex-1">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                style={{minWidth: '24px'}}
                                viewBox="0 0 24 24"
                                fill="none"
                            >
                                <path
                                    d="M12 2C6.486 2 2 6.486 2 12C2 17.514 6.486 22 12 22C17.514 22 22 17.514 22 12C22 6.486 17.514 2 12 2ZM10.001 16.413L6.99545 13.4139C6.6047 13.024 6.60391 12.3912 6.99369 12.0003C7.38371 11.6092 8.01701 11.6085 8.40793 11.9987L9.999 13.587L14.586 9C14.9765 8.60953 15.6095 8.60953 16 9C16.3905 9.39047 16.3905 10.0235 16 10.414L10.001 16.413Z"
                                    fill="#A7C204"
                                ></path>
                            </svg>
                            <div className={styles.listItem}>{t('ljzyjz')}</div>
                        </div>
                    </div>
                    <div className="flex mt-6 max-[1200px]:mt-0">
                        <div className="flex flex-1">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                style={{minWidth: '24px'}}
                                viewBox="0 0 24 24"
                                fill="none"
                            >
                                <path
                                    d="M12 2C6.486 2 2 6.486 2 12C2 17.514 6.486 22 12 22C17.514 22 22 17.514 22 12C22 6.486 17.514 2 12 2ZM10.001 16.413L6.99545 13.4139C6.6047 13.024 6.60391 12.3912 6.99369 12.0003C7.38371 11.6092 8.01701 11.6085 8.40793 11.9987L9.999 13.587L14.586 9C14.9765 8.60953 15.6095 8.60953 16 9C16.3905 9.39047 16.3905 10.0235 16 10.414L10.001 16.413Z"
                                    fill="#A7C204"
                                ></path>
                            </svg>
                            <div className={styles.listItem}>{t('bdscb')}</div>
                        </div>
                    </div>
                </div>
            </div>

            {/* 4 */}
            <div className={styles.s4wrap}>
                <div className={styles.i1}>
                    <div className={styles.contentwrap}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="32"
                            height="32"
                            viewBox="0 0 32 32"
                            fill="none"
                        >
                            <path
                                d="M28.19 27.4302H26.67V32.0002H28.19V27.4302Z"
                                fill="white"
                            ></path>
                            <path
                                d="M26.67 25.9102H25.14V27.4302H26.67V25.9102Z"
                                fill="white"
                            ></path>
                            <path
                                d="M25.14 27.4302H23.62V28.9502H25.14V27.4302Z"
                                fill="white"
                            ></path>
                            <path
                                d="M25.14 24.3799H23.62V25.9099H25.14V24.3799Z"
                                fill="white"
                            ></path>
                            <path
                                d="M23.62 28.9502H22.09V30.4802H23.62V28.9502Z"
                                fill="white"
                            ></path>
                            <path
                                d="M23.62 22.8599H20.57V24.3799H23.62V22.8599Z"
                                fill="white"
                            ></path>
                            <path
                                d="M23.62 10.6699H22.09V15.2399H23.62V10.6699Z"
                                fill="white"
                            ></path>
                            <path d="M22.09 30.48H20.57V32H22.09V30.48Z" fill="white"></path>
                            <path
                                d="M22.09 15.2402H20.57V16.7602H22.09V15.2402Z"
                                fill="white"
                            ></path>
                            <path
                                d="M22.09 9.14014H19.05V10.6701H22.09V9.14014Z"
                                fill="white"
                            ></path>
                            <path
                                d="M20.57 24.3799H19.05V25.9099H20.57V24.3799Z"
                                fill="white"
                            ></path>
                            <path
                                d="M20.57 21.3301H17.52V22.8601H20.57V21.3301Z"
                                fill="white"
                            ></path>
                            <path
                                d="M20.57 16.7598H19.05V18.2898H20.57V16.7598Z"
                                fill="white"
                            ></path>
                            <path
                                d="M19.05 25.9102H17.52V27.4302H19.05V25.9102Z"
                                fill="white"
                            ></path>
                            <path d="M19.05 18.29H17.52V19.81H19.05V18.29Z" fill="white"></path>
                            <path
                                d="M19.05 10.6699H17.52V12.1899H19.05V10.6699Z"
                                fill="white"
                            ></path>
                            <path d="M17.52 27.4302H16V28.9502H17.52V27.4302Z" fill="white"></path>
                            <path d="M17.52 19.8101H16V21.3301H17.52V19.8101Z" fill="white"></path>
                            <path d="M17.52 12.1899H16V13.7099H17.52V12.1899Z" fill="white"></path>
                            <path d="M16 21.3301H14.48V22.8601H16V21.3301Z" fill="white"></path>
                            <path d="M16 13.71H14.48V15.24H16V13.71Z" fill="white"></path>
                            <path
                                d="M14.48 22.8599H12.95V24.3799H14.48V22.8599Z"
                                fill="white"
                            ></path>
                            <path
                                d="M14.48 15.2402H12.95V16.7602H14.48V15.2402Z"
                                fill="white"
                            ></path>
                            <path
                                d="M12.95 16.7598H11.43V18.2898H12.95V16.7598Z"
                                fill="white"
                            ></path>
                            <path
                                d="M12.95 12.1899H11.43V15.2399H12.95V12.1899Z"
                                fill="white"
                            ></path>
                            <path d="M11.43 18.29H9.89999V19.81H11.43V18.29Z" fill="white"></path>
                            <path
                                d="M9.9 0V1.52H8.38V4.57H9.9V6.1H11.43V7.62H12.95V9.14H14.48V7.62H16V6.1H17.52V4.57H19.05V1.52H17.52V0H14.48V1.52H12.95V0H9.9Z"
                                fill="white"
                            ></path>
                            <path
                                d="M11.43 10.6699H6.86V12.1899H11.43V10.6699Z"
                                fill="white"
                            ></path>
                            <path
                                d="M8.38 16.7598H6.86V22.8598H8.38V21.3298H9.9V19.8098H8.38V16.7598Z"
                                fill="white"
                            ></path>
                            <path d="M6.86 22.8599H5.33V24.3799H6.86V22.8599Z" fill="white"></path>
                            <path d="M6.86 12.1899H5.33V16.7599H6.86V12.1899Z" fill="white"></path>
                            <path d="M5.33 24.3799H3.81V31.9999H5.33V24.3799Z" fill="white"></path>
                        </svg>
                        <div className={styles.title}>{t('rfair')}</div>
                    </div>
                    <div className={styles.descwrap1}>
                        {t('rhsh')}
                    </div>
                </div>

                <div className={styles.i2}>
                    <div className={styles.contentwrap}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="32"
                            height="32"
                            viewBox="0 0 32 32"
                            fill="none"
                        >
                            <path
                                d="M25.91 4.5698V6.0998H27.43V21.3398H28.95V4.5698H27.43V3.0498H24.38V4.5698H25.91Z"
                                fill="white"
                            ></path>
                            <path
                                d="M25.91 21.3398H27.43V24.3798H25.91V21.3398Z"
                                fill="white"
                            ></path>
                            <path
                                d="M24.38 24.3799H25.91V25.9099H24.38V24.3799Z"
                                fill="white"
                            ></path>
                            <path d="M24.38 6.1001H25.91V21.3401H24.38V6.1001Z" fill="white"></path>
                            <path
                                d="M22.86 25.9102H24.38V27.4302H22.86V25.9102Z"
                                fill="white"
                            ></path>
                            <path
                                d="M22.86 21.3398H24.38V24.3798H22.86V21.3398Z"
                                fill="white"
                            ></path>
                            <path
                                d="M21.34 27.4302H22.86V28.9602H21.34V27.4302Z"
                                fill="white"
                            ></path>
                            <path
                                d="M21.34 24.3799H22.86V25.9099H21.34V24.3799Z"
                                fill="white"
                            ></path>
                            <path
                                d="M21.34 4.56982H24.38V6.09982H21.34V4.56982Z"
                                fill="white"
                            ></path>
                            <path
                                d="M21.34 1.52979H24.38V3.04979H21.34V1.52979Z"
                                fill="white"
                            ></path>
                            <path d="M18.29 28.96H21.34V30.48H18.29V28.96Z" fill="white"></path>
                            <path
                                d="M18.29 25.9102H21.34V27.4302H18.29V25.9102Z"
                                fill="white"
                            ></path>
                            <path
                                d="M13.72 13.7199V10.6699H12.19V13.7199H10.67V21.3399H12.19V22.8599H19.81V21.3399H21.34V13.7199H19.81V10.6699H18.29V13.7199H13.72ZM16.76 18.2899H15.24V15.2399H16.76V18.2899Z"
                                fill="white"
                            ></path>
                            <path d="M13.72 30.48H18.29V32H13.72V30.48Z" fill="white"></path>
                            <path
                                d="M13.72 27.4302H18.29V28.9602H13.72V27.4302Z"
                                fill="white"
                            ></path>
                            <path d="M13.72 9.1499H18.29V10.6699H13.72V9.1499Z" fill="white"></path>
                            <path d="M10.67 28.96H13.72V30.48H10.67V28.96Z" fill="white"></path>
                            <path
                                d="M10.67 25.9102H13.72V27.4302H10.67V25.9102Z"
                                fill="white"
                            ></path>
                            <path d="M10.67 3.0498H21.34V4.5698H10.67V3.0498Z" fill="white"></path>
                            <path d="M10.67 0H21.34V1.53H10.67V0Z" fill="white"></path>
                            <path d="M9.14 27.4302H10.67V28.9602H9.14V27.4302Z" fill="white"></path>
                            <path d="M9.14 24.3799H10.67V25.9099H9.14V24.3799Z" fill="white"></path>
                            <path
                                d="M7.62001 4.56982H10.67V6.09982H7.62001V4.56982Z"
                                fill="white"
                            ></path>
                            <path
                                d="M7.62001 1.52979H10.67V3.04979H7.62001V1.52979Z"
                                fill="white"
                            ></path>
                            <path
                                d="M7.62001 25.9102H9.14001V27.4302H7.62001V25.9102Z"
                                fill="white"
                            ></path>
                            <path
                                d="M7.62001 21.3398H9.14001V24.3798H7.62001V21.3398Z"
                                fill="white"
                            ></path>
                            <path
                                d="M6.10001 24.3799H7.62001V25.9099H6.10001V24.3799Z"
                                fill="white"
                            ></path>
                            <path
                                d="M6.10001 6.1001H7.62001V21.3401H6.10001V6.1001Z"
                                fill="white"
                            ></path>
                            <path
                                d="M4.57001 3.0498H7.62001V4.5698H4.57001V3.0498Z"
                                fill="white"
                            ></path>
                            <path
                                d="M4.57001 21.3398H6.10001V24.3798H4.57001V21.3398Z"
                                fill="white"
                            ></path>
                            <path d="M3.05 4.56982H4.57V21.3398H3.05V4.56982Z" fill="white"></path>
                        </svg>
                        <div className={styles.title}>{t('cdaq')}</div>
                    </div>
                    <div className={styles.descwrap2}>
                        {t('mgxyhsc')}
                    </div>
                </div>

                <div className={styles.i3}>
                    <div className={styles.contentwrap}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="32"
                            height="32"
                            viewBox="0 0 32 32"
                            fill="none"
                        >
                            <path
                                d="M21.34 25.8999H22.86V27.4299H21.34V25.8999Z"
                                fill="white"
                            ></path>
                            <path
                                d="M19.81 16.7603V18.2803H22.86V21.3303H19.81V22.8603H24.38V16.7603H19.81Z"
                                fill="white"
                            ></path>
                            <path
                                d="M19.81 27.4302H21.34V28.9502H19.81V27.4302Z"
                                fill="white"
                            ></path>
                            <path
                                d="M19.81 24.3799H21.34V25.8999H19.81V24.3799Z"
                                fill="white"
                            ></path>
                            <path
                                d="M18.29 28.9502H19.81V30.4802H18.29V28.9502Z"
                                fill="white"
                            ></path>
                            <path
                                d="M18.29 22.8604H19.81V24.3804H18.29V22.8604Z"
                                fill="white"
                            ></path>
                            <path
                                d="M16.76 27.4302H18.29V28.9502H16.76V27.4302Z"
                                fill="white"
                            ></path>
                            <path
                                d="M15.24 25.8999H16.76V27.4299H15.24V25.8999Z"
                                fill="white"
                            ></path>
                            <path
                                d="M15.24 18.2803H16.76V21.3303H15.24V18.2803Z"
                                fill="white"
                            ></path>
                            <path
                                d="M13.72 30.4802H10.67V27.4302H9.15002V32.0002H15.24V27.4302H13.72V30.4802Z"
                                fill="white"
                            ></path>
                            <path
                                d="M13.72 21.3301H15.24V22.8601H13.72V21.3301Z"
                                fill="white"
                            ></path>
                            <path
                                d="M13.72 16.7603H15.24V18.2803H13.72V16.7603Z"
                                fill="white"
                            ></path>
                            <path
                                d="M10.67 15.2402H13.72V16.7602H10.67V15.2402Z"
                                fill="white"
                            ></path>
                            <path
                                d="M10.67 22.8604H13.72V24.3804H10.67V22.8604Z"
                                fill="white"
                            ></path>
                            <path
                                d="M9.15002 21.3301H10.67V22.8601H9.15002V21.3301Z"
                                fill="white"
                            ></path>
                            <path
                                d="M9.15002 16.7603H10.67V18.2803H9.15002V16.7603Z"
                                fill="white"
                            ></path>
                            <path
                                d="M10.67 9.14012H13.72V12.1901H15.24V7.62012H9.15002V12.1901H10.67V9.14012Z"
                                fill="white"
                            ></path>
                            <path d="M7.62 25.8999H9.15V27.4299H7.62V25.8999Z" fill="white"></path>
                            <path d="M7.62 18.2803H9.15V21.3303H7.62V18.2803Z" fill="white"></path>
                            <path d="M7.62 12.1899H9.15V13.7099H7.62V12.1899Z" fill="white"></path>
                            <path
                                d="M6.09998 27.4302H7.61998V28.9502H6.09998V27.4302Z"
                                fill="white"
                            ></path>
                            <path
                                d="M6.09998 10.6699H7.61998V12.1899H6.09998V10.6699Z"
                                fill="white"
                            ></path>
                            <path
                                d="M4.57001 28.9502H6.10001V30.4802H4.57001V28.9502Z"
                                fill="white"
                            ></path>
                            <path
                                d="M4.57001 22.8604H6.10001V24.3804H4.57001V22.8604Z"
                                fill="white"
                            ></path>
                            <path
                                d="M4.57001 15.2402H6.10001V16.7602H4.57001V15.2402Z"
                                fill="white"
                            ></path>
                            <path
                                d="M4.57001 9.14014H6.10001V10.6701H4.57001V9.14014Z"
                                fill="white"
                            ></path>
                            <path
                                d="M3.04999 27.4302H4.56999V28.9502H3.04999V27.4302Z"
                                fill="white"
                            ></path>
                            <path
                                d="M3.04999 24.3799H4.56999V25.8999H3.04999V24.3799Z"
                                fill="white"
                            ></path>
                            <path
                                d="M1.53 21.3303V18.2803H4.57V16.7603H0V22.8603H4.57V21.3303H1.53Z"
                                fill="white"
                            ></path>
                            <path
                                d="M3.04999 13.71H4.56999V15.24H3.04999V13.71Z"
                                fill="white"
                            ></path>
                            <path
                                d="M3.04999 10.6699H4.56999V12.1899H3.04999V10.6699Z"
                                fill="white"
                            ></path>
                            <path
                                d="M1.53003 25.8999H3.05003V27.4299H1.53003V25.8999Z"
                                fill="white"
                            ></path>
                            <path
                                d="M1.53003 12.1899H3.05003V13.7099H1.53003V12.1899Z"
                                fill="white"
                            ></path>
                            <path
                                d="M29.1206 7.94856L24.377 2.99994L19.4229 7.74878L20.217 8.57716L21.0454 7.78309L21.8343 8.60606L22.6572 7.81718L23.4461 8.64015L22.6231 9.42902L23.4172 10.2574L21.7659 11.8403L20.9718 11.012L20.1488 11.8008L19.3599 10.9779L18.5316 11.772L17.7427 10.949L16.0913 12.5319L16.8802 13.3549L16.0573 14.1438L16.8461 14.9667L16.0232 15.7556L16.8172 16.584L15.9889 17.3781L16.7777 18.201L15.9548 18.9899L16.7436 19.8129L18.395 18.2299L17.6061 17.407L18.4291 16.6181L17.6402 15.7951L18.4632 15.0062L17.6691 14.1779L19.3204 12.5949L20.1145 13.4233L20.9429 12.6292L21.7318 13.4522L22.5547 12.6633L23.3436 13.4863L24.995 11.9033L24.2061 11.0804L25.029 10.2915L24.2402 9.46852L25.8915 7.88558L26.6804 8.70854L27.5034 7.91966L28.2922 8.74263L29.1206 7.94856Z"
                                fill="white"
                            ></path>
                        </svg>
                        <div className={styles.title}>{t('zzfl')}</div>
                    </div>
                    <div className={styles.descwrap1}>
                        {t('zcfldesc')}
                    </div>
                </div>
            </div>

            {/* 5 */}
            <div className={styles.s5wrap}>
                <div className={styles.i1}>
                    <div className={styles.contentwrap}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="32"
                            height="32"
                            viewBox="0 0 32 32"
                            fill="none"
                        >
                            <g clipPath="url(#clip0_335_464)">
                                <path
                                    d="M30.48 21.0498H32V28.6698H30.48V21.0498Z"
                                    fill="white"
                                ></path>
                                <path
                                    d="M28.95 28.6699H30.48V30.1899H28.95V28.6699Z"
                                    fill="white"
                                ></path>
                                <path d="M28.95 19.52H30.48V21.05H28.95V19.52Z" fill="white"></path>
                                <path
                                    d="M27.43 22.5698H28.95V27.1398H27.43V22.5698Z"
                                    fill="white"
                                ></path>
                                <path
                                    d="M19.81 30.1899H28.95V31.7099H19.81V30.1899Z"
                                    fill="white"
                                ></path>
                                <path
                                    d="M21.34 21.0498H27.43V22.5698H21.34V21.0498Z"
                                    fill="white"
                                ></path>
                                <path
                                    d="M21.34 27.1401H27.43V28.6701H21.34V27.1401Z"
                                    fill="white"
                                ></path>
                                <path d="M19.81 18H28.95V19.52H19.81V18Z" fill="white"></path>
                                <path
                                    d="M18.29 28.6699H19.81V30.1899H18.29V28.6699Z"
                                    fill="white"
                                ></path>
                                <path
                                    d="M21.34 27.1401V25.6201H16.76V28.6701H18.29V27.1401H21.34Z"
                                    fill="white"
                                ></path>
                                <path
                                    d="M18.29 21.0498H16.76V24.0898H21.34V22.5698H18.29V21.0498Z"
                                    fill="white"
                                ></path>
                                <path d="M18.29 19.52H19.81V21.05H18.29V19.52Z" fill="white"></path>
                                <path
                                    d="M10.67 22.5698V24.0898H15.24V21.0498H13.72V22.5698H10.67Z"
                                    fill="white"
                                ></path>
                                <path
                                    d="M12.19 28.6699H13.72V30.1899H12.19V28.6699Z"
                                    fill="white"
                                ></path>
                                <path
                                    d="M13.72 28.6701H15.24V25.6201H10.67V27.1401H13.72V28.6701Z"
                                    fill="white"
                                ></path>
                                <path d="M12.19 19.52H13.72V21.05H12.19V19.52Z" fill="white"></path>
                                <path
                                    d="M3.05 30.1899H12.19V31.7099H3.05V30.1899Z"
                                    fill="white"
                                ></path>
                                <path
                                    d="M4.57001 21.0498H10.67V22.5698H4.57001V21.0498Z"
                                    fill="white"
                                ></path>
                                <path
                                    d="M4.57001 27.1401H10.67V28.6701H4.57001V27.1401Z"
                                    fill="white"
                                ></path>
                                <path d="M3.05 18H12.19V19.52H3.05V18Z" fill="white"></path>
                                <path
                                    d="M3.05 22.5698H4.57V27.1398H3.05V22.5698Z"
                                    fill="white"
                                ></path>
                                <path
                                    d="M1.53 28.6699H3.05V30.1899H1.53V28.6699Z"
                                    fill="white"
                                ></path>
                                <path d="M1.53 19.52H3.05V21.05H1.53V19.52Z" fill="white"></path>
                                <path d="M0 21.0498H1.53V28.6698H0V21.0498Z" fill="white"></path>
                                <path
                                    d="M17.2629 1.68566H18.9485V2.52573H19.7886V3.37133H20.6342V5.05699H21.4743V9.26286H20.6342V10.9485H19.7886V11.7941H18.9485V12.6342H17.2629V13.4743H13.0515V14.3199H18.9485V13.4743H20.6342V12.6342H21.4743V11.7941H22.3199V10.9485H23.1599V9.26286H24V5.05699H23.1599V3.37133H22.3199V2.52573H21.4743V1.68566H20.6342V0.845595H18.9485V0H13.0515V0.845595H17.2629V1.68566Z"
                                    fill="white"
                                ></path>
                                <path
                                    d="M20.6342 5.05713H19.7886V9.263H20.6342V5.05713Z"
                                    fill="white"
                                ></path>
                                <path
                                    d="M19.7886 9.2627H18.9485V10.1083H19.7886V9.2627Z"
                                    fill="white"
                                ></path>
                                <path
                                    d="M19.7886 4.21143H18.9485V5.05702H19.7886V4.21143Z"
                                    fill="white"
                                ></path>
                                <path
                                    d="M18.9485 10.1084H18.1085V10.9485H18.9485V10.1084Z"
                                    fill="white"
                                ></path>
                                <path
                                    d="M18.9485 3.37109H18.1085V4.21116H18.9485V3.37109Z"
                                    fill="white"
                                ></path>
                                <path
                                    d="M18.1085 10.9487H17.2629V11.7943H18.1085V10.9487Z"
                                    fill="white"
                                ></path>
                                <path
                                    d="M18.1085 2.52588H17.2629V3.37147H18.1085V2.52588Z"
                                    fill="white"
                                ></path>
                                <path
                                    d="M17.2629 11.7939H13.0515V12.634H17.2629V11.7939Z"
                                    fill="white"
                                ></path>
                                <path
                                    d="M17.2629 7.58252H16.4228V9.26266H17.2629V7.58252Z"
                                    fill="white"
                                ></path>
                                <path
                                    d="M17.2629 5.05713H16.4228V5.8972H17.2629V5.05713Z"
                                    fill="white"
                                ></path>
                                <path
                                    d="M17.2629 1.68555H13.0515V2.52562H17.2629V1.68555Z"
                                    fill="white"
                                ></path>
                                <path
                                    d="M14.7371 10.1082V10.9483H15.5772V10.1082H16.4228V9.26263H15.5772V7.58249H16.4228V6.7369H15.5772V5.05676H16.4228V4.21116H15.5772V3.37109H14.7371V4.21116H13.8971V5.05676H14.7371V6.7369H13.8971V7.58249H14.7371V9.26263H13.8971V10.1082H14.7371Z"
                                    fill="white"
                                ></path>
                                <path
                                    d="M13.8971 8.42285H13.0515V9.26292H13.8971V8.42285Z"
                                    fill="white"
                                ></path>
                                <path
                                    d="M13.8971 5.05713H13.0515V6.73727H13.8971V5.05713Z"
                                    fill="white"
                                ></path>
                                <path
                                    d="M13.0515 12.6343H11.3713V13.4743H13.0515V12.6343Z"
                                    fill="white"
                                ></path>
                                <path
                                    d="M13.0515 10.9487H12.2114V11.7943H13.0515V10.9487Z"
                                    fill="white"
                                ></path>
                                <path
                                    d="M13.0515 2.52588H12.2114V3.37147H13.0515V2.52588Z"
                                    fill="white"
                                ></path>
                                <path
                                    d="M13.0515 0.845703H11.3713V1.68577H13.0515V0.845703Z"
                                    fill="white"
                                ></path>
                                <path
                                    d="M12.2114 10.1084H11.3713V10.9485H12.2114V10.1084Z"
                                    fill="white"
                                ></path>
                                <path
                                    d="M12.2114 3.37109H11.3713V4.21116H12.2114V3.37109Z"
                                    fill="white"
                                ></path>
                                <path
                                    d="M11.3713 11.7939H10.5257V12.634H11.3713V11.7939Z"
                                    fill="white"
                                ></path>
                                <path
                                    d="M11.3713 9.2627H10.5257V10.1083H11.3713V9.2627Z"
                                    fill="white"
                                ></path>
                                <path
                                    d="M11.3713 4.21143H10.5257V5.05702H11.3713V4.21143Z"
                                    fill="white"
                                ></path>
                                <path
                                    d="M11.3713 1.68555H10.5257V2.52562H11.3713V1.68555Z"
                                    fill="white"
                                ></path>
                                <path
                                    d="M10.5257 10.9487H9.68567V11.7943H10.5257V10.9487Z"
                                    fill="white"
                                ></path>
                                <path
                                    d="M10.5257 5.05713H9.68567V9.263H10.5257V5.05713Z"
                                    fill="white"
                                ></path>
                                <path
                                    d="M10.5257 2.52588H9.68567V3.37147H10.5257V2.52588Z"
                                    fill="white"
                                ></path>
                                <path
                                    d="M9.68567 9.2627H8.84007V10.9484H9.68567V9.2627Z"
                                    fill="white"
                                ></path>
                                <path
                                    d="M9.68567 3.37109H8.84007V5.05676H9.68567V3.37109Z"
                                    fill="white"
                                ></path>
                                <path
                                    d="M8.84007 5.05713H8V9.263H8.84007V5.05713Z"
                                    fill="white"
                                ></path>
                            </g>
                            <defs>
                                <clipPath id="clip0_335_464">
                                    <rect width="32" height="32" fill="white"></rect>
                                </clipPath>
                            </defs>
                        </svg>
                        <div className={styles.title}>{t('ljzyjz')}</div>
                    </div>
                    <div className={styles.descwrap1}>
                        {t('ljzyjzdesc')}
                    </div>
                </div>
                <div className={styles.i2}>
                    <div className={styles.contentwrap}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="32"
                            height="32"
                            viewBox="0 0 32 32"
                            fill="none"
                        >
                            <g clipPath="url(#clip0_335_388)">
                                <path
                                    d="M30.48 1.53H28.96V0H27.43V1.53H25.91V3.05H24.39V4.57H25.91V6.1H27.43V7.62H28.96V6.1H30.48V4.57H32V3.05H30.48V1.53ZM28.96 4.57H27.43V3.05H28.96V4.57Z"
                                    fill="white"
                                ></path>
                                <path
                                    d="M30.48 24.3799H28.96V22.8599H27.43V24.3799H25.91V25.9099H24.39V27.4299H25.91V28.9599H27.43V30.4799H28.96V28.9599H30.48V27.4299H32V25.9099H30.48V24.3799ZM28.96 27.4299H27.43V25.9099H28.96V27.4299Z"
                                    fill="white"
                                ></path>
                                <path d="M28.96 18.29H30.48V19.81H28.96V18.29Z" fill="white"></path>
                                <path
                                    d="M28.96 12.1899H30.48V13.7199H28.96V12.1899Z"
                                    fill="white"
                                ></path>
                                <path
                                    d="M22.86 19.8101H24.39V21.3401H22.86V19.8101Z"
                                    fill="white"
                                ></path>
                                <path
                                    d="M22.86 10.6699H24.39V12.1899H22.86V10.6699Z"
                                    fill="white"
                                ></path>
                                <path
                                    d="M21.34 21.3398H22.86V22.8598H21.34V21.3398Z"
                                    fill="white"
                                ></path>
                                <path
                                    d="M21.34 9.1499H22.86V10.6699H21.34V9.1499Z"
                                    fill="white"
                                ></path>
                                <path d="M19.81 28.96H21.34V30.48H19.81V28.96Z" fill="white"></path>
                                <path
                                    d="M19.81 22.8599H21.34V24.3799H19.81V22.8599Z"
                                    fill="white"
                                ></path>
                                <path
                                    d="M9.14998 13.7201V15.2401H7.61998V13.7201H6.09998V18.2901H7.61998V16.7701H9.14998V18.2901H10.67V21.3401H13.72V22.8601H15.24V24.3801H13.72V25.9101H18.29V24.3801H16.77V22.8601H18.29V21.3401H21.34V18.2901H22.86V16.7701H24.39V18.2901H25.91V13.7201H24.39V15.2401H22.86V13.7201H21.34V10.6701H18.29V9.1501H16.77V7.6201H18.29V6.1001H13.72V7.6201H15.24V9.1501H13.72V10.6701H10.67V13.7201H9.14998ZM19.81 15.2401V16.7701H18.29V15.2401H19.81ZM16.77 12.1901H18.29V13.7201H16.77V12.1901ZM15.24 18.2901V19.8101H13.72V18.2901H15.24ZM12.2 13.7201H13.72V15.2401H12.2V13.7201Z"
                                    fill="white"
                                ></path>
                                <path
                                    d="M19.81 7.62012H21.34V9.15012H19.81V7.62012Z"
                                    fill="white"
                                ></path>
                                <path
                                    d="M19.81 1.52979H21.34V3.04979H19.81V1.52979Z"
                                    fill="white"
                                ></path>
                                <path d="M12.2 28.96H13.72V30.48H12.2V28.96Z" fill="white"></path>
                                <path
                                    d="M12.2 1.52979H13.72V3.04979H12.2V1.52979Z"
                                    fill="white"
                                ></path>
                                <path
                                    d="M10.67 22.8599H12.2V24.3799H10.67V22.8599Z"
                                    fill="white"
                                ></path>
                                <path
                                    d="M10.67 7.62012H12.2V9.15012H10.67V7.62012Z"
                                    fill="white"
                                ></path>
                                <path
                                    d="M9.15002 21.3398H10.67V22.8598H9.15002V21.3398Z"
                                    fill="white"
                                ></path>
                                <path
                                    d="M9.15002 9.1499H10.67V10.6699H9.15002V9.1499Z"
                                    fill="white"
                                ></path>
                                <path
                                    d="M7.62 19.8101H9.15V21.3401H7.62V19.8101Z"
                                    fill="white"
                                ></path>
                                <path
                                    d="M7.62 10.6699H9.15V12.1899H7.62V10.6699Z"
                                    fill="white"
                                ></path>
                                <path
                                    d="M6.10003 31.9999V30.4799H7.62003V28.9599H9.15003V27.4299H7.62003V25.9099H6.10003V24.3799H4.58003V25.9099H3.05003V27.4299H1.53003V28.9599H3.05003V30.4799H4.58003V31.9999H6.10003ZM4.58003 27.4299H6.10003V28.9599H4.58003V27.4299Z"
                                    fill="white"
                                ></path>
                                <path
                                    d="M1.53003 19.8101H3.05003V21.3401H1.53003V19.8101Z"
                                    fill="white"
                                ></path>
                                <path
                                    d="M1.53003 13.7202H3.05003V15.2402H1.53003V13.7202Z"
                                    fill="white"
                                ></path>
                                <path
                                    d="M1.53 9.1498H3.05V10.6698H4.58V9.1498H6.1V7.6198H7.62V6.0998H6.1V4.5698H4.58V3.0498H3.05V4.5698H1.53V6.0998H0V7.6198H1.53V9.1498ZM3.05 6.0998H4.58V7.6198H3.05V6.0998Z"
                                    fill="white"
                                ></path>
                            </g>
                            <defs>
                                <clipPath id="clip0_335_388">
                                    <rect width="32" height="32" fill="white"></rect>
                                </clipPath>
                            </defs>
                        </svg>
                        <div className={styles.title}>{t('bdscb')}</div>
                    </div>
                    <div className={styles.descwrap2}>
                        {t('bdscbdesc')}
                    </div>
                </div>
            </div>

            {/* 6 */}
            <div className={styles.s6wrap}>
                <div className={styles.title}>
                    <div className={styles.totalBiall}>{t('totalBiall')}</div>
                    <p className={styles.symbol}>$NEXT</p>
                    {t('zzfp')}
                </div>
                <div className={styles.contentwrap}>
                    <div className={styles.item}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="48"
                            height="48"
                            viewBox="0 0 48 48"
                            fill="none"
                            className="mt-6"
                        >
                            <g clipPath="url(#clip0_335_775)">
                                <path
                                    d="M43.425 43.425H48V45.7201H43.425V43.425Z"
                                    fill="white"
                                ></path>
                                <path d="M41.145 45.72H43.425V48H41.145V45.72Z" fill="white"></path>
                                <path
                                    d="M41.145 29.7151H38.85V31.9951H41.145V34.2901H43.425V22.8601H41.145V29.7151Z"
                                    fill="white"
                                ></path>
                                <path
                                    d="M36.57 43.425H41.145V45.7201H36.57V43.425Z"
                                    fill="white"
                                ></path>
                                <path
                                    d="M38.85 20.5801H41.145V22.8601H38.85V20.5801Z"
                                    fill="white"
                                ></path>
                                <path
                                    d="M31.995 41.145H36.57V43.425H31.995V41.145Z"
                                    fill="white"
                                ></path>
                                <path
                                    d="M34.29 31.9949H36.57V29.7149H38.85V27.4349H36.57V20.5799H38.85V18.2849H36.57V11.4299H34.29V31.9949Z"
                                    fill="white"
                                ></path>
                                <path d="M29.715 45.72H31.995V48H29.715V45.72Z" fill="white"></path>
                                <path
                                    d="M29.715 27.4351H31.995V29.7151H29.715V27.4351Z"
                                    fill="white"
                                ></path>
                                <path
                                    d="M29.715 22.8601H31.995V25.1401H29.715V22.8601Z"
                                    fill="white"
                                ></path>
                                <path
                                    d="M27.42 41.145H29.715V45.72H27.42V41.145Z"
                                    fill="white"
                                ></path>
                                <path
                                    d="M20.565 36.5701H29.715V38.8651H20.565V36.5701Z"
                                    fill="white"
                                ></path>
                                <path
                                    d="M27.42 2.28003H29.715V4.57503H27.42V2.28003Z"
                                    fill="white"
                                ></path>
                                <path d="M22.86 0H27.42V2.28H22.86V0Z" fill="white"></path>
                                <path
                                    d="M29.715 13.7099H27.42V11.4299H22.86V13.7099H25.14V16.0049H22.86V13.7099H20.565V18.2849H22.86V20.5799H27.42V18.2849H29.715V13.7099Z"
                                    fill="white"
                                ></path>
                                <path
                                    d="M20.565 41.145H22.86V45.72H20.565V41.145Z"
                                    fill="white"
                                ></path>
                                <path
                                    d="M15.99 34.2901H18.285V36.5701H20.565V34.2901H29.715V36.5701H31.995V34.2901H34.29V31.9951H15.99V34.2901Z"
                                    fill="white"
                                ></path>
                                <path
                                    d="M20.565 2.28003H22.86V4.57503H20.565V2.28003Z"
                                    fill="white"
                                ></path>
                                <path d="M18.285 45.72H20.565V48H18.285V45.72Z" fill="white"></path>
                                <path
                                    d="M13.71 41.145H18.285V43.425H13.71V41.145Z"
                                    fill="white"
                                ></path>
                                <path
                                    d="M20.565 6.85495V4.57495H18.285V6.85495H15.99V11.43H18.285V9.14995H31.995V11.43H34.29V6.85495H31.995V4.57495H29.715V6.85495H20.565Z"
                                    fill="white"
                                ></path>
                                <path
                                    d="M15.99 11.4299H13.71V18.2849H11.43V20.5799H13.71V27.4349H11.43V29.7149H13.71V31.9949H15.99V11.4299Z"
                                    fill="white"
                                ></path>
                                <path
                                    d="M9.13499 43.425H13.71V45.7201H9.13499V43.425Z"
                                    fill="white"
                                ></path>
                                <path
                                    d="M9.13499 20.5801H11.43V22.8601H9.13499V20.5801Z"
                                    fill="white"
                                ></path>
                                <path d="M6.855 45.72H9.135V48H6.855V45.72Z" fill="white"></path>
                                <path
                                    d="M9.135 22.8601H6.855V34.2901H9.135V31.9951H11.43V29.7151H9.135V22.8601Z"
                                    fill="white"
                                ></path>
                                <path
                                    d="M2.28 43.425H6.855V45.7201H2.28V43.425Z"
                                    fill="white"
                                ></path>
                                <path d="M0 45.72H2.28V48H0V45.72Z" fill="white"></path>
                            </g>
                            <defs>
                                <clipPath id="clip0_335_775">
                                    <rect width="48" height="48" fill="white"></rect>
                                </clipPath>
                            </defs>
                        </svg>
                        <div className={styles.itemTitle}>90% OG + Blindbox Event</div>
                        <div className={styles.itemContent}>
                            {t('gpfsdesc')}
                        </div>
                    </div>
                    <div className={styles.item}>
                        <div className={styles.itemPlaceHolder}></div>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="48"
                            height="48"
                            viewBox="0 0 48 48"
                            fill="none"
                        >
                            <g clipPath="url(#clip0_335_760)">
                                <path
                                    d="M43.425 41.145H48V43.425H43.425V41.145Z"
                                    fill="white"
                                ></path>
                                <path
                                    d="M36.57 38.8501H43.425V41.1451H36.57V38.8501Z"
                                    fill="white"
                                ></path>
                                <path
                                    d="M36.57 43.425V45.7201H27.435V43.425H20.58V45.7201H11.43V43.425H4.575V45.7201H0L0 48H48V45.7201H43.425V43.425H36.57Z"
                                    fill="white"
                                ></path>
                                <path
                                    d="M27.435 41.145H36.57V43.425H27.435V41.145Z"
                                    fill="white"
                                ></path>
                                <path d="M27.435 0H34.29V2.28H27.435V0Z" fill="white"></path>
                                <path
                                    d="M25.14 2.28003H27.435V6.85503H25.14V2.28003Z"
                                    fill="white"
                                ></path>
                                <path
                                    d="M20.58 38.8501H27.435V41.1451H20.58V38.8501Z"
                                    fill="white"
                                ></path>
                                <path
                                    d="M11.43 41.145H20.58V43.425H11.43V41.145Z"
                                    fill="white"
                                ></path>
                                <path d="M4.575 0H11.43V2.28H4.575V0Z" fill="white"></path>
                                <path
                                    d="M4.575 38.8501H11.43V41.1451H4.575V38.8501Z"
                                    fill="white"
                                ></path>
                                <path
                                    d="M45.72 34.29H43.425V31.995H36.57V2.28003H34.29V13.71H13.71V2.28003H11.43V31.995H4.575V34.29H2.295V36.57H0V38.85H4.575V36.57H11.43V38.85H20.58V36.57H27.435V38.85H36.57V36.57H43.425V38.85H48V36.57H45.72V34.29ZM34.29 36.57H29.715V34.29H27.435V31.995H20.58V34.29H18.285V36.57H13.71V27.42H34.29V36.57ZM34.29 25.14H13.71V16.005H34.29V25.14Z"
                                    fill="white"
                                ></path>
                                <path d="M0 41.145H4.575V43.425H0V41.145Z" fill="white"></path>
                                <path
                                    d="M2.295 2.28003H4.575V6.85503H2.295V2.28003Z"
                                    fill="white"
                                ></path>
                            </g>
                            <defs>
                                <clipPath id="clip0_335_760">
                                    <rect width="48" height="48" fill="white"></rect>
                                </clipPath>
                            </defs>
                        </svg>
                        <div className={styles.itemTitle}>6% Uni V2 + Uni V3 LP</div>
                        <div className={styles.itemContent}>
                            {t('yyxmlqd')}
                        </div>
                    </div>
                    <div className={styles.item}>
                        <div className={styles.itemPlaceHolder}></div>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="48"
                            height="48"
                            viewBox="0 0 48 48"
                            fill="none"
                        >
                            <path
                                d="M1.14749 19.4248H3.42749V30.8548H1.14749V19.4248Z"
                                fill="white"
                            ></path>
                            <path
                                d="M3.42749 30.855H5.72249V35.43H3.42749V30.855Z"
                                fill="white"
                            ></path>
                            <path
                                d="M3.42749 14.8499H5.72249V19.4249H3.42749V14.8499Z"
                                fill="white"
                            ></path>
                            <path
                                d="M5.7225 35.4299H8.0025V39.9899H5.7225V35.4299Z"
                                fill="white"
                            ></path>
                            <path
                                d="M5.7225 10.2749H8.0025V14.8499H5.7225V10.2749Z"
                                fill="white"
                            ></path>
                            <path
                                d="M8.0025 39.99H12.5775V42.285H8.0025V39.99Z"
                                fill="white"
                            ></path>
                            <path
                                d="M8.0025 7.99487H12.5775V10.2749H8.0025V7.99487Z"
                                fill="white"
                            ></path>
                            <path
                                d="M12.5775 42.2849H17.1375V44.5649H12.5775V42.2849Z"
                                fill="white"
                            ></path>
                            <path
                                d="M12.5775 5.71484H17.1375V7.99484H12.5775V5.71484Z"
                                fill="white"
                            ></path>
                            <path
                                d="M17.1375 35.4299H19.4325V37.7099H17.1375V35.4299Z"
                                fill="white"
                            ></path>
                            <path
                                d="M17.1375 28.575H19.4325V30.8549H17.1375V28.575Z"
                                fill="white"
                            ></path>
                            <path
                                d="M19.4325 33.135H21.7125V35.43H19.4325V33.135Z"
                                fill="white"
                            ></path>
                            <path
                                d="M21.7125 30.855H24.0075V33.135H21.7125V30.855Z"
                                fill="white"
                            ></path>
                            <path
                                d="M17.1375 44.5649H28.5675V46.8599H17.1375V44.5649Z"
                                fill="white"
                            ></path>
                            <path
                                d="M24.0075 35.4299H26.2875V37.7099H24.0075V35.4299Z"
                                fill="white"
                            ></path>
                            <path
                                d="M24.0075 28.575H26.2875V30.8549H24.0075V28.575Z"
                                fill="white"
                            ></path>
                            <path
                                d="M28.5675 42.2849H33.1425V44.5649H28.5675V42.2849Z"
                                fill="white"
                            ></path>
                            <path
                                d="M33.1425 39.99H37.7175V42.285H33.1425V39.99Z"
                                fill="white"
                            ></path>
                            <path
                                d="M37.7175 35.4299H39.9975V39.9899H37.7175V35.4299Z"
                                fill="white"
                            ></path>
                            <path
                                d="M39.9975 30.855H42.2925V35.43H39.9975V30.855Z"
                                fill="white"
                            ></path>
                            <path
                                d="M21.7125 7.99489H26.2875V10.2749H30.8625V12.5699H35.4375V17.1449H37.7175V21.7049H39.9975V26.2799H42.2925V30.8549H44.5725V26.2799H46.8525V19.4249H44.5725V14.8499H42.2925V10.2749H39.9975V7.99489H37.7175V5.71489H33.1425V3.41989H28.5675V1.13989H21.7125V3.41989H17.1375V5.71489H21.7125V7.99489Z"
                                fill="white"
                            ></path>
                            <rect x="16" y="13" width="2.4" height="12" fill="white"></rect>
                            <rect
                                x="22.2"
                                y="14.2"
                                width="4.6"
                                height="9.6"
                                stroke="white"
                                strokeWidth="2.4"
                            ></rect>
                        </svg>
                        <div className={styles.itemTitle}>4% {t('tuijc')}</div>
                        <div className={styles.itemContent}>
                            {t('tuijcdesc')}
                        </div>
                    </div>
                    <div className={styles.item}>
                        <div className={styles.itemPlaceHolder}></div>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="48"
                            height="48"
                            viewBox="0 0 48 48"
                            fill="none"
                        >
                            <g clipPath="url(#clip0_335_683)">
                                <path
                                    d="M45.705 27.4351H48V29.7151H45.705V27.4351Z"
                                    fill="white"
                                ></path>
                                <path
                                    d="M43.425 29.7151H45.705V31.9951H43.425V29.7151Z"
                                    fill="white"
                                ></path>
                                <path
                                    d="M43.425 25.1399H45.705V27.4349H43.425V25.1399Z"
                                    fill="white"
                                ></path>
                                <path
                                    d="M41.145 31.9951H43.425V34.2901H41.145V31.9951Z"
                                    fill="white"
                                ></path>
                                <path
                                    d="M41.145 22.8601H43.425V25.1401H41.145V22.8601Z"
                                    fill="white"
                                ></path>
                                <path
                                    d="M38.85 34.29H41.145V36.57H38.85V34.29Z"
                                    fill="white"
                                ></path>
                                <path
                                    d="M38.85 20.5801H41.145V22.8601H38.85V20.5801Z"
                                    fill="white"
                                ></path>
                                <path
                                    d="M36.57 36.5701H38.85V38.8651H36.57V36.5701Z"
                                    fill="white"
                                ></path>
                                <path
                                    d="M36.57 18.2849H38.85V20.5799H36.57V18.2849Z"
                                    fill="white"
                                ></path>
                                <path
                                    d="M34.29 38.865H36.57V41.145H34.29V38.865Z"
                                    fill="white"
                                ></path>
                                <path
                                    d="M34.29 16.0049H36.57V18.2849H34.29V16.0049Z"
                                    fill="white"
                                ></path>
                                <path
                                    d="M31.995 41.145H34.29V43.425H31.995V41.145Z"
                                    fill="white"
                                ></path>
                                <path
                                    d="M31.995 31.9951H34.29V34.2901H31.995V31.9951Z"
                                    fill="white"
                                ></path>
                                <path
                                    d="M31.995 25.1399H34.29V29.7149H31.995V25.1399Z"
                                    fill="white"
                                ></path>
                                <path
                                    d="M31.995 13.71H34.29V16.005H31.995V13.71Z"
                                    fill="white"
                                ></path>
                                <path
                                    d="M29.715 43.425H31.995V45.7201H29.715V43.425Z"
                                    fill="white"
                                ></path>
                                <path
                                    d="M29.715 29.7151H31.995V31.9951H29.715V29.7151Z"
                                    fill="white"
                                ></path>
                                <path
                                    d="M27.42 22.8601H31.995V25.1401H27.42V22.8601Z"
                                    fill="white"
                                ></path>
                                <path
                                    d="M29.715 11.4299H31.995V13.7099H29.715V11.4299Z"
                                    fill="white"
                                ></path>
                                <path d="M27.42 45.72H29.715V48H27.42V45.72Z" fill="white"></path>
                                <path
                                    d="M27.42 27.4351H29.715V29.7151H27.42V27.4351Z"
                                    fill="white"
                                ></path>
                                <path
                                    d="M27.42 9.1499H29.715V11.4299H27.42V9.1499Z"
                                    fill="white"
                                ></path>
                                <path
                                    d="M25.14 43.425H27.42V45.7201H25.14V43.425Z"
                                    fill="white"
                                ></path>
                                <path
                                    d="M25.14 31.9951H29.715V34.2901H25.14V31.9951Z"
                                    fill="white"
                                ></path>
                                <path
                                    d="M25.14 25.1399H27.42V27.4349H25.14V25.1399Z"
                                    fill="white"
                                ></path>
                                <path
                                    d="M22.86 18.2849H27.42V20.5799H22.86V18.2849Z"
                                    fill="white"
                                ></path>
                                <path
                                    d="M25.14 6.85498H27.42V9.14998H25.14V6.85498Z"
                                    fill="white"
                                ></path>
                                <path
                                    d="M22.86 41.145H25.14V43.425H22.86V41.145Z"
                                    fill="white"
                                ></path>
                                <path
                                    d="M22.86 22.8601H25.14V25.1401H22.86V22.8601Z"
                                    fill="white"
                                ></path>
                                <path
                                    d="M22.86 4.57495H25.14V6.85495H22.86V4.57495Z"
                                    fill="white"
                                ></path>
                                <path
                                    d="M20.565 38.865H22.86V41.145H20.565V38.865Z"
                                    fill="white"
                                ></path>
                                <path
                                    d="M20.565 27.4351H25.14V29.7151H20.565V27.4351Z"
                                    fill="white"
                                ></path>
                                <path
                                    d="M20.565 20.5801H22.86V22.8601H20.565V20.5801Z"
                                    fill="white"
                                ></path>
                                <path
                                    d="M18.285 36.5701H20.565V38.8651H18.285V36.5701Z"
                                    fill="white"
                                ></path>
                                <path
                                    d="M18.285 22.8601H20.565V27.4351H18.285V22.8601Z"
                                    fill="white"
                                ></path>
                                <path
                                    d="M18.285 18.2849H20.565V20.5799H18.285V18.2849Z"
                                    fill="white"
                                ></path>
                                <path
                                    d="M15.99 34.29H18.285V36.57H15.99V34.29Z"
                                    fill="white"
                                ></path>
                                <path
                                    d="M13.71 31.9951H15.99V34.2901H13.71V31.9951Z"
                                    fill="white"
                                ></path>
                                <path
                                    d="M13.71 11.43H11.43V13.71H9.13498V11.43H6.85498V16.005H15.99V6.85498H11.43V9.14998H13.71V11.43Z"
                                    fill="white"
                                ></path>
                                <path
                                    d="M11.43 29.7151H13.71V31.9951H11.43V29.7151Z"
                                    fill="white"
                                ></path>
                                <path
                                    d="M9.13501 27.4351H11.43V29.7151H9.13501V27.4351Z"
                                    fill="white"
                                ></path>
                                <path
                                    d="M9.13501 9.1499H11.43V11.4299H9.13501V9.1499Z"
                                    fill="white"
                                ></path>
                                <path
                                    d="M6.85498 2.28003H22.86V4.57503H6.85498V2.28003Z"
                                    fill="white"
                                ></path>
                                <path
                                    d="M6.85498 25.1399H9.13498V27.4349H6.85498V25.1399Z"
                                    fill="white"
                                ></path>
                                <path
                                    d="M6.85498 6.85498H9.13498V9.14998H6.85498V6.85498Z"
                                    fill="white"
                                ></path>
                                <path
                                    d="M4.57501 22.8601H6.85501V25.1401H4.57501V22.8601Z"
                                    fill="white"
                                ></path>
                                <path
                                    d="M4.57501 4.57495H6.85501V6.85495H4.57501V4.57495Z"
                                    fill="white"
                                ></path>
                                <path
                                    d="M2.28003 6.85498H4.57503V22.86H2.28003V6.85498Z"
                                    fill="white"
                                ></path>
                                <path
                                    d="M2.28003 2.28003H4.57503V4.57503H2.28003V2.28003Z"
                                    fill="white"
                                ></path>
                                <path d="M0 0H2.28V2.28H0V0Z" fill="white"></path>
                            </g>
                            <defs>
                                <clipPath id="clip0_335_683">
                                    <rect width="48" height="48" fill="white"></rect>
                                </clipPath>
                            </defs>
                        </svg>
                        <div className={styles.itemTitle}>
                            {t('maishui')}/<div></div>{t('sellshui')}
                        </div>
                        <div className={styles.itemContent}>
                            {t('maishuidesc')}
                        </div>
                    </div>
                </div>
                <div className={styles.footPlaceHolder}></div>
            </div>
        </div>
    )
}
