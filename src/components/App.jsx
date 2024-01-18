import React, { useState, useEffect } from 'react';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import Button from './Button/Button';
import Loader from './Loader/Loader';
import Modal from './Modal/Modal';
import axios from 'axios';

export const App = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImageUrl, setModalImageUrl] = useState('');

  const API_KEY = '41167755-70f3c314cd8390efeff4b47a8';
  const API_URL = `https://pixabay.com/api/?key=${API_KEY}&per_page=12`;

  useEffect(() => {
    // Código a ejecutar cuando el componente se monta
    loadLocalStorageData();
  }, []);

  useEffect(() => {
    // Código a ejecutar cuando 'searchTerm' cambia
    if (searchTerm !== '') {
      fetchImages();
    }
  }, []);

  const loadLocalStorageData = () => {
    // Lógica para cargar datos desde el almacenamiento local
    const storedSearchTerm = localStorage.getItem('searchTerm');
    const storedImages = localStorage.getItem('images');

    if (storedSearchTerm) {
      setSearchTerm(storedSearchTerm);
    }

    if (storedImages) {
      setImages(JSON.parse(storedImages));
    }
  };

  const saveLocalStorageData = () => {
    // Lógica para guardar datos en el almacenamiento local
    localStorage.setItem('searchTerm', searchTerm);
    localStorage.setItem('images', JSON.stringify(images));
  };

  const fetchImages = async () => {
    // Lógica para hacer la solicitud HTTP con axios y actualizar el estado 'images'
    setIsLoading(true);

    try {
      const response = await axios.get(`${API_URL}&q=${searchTerm}`);
      setImages(response.data.hits);
    } catch (error) {
      console.error('Error fetching images:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleLoadMore = async () => {
    // Lógica para cargar más imágenes
    setIsLoading(true);

    try {
      const nextPageResponse = await axios.get(API_URL);
      const newImages = nextPageResponse.data.hits;

      setImages(prevImages => [...prevImages, ...newImages]);
    } catch (error) {
      console.error('Error fetching more images:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const openModal = imageUrl => {
    // Lógica para abrir el modal
    setIsModalOpen(true);
    setModalImageUrl(imageUrl);
  };

  const closeModal = () => {
    // Lógica para cerrar el modal
    setIsModalOpen(false);
    setModalImageUrl('');
  };

  // Otro código del componente, como renderizar JSX, manejar eventos, etc.

  return (
    // JSX que representa la estructura del componente
    <div>
      <Searchbar
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)}
      />
      <Loader isLoading={isLoading} />
      <ImageGallery images={images} isOpen={openModal} onClose={closeModal} />

      <Button images={images} LoadMore={handleLoadMore} />
      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        imageUrl={modalImageUrl}
      />
    </div>
  );
};

//////////////////////////////////////////////////////////////////////      codigo de abajo original
// import React, { Component } from 'react';
// import Searchbar from './Searchbar/Searchbar';
// import ImageGallery from './ImageGallery/ImageGallery';
// import Button from './Button/Button';
// import Loader from './Loader/Loader';
// import Modal from './Modal/Modal';
// import axios from 'axios';

// export class App extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       searchTerm: '',
//       images: [],
//       isLoading: false,
//       isModalOpen: false,
//       modalImageUrl: '',
//     };

//     this.API_KEY = '41167755-70f3c314cd8390efeff4b47a8';
//     this.API_URL = `https://pixabay.com/api/?key=${this.API_KEY}&per_page=12`;
//   }

//   componentDidMount() {
//     this.loadLocalStorageData();
//   }

//   componentDidUpdate(prevProps, prevState) {
//     if (prevState.searchTerm !== this.state.searchTerm) {
//       this.fetchImages();
//     }

//     this.saveLocalStorageData();
//   }

//   loadLocalStorageData = () => {
//     const storedSearchTerm = localStorage.getItem('searchTerm');
//     const storedImages = localStorage.getItem('images');

//     if (storedSearchTerm) {
//       this.setState({ searchTerm: storedSearchTerm });
//     }

//     if (storedImages) {
//       this.setState({ images: JSON.parse(storedImages) });
//     }
//   };

//   saveLocalStorageData = () => {
//     localStorage.setItem('searchTerm', this.state.searchTerm);
//     localStorage.setItem('images', JSON.stringify(this.state.images));
//   };

//   fetchImages = async () => {
//     this.setState({ isLoading: true });

//     try {
//       const response = await axios.get(
//         `${this.API_URL}&q=${this.state.searchTerm}`
//       );
//       this.setState({ images: response.data.hits });
//     } catch (error) {
//       console.error('Error fetching images:', error);
//     } finally {
//       this.setState({ isLoading: false });
//     }
//   };

//   handleLoadMore = async () => {
//     this.setState({ isLoading: true });
//     try {
//       const nextPageResponse = await axios.get(this.API_URL);
//       const newImages = nextPageResponse.data.hits;

//       this.setState(prevState => ({
//         images: [...prevState.images, ...newImages],
//       }));
//     } catch (error) {
//       console.error('Error fetching more images:', error);
//     } finally {
//       this.setState({ isLoading: false });
//     }
//   };

//   openModal = imageUrl => {
//     this.setState({ isModalOpen: true, modalImageUrl: imageUrl }, () => {});
//   };

//   closeModal = () => {
//     this.setState({ isModalOpen: false, modalImageUrl: '' });
//   };

//   render() {
//     // const { isModalOpen, modalImageUrl } = this.state;

//     return (
//       <div>
//         <Searchbar
//           value={this.state.searchTerm}
//           onChange={e => this.setState({ searchTerm: e.target.value })}
//         />
//         <Loader isLoading={this.state.isLoading} />
//         <ImageGallery
//           images={this.state.images}
//           isOpen={this.openModal}
//           onClose={this.closeModal}
//         />

//         <Button images={this.state.images} LoadMore={this.handleLoadMore} />
//         <Modal
//           isOpen={this.state.isModalOpen}
//           onClose={this.closeModal}
//           imageUrl={this.state.modalImageUrl}
//         />
//       </div>
//     );
//   }
// }