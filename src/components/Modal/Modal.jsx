import { Component } from 'react';
import css from './Modal.module.css';

class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleCloseModal);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleCloseModal);
  }

  handleCloseModal = e => {
    if (e.key === 'Escape') this.props.closeModal();
  };

  render() {
    const { largeImgSrc, id, show, closeModal } = this.props;

    if (!show) {
      return null;
    }
    return (
      <div className={css.overlay} onClick={closeModal}>
        <div className={css.modal}>
          <img src={largeImgSrc} alt={id} />
        </div>
      </div>
    );
  }
}

export default Modal;
