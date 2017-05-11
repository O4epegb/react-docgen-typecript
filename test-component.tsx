/* tslint:disable:no-unused-variable */
import * as React from 'react';
/* tslint:enable:no-unused-variable */
import { UiComponent, UiComponentProps } from './test-component2';


export interface UiLoaderProps extends UiComponentProps {
    text?: string;
}
export interface UiLoaderState {
    test?: number;
}

export class UiLoader extends UiComponent<UiLoaderProps, UiLoaderState> {
    constructor(props: UiLoaderProps) {
        super(props);

        this.state = {
            test: 2
        };
    }

    lol = () => {

    }

    render() {
        return (
            <div className={this.getClassNames({
                prefix: 'uis-loader',
                modifications: this.props.bemModifications
            }) }>
                <div className={this.getClassNames({
                    prefix: 'loader'
                }) }>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
                {this.props.text ?
                    <span className={
                        this.getClassNames({
                            prefix: 'uis-loader__reason-text'
                        }) + ' ' + (this.props.wrapperClass || '')
                    }>
                        { this.props.text }
                    </span> : null}
            </div>
        );
    }
}

export default UiLoader;
