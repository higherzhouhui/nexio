import SvgPoint from './Image/svgPoint'
import styles from '@/styles/docs.module.css'
import { useTranslation } from 'react-i18next'
export default function petMining() {
    const {t} = useTranslation()
    return (
        <div className={styles.wrap3}>
            <div className={styles.wrap3Item}>
                <SvgPoint />
                <div className={styles.wrap3ItemsInner}>{t('sycb')}</div>
            </div>
            <div className={`${styles.wrap3Item} mt-4`}>
                <SvgPoint />
                <div className={styles.wrap3ItemsInner}>{t('dywjzcmt')}</div>
            </div>
            <div className={`${styles.wrap3Item} mt-4`}>
                <SvgPoint />
                <div className={styles.wrap3ItemsInner}>
                    {t('mxzygjjl')}
                </div>
            </div>
            <div className={`${styles.wrap3Item} mt-4`}>
                <SvgPoint />
                <div className={styles.wrap3ItemsInner}>
                    {t('tgmrwjsjhdtj')}
                </div>
            </div>
        </div>
    )
}
