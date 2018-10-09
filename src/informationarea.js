import React, {Component} from 'react';

class InformationArea extends Component {
    constructor() {
        super();
        this.handleOpenEverything = this.handleOpenEverything.bind(this);
        this.state = {
            flag: false
        }
    }

    handleOpenEverything() {
        this.setState({
            flag: !this.state.flag
        })
    }

    render() {
        return (
            <div>
                <p>電話番号 : <a href={`tel:${this.props.tel}`}>{this.props.tel}</a></p>
                <p>メールアドレス : <a href={`mailto:${this.props.mail}`}>{this.props.mail}</a></p>
                <button onClick={this.handleOpenEverything}>さらに詳しい情報を見る</button>
                <div style={{display: this.state.flag ? 'block' : 'none'}}>
                    <p>所属 : <a href={this.props.organization}>{this.props.organization}</a></p>
                    <p>SNSアカウント : <a href={this.props.account}>{this.props.account}</a></p>
                </div>
            </div>
        );
    }
}

export default InformationArea;