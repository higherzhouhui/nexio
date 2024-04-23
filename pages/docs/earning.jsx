import SvgPoint from './Image/svgPoint'
import styles from '@/styles/docs.module.css'
import { useTranslation } from 'react-i18next';

export default function Earning() {
    const { t } = useTranslation()
    return (
        <div className={styles.wrap3}>
            <div className={styles.wrap3Item}>
                <SvgPoint />
                <div className={styles.wrap3ItemsInner}>
                    {t('mtcwhqrfd')}
                </div>
            </div>
            <div className={`${styles.wrap3Item} mt-4`}>
                <SvgPoint />
                <div className={styles.wrap3ItemsInner}>
                    {t('yzhdswwy')}
                </div>
            </div>
            <div className={`${styles.wrap3Item} mt-4`}>
                <SvgPoint />
                <div className={styles.wrap3ItemsInner}>
                    {t('mrcctdkstc')}
                </div>
            </div>
            <div className={`${styles.wrap3Item} mt-4`}>
                <SvgPoint />
                <div className={styles.wrap3ItemsInner}>
                    {t('fkdcall')}
                </div>
            </div>
        </div>
    )
}
