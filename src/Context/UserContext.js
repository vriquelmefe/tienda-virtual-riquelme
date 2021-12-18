import React, { useEffect, useState } from "react";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from '../firebase/config'
import Swal from "sweetalert2";
import logo from '../assets/img/logo.png'

export const UserContext = React.createContext()

export const UserContextProvider = ({ children }) => {

    const [user, setUser] = useState()
    const [logged, setLogged] = useState(false)

    const signup = (emai, pasword) => {
        createUserWithEmailAndPassword(auth, emai, pasword)
            .then((userCredential) => {
                // eslint-disable-next-line
                const user = userCredential.user;
                Swal.fire('Usuario creado correctamente!!!')

            })
            .catch((error) => {
                // eslint-disable-next-line
                const errorMessage = error.message;
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',

                })
            })
    }
    const login = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in
                const user = userCredential.user;
                setUser(user);
                Swal.fire({
                    title: 'Bienvenidoo!!',
                    imageUrl: logo,
                    imageWidth: 400,
                    imageHeight: 200,
                    imageAlt: 'Custom image',
                    showClass: {
                        popup: 'animate__animated animate__fadeInDown'
                    },
                    hideClass: {
                        popup: 'animate__animated animate__fadeOutUp'
                    }
                })
                // ...
            })
            .catch((error) => {
                // eslint-disable-next-line
                const errorCode = error.code;
                const errorMessage = error.message;
                alert(errorMessage);
            });
    }


    const logout = () => {
        signOut(auth).then(() => {
            Swal.fire({
                title: 'Vuelve pronto!!',
                width: 600,
                padding: '3em',
                color: '#716add',
                background: '#fff url(/images/trees.png)',
                backdrop: `
                            rgba(0,0,123,0.4)
                            url("/images/nyan-cat.gif")
                            left top
                            no-repeat
                        `,
                showClass: {
                    popup: 'animate__animated animate__fadeInDown'
                },
                hideClass: {
                    popup: 'animate__animated animate__fadeOutUp'
                }
            })

        })
            .catch((error) => {
                Swal.fire({
                    icon: 'error',
                    title: 'Algo salio mal',
                })
            })
    }

    useEffect(
        () => {
            onAuthStateChanged(auth, (user) => {
                if (user) {
                    setUser(user);
                    setLogged(true);
                    // ...
                } else {
                    // User is signed out
                    // ...
                    setLogged(false);
                }
            });
        }, []
    )

    return (
        <UserContext.Provider value={{
            user, logged, login, logout, signup
        }}>
            {children}
        </UserContext.Provider>
    )

}