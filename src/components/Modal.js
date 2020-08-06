import React, { Component } from 'react';
import './Modal.css';

class Modal extends Component {
    render() {
        return (
            <div style={styles.container}>
                <main style={styles.main}>
                    <button className="modal-close" onClick={this.props.onClick()}>&times;</button>
                    <div style={styles.text}>
                        <h2 style={styles.h2}><span role="img" aria-label='sorry'>😲</span> Oh Snap!</h2>
                        <p style={styles.p}>{this.props.text}</p>
                    </div>
                </main>
            </div>
        );
    }

}

export default Modal;

const styles = {
    container: {
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: 'rgba(0, 0, 0, 0.6)',
        zIndex: 1
    },
    main: {
        position: 'fixed',
        background: '#fff',
        width: '90%',
        height: '60%',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%,-50%)',
        display: 'flex',
        flexDirection: 'column',
        overflow:'auto'
    },
    text: {
        margin: '3em auto auto auto',
        textAlign:'center',
    },
    p: {
        fontSize: '2em'
    },
    h2: {
        fontSize: '4em',
        padding:'0',
        margin:'0'
    }
}