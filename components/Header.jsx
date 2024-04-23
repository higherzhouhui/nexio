import styles from '@/styles/header.module.css'
import { useEffect, useState } from 'react'
import Router, { useRouter } from 'next/router'
import { useTranslation } from 'react-i18next';
import i18n from '@/locales/config';
import Link from 'next/link';

export default function Header() {
    const { t } = useTranslation();
    const [isShow, setIsShow] = useState(false)
    const [currentLanguage, setCurrentLanguage] = useState('en')
    const [backupLanguage, setBackupLanguage] = useState('中文')
    const changeLanguage = () => {
        setIsShow(!isShow)
    }
    const router = useRouter()
    let { pathname } = router
    const selecLanguage = (lang) => {
        i18n.changeLanguage(lang)
        setCurrentLanguage(lang)
        localStorage.setItem('lang', lang)
        changeLanguage()
        // const language = e.target.innerText
        // setCurrentLanguage(language)
        // language === '中文' ? setBackupLanguage('English') : setBackupLanguage('中文')

        // setIsShow(!isShow)

        // if (language === '中文') {
        //     switch (pathname) {
        //         case '/':
        //             Router.push({
        //                 pathname: `/zh-cn`,
        //                 query: {}
        //             })
        //             break
        //         case '/docs':
        //             Router.push({
        //                 pathname: `/docs/zh-cn`,
        //                 query: {}
        //             })
        //             break
        //         default:
        //             Router.push({
        //                 pathname,
        //                 query: {}
        //             })
        //             break
        //     }
        // } else {
        //     switch (pathname) {
        //         case '/zh-cn':
        //             Router.push({
        //                 pathname: `${pathname.replace('zh-cn', '')}`,
        //                 query: {}
        //             })
        //             break
        //         case '/docs/zh-cn':
        //             Router.push({
        //                 pathname: `${pathname.replace('zh-cn', '')}`,
        //                 query: {}
        //             })
        //             break
        //         default:
        //             Router.push({
        //                 pathname,
        //                 query: {}
        //             })
        //             break
        //     }
        // }
    }

    const handleMenuClick = (path) => {
        Router.push(path)
        // if (currentLanguage === '中文') {
        //     switch (path) {
        //         case path:
        //             Router.push({
        //                 pathname: `${path}zh-cn`,
        //                 query: {}
        //             })
        //             break
        //     }
        // } else {
        //     switch (path) {
        //         case path:
        //             Router.push({
        //                 pathname: path,
        //                 query: {}
        //             })
        //             break
        //     }
        // }
    }

    useEffect(() => {
        // if (pathname.includes('zh-cn')) {
        //     setCurrentLanguage('中文')
        //     setBackupLanguage('English')
        // }
        // setCurrentLanguage(i18n.language)
    }, [])

    return (
        <div className={styles.header}>
            <div className={styles.left} onClick={() => {router.push('/')}}>
                <img className={styles.logo} src='/Image/new-logo.png' />
                <img className={styles.titlelogo} src='/Image/title-logo.png' />
            </div>
            <div className={styles.right}>
                <Link href='/docs'>Doc</Link>
                <div className={styles.rightContent} onClick={() => changeLanguage()}>
                    <p>{
                        currentLanguage == 'zh' ? '中文' : 'English'
                    }</p>
                    <img src='/Image/arrow.png' style={{ transform: isShow ? 'rotate(0)' : 'rotate(180deg)' }} />
                </div>
                <div className={styles.selects} style={{ height: isShow ? '60px' : 0 }}>
                    <div className={styles.list} onClick={() => selecLanguage('en')}>English</div>
                    <div className={styles.list} onClick={() => selecLanguage('zh')}>中文</div>
                </div>
                {
                    isShow ? <div className={styles.mask} onClick={() => setIsShow(false)}></div> : null
                }
            </div>
        </div>
    )
}
