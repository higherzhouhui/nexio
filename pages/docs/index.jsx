import { useEffect, useState } from 'react'
import styles from '@/styles/docs.module.css'

import PetMining from './petMining'
import PetRaising from './petRaising'
import Reward from './reward'
import Tribe from './tribe'
import AiPets from './aiPets'
import Earning from './earning'
import Introduction from './introduction'
import Nexio from './forkFrenPet'
import Tokenomics from './tokenomics'
import { useTranslation } from 'react-i18next';
import i18n from '@/locales/config'
export default function docs() {
    const { t } = useTranslation()
    const list = [
        { name: t('qianyan'), checked: true, node: <Introduction /> },
        { name: 'Nexio VS FrenPet', checked: false, node: <Nexio /> },
        { name: t('dbjj'), checked: false, node: <Tokenomics /> },
        { name: t('chhq'), checked: false, node: <PetMining /> },
        { name: t('chsy'), checked: false, node: <PetRaising /> },
        { name: t('jlffv1'), checked: false, node: <Reward /> },
        { name: t('bljsv2'), checked: false, node: <Tribe /> },
        { name: t('aicwv3'), checked: false, node: <AiPets /> },
        { name: t('zdcdzq'), checked: false, node: <Earning /> }
    ]
    let [menu, setMenu] = useState(list)
    const [currentnode, setcurrentNode] = useState(menu[0].node)
    const changeMenu = (name) => {
        menu = menu.map((e) => {
            return {
                name: e.name,
                checked: false,
                node: e.node
            }
        })
        let clickItem = menu.find((e) => e.name === name)
        clickItem.checked = true
        console.log(clickItem)
        setcurrentNode(clickItem.node)
        setMenu(menu)
    }
    useEffect(() => {
        setMenu(list)
    }, [i18n.language])
    return (
        <div className={styles.container}>
            <div className={styles.title}>Nexio's Gameplay Guide</div>
            <div className={styles.subTitle}>{t('rwmsrts')}</div>
            <div className={styles.content}>
                <div className={styles.left}>
                    {menu.map((e) => {
                        return (
                            <div
                                key={e.name}
                                className={`${styles.item} ${e.checked ? `${styles.active}` : ''} `}
                                onClick={() => changeMenu(e.name)}
                            >
                                {e.name}
                            </div>
                        )
                    })}
                </div>

                <div className={styles.right}>
                  {
                    currentnode
                  }
                </div>
            </div>
        </div>
    )
}
