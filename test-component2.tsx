/* tslint:disable:no-unused-variable */
import * as React from 'react';
/* tslint:enable:no-unused-variable */


export interface ClassDictionary {
    [id: string]: boolean;
}

export const getRandomString = () => {
    let text = '';
    const symbols = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

    for (let i = 0; i < 5; i++) {
        text += symbols.charAt(Math.floor(Math.random() * symbols.length));
    }

    return text;
};

/**
* Интерфейс, описывающий общую структуру пропсов для базового компонента ui-kit
*/
export interface UiComponentProps {
    /**
    * Идентификатор контролла (может подадобиться для label for)
    */
    readonly controlId?: string;
    readonly tabIndex?: number;
    /**
     * Массив с бэм модификациями, которые будут применены ко всем дом элементам компонента.
     * Т.е., если у компонента есть некий див <div class="uis-item" />, и мы передали
     * bemModifications={['test']}, то у дива появится класс-модификатор 'uis-item_test':
     * <div class="uis-item uis-item_test" />
     */
    readonly bemModifications?: Array<string>;
    /**
    * Дополнительный класс на рутовый элемент компонента
    */
    readonly wrapperClass?: string;
    readonly children?: React.ReactNode;
}

export class UiComponent<Props extends UiComponentProps, State> extends React.Component<Props, State> {
    /**
     * Получаем итоговую строку со всеми классами, сложенную из бэм-модификаций, враппер классов и т.д.
     *
     * В _.union встроена защита от undefined, в компоненте не нужно писать такое `modifications: this.props.modifications || ''`
     * В additionalClasses вручную проверяем на falsy значение, поэтому в компоненте тоже можно передавать без проверок
     */
    getClassNames(
        params: { prefix: string; additionalClasses?: string; modifications?: Array<{ [index: string]: boolean } | string> }
    ): string {
        return ''
    }
}

export default UiComponent;
