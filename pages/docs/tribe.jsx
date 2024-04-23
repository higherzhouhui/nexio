import SvgPoint from './Image/svgPoint'
import styles from '@/styles/docs.module.css'
import { useTranslation } from 'react-i18next';

export default function Tribe() {
    const { t } = useTranslation()
    return (
        <div className={styles.wrap3}>
            <div className={styles.wrap3Item}>
                <SvgPoint />
                <div className={styles.wrap3ItemsInner}>
                    {t('bdsjyx')}
                </div>
            </div>
            <div className={`${styles.wrap3Item} mt-4`}>
                <SvgPoint />
                <div className={styles.wrap3ItemsInner}>
                    {t('mgbtwlsdbt')}
                </div>
            </div>
            <div className={`${styles.wrap3Item} mt-4`}>
                <SvgPoint />
                <div className={styles.wrap3ItemsInner}>
                    {t('bljxdaoyy')}
                </div>
            </div>
            <div className={`${styles.wrap3Item} mt-4`}>
                <SvgPoint />
                <div className={styles.wrap3ItemsInner}>
                    {t('blyjysmzq')}
                </div>
            </div>
            <div className={`${styles.wrap3Item} mt-4`}>
                <SvgPoint />
                <div className={styles.wrap3ItemsInner}>{t('btwlsdbdbt')}</div>
            </div>
        </div>
    )
}
