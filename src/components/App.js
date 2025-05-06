// import React, { useState, useEffect } from 'react';
// import { BrowserRouter } from 'react-router-dom';

// import RenderMessage from './reusables/RenderMessage';
// import Cart from './Cart/Cart';
// import MyRoutes from '../Routes/MyRoutes';
// import { getUser } from '../helper';
// import { AppContext } from '../Contexts/AppContext';

// const App = () => {
//   const [isLogged, setIsLogged] = useState({});
//   const [showCart, setShowCart] = useState(false);
//   const [showSuccessModal, setShowSuccessModal] = useState(true);
//   const [showMessage, setShowMessage] = useState({ show: false, payload: {} });

//   useEffect(() => {
//     (async () => {
//       const user = await getUser();
//       setIsLogged(user);
//     })();
//   }, []);

//   const contextValues = {
//     isLogged,
//     setIsLogged,
//     showCart,
//     setShowCart,
//     showSuccessModal,
//     setShowSuccessModal,
//     showMessage,
//     setShowMessage,
//   };

//   return (
//     <BrowserRouter>
//       <AppContext.Provider value={contextValues}>
//         <Cart />
//         <RenderMessage />

//         <MyRoutes />
//       </AppContext.Provider>
//     </BrowserRouter>
//   );
// };

// export default App;

import React, { useState, useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import axios from 'axios';

import RenderMessage from './reusables/RenderMessage';
import Cart from './Cart/Cart';
import MyRoutes from '../Routes/MyRoutes';
import { getUser } from '../helper';
import { AppContext } from '../Contexts/AppContext';

const App = () => {
  const [isLogged, setIsLogged] = useState({});
  const [showCart, setShowCart] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(true);
  const [showMessage, setShowMessage] = useState({ show: false, payload: {} });

  useEffect(() => {
    (async () => {
      const user = await getUser();
      setIsLogged(user);
    })();
  }, []);

  // ✅ Fungsi untuk kirim data ke database
  const handleSubmit = async (values) => {
    try {
      const { firstName, lastName, email, password } = values;

      const response = await axios.post('http://localhost:3001/api/users', {
        name: `${firstName || ''} ${lastName || ''}`.trim(),
        email,
        password,
      });

      console.log('User saved:', response.data);
      alert('User berhasil disimpan!');
    } catch (error) {
      console.error('Error:', error.message);
      alert('Gagal menyimpan user!');
    }
  };

  const contextValues = {
    isLogged,
    setIsLogged,
    showCart,
    setShowCart,
    showSuccessModal,
    setShowSuccessModal,
    showMessage,
    setShowMessage,
  };

  return (
    <BrowserRouter>
      <AppContext.Provider value={contextValues}>
        <Cart />
        <RenderMessage />
        <MyRoutes onSubmit={handleSubmit} /> {/* ✅ Kirim fungsi ke routing */}
      </AppContext.Provider>
    </BrowserRouter>
  );
};

export default App;
