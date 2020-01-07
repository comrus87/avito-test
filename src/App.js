import React from 'react';
import classes from './App.module.css';
import PhotosList from './components/PhotosList/PhotosList';
import Modal from './components/Modal/Modal';
import Footer from './components/Footer/Footer';
import {connect} from 'react-redux';
import {getPhotos, getModalPhoto, postComment} from './redux/photosReducer';


class App extends React.Component {

  state = {
    isModal: false
  }

  onPhotoAddModal = photoId => {
   let promise = this.props.getModalPhoto(photoId);
   promise.then(()=> this.renderModal())
  }

  renderModal = () => {
    this.setState({
      isModal: true
    });
  }

  closeModal = () => {
    this.setState({
      isModal: false
    });
  }

  componentDidMount() {
    this.props.getPhotos();
  }

  render () {
    return (
      <React.Fragment>
        <div className={classes.wrap}>
          <h1 className={classes.title}>Test APP</h1>
          <PhotosList photos={this.props.photos} 
                      onPhotoAddModal={this.onPhotoAddModal} 
                       />
          {this.state.isModal 
            && <Modal modalPhotoUrl={this.props.photoUrl} 
                      closeModal={this.closeModal} 
                      comments={this.props.comments}
                      photoId={this.props.photoId}
                      postComment={this.props.postComment}
                />} 
          <Footer />
        </div>
        <div className={this.state.isModal ? classes.overlay : null}> </div>
      </React.Fragment>
    )
  }
}

const mapStateToProps = state => {
  return {
    photos: state.gallery.photos,
    photoId: state.gallery.photoId,
    photoUrl: state.gallery.photoUrl,
    comments: state.gallery.comments
  }
};



export default connect(mapStateToProps, {getPhotos, getModalPhoto, postComment})(App);
