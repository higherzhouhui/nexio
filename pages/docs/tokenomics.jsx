import SvgPoint from './Image/svgPoint'
import styles from '@/styles/docs.module.css'
import { useTranslation } from 'react-i18next';

export default function Tokenomics() {
    const {t} = useTranslation();
    return (
        <div className={styles.wrap3}>
            <div className={styles.wrap3Item}>
                <SvgPoint />
                <div className={styles.wrap3ItemsInner}>
                    {t('zlyb')}
                </div>
            </div>
            <div className={`${styles.wrap3Item} mt-4`}>
                <SvgPoint />
                <div className={styles.wrap3ItemsInner}>
                    {t('sixcsld')}
                </div>
            </div>
            <div className={`${styles.wrap3Item} mt-4`}>
                <SvgPoint />
                <div className={styles.wrap3ItemsInner}>
                    {t('jljz')}
                </div>
            </div>
            <div className={`${styles.wrap3Item} mt-4`}>
                <SvgPoint />
                <div className={styles.wrap3ItemsInner}>
                    {t('jljz2')}
                </div>
            </div>
        </div>
    )
}
