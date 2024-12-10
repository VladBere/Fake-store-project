import { ToggleGroup } from '@radix-ui/react-toggle-group'
import { useTranslation } from 'react-i18next'

import { ToggleGroupItem } from './ui/toggle-group'

export const LanguageBtn = () => {
    const { i18n } = useTranslation()

    return (
        <div>
            <ToggleGroup type='single' className='border-black/20 border border-1 rounded-md'>
                <ToggleGroupItem
                onClick={() => {i18n.changeLanguage("en")}}
                    value='bold'
                    aria-label='Toggle bold'>
                    EN
                </ToggleGroupItem>
                <ToggleGroupItem
                onClick={() => {i18n.changeLanguage("uk")}}
                    value='italic'
                    aria-label='Toggle italic'>
                    UK
                </ToggleGroupItem>
            </ToggleGroup>
        </div>
    )
}
